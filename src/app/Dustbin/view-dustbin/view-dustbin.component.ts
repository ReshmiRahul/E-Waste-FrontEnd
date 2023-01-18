import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-dustbin',
  templateUrl: './view-dustbin.component.html',
  styleUrls: ['./view-dustbin.component.scss']
})
export class ViewDustbinComponent  implements OnInit {
  Dataarray: any[] = [];
  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.backendservice.getEwaste().subscribe((res) => {

      this.Dataarray = res;
    })
  }
}