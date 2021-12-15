import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeAreasComponent } from './gestion-de-areas.component';

describe('GestionDeAreasComponent', () => {
  let component: GestionDeAreasComponent;
  let fixture: ComponentFixture<GestionDeAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
