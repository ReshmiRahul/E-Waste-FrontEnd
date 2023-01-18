import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent {
  submitted=false;

  constructor(private fb:FormBuilder, private backendservice:BackEndServiceService) { }



  ProductRegisterForm = this.fb.group({

    product_name: ['',Validators.required],

    product_description: ['',Validators.required],

    product_price: ['',Validators.required],

 product_interest:['NotInterested']

     })

     OnSubmit() {

      this.submitted=true;
  if(this.ProductRegisterForm.invalid){
    return;
  }
        this.backendservice.insertproductdata(this.ProductRegisterForm.value)

     }

}
