import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-cancel-dustbin',
  templateUrl: './cancel-dustbin.component.html',
  styleUrls: ['./cancel-dustbin.component.scss']
})
export class CancelDustbinComponent implements OnInit {
  ewaste_id: any;
  public Productdataarray: any;
  CancelRequestForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.ewaste_id = params.get('id')
    })
    this.CancelRequestForm = this.fb.group({
      ewaste_id:[''],
    
      ewaste_type: [''],
      ewaste_description: [''],
      ewaste_status: [''],
    
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');
    this.dbservice.getDustbinbaseid(this.ewaste_id).subscribe((data: any) =>
    {
      this. Productdataarray= data;
      this.CancelRequestForm.setValue({
        ewaste_id:data.ewaste_id,
        ewaste_status:data.ewaste_status,
        ewaste_type:data.ewaste_type,
        ewaste_description:data.ewaste_description
        
      });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.UpdateDustbins(this.CancelRequestForm.value)
  }
}
