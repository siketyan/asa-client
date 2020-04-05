import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Components from './components';

@NgModule({
  declarations: [
    Components.NavigatorComponent,
    Components.NavigatorGroupComponent,
    Components.NavigatorTreeComponent,
    Components.NavigatorItemComponent,
  ],
  exports: [
    Components.NavigatorComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class NavigatorModule {
}
