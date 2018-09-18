import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnChanges {

  @Input() actualCity: any[] = [];
  currentWeather: any[] = [];

  multi: any[] = [{
    name: 'Temp',
    series: []
  }];

  view: any[] = [1200, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Időpont';
  showYAxisLabel = true;
  yAxisLabel = 'Hőmérséklet';
  timeline = true;

  colorScheme = {
    domain: ['#627e75']
  };
  autoScale = true;

  constructor(private apiService: ApiService) { }

  ngOnChanges() {
    this.multi = [{
      name: 'Temp',
      series: []
    }];
    this.currentWeather = [];
    this.apiService.getCurrentWeather(this.actualCity.cityName).subscribe(data => {
      this.currentWeather.push(data);
    });
    this.apiService.getForecast5Weather(this.actualCity.cityName).subscribe(data => {
      data.list.forEach(element => {
        const newSeriesMin = {
          name: element.dt_txt.substring(0, element.dt_txt.length - 3),
          value: element.main.temp_min
        };

        this.multi[0].series.push(newSeriesMin);
      });
    });
  }

}
