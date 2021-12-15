import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeClientesComponent } from './gestion-de-clientes.component';

describe('GestionDeClientesComponent', () => {
  let component: GestionDeClientesComponent;
  let fixture: ComponentFixture<GestionDeClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
