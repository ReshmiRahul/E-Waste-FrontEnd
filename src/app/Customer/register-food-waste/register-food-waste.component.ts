import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-register-food-waste',
  templateUrl: './register-food-waste.component.html',
  styleUrls: ['./register-food-waste.component.scss']
})
export class RegisterFoodWasteComponent {
  constructor(private fb: FormBuilder,private backendservice: BackEndServiceService, private router: Router) {}

  onSubmit()
  {
    this.router.navigate(['/CustomerMaster/Foodwaste'])
  }

}
