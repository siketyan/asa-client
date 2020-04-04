import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: 'menu-link.component.html',
  styleUrls: ['menu-link.component.scss'],
})
export class MenuLinkComponent {

  @Input() name: string;
  @Input() url: string;

}
