import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public banners = [
    {
      src:
        'https://www.dotnetlab.eu/wp-content/uploads/2020/11/strategy.jpg',
      alt: 'Strategy',
    },
    {
      src:
        'https://www.dotnetlab.eu/wp-content/uploads/2020/11/quality.jpg',
      alt: 'Quality',
    },
    {
      src:
        'https://www.dotnetlab.eu/wp-content/uploads/2020/11/problemsolving.jpg',
      alt: 'Problemsolving',
    },
    {
      src:
        'https://www.dotnetlab.eu/wp-content/uploads/2020/11/analyse.jpg',
      alt: 'Analyse',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
