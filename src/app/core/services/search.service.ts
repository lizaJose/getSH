import { Injectable } from '@angular/core';
import { SEARCH_INDEX } from '../moldels/search-index';
import type { SearchEntry, SearchResultType } from '../moldels/search-index';

export type SearchMode = 'all' | 'sections' | 'commands';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search(query: string, mode: SearchMode = 'all'): SearchEntry[] {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return [];

    const terms = normalizedQuery.split(/\s+/);

    return SEARCH_INDEX
      .map((entry, index) => ({ entry, index, score: scoreEntry(entry, terms) }))
      .filter(({ entry, score }) =>
        score > 0 && (mode === 'all' || entry.type === mode.slice(0, -1) as SearchResultType)
      )
      .sort((left, right) => right.score - left.score || left.index - right.index)
      .map(({ entry }) => entry);
  }
}

function scoreEntry(entry: SearchEntry, queryTerms: string[]): number {
  const fields = [entry.title, entry.section ?? '', entry.summary ?? '', ...entry.keywords]
    .map(normalize)
    .filter(Boolean);
  const words = fields.flatMap(field => field.split(/[^a-z0-9]+/).filter(Boolean));

  let totalScore = 0;

  for (const queryTerm of queryTerms) {
    let bestScore = 0;

    for (const field of fields) {
      if (field === queryTerm) bestScore = Math.max(bestScore, 100);
      else if (field.startsWith(queryTerm)) bestScore = Math.max(bestScore, 85);
      else if (field.includes(queryTerm)) bestScore = Math.max(bestScore, 70);
    }

    for (const word of words) {
      if (word === queryTerm) bestScore = Math.max(bestScore, 100);
      else if (word.startsWith(queryTerm)) bestScore = Math.max(bestScore, 85);
      else if (queryTerm.length >= 3 && word.includes(queryTerm)) bestScore = Math.max(bestScore, 65);
      else if (queryTerm.length >= 3) {
        const distance = damerauLevenshtein(queryTerm, word);
        const allowedDistance = queryTerm.length >= 7 ? 2 : 1;
        if (distance <= allowedDistance) {
          bestScore = Math.max(bestScore, 55 - distance * 5);
        }
      }
    }

    if (bestScore === 0) return 0;
    totalScore += bestScore;
  }

  return totalScore / queryTerms.length;
}

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function damerauLevenshtein(left: string, right: string): number {
  const distances = Array.from(
    { length: left.length + 1 },
    () => Array<number>(right.length + 1).fill(0)
  );

  for (let row = 0; row <= left.length; row++) distances[row][0] = row;
  for (let column = 0; column <= right.length; column++) distances[0][column] = column;

  for (let row = 1; row <= left.length; row++) {
    for (let column = 1; column <= right.length; column++) {
      const substitutionCost = left[row - 1] === right[column - 1] ? 0 : 1;
      distances[row][column] = Math.min(
        distances[row - 1][column] + 1,
        distances[row][column - 1] + 1,
        distances[row - 1][column - 1] + substitutionCost
      );

      if (
        row > 1 &&
        column > 1 &&
        left[row - 1] === right[column - 2] &&
        left[row - 2] === right[column - 1]
      ) {
        distances[row][column] = Math.min(
          distances[row][column],
          distances[row - 2][column - 2] + substitutionCost
        );
      }
    }
  }

  return distances[left.length][right.length];
}