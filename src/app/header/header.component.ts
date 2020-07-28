import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  header: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.header = document.getElementById('js-header');
  }

  hamburgerEvent() {
    this.header.classList.toggle('drawer-open');
  }

  bgEvent() {
    this.header.classList.remove('drawer-open');
  }
}
