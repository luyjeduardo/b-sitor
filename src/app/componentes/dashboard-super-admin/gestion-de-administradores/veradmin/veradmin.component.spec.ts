import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeradminComponent } from './veradmin.component';

describe('VeradminComponent', () => {
  let component: VeradminComponent;
  let fixture: ComponentFixture<VeradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
