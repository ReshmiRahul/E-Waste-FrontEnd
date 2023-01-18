import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  Dataarray: any[] = [];
  aid:any;
  JSONArray:any[]=[];

  constructor(private backendservice:BackEndServiceService) {
    
   }
  ngOnInit(): void {
    this.aid=localStorage.getItem('id')
    this.backendservice.ViewAgencyProfile(this.aid).subscribe((res) => {
     // this.JSONArray=JSON.parse(res);
      //this.Dataarray=Object.values(this);
      this.Dataarray = res;
      console.log(this.Dataarray);
    })
  }
}