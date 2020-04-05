import { Component, Input } from '@angular/core';

import { NavigatorModel } from '../../models';

@Component({
  selector: 'app-navigator',
  templateUrl: 'navigator.component.html',
  styleUrls: ['navigator.component.scss'],
})
export class NavigatorComponent {

  @Input() model: NavigatorModel;

}
