import { Component, OnInit, Input } from '@angular/core';
import { DetailHero } from 'src/app/interfaces/detail-hero';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.scss'],
})
export class DetailHeroComponent implements OnInit {
  @Input() hero: DetailHero;

  constructor() {}

  ngOnInit(): void {}
}
