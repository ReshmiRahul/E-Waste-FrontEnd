import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-customer',
  templateUrl: './contact-customer.component.html',
  styleUrls: ['./contact-customer.component.scss']
})
export class ContactCustomerComponent {
  OnSubmit()
  {
    alert("We will Reach You Back Soon!!!");
  }

}
