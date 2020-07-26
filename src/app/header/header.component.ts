import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDrower: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  isClassActive(event) {
    const target = event.target.value;
    target.addClassList('active');
  }

  isShowDrower() {
    if (this.isDrower) {
      this.isDrower = false;
    } else {
      this.isDrower = true;
    }
  }
}
