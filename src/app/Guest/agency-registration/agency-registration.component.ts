import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-agency-registration',
  templateUrl: './agency-registration.component.html',
  styleUrls: ['./agency-registration.component.scss']
})
export class AgencyRegistrationComponent {
  submitted=false;
  constructor(private fb: FormBuilder,private backendservice: BackEndServiceService) { }
  AgencyRegisterForm = this.fb.group({
    agency_name: ['',Validators.required],
    
    agency_address: ['',Validators.required],
    
    agency_district: ['',Validators.required],
    agency_mobile: ['',[Validators.required,Validators.pattern]],
    agency_location: ['',Validators.required],
    agency_email: ['',[Validators.required,Validators.email]],
    agency_username: ['',Validators.required],
    agency_password: ['',Validators.required],
    agency_status:['Confirmed']
    })
    OnSubmit() {
      this.submitted=true;
      if(this.AgencyRegisterForm.invalid){
        return;
      }
    //console.log(this.AgencyRegisterForm.value)
    this.backendservice.insertAgency(this.AgencyRegisterForm.value)
    }
    

}
