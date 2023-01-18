import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-cleared-dustbin',
  templateUrl: './cleared-dustbin.component.html',
  styleUrls: ['./cleared-dustbin.component.scss']
})
export class ClearedDustbinComponent implements OnInit {
  Dataarray: any[] = [];
  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.backendservice.viewEwasteDetails().subscribe((res) => {

      this.Dataarray = res;
    })
  }
}
