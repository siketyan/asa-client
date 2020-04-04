import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenuStretch]',
})
export class MenuStretchDirective {
  @HostBinding('class.flex-auto') isStretched = true;
}
