import {Component, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {DialogComponent} from "./components/dialog/view/dialog.component";
import {DialogService} from "./components/dialog/service/dialog-service.service";
import {OptionType} from "./components/dialog/utils/types";
import {DemoComponent} from "./components/demo/demo.component";

/*
* App Component
*
* This demonstrates the possible Dialog box options
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DialogComponent, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private dialogService: DialogService) {
  }

  /*
  * Open Dialog function
  *
  * dialogTemplate - accepts ng-template and passes to the service
  * options - accepts an Options object with title and buttonText
  *
  * This function contains the service call to trigger the Dialog box.
  */
  openDialog(dialogTemplate: TemplateRef<any>, options?: OptionType): void {
    this.dialogService.openDialog(dialogTemplate, options)?.subscribe((action: string) => {
      console.log(action)
    })
  }
}
