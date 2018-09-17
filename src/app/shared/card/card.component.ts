import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from '../../db.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cities: any[];
  @Output() citiesChange = new EventEmitter();

  constructor(private dbService: DbService) { }

  ngOnInit() {
    console.log(this.cities);
  }

  removeCity(cityName) {
    this.dbService.removeCityByUserID(this.dbService.getUserID(), cityName);
    this.citiesChange.emit(this.dbService.getCitiesByUserID(this.dbService.getUserID()));
  }

}
