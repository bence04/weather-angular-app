import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  appID = 'ea977f7870a988627b4c940698ed8645';
  constructor(private http: HttpClient) { }

  getCurrentWeather(cityName): Observable <any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + this.appID + '&units=metric');
  }

  getForecast5Weather(cityName): Observable <any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + this.appID + '&units=metric');
  }

}
