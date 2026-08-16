import { Injectable } from '@angular/core';
import { SEARCH_INDEX } from '../moldels/search-index';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search(query: string, mode: 'all' | 'sections' | 'commands' = 'all') {

    if (!query) return [];

    const q = query.toLowerCase();

    return SEARCH_INDEX.filter(item => {

      const matchesMode =
        mode === 'all' ||
        item.type === mode.slice(0, -1); // sections -> section

      const matchesTitle =
        item.title.toLowerCase().includes(q);

      const matchesKeywords =
        item.keywords?.some(k =>
          k.toLowerCase().includes(q)
        );

      return matchesMode && (matchesTitle || matchesKeywords);
    });
  }
}