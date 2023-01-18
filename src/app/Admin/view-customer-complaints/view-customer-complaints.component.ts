import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-customer-complaints',
  templateUrl: './view-customer-complaints.component.html',
  styleUrls: ['./view-customer-complaints.component.scss']
})
export class ViewCustomerComplaintsComponent implements OnInit {
  Dataarray: any[] = [];
  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.backendservice.getComplaints().subscribe((res) => {

      this.Dataarray = res;
    })
  }
}