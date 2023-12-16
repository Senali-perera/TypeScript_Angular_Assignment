import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() title = "Dialog Title";

  onOkPressed(): void {
    console.log("Ok Pressed");
  }

  onCancelPressed(): void {
    console.log("Cancel Pressed");
  }
}
