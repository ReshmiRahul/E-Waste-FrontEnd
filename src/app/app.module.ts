import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewweatherdataComponent } from './viewweatherdata/viewweatherdata.component';
import { AgencyHomeComponent } from './Agency/agency-home/agency-home.component';
import { UpdateProfileComponent } from './Agency/update-profile/update-profile.component';
import { ViewProfileComponent } from './Agency/view-profile/view-profile.component';
import { HomeComponent } from './Guest/home/home.component';
import { LoginComponent } from './Guest/login/login.component';
import { AboutComponent } from './Guest/about/about.component';
import { AgencyRegistrationComponent } from './Guest/agency-registration/agency-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { CustomerRegistrationComponent } from './Guest/customer-registration/customer-registration.component';
import { CustomerHomeComponent } from './Customer/customer-home/customer-home.component';
import { CustomerProfileComponent } from './Customer/customer-profile/customer-profile.component';
import { EditAgencyComponent } from './Agency/edit-agency/edit-agency.component';
import { DeleteagentprofileComponent } from './deleteagentprofile/deleteagentprofile.component';
import { DeleteProfileComponent } from './Agency/delete-profile/delete-profile.component';
import { ViewAgencyComponent } from './Admin/view-agency/view-agency.component';
import { ConfirmAgencyComponent } from './Admin/confirm-agency/confirm-agency.component';
import { AdminContactComponent } from './Guest/admin-contact/admin-contact.component';
import { GuestMasterComponent } from './Guest/guest-master/guest-master.component';
import { ViewCustomerComponent } from './Admin/view-customer/view-customer.component';
import { ViewcustomersComponent } from './Agency/viewcustomers/viewcustomers.component';
import { DustbinRegistrationComponent } from './Dustbin/dustbin-registration/dustbin-registration.component';
import { ViewDustbinComponent } from './Dustbin/view-dustbin/view-dustbin.component';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { CustomerMasterComponent } from './Customer/customer-master/customer-master.component';
import { AboutUsComponent } from './Customer/about-us/about-us.component';
import { ContactCustomerComponent } from './Customer/contact-customer/contact-customer.component';
import { AgencyMasterComponent } from './Agency/agency-master/agency-master.component';
import { CustomerLoginComponent } from './Guest/customer-login/customer-login.component';
import { CustomerComplaintPortalComponent } from './Customer/customer-complaint-portal/customer-complaint-portal.component';
import { CustomerComplaintsComponent } from './Agency/customer-complaints/customer-complaints.component';
import { ViewCustomerComplaintsComponent } from './Admin/view-customer-complaints/view-customer-complaints.component';
import { SolveComplaintsComponent } from './Admin/solve-complaints/solve-complaints.component';
import { ViewMyCustomerComponent } from './Agency/view-my-customer/view-my-customer.component';
import { ConfirmCustomerComponent } from './Admin/confirm-customer/confirm-customer.component';
import { ProductRegistrationComponent } from './Admin/product-registration/product-registration.component';
import { ProductViewComponent } from './Customer/product-view/product-view.component';
import { ShowInterestComponent } from './Customer/show-interest/show-interest.component';
import { ViewProductsComponent } from './Admin/view-products/view-products.component';
import { ConfirmDeliveryComponent } from './Admin/confirm-delivery/confirm-delivery.component';
import { ViewIntersetedProductsComponent } from './Admin/view-interseted-products/view-interseted-products.component';
import { DeleteProductComponent } from './Admin/delete-product/delete-product.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { ViewProductDetailsComponent } from './Agency/view-product-details/view-product-details.component';
import { ViewMyCustomerRequestsComponent } from './Agency/view-my-customer-requests/view-my-customer-requests.component';
import { ViewMyCustomerComplaintsComponent } from './Agency/view-my-customer-complaints/view-my-customer-complaints.component';
import { UpdateDustbinComponent } from './Agency/update-dustbin/update-dustbin.component';
import { ClearedDustbinComponent } from './Admin/cleared-dustbin/cleared-dustbin.component';
import { DeleteCustomerComponent } from './Admin/delete-customer/delete-customer.component';
import { ViewMyAgencyComponent } from './Customer/view-my-agency/view-my-agency.component';
import { ViewcustomerprofileComponent } from './Customer/viewcustomerprofile/viewcustomerprofile.component';
import { ViewwalletComponent } from './Customer/viewwallet/viewwallet.component';
import { ComplaintStatusComponent } from './Customer/complaint-status/complaint-status.component';
import { CancelRequestComponent } from './Customer/cancel-request/cancel-request.component';
import { CancelDustbinComponent } from './Customer/cancel-dustbin/cancel-dustbin.component';
import { UpdateagencyComponent } from './Admin/updateagency/updateagency.component';
import { EditMyProfileComponent } from './Customer/edit-my-profile/edit-my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewweatherdataComponent,
    AgencyHomeComponent,
    UpdateProfileComponent,
    ViewProfileComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    AdminHomeComponent,
    AgencyRegistrationComponent,
    CustomerRegistrationComponent,
    CustomerHomeComponent,
    CustomerProfileComponent,
    EditAgencyComponent,
    DeleteagentprofileComponent,
    DeleteProfileComponent,
    ViewAgencyComponent,
    ConfirmAgencyComponent,
    AdminContactComponent,
    GuestMasterComponent,
    ViewCustomerComponent,
    ViewcustomersComponent,
    DustbinRegistrationComponent,
    ViewDustbinComponent,
    AdminMasterComponent,
    CustomerMasterComponent,
    AboutUsComponent,
    ContactCustomerComponent,
    AgencyMasterComponent,
    CustomerLoginComponent,
    CustomerComplaintPortalComponent,
    CustomerComplaintsComponent,
    ViewCustomerComplaintsComponent,
    SolveComplaintsComponent,
    ViewMyCustomerComponent,
    ConfirmCustomerComponent,
    ProductRegistrationComponent,
    ProductViewComponent,
    ShowInterestComponent,
    ViewProductsComponent,
    ConfirmDeliveryComponent,
    ViewIntersetedProductsComponent,
    DeleteProductComponent,
    EditProductComponent,
    ViewProductDetailsComponent,
    ViewMyCustomerRequestsComponent,
    ViewMyCustomerComplaintsComponent,
    UpdateDustbinComponent,
    ClearedDustbinComponent,
    DeleteCustomerComponent,
    ViewMyAgencyComponent,
    ViewcustomerprofileComponent,
    ViewwalletComponent,
    ComplaintStatusComponent,
    CancelRequestComponent,
    CancelDustbinComponent,
    UpdateagencyComponent,
    EditMyProfileComponent,
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
