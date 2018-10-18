import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DbService } from '../db.service';

import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateCity } from '../actions/city.actions';
import { Observable } from 'rxjs';
import { City } from '../cities/models/city';
import { ApiService } from '../api.service';
import { Weather } from '../actions/weather.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newCity = '';
  closeResult: string;
  cities$: Observable<City[]>;
  actualCity = [];

  constructor(private apiService: ApiService, private store: Store<AppState>, private modalService: NgbModal, private dbService: DbService) {
    this.cities$ = this.store.select('city');
    if (this.cities$[0] !== null) {
      this.actualCity = this.cities$[0];
    }
   }

  ngOnInit() {
    // this.cities = this.dbService.getCitiesByUserID(this.dbService.getUserID());

  }

  addNewCity(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (this.newCity !== '') {

        const payload = {
          name: this.newCity
        };

        this.store.dispatch(new Weather(payload));
        this.newCity = '';
        /*this.apiService.getCurrentWeather(this.newCity).subscribe(res => {
          this.store.dispatch(new CreateCity(
            {
              name: this.newCity,
              userID: this.dbService.getUserID().toString(),
              active: false,
              weather: res
            }
          ));
          
        });*/

        // this.dbService.addCityByUserID(this.dbService.getUserID(), this.newCity);
        // this.cities = this.dbService.getCitiesByUserID(this.dbService.getUserID());
        // this.actualCity = this.cities[0];
      }
    });
  }



}
