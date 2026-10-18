import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SectionIndexItem {
  id: string;
  label: string;
  group?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-section-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-index.html',
  styleUrl: './section-index.scss'
})
export class SectionIndexComponent implements OnChanges {
  @Input() items: SectionIndexItem[] = [];
  @Input() activeId = '';
  @Output() sectionChange = new EventEmitter<string>();

  private readonly collapsedGroups = new Set<string>();
  private initialized = false;

  get hasGroups(): boolean {
    return this.items.some(item => !!item.group);
  }

  ngOnChanges(): void {
    const activeGroup = this.items.find(item => item.id === this.activeId)?.group;

    if (!this.initialized) {
      const groups = new Set(
        this.items.map(item => item.group).filter((group): group is string => !!group)
      );
      groups.forEach(group => {
        if (group !== activeGroup) this.collapsedGroups.add(group);
      });
      this.initialized = true;
    }

    if (activeGroup) this.collapsedGroups.delete(activeGroup);
  }

  isGroupCollapsed(group: string): boolean {
    return this.collapsedGroups.has(group);
  }

  toggleGroup(group: string): void {
    if (this.isGroupCollapsed(group)) this.collapsedGroups.delete(group);
    else this.collapsedGroups.add(group);
  }

  countGroupItems(group: string): number {
    return this.items.filter(item => item.group === group).length;
  }
}