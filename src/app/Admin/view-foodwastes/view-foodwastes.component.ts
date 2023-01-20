import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-foodwastes',
  templateUrl: './view-foodwastes.component.html',
  styleUrls: ['./view-foodwastes.component.scss']
})
export class ViewFoodwastesComponent implements OnInit {
  Dataarray: any[] = [];
  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.backendservice.viewfoodwaste().subscribe((res) => {

      this.Dataarray = res;
    })
  }
}

