// import { Component } from '@angular/core';
// import { FormBuilder, Validators,FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { BackEndServiceService } from 'src/app/back-end-service.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent  {
//   public Loginstatus = false;
//   isUserValid: boolean = false;
  
  
//   constructor(private fb: FormBuilder, private router: Router,private backendservice:BackEndServiceService) { }
//   LoginForm = this.fb.group({
//     agency_username: [''],
//     agency_password: ['']
//   })
//   OnSubmit() {
//     if (this.LoginForm.value.agency_username == 'Admin' && this.LoginForm.value.agency_password == 'Admin') {
//       this.router.navigate(['adminhome'])
//     }
//     else {
//       this.backendservice.login([this.LoginForm.value.agency_username, this.LoginForm.value.agency_password]).subscribe((res: string) => {
//         console.log(res);
//         console.log(this.LoginForm.value.agency_username)
//         if (res == 'Failed') {
//           this.isUserValid = false;
//           alert('Login Unsuccessful');
//         } else {
//           this.isUserValid = true;
//           this.router.navigate(['AgencyHome'])
//         }
//       })
//     }
//   }
// }

import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { BackEndServiceService } from 'src/app/back-end-service.service';



@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss']

})

export class LoginComponent {

  public Loginstatus = false;

  isUserValid: boolean=false;

  LoginFormGroup:FormGroup;

  sess:any;
  aid:any;
 

  constructor(private fb: FormBuilder, private router: Router ,private backend:BackEndServiceService) {

    this.LoginFormGroup = this.fb.group({

      agency_username: [''],

      agency_password: ['']

    })

  }

 

  OnSubmit() {

    if (this.LoginFormGroup.value.agency_username == 'Admin' && this.LoginFormGroup.value.agency_password =='Admin') {

      this.router.navigate(['/AdminMaster/adminhome'])

    }
   
    else{
      console.log(this.LoginFormGroup.value.agency_password)
      
      this.backend.loginuser([this.LoginFormGroup.value.agency_username, this.LoginFormGroup.value.agency_password]).subscribe(res => {
       
        console.log(res);
  
        console.log(this.LoginFormGroup.value.agency_id)
  
        if (res == 'Failed') {
  
          this.isUserValid = false;
  
          alert('Login Unsuccessful');
  
        } else {
          this.backend.GetAgencydata(this.LoginFormGroup.value.username).subscribe((res:any)=>{
            console.log(res);
            localStorage.setItem('agency_name',res.agency_name)
          localStorage.setItem('agency_id',res.agency_id)
            localStorage.setItem('agency_address',res.agency_address)
          })
  
          this.isUserValid = true;
  
          alert('Login Successfully');
//this.aid=localStorage.getItem('agency_id');
          let obj=JSON.parse(res);
          this.sess=obj.agency_id;
console.log(this.sess);
localStorage.setItem("id",this.sess)
          this.aid=   localStorage.getItem("id")
          console.log(res)
console.log(this.aid);


          //this.router.navigate(['AgencyMaster/ViewProfile/'])
          this.router.navigate(['/AgencyMaster/AgencyHome'])
  
        }
  
      });

  }

  }

}
