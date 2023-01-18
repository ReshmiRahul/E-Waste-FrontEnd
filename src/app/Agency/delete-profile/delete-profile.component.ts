import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {
  agency_id: any;
  public Agencydataarray: any;
  DeleteAgencyForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.agency_id = params.get('id')
    })
    this.DeleteAgencyForm = this.fb.group({
      agency_id: [''],
      agency_name: [''],
      agency_address: [''],
      agency_district:[''],
      agency_mobile: [''],
      agency_location: [''],
      agency_email: [''],
      agency_username:[''],
      agency_password:['']
      
    
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');
    this.dbservice.getagencybaseid(this.agency_id).subscribe((data: any) =>
    {
      this.Agencydataarray= data;
      this.DeleteAgencyForm.setValue({
        agency_id:data.agency_id,
        agency_name:data.agency_name,
        agency_address:data.agency_address,
        agency_district:data.agency_district,
        agency_mobile: data.agency_mobile,
        agency_location: data.agency_location,
        agency_email: data.agency_email,
        agency_username:data.agency_username,
        agency_password:data.agency_password
        
      });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.DeleteAgency(this.DeleteAgencyForm.value)
  }
}
