import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { ClearedDustbinComponent } from './Admin/cleared-dustbin/cleared-dustbin.component';
import { ConfirmAgencyComponent } from './Admin/confirm-agency/confirm-agency.component';
import { ConfirmCustomerComponent } from './Admin/confirm-customer/confirm-customer.component';
import { ConfirmDeliveryComponent } from './Admin/confirm-delivery/confirm-delivery.component';
import { DeleteCustomerComponent } from './Admin/delete-customer/delete-customer.component';
import { DeleteProductComponent } from './Admin/delete-product/delete-product.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { ProductRegistrationComponent } from './Admin/product-registration/product-registration.component';
import { SolveComplaintsComponent } from './Admin/solve-complaints/solve-complaints.component';
import { UpdateagencyComponent } from './Admin/updateagency/updateagency.component';
import { ViewAgencyComponent } from './Admin/view-agency/view-agency.component';
import { ViewCustomerComplaintsComponent } from './Admin/view-customer-complaints/view-customer-complaints.component';
import { ViewCustomerComponent } from './Admin/view-customer/view-customer.component';
import { ViewFoodwastesComponent } from './Admin/view-foodwastes/view-foodwastes.component';
import { ViewIntersetedProductsComponent } from './Admin/view-interseted-products/view-interseted-products.component';
import { ViewProductsComponent } from './Admin/view-products/view-products.component';
import { AgencyHomeComponent } from './Agency/agency-home/agency-home.component';
import { AgencyMasterComponent } from './Agency/agency-master/agency-master.component';
import { CustomerComplaintsComponent } from './Agency/customer-complaints/customer-complaints.component';
import { DeleteFoodWasteComponent } from './Agency/delete-food-waste/delete-food-waste.component';
import { DeleteProfileComponent } from './Agency/delete-profile/delete-profile.component';
import { EditAgencyComponent } from './Agency/edit-agency/edit-agency.component';
import { UpdateDustbinComponent } from './Agency/update-dustbin/update-dustbin.component';
import { UpdateProfileComponent } from './Agency/update-profile/update-profile.component';
import { ViewFoodWasteComponent } from './Agency/view-food-waste/view-food-waste.component';
import { ViewMyCustomerComplaintsComponent } from './Agency/view-my-customer-complaints/view-my-customer-complaints.component';
import { ViewMyCustomerRequestsComponent } from './Agency/view-my-customer-requests/view-my-customer-requests.component';
import { ViewMyCustomerComponent } from './Agency/view-my-customer/view-my-customer.component';
import { ViewProductDetailsComponent } from './Agency/view-product-details/view-product-details.component';
import { ViewProfileComponent } from './Agency/view-profile/view-profile.component';
import { ViewcustomersComponent } from './Agency/viewcustomers/viewcustomers.component';
import { AboutUsComponent } from './Customer/about-us/about-us.component';
import { CancelDustbinComponent } from './Customer/cancel-dustbin/cancel-dustbin.component';
import { CancelRequestComponent } from './Customer/cancel-request/cancel-request.component';
import { ComplaintStatusComponent } from './Customer/complaint-status/complaint-status.component';
import { ContactCustomerComponent } from './Customer/contact-customer/contact-customer.component';
import { CustomerComplaintPortalComponent } from './Customer/customer-complaint-portal/customer-complaint-portal.component';
import { CustomerHomeComponent } from './Customer/customer-home/customer-home.component';
import { CustomerMasterComponent } from './Customer/customer-master/customer-master.component';
import { CustomerProfileComponent } from './Customer/customer-profile/customer-profile.component';
import { EditMyProfileComponent } from './Customer/edit-my-profile/edit-my-profile.component';
import { FoodWasteRequestComponent } from './Customer/food-waste-request/food-waste-request.component';
import { FoodWasteComponent } from './Customer/food-waste/food-waste.component';
import { ProductViewComponent } from './Customer/product-view/product-view.component';
import { RegisterFoodWasteComponent } from './Customer/register-food-waste/register-food-waste.component';
import { ShowInterestComponent } from './Customer/show-interest/show-interest.component';
import { ViewMyAgencyComponent } from './Customer/view-my-agency/view-my-agency.component';
import { ViewcustomerprofileComponent } from './Customer/viewcustomerprofile/viewcustomerprofile.component';
import { ViewwalletComponent } from './Customer/viewwallet/viewwallet.component';
import { DustbinRegistrationComponent } from './Dustbin/dustbin-registration/dustbin-registration.component';
import { ViewDustbinComponent } from './Dustbin/view-dustbin/view-dustbin.component';
import { AboutComponent } from './Guest/about/about.component';
import { AdminContactComponent } from './Guest/admin-contact/admin-contact.component';
import { AgencyRegistrationComponent } from './Guest/agency-registration/agency-registration.component';
import { CustomerLoginComponent } from './Guest/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './Guest/customer-registration/customer-registration.component';
import { GuestMasterComponent } from './Guest/guest-master/guest-master.component';
import { HomeComponent } from './Guest/home/home.component';
import { LoginComponent } from './Guest/login/login.component';

