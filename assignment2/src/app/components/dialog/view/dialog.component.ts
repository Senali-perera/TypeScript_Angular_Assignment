import {Component, ElementRef, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {DataUtils} from "../../../utils/data-utils";

/*
* Dialog Component
*
* Operates the functionality for the Dialog Component
*
* @input title - Title for the Dialog box
* @input buttonText - Custom button text
*
* @output dialogCancelEvent - Emits the cancel event
* @output dialogCustomEvent - Emits the custom button event
*/
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() title: string = DataUtils.DEFAULT_TITLE;
  @Input() buttonText?: string = DataUtils.DEFAULT_CUSTOM_BTN_LABEL;
  @Input() customButtonHandler?: () => void;
  @Input() cancelOnBackgroundClick?: boolean = false;
  @Input() hideCustomButton?: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  /*
  * This function cancels the Dialog box and emits the custom button event
  */
  customButtonPressed(): void {
    if (this.customButtonHandler) {
      this.customButtonHandler();
    }
    this.onCancelPressed();
  }

  /*
  * This function cancels the Dialog box and emits the cancel event
  */
  onCancelPressed(): void {
    this.elementRef.nativeElement.remove();
  }
}
