import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // mobileMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu($e, item) {
    if ($e.target.id === 'mobile-part') {
      item.setAttribute('style', 'display: none');
    }
  }

  openMenu(item) {
    item.setAttribute('style', 'display: block');
  }
}
