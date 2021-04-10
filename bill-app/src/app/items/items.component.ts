import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  products = []



  addToCar() {
    console.log("clicked");
  }  
  constructor() { }

  ngOnInit(): void {
  }

}
