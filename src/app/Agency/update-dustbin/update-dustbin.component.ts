import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-update-dustbin',
  templateUrl: './update-dustbin.component.html',
  styleUrls: ['./update-dustbin.component.scss']
})
export class UpdateDustbinComponent implements OnInit {
  ewaste_id: any;
  ewaste_perkilo_Rs:any;
ewaste_kilo: any;
ewaste_wallet: number;
  public Ewastedataarray: any;
  EditEwasteForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {
      this.ewaste_wallet=this.ewaste_kilo*this.ewaste_perkilo_Rs;

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.ewaste_id = params.get('id')
    })
    this.EditEwasteForm = this.fb.group({
      ewaste_id: [''],
      ewaste_kilo: [''],
      ewaste_perkilo_Rs: [''],
      ewaste_wallet:[''],
      ewaste_status:[''],
      ewaste_type:[''],
      ewaste_description:[''],
      customer_name:[''],
      customer_district:[''],
      customer_phone:[''],
      customer_id:['']   ,
      dates:['']
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');

    this.dbservice.getDustbinbaseid(this.ewaste_id).subscribe((data: any) =>
    {

      this.Ewastedataarray= data;
      this.EditEwasteForm.setValue({
        ewaste_id:data.ewaste_id,
        ewaste_kilo:data.ewaste_kilo,
        ewaste_perkilo_Rs:data.ewaste_perkilo_Rs,
        ewaste_status:data.ewaste_status,
        ewaste_type:data.ewaste_type,
        ewaste_description:data.ewaste_description,
        customer_name:data.customer_name,
        customer_district:data.customer_district,
        customer_phone:data.customer_phone,
        customer_id:data.customer_id,
        dates:data.dates,
        ewaste_wallet:data.ewaste_wallet        
        
       });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  calculateTotal() {
    this.ewaste_wallet=this.ewaste_kilo*this.ewaste_perkilo_Rs;
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.updateDustbin(this.EditEwasteForm.value)
  }
}
