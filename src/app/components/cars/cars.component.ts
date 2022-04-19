import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

}
