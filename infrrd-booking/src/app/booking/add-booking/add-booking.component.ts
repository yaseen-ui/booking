import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {

  constructor(public route: ActivatedRoute, public dataService: ServiceLayerService, public router: Router) {
    this.route.params.subscribe((params) => {
      this.bookingId = params.id;
    });
  }
  public bookingData: any = { fromDate: new Date(), toDate: new Date(), meetingName: '', meetingAgenda: '' };
  public bookingId;

  ngOnInit(): void {
    if (this.bookingId) {
      this.fetchBookingData();
    }
  }
  fetchBookingData() {
    try {
      // send id in post
      this.dataService.fetchBookingDetails().subscribe((response: any) => {
        this.bookingData = response.data;
      })
    } catch (error) {
      // send the message to logger
    }
  }
  saveBooking() {
    // send this.bookingData json object to backend using post method then navigate to list
    if (this.dateValidator()) {
      this.router.navigate(['/booking'])
    }
  }
  dateValidator() {
    if(this.bookingData.meetingName.trim().length === 0) {
      document.getElementById('meetingName').focus();
      return false;
    }
    const toDate = new Date(this.bookingData.toDate);
    const fromDate = new Date(this.bookingData.fromDate);
    if (!(fromDate.getTime() >= toDate.getTime())) {
      if (this.weekDayValidator(fromDate) && this.weekDayValidator(toDate)) {
        if (this.timeValidator(fromDate) && this.timeValidator(toDate)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    alert('From date should be less than from to date');
  }
  timeValidator(date) {
    const time = date.getHours();
    if (time >= 9 && time <= 21) {
      return true;
    }
    alert('Time should be between 9 am to 9 pm');
    return false;
  }
  weekDayValidator(date) {
    const day = date.getUTCDay();
    if ([6, 0].includes(day)) {
      alert('Only weekdays are allowed');
      return false;
    }
    return true;
  }

}
