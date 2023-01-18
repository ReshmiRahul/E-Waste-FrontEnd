import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-show-interest',
  templateUrl: './show-interest.component.html',
  styleUrls: ['./show-interest.component.scss']
})
export class ShowInterestComponent implements OnInit {
  product_id: any;
  public Productdataarray: any;
  ConfirmInterestForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.product_id = params.get('id')
    })
    this.ConfirmInterestForm = this.fb.group({
      product_id:[''],
      customer_name:localStorage.getItem('customer_name'),
      customer_address:localStorage.getItem('customer_address'),
      customer_mobile:localStorage.getItem('customer_mobile'),
      product_name: [''],
      product_description: [''],
      product_price: [''],
      product_interest:['']
    
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');
    this.dbservice.getProductbaseid(this.product_id).subscribe((data: any) =>
    {
      this. Productdataarray= data;
      this.ConfirmInterestForm.setValue({
        product_id:data.product_id,
        customer_name:localStorage.getItem('customer_name'),
        customer_address:localStorage.getItem('customer_address'),
        customer_mobile:localStorage.getItem('customer_mobile'),
        product_name: data.product_name,
        product_description: data.product_description,
        product_price:data.product_price,
        product_interest:data.product_interest,
        
      });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.UpdateProduct(this.ConfirmInterestForm.value)
  }
}
