import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent {
  submitted=false;
  constructor(private fb: FormBuilder,private backendservice: BackEndServiceService) { }
  CustomerRegisterForm = this.fb.group({
    customer_name: ['',Validators.required],
    customer_address: ['',Validators.required],
    customer_district:['',Validators.required],
    customer_mobile:['',[Validators.required,Validators.pattern]],
    customer_email:['',[Validators.required,Validators.email]],
    customer_username:['',Validators.required],
    customer_password:['',Validators.required],
    Customer_status:['Not Confirmed']
    })
    OnSubmit() {
      this.submitted=true;
      if(this.CustomerRegisterForm.invalid){
        return;
      }
    console.log(this.CustomerRegisterForm.value)
    this.backendservice.insertCustomer(this.CustomerRegisterForm.value)
    }
    

}

