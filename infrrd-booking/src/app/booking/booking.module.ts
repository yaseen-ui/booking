import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';


@NgModule({
  declarations: [BookingComponent, AddBookingComponent, BookingListComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FilterPipeModule,
    FormsModule
  ]
})
export class BookingModule { }
