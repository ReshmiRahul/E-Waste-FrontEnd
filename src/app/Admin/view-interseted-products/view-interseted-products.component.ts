import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-view-interseted-products',
  templateUrl: './view-interseted-products.component.html',
  styleUrls: ['./view-interseted-products.component.scss']
})
export class ViewIntersetedProductsComponent implements OnInit {
  Dataarray: any[] = [];
  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit(): void {
    this.backendservice.ViewInterestedProduct().subscribe((res) => {

      this.Dataarray = res;
    })
  }
}