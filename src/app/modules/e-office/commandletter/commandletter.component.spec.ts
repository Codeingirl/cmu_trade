import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandletterComponent } from './commandletter.component';

describe('CommandletterComponent', () => {
  let component: CommandletterComponent;
  let fixture: ComponentFixture<CommandletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
