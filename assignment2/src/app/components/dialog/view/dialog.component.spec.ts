import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogComponent} from './dialog.component';
import {By} from "@angular/platform-browser";

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders default title', () => {
    const messageContainer = fixture.debugElement.query(
      By.css('[id=dialog-title]')
    );

    expect(messageContainer.nativeElement.textContent).toBe(
      'Dialog Title'
    );
  });
});
