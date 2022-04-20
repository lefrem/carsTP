import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = []
  sortPrice: string = "ASC"
  sortDate: string = "ASC"
  buttonSortPrice: boolean = true
  buttonSortDate: boolean = true
  orderPrice: String = "Ascent price"
  orderDate: String = "Release date"

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carService.fetchAll().subscribe({
      next: c => { this.cars = c },
      error: err => { console.log(err) }
    })
  }

  send(car: number) {
    this.router.navigate(['/carDetail', car])
  }

  switchOrderPrice() {
    if (this.sortPrice === "ASC") {
      this.sortPrice = "DESC"
      this.buttonSortPrice = false
      this.orderPrice = "Decreasing price"
    } else {
      this.sortPrice = "ASC"
      this.buttonSortPrice = true
      this.orderPrice = "Ascent price"
    }
  }

  switchOrderDate() {
    if (this.sortDate === "ASC") {
      this.sortDate = "DESC"
      this.buttonSortDate = false
    } else {
      this.sortDate = "ASC"
      this.buttonSortDate = true
    }
  }

}
