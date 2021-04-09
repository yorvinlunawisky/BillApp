import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item = [
    {
    "product": "Motherboard",
    "prince": 221.80,
    "available": true
  },{
    "product": "Monitor",
    "prince": 115.50,
    "available": false
  },{
    "product": "Keyboard",
    "prince": 33.00,
    "available": true
  },{
    "product": "Mouse",
    "prince": 23.55,
    "available": true
  },{
    "product": "Solid-State Drive",
    "prince": 250.99,
    "available": true
  },{
    "product": "VGA Cable",
    "prince": 14.99,
    "available": true
  },{
    "product": "RAM DD5 2x8GB",
    "prince": 185.75,
    "available": true
  }
];
  
  constructor() { }

  ngOnInit(): void {
  }

}
