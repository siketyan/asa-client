import { Component, Input } from '@angular/core';

import { NavigatorItemModel } from '../../models';

@Component({
  selector: 'app-navigator-item',
  templateUrl: 'navigator-item.component.html',
  styleUrls: ['navigator-item.component.scss'],
})
export class NavigatorItemComponent {

  @Input() model: NavigatorItemModel;

  isOpen: boolean;

  toggle(): void {
    console.log(this.isOpen);
    this.isOpen = !this.isOpen;
  }

}
