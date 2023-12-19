import {Component, ElementRef, Input} from '@angular/core';
import {NgIf} from "@angular/common";

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
  @Input() title: string = "Dialog Title";
  @Input() buttonText?: string = "OK";
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
