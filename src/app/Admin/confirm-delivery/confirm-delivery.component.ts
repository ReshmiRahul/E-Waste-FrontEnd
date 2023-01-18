import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-confirm-delivery',
  templateUrl: './confirm-delivery.component.html',
  styleUrls: ['./confirm-delivery.component.scss']
})
export class ConfirmDeliveryComponent implements OnInit {
  product_id: any;
  public Productdataarray: any;
  ConfirmProductForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.product_id = params.get('id')
    })
    this.ConfirmProductForm = this.fb.group({
      product_id: [''],
      product_name: [''],
      product_price: [''],
          
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');
    this.dbservice.getProductbaseid(this.product_id).subscribe((data: any) =>
    {
      this.Productdataarray= data;
      this.ConfirmProductForm.setValue({
        product_id:data.product_id,
        product_name:data.product_name,
        product_price:data.product_price,
          });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.ConfirmProductDelivery(this.ConfirmProductForm.value)
  }
}
