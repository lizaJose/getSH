import '@angular/compiler';
import { SectionIndexComponent, SectionIndexItem } from './section-index';

describe('SectionIndexComponent', () => {
  let component: SectionIndexComponent;

  const items: SectionIndexItem[] = [
    { id: 'flow', label: 'Flow', group: 'AD Flow' },
    { id: 'windows', label: 'Windows', group: 'Enumeration' },
    { id: 'powerview', label: 'PowerView', group: 'Enumeration' },
    { id: 'planned', label: 'Privesc', group: 'Coming later', disabled: true }
  ];

  beforeEach(() => {
    component = new SectionIndexComponent();
    component.items = items;
    component.activeId = 'flow';
    component.ngOnChanges();
  });

  it('opens the group with the active section and collapses other groups initially', () => {
    expect(component.isGroupCollapsed('AD Flow')).toBe(false);
    expect(component.isGroupCollapsed('Enumeration')).toBe(true);
    expect(component.isGroupCollapsed('Coming later')).toBe(true);
  });

  it('toggles a group without changing the active section', () => {
    component.toggleGroup('Enumeration');

    expect(component.isGroupCollapsed('Enumeration')).toBe(false);
    expect(component.activeId).toBe('flow');
  });

  it('counts all sections in a group, including planned sections', () => {
    expect(component.countGroupItems('Enumeration')).toBe(2);
    expect(component.countGroupItems('Coming later')).toBe(1);
  });

  it('collapses and expands all groups from the Browse controls', () => {
    component.expandAllGroups();
    expect(component.isGroupCollapsed('AD Flow')).toBe(false);
    expect(component.isGroupCollapsed('Enumeration')).toBe(false);

    component.collapseAllGroups();
    expect(component.isGroupCollapsed('AD Flow')).toBe(true);
    expect(component.isGroupCollapsed('Enumeration')).toBe(true);
    expect(component.isGroupCollapsed('Coming later')).toBe(true);

    component.expandAllGroups();
    expect(component.isGroupCollapsed('AD Flow')).toBe(false);
    expect(component.isGroupCollapsed('Enumeration')).toBe(false);
    expect(component.isGroupCollapsed('Coming later')).toBe(false);
  });

  it('hides the whole index on collapse all and reveals it again on expand all', () => {
    expect(component.indexHidden).toBe(false);

    component.collapseAllGroups();
    expect(component.indexHidden).toBe(true);

    component.expandAllGroups();
    expect(component.indexHidden).toBe(false);
  });
});