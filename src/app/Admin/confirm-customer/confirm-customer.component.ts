import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-confirm-customer',
  templateUrl: './confirm-customer.component.html',
  styleUrls: ['./confirm-customer.component.scss']
})
export class ConfirmCustomerComponent implements OnInit {
 customer_id: any;
  public customerdataarray: any;
  ConfirmcustomerForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.customer_id = params.get('id')
    })
    this.ConfirmcustomerForm = this.fb.group({
     customer_id: [''],
     customer_name: [''],
     customer_address: [''],
     customer_district:[''],
     customer_mobile: [''],
   
     customer_email: [''],
     customer_username:[''],
     customer_password:[''],
     customer_status:['']
      
    
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');
    this.dbservice.getcustomerbaseid(this.customer_id).subscribe((data: any) =>
    {
      this.customerdataarray= data;
      this.ConfirmcustomerForm.setValue({
       customer_id:data.customer_id,
       customer_name:data.customer_name,
       customer_address:data.customer_address,
       customer_district:data.customer_district,
       customer_mobile: data.customer_mobile,
      
       customer_email: data.customer_email,
       customer_username:data.customer_username,
       customer_password:data.customer_password,
       customer_status:data.customer_status
        
      });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.UpdateCustomer(this.ConfirmcustomerForm.value)
  }
}
