import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLayerService } from '../../service-layer.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  constructor(private httpReq: ServiceLayerService, public router: Router) { }

  public bookingList;

  public filterBooking = { meetingName: '' }

  ngOnInit(): void {
    this.getBookingList();
  }
  getBookingList() {
    try {
      this.httpReq.bookingList().subscribe((data: any) => {
        if (data.status) {
          this.bookingList = data.list;
        }
      })
    } catch (error) {
      console.log(error);
      //  send the msg to logger
    }
  }
  deleteBooking(event,i) {
    try {
      event.preventDefault();
      this.bookingList.splice(i, 1);
    } catch (error) {
      // send the msg to logger
    }
  }
  navigateToAdd() {
    try {
      this.router.navigate(['/booking/add'])
    } catch (error) {
      // send the message to logger 
    }
  }

}
