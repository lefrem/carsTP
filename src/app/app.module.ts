import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe, registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import localeFR from '@angular/common/locales/fr';
import { CarComponent } from './components/car/car.component';
import { ManagementComponent } from './components/management/management.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceOrderPipe } from './pipes/price-order.pipe';
import { ResearchPipe } from './pipes/research.pipe';
import { DateOrderPipe } from './pipes/date-order.pipe';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    ManagementComponent,
    EditComponent,
    AddComponent,
    PriceOrderPipe,
    ResearchPipe,
    DateOrderPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
