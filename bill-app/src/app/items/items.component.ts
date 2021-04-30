import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Output()AddPrice: EventEmitter<number> = new EventEmitter<number>();
  price = 22.50;

  constructor() { }
  
  addToCar() {
    this.AddPrice
  }  

  ngOnInit(): void {
  }

}
