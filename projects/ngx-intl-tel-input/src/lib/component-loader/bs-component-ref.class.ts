import { TemplateRef, ViewContainerRef } from '@angular/core';

export class BsComponentRef<T> {
  templateRef: TemplateRef<any>;
  viewContainer?: ViewContainerRef;
}
