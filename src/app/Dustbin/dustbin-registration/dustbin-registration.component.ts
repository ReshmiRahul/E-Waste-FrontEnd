import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-dustbin-registration',
  templateUrl: './dustbin-registration.component.html',
  styleUrls: ['./dustbin-registration.component.scss']
})
export class DustbinRegistrationComponent {
  submitted=false;
  dates: string;
today: Date = new Date();

  constructor(private fb: FormBuilder,private backendservice: BackEndServiceService) {
  this.dates = this.today.toISOString().slice(0,10);
    
   }
  DustbinRegForm=this.fb.group({
    customer_id:localStorage.getItem('customer_id'),
 customer_name:localStorage.getItem('customer_name'),
 customer_district:localStorage.getItem('customer_district'),
 customer_phone:localStorage.getItem('customer_mobile'),

 ewaste_type:['',Validators.required],
 ewaste_description:['',Validators.required],
 dates:[''],

 ewaste_status:['Not Cleaned'],
 
})
OnSubmit()
{
  this.submitted=true;
  if(this.DustbinRegForm.invalid){
    return;
  }
console.log(this.DustbinRegForm.value)
this.backendservice.insertEwaste(this.DustbinRegForm.value)
}
ngOnInit():void{
}
}
