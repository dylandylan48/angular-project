import { Component, OnInit } from '@angular/core';
import { RELEASEDS } from '../mock-released';

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.css']
})
export class OriginalComponent implements OnInit {
  releaseds = RELEASEDS;
  constructor() { }

  ngOnInit(): void {
  }

}
