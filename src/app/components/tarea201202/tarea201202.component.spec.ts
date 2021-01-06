import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea201202Component } from './tarea201202.component';

describe('Tarea201202Component', () => {
  let component: Tarea201202Component;
  let fixture: ComponentFixture<Tarea201202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarea201202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarea201202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
