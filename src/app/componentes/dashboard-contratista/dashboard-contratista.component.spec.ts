import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContratistaComponent } from './dashboard-contratista.component';

describe('DashboardContratistaComponent', () => {
  let component: DashboardContratistaComponent;
  let fixture: ComponentFixture<DashboardContratistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardContratistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContratistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
