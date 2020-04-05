import { Component, Input } from '@angular/core';

import { NavigatorItemModel } from '../../models';

@Component({
  selector: 'app-navigator-tree',
  templateUrl: 'navigator-tree.component.html',
  styleUrls: ['navigator-tree.component.scss'],
})
export class NavigatorTreeComponent {

  @Input() items: NavigatorItemModel[];
  @Input() isOpen: boolean;

}
