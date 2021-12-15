import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasClComponent } from './entradas-cl.component';

describe('EntradasClComponent', () => {
  let component: EntradasClComponent;
  let fixture: ComponentFixture<EntradasClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasClComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
