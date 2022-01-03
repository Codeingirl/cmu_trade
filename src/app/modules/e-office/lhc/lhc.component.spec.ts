import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhcComponent } from './lhc.component';

describe('LhcComponent', () => {
  let component: LhcComponent;
  let fixture: ComponentFixture<LhcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
