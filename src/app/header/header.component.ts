import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.isOpened = true;
  }

  closeMenu() {
    this.isOpened = false;
  }

}
