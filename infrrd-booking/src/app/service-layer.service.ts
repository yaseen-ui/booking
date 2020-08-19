import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {

  private REST_API_SERVER = "assets/jsons/";

  constructor(private httpClient: HttpClient) { }

  public bookingList() {
    return this.httpClient.get(this.REST_API_SERVER + 'bookingList.json');
  }

  public fetchBookingDetails() {
    return this.httpClient.get(this.REST_API_SERVER + 'booking.json');
  }
}
