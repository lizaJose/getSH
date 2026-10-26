import '@angular/compiler';
import { describe, expect, it } from 'vitest';
import { DecisionTreeComponent } from './decision-tree';

describe('DecisionTreeComponent', () => {
  it('starts at the initial discovery question', () => {
    const component = new DecisionTreeComponent();

    expect(component.currentNode.title).toBe('What do you know so far?');
    expect(component.canGoBack).toBe(false);
  });

  it('follows a selected branch and can return to the previous question', () => {
    const component = new DecisionTreeComponent();
    const choice = component.currentNode.choices?.find(item => item.nextId === 'web-check');

    if (!choice) throw new Error('The start node must offer the web branch.');
    component.selectChoice(choice);

    expect(component.currentNode.title).toBe('Can you identify the application and its public surface?');
    expect(component.canGoBack).toBe(true);

    component.goBack();

    expect(component.currentNode.title).toBe('What do you know so far?');
    expect(component.canGoBack).toBe(false);
  });

  it('resets the selected branch and history', () => {
    const component = new DecisionTreeComponent();
    const firstChoice = component.currentNode.choices?.[0];
    if (!firstChoice) throw new Error('The start node must offer at least one choice.');
    component.selectChoice(firstChoice);

    component.startOver();

    expect(component.currentNode.title).toBe('What do you know so far?');
    expect(component.stepNumber).toBe(1);
    expect(component.canGoBack).toBe(false);
  });

  it('only links to nodes that exist in the workflow', () => {
    const component = new DecisionTreeComponent();

    for (const [nodeId, node] of Object.entries(component.nodes)) {
      for (const choice of node.choices ?? []) {
        if (!component.nodes[choice.nextId]) {
          throw new Error(`Node "${nodeId}" points to missing node "${choice.nextId}".`);
        }
      }
    }
  });
});
