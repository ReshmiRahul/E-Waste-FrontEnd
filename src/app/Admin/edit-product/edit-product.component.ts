import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product_id: any;
  public Productdataarray: any;
  EditProductForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: BackEndServiceService) {

    this.route.paramMap.subscribe((params: ParamMap) => { //map the parameter means id
      this.product_id = params.get('id')
    })
    this.EditProductForm = this.fb.group({
      product_id: [''],
      product_name: [''],
      product_price: [''],
      product_description:[''],
      product_interest:['NotInterested'],


          
    })

  }
  ngOnInit(): void { // this method work when loading page.. inorder to fill data when load
    //throw new Error('Method not implemented.');
    this.dbservice.getProductbaseid(this.product_id).subscribe((data: any) =>
    {
      this.Productdataarray= data;
      this.EditProductForm.setValue({
        product_id:data.product_id,
        product_name:data.product_name,
        product_price:data.product_price,
        product_description:data.product_description,
        product_interest:data.product_interest


          });
        
    //this.EditCourseForm.patchValue(this.Coursedataarray)
  });
  }
  onSubmit() 
  {
    //this.dbservice.getcoursebaseid(this.EditCourseForm.value)
    //console.log(this.CourseRegForm.value)
    this.dbservice.UpdateProducts(this.EditProductForm.value)
  }
}
