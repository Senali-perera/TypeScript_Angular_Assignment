import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';

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

  constructor(private elementRef: ElementRef) {}

  customButtonPressed(): void {
    this.elementRef.nativeElement.remove();
    this.dialogCustomEvent.emit();
  }

  onCancelPressed(): void {
    this.elementRef.nativeElement.remove();
    this.dialogCancelEvent.emit();
  }
}
