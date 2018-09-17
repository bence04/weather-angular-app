import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  setLoggedUserID(userID) {
    localStorage.setItem('logged', '1');
    localStorage.setItem('userID', userID);
  }

  addNewUser(user) {
    let users: any[] = this.getUsers();
    if (users == null) {
      users = [user];
    } else {
      users.push(user);
    }
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUserID() {
    return +localStorage.getItem('userID');
  }

  getCitiesByUserID(userID) {
    const cities: any[] = JSON.parse(localStorage.getItem('cities'));
    const returnCities: any[] = [];
    cities.forEach(element => {
      if (element.userID === userID) {
        returnCities.push(element);
      }
    });

    returnCities.sort(function(a, b) {
      const textA = a.cityName.toUpperCase();
      const textB = b.cityName.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    return returnCities;
  }

  addCityByUserID(userID, cityName) {
    let cities: any[] = JSON.parse(localStorage.getItem('cities'));

    if (cities == null) {
      cities = [{
        userID: userID,
        cityName: cityName
      }];
    } else {
      const newCity = {
        userID: userID,
        cityName: cityName
      };
      cities.push(newCity);
    }
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  removeCityByUserID(userID, cityName) {
    const cities: any[] = JSON.parse(localStorage.getItem('cities'));
    const newCities: any[] = [];
    cities.forEach(element => {
      if (element.userID !== userID || element.cityName !== cityName) {
        newCities.push(element);
      }
    });
    localStorage.setItem('cities', JSON.stringify(newCities));
  }

}
