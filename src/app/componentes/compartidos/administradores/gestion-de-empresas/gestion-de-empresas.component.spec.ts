import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeEmpresasComponent } from './gestion-de-empresas.component';

describe('GestionDeEmpresasComponent', () => {
  let component: GestionDeEmpresasComponent;
  let fixture: ComponentFixture<GestionDeEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
