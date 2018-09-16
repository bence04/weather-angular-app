import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cities = [{
      userID: 1,
      cityName: 'Gödöllő'
    }, {
      userID: 1,
      cityName: 'Budapest'
    }, {
      userID: 1,
      cityName: 'Vác'
    }];
  constructor() { }

  ngOnInit() {
  }

}
