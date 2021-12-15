import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasClComponent } from './salidas-cl.component';

describe('SalidasClComponent', () => {
  let component: SalidasClComponent;
  let fixture: ComponentFixture<SalidasClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidasClComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidasClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