import { ViewweatherdataComponent } from './viewweatherdata/viewweatherdata.component';

const routes: Routes = [{path:'viewweatherdata',component:ViewweatherdataComponent},
{
  
  
path: 'AgencyMaster', component: AgencyMasterComponent,
  children: // all the below 3 are setting as children of home.
    [
      { path: 'ViewCustomers', component: ViewcustomersComponent },
     { path: 'AgencyHome', component: AgencyHomeComponent},
    
      { path: 'ViewProfile', component: ViewProfileComponent },
      {path:'editagency/:id',component:EditAgencyComponent},
      {path:'deleteagency/:id',component:DeleteProfileComponent},
       
      {path: 'ViewMyCustomer', component: ViewMyCustomerComponent},    
      {path: 'ViewProductDetails', component: ViewProductDetailsComponent},  
      {path: 'ViewMyCustomerRequests', component: ViewMyCustomerRequestsComponent},  
      {path: 'ViewMyCustomerComplaints', component: ViewMyCustomerComplaintsComponent},      
      {path: 'UpdateDustbin/:id', component: UpdateDustbinComponent},   
      {path: 'ViewFoodWaste', component: ViewFoodWasteComponent},
      {path: 'DeleteFoodWaste/:id', component: DeleteFoodWasteComponent}
   ]
},
//Guest Page
{
  path: 'GuestMaster', component: GuestMasterComponent,

  children: // all the below 3 are setting as children of home.
    [
      {path: 'Home', component: HomeComponent},
      { path: 'About', component: AboutComponent },
      { path: 'ContactAdmin', component: AdminContactComponent },

      {path:'CustomerRegistration',component:CustomerRegistrationComponent},
      { path: 'Login', component: LoginComponent },
      { path: 'CustomerLogin', component: CustomerLoginComponent }
    ]
},

//Admin Page
{ path: 'AdminMaster', component: AdminMasterComponent,
children: // all the below 3 are setting as children of home.
    [
{ path: 'adminhome', component: AdminHomeComponent},
      { path: 'viewagency', component:ViewAgencyComponent },
      { path: 'Confirmagency/:id', component:ConfirmAgencyComponent },
      { path: 'viewcustomer', component:ViewCustomerComponent },
      {path:'deleteagency/:id',component:DeleteProfileComponent},
      { path: 'viewcustomerComplaints', component:ViewCustomerComplaintsComponent },
      { path: 'SolveComplaints/:id', component:SolveComplaintsComponent},
      { path: 'ConfirmCustomer/:id', component:ConfirmCustomerComponent},
      { path: 'ProductRegistration', component:ProductRegistrationComponent},
      { path: 'ViewProducts', component:ViewProductsComponent},
      { path: 'ConfirmDelivery/:id', component:ConfirmDeliveryComponent},
      { path: 'ViewIntersetedProducts', component:ViewIntersetedProductsComponent},
      { path: 'DeleteProduct/:id', component:DeleteProductComponent},
      { path: 'EditProduct/:id', component:EditProductComponent},
      {path: 'DustbinView', component: ViewDustbinComponent},
      {path: 'ClearedDustbin', component: ClearedDustbinComponent},
      { path: 'AgencyRegistration', component:AgencyRegistrationComponent},
      {path:'DeleteCustomer/:id',component:DeleteCustomerComponent},
      {path:'updateagency/:id',component:UpdateagencyComponent},
      {path: 'ViewFoodWastes', component: ViewFoodwastesComponent}

    ]
},


//Customer 
{
  path: 'CustomerMaster', component: CustomerMasterComponent,

  children: // all the below 3 are setting as children of home.
    [
      {path: 'CustomerHome', component: CustomerHomeComponent},

      {path:'CustomerProfile',component:CustomerProfileComponent},
      {path: 'CustomerAbout', component: AboutUsComponent},

      {path:'CustomerContact',component:ContactCustomerComponent},
      {path: 'DustbinRegistration', component: DustbinRegistrationComponent},
      {path: 'CustomerComplaintRegistration', component: CustomerComplaintPortalComponent},
      {path: 'ProductView', component: ProductViewComponent},
      {path: 'ShowInterest/:id', component: ShowInterestComponent},
      {path: 'ViewMyAgency', component: ViewMyAgencyComponent},
      {path: 'ViewcustomerProfile', component: ViewcustomerprofileComponent},
      {path: 'ViewWallet', component: ViewwalletComponent},
      {path: 'ComplaintStatus', component: ComplaintStatusComponent},

      {path: 'CancelRequest', component: CancelRequestComponent},
      {path: 'CancelDustbin/:id', component: CancelDustbinComponent},
      {path: 'EditMyProfile/:id', component: EditMyProfileComponent},
      {path: 'FoodWasteRegister', component: FoodWasteRequestComponent},
      {path: 'RegisterFood', component: RegisterFoodWasteComponent},
      {path: 'Foodwaste', component: FoodWasteComponent}
    ]
},
{ path: 'ViewProfile/:id', component: ViewProfileComponent },
{path:'',redirectTo:'/Home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
