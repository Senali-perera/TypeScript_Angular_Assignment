import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogComponent} from './dialog.component';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {DataUtils} from "../../../utils/data-utils";

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
      DataUtils.DEFAULT_TITLE
    );
  });

  it('renders button text', () => {
    const messageContainer: DebugElement = fixture.debugElement.query(
      By.css('[id="dialog-custom-btn"]')
    );

    expect(messageContainer.nativeElement.textContent).toBe(
      DataUtils.DEFAULT_CUSTOM_BTN_LABEL
    );
  });

  it('should call onCancelPressed() when close button is clicked', () => {
    spyOn(component, 'onCancelPressed');
    const closeButton: DebugElement = fixture.debugElement.query(By.css('.dialog-close'));
    closeButton.triggerEventHandler('click', null);
    expect(component.onCancelPressed).toHaveBeenCalled();
  });

  it('should call customButtonPressed() when the button is clicked', () => {
    spyOn(component, 'customButtonPressed');
    const button: DebugElement = fixture.debugElement.query(By.css('[id="dialog-custom-btn"]'));
    button.triggerEventHandler('click', null);
    expect(component.customButtonPressed).toHaveBeenCalled();
  });
});
