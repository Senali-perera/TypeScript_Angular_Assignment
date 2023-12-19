import {
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  TemplateRef
} from '@angular/core';
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
    dialogComponent.instance.customButtonHandler = options?.customButtonHandler
    dialogComponent.instance.cancelOnBackgroundClick = options?.cancelOnBackgroundClick;
    dialogComponent.instance.hideCustomButton = options?.hideCustomButton;

    dialogComponent.hostView.detectChanges();
    this.document.body.appendChild((dialogComponent.location.nativeElement));
  }
}
