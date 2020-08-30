import { Component, OnInit } from '@angular/core';
import { DetailHero } from '../interfaces/detail-hero';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent implements OnInit {
  hero: DetailHero = {
    title: 'WORLD NEWS',
    body:
      'Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto vidit.',
    backgroundImageUrl: 'assets/detail-header/bg.png',
    avatarUrl: 'assets/detail-header/avatar.png',
  };
  constructor() {}

  ngOnInit(): void {}
}
