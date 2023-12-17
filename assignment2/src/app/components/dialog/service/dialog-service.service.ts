import {
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  TemplateRef
} from '@angular/core';
import {Subject} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {DialogComponent} from "../view/dialog.component";
import {OptionType} from "../utils/types";

/*
* Dialog service
*
* This service class interact with the dialog component and open / cancel the Dialog
*/
@Injectable()
export class DialogService {
  private dialogNotifier?: Subject<string>;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector, @Inject(DOCUMENT) private document: Document) {
  }

  /*
  * Open Dialog service function which interacts with the Dialog component
  */
  openDialog(content: TemplateRef<any>, options?: OptionType) {
    const dialogComponentFactory: ComponentFactory<DialogComponent> = this.resolver.resolveComponentFactory(DialogComponent);
    const contentViewRef: EmbeddedViewRef<any> = content.createEmbeddedView(null);
    const dialogComponent: ComponentRef<DialogComponent> = dialogComponentFactory.create(this.injector, [contentViewRef.rootNodes]);

    dialogComponent.instance.title = options?.title || "Dialog Title";
    dialogComponent.instance.buttonText = options?.buttonText || "OK";

    dialogComponent.instance.dialogCancelEvent.subscribe(() => this.cancelDialog());
    dialogComponent.instance.dialogCustomEvent.subscribe(() => this.customButtonPressed());

    dialogComponent.hostView.detectChanges();
    this.document.body.appendChild((dialogComponent.location.nativeElement));

    this.dialogNotifier = new Subject();

    return this.dialogNotifier?.asObservable();
  }

  /*
  * Cancel Dialog function which notify the cancel event
  */
  cancelDialog(): void {
    this.dialogNotifier?.complete();
  }

  /*
  * Custom button pressed function which notify the custom button event (DialogEvent)
  */
  customButtonPressed(): void {
    this.dialogNotifier?.next("DialogEvent");
    this.cancelDialog();
  }
}
