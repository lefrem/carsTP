import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  car?: Car
  editForm: FormGroup = this.formBuilder.group({})
  id: number = 0


  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private datepipe: DatePipe,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']

    this.carService.fetchById(this.id).subscribe({
      next: c => {
        this.car = c;
        this.editForm = this.formBuilder.group({
          title: [this.car.title, Validators.required],
          address: [this.car.address, Validators.required],
          brand: [this.car.brand, Validators.required],
          model: [this.car.model, Validators.required],
          model_year: [this.car.model_year, Validators.required],
          issuance: [this.datepipe.transform(this.car.issuance, 'yyyy-MM-dd'), Validators.required],
          mileage: [this.car.mileage, Validators.required],
          fuel: [this.car.fuel, Validators.required],
          color: [this.car.color, Validators.required],
          numbers_doors: [this.car.numbers_doors, Validators.required],
          horse_power: [this.car.horse_power, Validators.required],
          price: [this.car.price, Validators.required],
          pictures: [this.car.pictures, Validators.required],
          sold: [this.car.sold, Validators.required]
        })
        console.log(this.car);
      },
      error: err => { console.log(err) }
    })

  }

  onSubmit() {

    if (this.editForm.invalid) {
      console.log("pb")
      console.log(this.editForm)
      return;
    }

    let car: Car = {
      id: this.car?.id,
      title: this.editForm.value.title,
      address: this.editForm.value.address,
      brand: this.editForm.value.brand,
      model: this.editForm.value.model,
      model_year: this.editForm.value.model_year,
      issuance: this.editForm.value.issuance,
      mileage: this.editForm.value.mileage,
      fuel: this.editForm.value.fuel,
      color: this.editForm.value.color,
      numbers_doors: this.editForm.value.numbers_doors,
      horse_power: this.editForm.value.horse_power,
      price: this.editForm.value.price,
      pictures: this.editForm.value.pictures.split(","),
      sold: (this.editForm.value.sold === "true") ? true : false
    }

    this.carService.update(car).subscribe({
      next: ok => { },
      error: err => { console.log(err) }
    })

    this.router.navigate([''])
  }

}
