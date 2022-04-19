import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private BASE_URL = "http://localhost:3000/cars"

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.BASE_URL}`);
  }

  fetchById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.BASE_URL}/${id}`);
  }
}
