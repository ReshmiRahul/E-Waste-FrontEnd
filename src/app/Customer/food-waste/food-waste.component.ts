import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-food-waste',
  templateUrl: './food-waste.component.html',
  styleUrls: ['./food-waste.component.scss']
})
export class FoodWasteComponent{
  
    submitted=false;
    dates: string;
  today: Date = new Date();
  
    constructor(private fb: FormBuilder,private backendservice: BackEndServiceService) {
    this.dates = this.today.toISOString().slice(0,10);
      
     }
     foodRegForm=this.fb.group({
      customer_id:localStorage.getItem('customer_id'),
   customer_name:localStorage.getItem('customer_name'),
   customer_district:localStorage.getItem('customer_district'),
   customer_phone:localStorage.getItem('customer_mobile'),
   fud_pay:['1500'],
  
   
   dates:[''],
  
   
   
  })
  OnSubmit()
  {
   
  this.backendservice.insertFoodWaste(this.foodRegForm.value)
  }
  ngOnInit():void{
  }
  }
  