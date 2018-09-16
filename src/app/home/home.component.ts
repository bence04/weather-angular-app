import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newCity = '';
  closeResult: string;
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

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  addNewCity(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (this.newCity !== '') {
        const resNewCity = {
          userID: +localStorage.getItem('userID'),
          cityName: this.newCity
        };

        this.cities.push(resNewCity);
        this.newCity = '';
      }
    });
  }



}
