import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  price = 22.50;

  constructor(private headerService: HeaderService) { }
  
  addToCar() {
    this.headerService.addPrice(this.price);
  }  

  ngOnInit(): void {
  }

}
