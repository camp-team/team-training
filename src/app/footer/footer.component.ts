import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  lists: string[] = [
    'Home',
    'About',
    'Testimonials',
    'Discovery',
    'Help',
    'Advertise',
    'Photos',
    'Terms',
    'Integrations',
    'Contact',
    'Guidlines',
    'Careers',
  ];

  icons: string[] = ['instagram', 'twitter', 'パス 1', 'web'];

  constructor() {}

  ngOnInit(): void {}
}
