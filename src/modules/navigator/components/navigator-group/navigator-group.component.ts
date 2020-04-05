import { Component, Input } from '@angular/core';

import { NavigatorGroupModel } from '../../models';

@Component({
  selector: 'app-navigator-group',
  templateUrl: './navigator-group.component.html',
  styleUrls: ['./navigator-group.component.scss'],
})
export class NavigatorGroupComponent {

  @Input() model: NavigatorGroupModel;

}
