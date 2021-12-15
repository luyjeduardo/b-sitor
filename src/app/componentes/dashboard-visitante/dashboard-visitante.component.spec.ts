import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVisitanteComponent } from './dashboard-visitante.component';

describe('DashboardVisitantesComponent', () => {
  let component: DashboardVisitanteComponent;
  let fixture: ComponentFixture<DashboardVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVisitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
