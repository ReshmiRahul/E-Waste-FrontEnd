import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-food-waste',
  templateUrl: './view-food-waste.component.html',
  styleUrls: ['./view-food-waste.component.scss']
})
export class ViewFoodWasteComponent implements OnInit {
  Dataarray: any[] = [];
  aid:any;

  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.aid=localStorage.getItem('id')
    this.backendservice.ViewMyCustomerFoodWasteRequests(this.aid).subscribe((res) => {

      this.Dataarray = res;
      console.log(this.Dataarray);

    })
  }
}