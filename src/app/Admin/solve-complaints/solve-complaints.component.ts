import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-solve-complaints',
  templateUrl: './solve-complaints.component.html',
  styleUrls: ['./solve-complaints.component.scss']
})
export class SolveComplaintsComponent implements OnInit {
  complaint_id: any;
   public complaintdataarray: any;
   SolveComplaintForm: FormGroup;
   constructor(private route: ActivatedRoute,
     private fb: FormBuilder, private dbservice: BackEndServiceService) {
 
     this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
       this.complaint_id = params.get('id')
     })
     this.SolveComplaintForm = this.fb.group({
      complaint_id: [''],
      customer_name: [''],
      customer_district: [''],
      customer_mobile: [''],
      customer_id:[''],
    dates:[''],
      complaint_topic: [''],
      complaint_description:[''],
      complaint_status:[''],
     })
 
   }
   ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
     //throw new Error('Method not implemented.');
     this.dbservice.getComplaintsbaseid(this.complaint_id).subscribe((data: any) =>
     {
       this.complaintdataarray= data;
       this.SolveComplaintForm.setValue({
        complaint_id:data.complaint_id,
        customer_id:data.customer_id,

        customer_name:data.customer_name,
        customer_district:data.customer_district,
        customer_mobile: data.customer_mobile,
        complaint_topic: data.complaint_topic,
        complaint_description:data.complaint_description,
        complaint_status:data.complaint_status,
        dates:data.dates
         
       });
         
     //this.EditCourseForm.patchValue(this.Coursedataarray)
   });
   }
   onSubmit() 
   {
     //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
     //console.log(this.CourseRegForm.value)
     this.dbservice.updateComplaints(this.SolveComplaintForm.value)
   }
 }
 
