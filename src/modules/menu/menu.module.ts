import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Directives from './directives';
import * as Components from './components';
import * as Layouts from './layouts';

const layouts: Type<any>[] = [
  Layouts.MenuLayoutComponent,
];

@NgModule({
  declarations: [
    Directives.MenuStretchDirective,

    Components.MenuComponent,
    Components.MenuGroupComponent,
    Components.MenuLinkComponent,
    Components.MenuHeaderComponent,
    Components.MenuSearchComponent,

    ...layouts,
  ],
  exports: [
    ...layouts,
  ],
  imports: [
    CommonModule,
  ],
})
export class MenuModule {
}
