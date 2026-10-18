import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDirectory } from './active-directory';

describe('ActiveDirectory', () => {
  let component: ActiveDirectory;
  let fixture: ComponentFixture<ActiveDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveDirectory],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveDirectory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
