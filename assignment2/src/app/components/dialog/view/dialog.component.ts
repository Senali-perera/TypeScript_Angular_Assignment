import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';

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
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  @Input() title: string = "Dialog Title";
  @Input() buttonText?: string = "OK";

  @Output() dialogCancelEvent: EventEmitter<any> = new EventEmitter();
  @Output() dialogCustomEvent: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  /*
  * This function cancels the Dialog box and emits the custom button event
  */
  customButtonPressed(): void {
    this.elementRef.nativeElement.remove();
    this.dialogCustomEvent.emit();
  }

  /*
  * This function cancels the Dialog box and emits the cancel event
  */
  onCancelPressed(): void {
    this.elementRef.nativeElement.remove();
    this.dialogCancelEvent.emit();
  }
}
