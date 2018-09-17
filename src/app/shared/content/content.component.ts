import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from '../../db.service';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnChanges {

  @Input() actualCity: any[];
  currentWeather: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnChanges() {
    this.currentWeather = [];
    this.apiService.getCurrentWeather(this.actualCity.cityName).subscribe(data => {
      this.currentWeather.push(data);
    });
  }

}
