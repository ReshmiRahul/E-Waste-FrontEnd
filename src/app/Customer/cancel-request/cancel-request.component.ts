import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-cancel-request',
  templateUrl: './cancel-request.component.html',
  styleUrls: ['./cancel-request.component.scss']
})
export class CancelRequestComponent implements OnInit {
  Dataarray: any[] = [];
  aid:any;
  JSONArray:any[]=[];

  constructor(private backendservice:BackEndServiceService) {
    
   }
  ngOnInit(): void {
    this.aid=localStorage.getItem('customer_id')
    this.backendservice.ViewMyRequests(this.aid).subscribe((res) => {
     // this.JSONArray=JSON.parse(res);
      //this.Dataarray=Object.values(this);
      this.Dataarray = res;
      console.log(this.Dataarray);
    })
  }
}