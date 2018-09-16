import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cities: any[];
  @Output() citiesChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.cities);
  }

  removeCity(cityName) {
    const newCities = [];
    Object.keys(this.cities).forEach(key => {
      if (this.cities[key].cityName !== cityName) {
        newCities.push(this.cities[key]);
      }
    });
    this.citiesChange.emit(newCities);
  }

}
