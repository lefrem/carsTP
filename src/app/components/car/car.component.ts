import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car!: Car

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']

    this.carService.fetchById(id).subscribe({
      next: c => { this.car = c },
      error: err => { console.log(err) }
    })
  }

}
