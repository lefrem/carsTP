import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup = this.formBuilder.group({})

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      title: ["", Validators.required],
      address: ["", Validators.required],
      brand: ["", Validators.required],
      model: ["", Validators.required],
      model_year: ["", Validators.required],
      issuance: ["", Validators.required],
      mileage: ["", Validators.required],
      fuel: ["", Validators.required],
      color: ["", Validators.required],
      numbers_doors: ["", Validators.required],
      horse_power: ["", Validators.required],
      price: ["", Validators.required],
      pictures: ["", Validators.required],
      sold: ["", Validators.required]
    })
  }

  onSubmit() {

    if (this.addForm.invalid) {
      console.log("pb")
      console.log(this.addForm)
      return;
    }

    let car: Car = {
      title: this.addForm.value.title,
      address: this.addForm.value.address,
      brand: this.addForm.value.brand,
      model: this.addForm.value.model,
      model_year: this.addForm.value.model_year,
      issuance: this.addForm.value.issuance,
      mileage: this.addForm.value.mileage,
      fuel: this.addForm.value.fuel,
      color: this.addForm.value.color,
      numbers_doors: this.addForm.value.numbers_doors,
      horse_power: this.addForm.value.horse_power,
      price: this.addForm.value.price,
      pictures: this.addForm.value.pictures.split(","),
      sold: (this.addForm.value.sold === "true") ? true : false
    }

    this.carService.add(car).subscribe({
      next: ok => { },
      error: err => { console.log(err) }
    })

    this.router.navigate([''])
  }

}
