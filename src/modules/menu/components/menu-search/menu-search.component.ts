import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-search',
  templateUrl: 'menu-search.component.html',
  styleUrls: ['menu-search.component.scss'],
})
export class MenuSearchComponent {

  @Input() placeholder: string;

}
