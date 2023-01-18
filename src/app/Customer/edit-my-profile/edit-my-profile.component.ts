import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.scss']
})
export class EditMyProfileComponent implements OnInit {
  customer_id: any;
  public customerdataarray: any;
  EditcustomerForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.customer_id = params.get('id')
    })
    this.EditcustomerForm = this.fb.group({
      customer_id: [''],
      customer_name: [''],
      customer_mobile: [''],
      customer_username:[''],
      customer_password:[''],
      customer_district:[''],
      customer_address:[''],
      customer_email:[''],
      customer_status:['']
     
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');
    this.dbservice.getcustomerbaseid(this.customer_id).subscribe((data: any) =>
    {
      this.customerdataarray= data;
      this.EditcustomerForm.setValue({
        customer_id:data.customer_id,
        customer_name:data.customer_name,
        customer_mobile:data.customer_mobile,
        customer_username:data.customer_username,
        customer_password:data.customer_password,
        customer_district:data.customer_district,
        customer_address:data.customer_address,
        customer_email:data.customer_email,
        customer_status:data.customer_status
    });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.UpdateCustomerId(this.EditcustomerForm.value)
  }
}
