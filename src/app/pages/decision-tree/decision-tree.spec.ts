import '@angular/compiler';
import { describe, expect, it } from 'vitest';
import { DecisionTreeComponent } from './decision-tree';

describe('DecisionTreeComponent', () => {
  it('starts by asking which ports or services are open', () => {
    const component = new DecisionTreeComponent();

    expect(component.currentNode.title).toBe('Which ports or services are open?');
    expect(component.canContinueFromPorts).toBe(false);
    expect(component.canGoBack).toBe(false);
  });

  it('builds the next-step choices from all selected services', () => {
    const component = new DecisionTreeComponent();

    component.togglePort('web');
    component.togglePort('ad');
    component.continueFromPorts();

    expect(component.currentNode.title).toBe('Start with one of the selected services');
    expect(component.currentNode.choices?.map(choice => choice.nextId)).toEqual(['web-check', 'ad-check']);
    expect(component.canGoBack).toBe(true);

    const webChoice = component.currentNode.choices?.find(choice => choice.nextId === 'web-check');
    if (!webChoice) throw new Error('The selected services must include the web branch.');
    component.selectChoice(webChoice);

    expect(component.currentNode.title).toBe('Can you identify the application and its public surface?');
    component.goBack();

    expect(component.currentNode.title).toBe('Start with one of the selected services');
    component.goBack();

    expect(component.currentNode.title).toBe('Which ports or services are open?');
    expect(component.canGoBack).toBe(false);
  });

  it('resets the selected services and history', () => {
    const component = new DecisionTreeComponent();
    component.togglePort('web');
    component.continueFromPorts();

    component.startOver();

    expect(component.currentNode.title).toBe('Which ports or services are open?');
    expect(component.selectedPortIds).toEqual([]);
    expect(component.stepNumber).toBe(1);
    expect(component.canGoBack).toBe(false);
  });

  it('does not continue until at least one service is selected', () => {
    const component = new DecisionTreeComponent();

    component.continueFromPorts();

    expect(component.currentNodeId).toBe('start');
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
