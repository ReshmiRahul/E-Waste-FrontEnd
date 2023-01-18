import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-my-customer-requests',
  templateUrl: './view-my-customer-requests.component.html',
  styleUrls: ['./view-my-customer-requests.component.scss']
})
export class ViewMyCustomerRequestsComponent  implements OnInit {
  Dataarray: any[] = [];
  aid:any;

  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.aid=localStorage.getItem('id')
    this.backendservice.ViewMyCustomerRequests(this.aid).subscribe((res) => {

      this.Dataarray = res;
      console.log(this.Dataarray);

    })
  }
}