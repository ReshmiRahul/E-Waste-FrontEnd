import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-my-agency',
  templateUrl: './view-my-agency.component.html',
  styleUrls: ['./view-my-agency.component.scss']
})
export class ViewMyAgencyComponent implements OnInit {
  Dataarray: any[] = [];
  aid:any;
  JSONArray:any[]=[];

  constructor(private backendservice:BackEndServiceService) {
    
   }
  ngOnInit(): void {
    this.aid=localStorage.getItem('customer_id')

    console.log(this.aid);
    this.backendservice.ViewMyAgency(this.aid).subscribe((res) => {
     // this.JSONArray=JSON.parse(res);
      //this.Dataarray=Object.values(this);
      this.Dataarray = res;
      console.log(this.Dataarray);
    })
  }
}