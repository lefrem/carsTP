import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

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

  sendEdit(car: number) {
    this.router.navigate(['/carEdit', car])
  }

  sendRemove(car: number) {
    this.carService.removeById(car).subscribe({
      next: ok => { },
      error: err => {
        console.log(err);
      }
    })
    location.reload()
  }

}
