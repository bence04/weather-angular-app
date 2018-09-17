import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DbService } from '../db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newCity = '';
  closeResult: string;
  cities: any[];
  actualCity = [];

  constructor(private modalService: NgbModal, private dbService: DbService) { }

  ngOnInit() {
    this.cities = this.dbService.getCitiesByUserID(this.dbService.getUserID());
    if (this.cities[0] !== null) {
      this.actualCity = this.cities[0];
    }
  }

  addNewCity(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (this.newCity !== '') {
        this.dbService.addCityByUserID(this.dbService.getUserID(), this.newCity);
        this.cities = this.dbService.getCitiesByUserID(this.dbService.getUserID());
        this.newCity = '';
      }
    });
  }



}
