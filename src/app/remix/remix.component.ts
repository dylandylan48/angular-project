import { Component, OnInit } from '@angular/core';
import { PRODUCTMAJORS } from '../mock-product';
import { PRODUCT2021MJS } from '../mock-product2021';
import { PRODUCTMINORS } from '../mock-productminor';
import { productmajor } from '../product';

@Component({
  selector: 'app-remix',
  templateUrl: './remix.component.html',
  styleUrls: ['./remix.component.css']
})
export class RemixComponent implements OnInit {
  productmajors = PRODUCTMAJORS;
  productminors = PRODUCTMINORS;
  product2021mjs = PRODUCT2021MJS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
