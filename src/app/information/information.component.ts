import { Component, OnInit } from '@angular/core';
import { INFORMATIONS } from '../mock-information';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  informations = INFORMATIONS;
  constructor() { }

  ngOnInit(): void {
  }

}
