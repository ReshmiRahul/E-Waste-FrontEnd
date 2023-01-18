import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-my-customer-complaints',
  templateUrl: './view-my-customer-complaints.component.html',
  styleUrls: ['./view-my-customer-complaints.component.scss']
})
export class ViewMyCustomerComplaintsComponent implements OnInit {
  Dataarray: any[] = [];
  aid:any;

  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.aid=localStorage.getItem('id')
    this.backendservice.ViewMyCustomerComplaints(this.aid).subscribe((res) => {

      this.Dataarray = res;
      console.log(this.Dataarray);

    })
  }
}