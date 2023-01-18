import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {
  public Loginstatus = false;

  isUserValid: boolean=false;

  LogincustomerFormGroup:FormGroup;

  sess:any;
 

  constructor(private fb: FormBuilder, private router: Router ,private backend:BackEndServiceService) {

    this.LogincustomerFormGroup = this.fb.group({

      customer_username: [''],

      customer_password: ['']

    })

  }

 

  OnSubmit() {

    if (this.LogincustomerFormGroup.value.customer_username == 'Admin' && this.LogincustomerFormGroup.value.customer_password =='Admin') {

      this.router.navigate(['/AdminMaster/adminhome'])

    }
   
    else{
      console.log(this.LogincustomerFormGroup.value.customer_password)
      
      this.backend.logincustomer([this.LogincustomerFormGroup.value.customer_username, this.LogincustomerFormGroup.value.customer_password]).subscribe(res => {
       
        console.log(res);
  
        console.log(this.LogincustomerFormGroup.value.customer_username)
  
        if (res == 'Failed') {
  
          this.isUserValid = false;
  
          alert('Login Unsuccessful');
  
        } else {
          this.backend.GetCustomerdata(this.LogincustomerFormGroup.value.customer_username).subscribe((res:any)=>{
            console.log(res);
            localStorage.setItem('customer_name',res.customer_name)
            localStorage.setItem('customer_id',res.customer_id)
            localStorage.setItem('customer_address',res.customer_address)
            localStorage.setItem('customer_district',res.customer_district)

            localStorage.setItem('customer_mobile',res.customer_mobile)
          })
  
          this.isUserValid = true;
  
          alert('Login Successfully');
         console.log(res);
          //let obj=JSON.parse(res);
          //his.sess=obj.customer_id;
          //localStorage.setItem("id",this.sess)

          //this.router.navigate(['AgencyMaster/ViewProfile/'])
          this.router.navigate(['/CustomerMaster/CustomerHome'])
  
        }
  
      });

  }

  }

}
