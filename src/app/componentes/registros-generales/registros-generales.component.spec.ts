import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosGeneralesComponent } from './registros-generales.component';

describe('RegistrosGeneralesComponent', () => {
  let component: RegistrosGeneralesComponent;
  let fixture: ComponentFixture<RegistrosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
