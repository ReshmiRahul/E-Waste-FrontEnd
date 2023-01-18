import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-my-customer',
  templateUrl: './view-my-customer.component.html',
  styleUrls: ['./view-my-customer.component.scss']
})
export class ViewMyCustomerComponent implements OnInit {
  Dataarray: any[] = [];
  aid:any;
  JSONArray:any[]=[];

  constructor(private backendservice:BackEndServiceService) {
    
   }
  ngOnInit(): void {
    this.aid=localStorage.getItem('id')
    this.backendservice.ViewMyCustomer(this.aid).subscribe((res) => {
     // this.JSONArray=JSON.parse(res);
      //this.Dataarray=Object.values(this);
      this.Dataarray = res;
      console.log(this.Dataarray);
    })
  }
}
