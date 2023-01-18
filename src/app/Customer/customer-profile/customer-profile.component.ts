import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  Dataarray: any[] = [];
  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.backendservice.getCustomer().subscribe((res) => {

      this.Dataarray = res;
    })
  }
}