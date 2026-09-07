import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privesc } from './privesc';

describe('Privesc', () => {
  let component: Privesc;
  let fixture: ComponentFixture<Privesc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privesc],
    }).compileComponents();

    fixture = TestBed.createComponent(Privesc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
