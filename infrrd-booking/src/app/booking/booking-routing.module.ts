import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { AddBookingComponent } from './add-booking/add-booking.component';

const routes: Routes = [
  {
    path: '', component: BookingComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: BookingListComponent },
      { path: 'add', component: AddBookingComponent },
      { path: 'edit/:id', component: AddBookingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
