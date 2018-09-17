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
  constructor() { }

  ngOnChanges() {
    console.log('CONTENT');
    console.log(this.actualCity);
  }

}
