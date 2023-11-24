import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCompComponent } from './cursos-list.component';

describe('CursosCompComponent', () => {
  let component: CursosCompComponent;
  let fixture: ComponentFixture<CursosCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosCompComponent]
    });
    fixture = TestBed.createComponent(CursosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
