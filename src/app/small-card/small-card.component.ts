import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {


  constructor() {}

  public readonly cards = [// listプロパティ
    {img: 'assets/images/small01.png', date: '3h ago by Worldnews'},
    {img: 'assets/images/small02.png', date: '4h ago by Days'},
    {img: 'assets/images/small03.png', date: '3h ago by Monica'}
  ];

  ngOnInit(): void {
  }
}
