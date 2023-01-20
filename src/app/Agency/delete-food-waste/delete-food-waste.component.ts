import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-delete-food-waste',
  templateUrl: './delete-food-waste.component.html',
  styleUrls: ['./delete-food-waste.component.scss']
})
export class DeleteFoodWasteComponent implements OnInit {
  fud_id: any;
  public Productdataarray: any;
  DeleteFoodwasteForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.fud_id = params.get('id')
    })
    this.DeleteFoodwasteForm = this.fb.group({
      fud_id: [''],
      fud_pay: [''],
      dates: [''],
          
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');
    this.dbservice.ViewfoodwasteByid(this.fud_id).subscribe((data: any) =>
    {
      this.Productdataarray= data;
      this.DeleteFoodwasteForm.setValue({
        fud_id:data.fud_id,
        fud_pay:data.fud_pay,
        dates:data.dates,
          });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.deleteFoodwaste(this.DeleteFoodwasteForm.value)
  }
}
