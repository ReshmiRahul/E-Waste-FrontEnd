import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-customer-complaint-portal',
  templateUrl: './customer-complaint-portal.component.html',
  styleUrls: ['./customer-complaint-portal.component.scss']
})
export class CustomerComplaintPortalComponent {
  submitted=false;

  constructor(private fb: FormBuilder,private backendservice: BackEndServiceService) { }
 CompRegForm=this.fb.group({
 customer_name:localStorage.getItem('customer_name'),
 customer_district:localStorage.getItem('customer_district'),
 customer_mobile:localStorage.getItem('customer_mobile'),
 customer_id:localStorage.getItem('customer_id'),

 complaint_topic:['',Validators.required],
 complaint_description:['',Validators.required],
 dates:[''],
 complaint_status:['Not Solved']
})
OnSubmit()
{
  this.submitted=true;
  if(this.CompRegForm.invalid){
    return;
  }
console.log(this.CompRegForm.value)
this.backendservice.insertComplaints(this.CompRegForm.value)
}
ngOnInit():void{}
}
