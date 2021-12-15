import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaradminComponent } from './modificaradmin.component';

describe('ModificaradminComponent', () => {
  let component: ModificaradminComponent;
  let fixture: ComponentFixture<ModificaradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
