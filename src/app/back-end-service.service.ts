import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {

  constructor(private http:HttpClient) { }

  GetweatherData() {
    return this.http.get<any>('https://localhost:7124/WeatherForeCast')
  }
  insertAgency(data: any) {
    this.http.post("https://localhost:7124/api/Agency/insertAgency",data).toPromise().then(result => {alert("Registered Successfully!"),window.location.href='/AdminMaster/AgencyRegistration'})
    
  }
  insertEwaste(data: any) {
    this.http.post("https://localhost:7124/api/Ewaste/insertEwaste",data).toPromise().then(result => {alert("Registered Successfully!"),window.location.href='/CustomerMaster/DustbinRegistration'})
  }
  insertproductdata(data: any) {

    this.http.post("https://localhost:7124/api/Product/insertproduct", data).toPromise().then(result => {alert("Registered Successfully!"),window.location.href='/AdminMaster/ProductRegistration'})

   
}
insertFoodWaste(data: any) {
  this.http.post("https://localhost:7124/api/foodwaste/insertFoodWaste",data).toPromise().then(result => {alert("Registered Successfully!"),window.location.href='/CustomerMaster/Foodwaste'}) 
}

  insertCustomer(data: any) {
    this.http.post("https://localhost:7124/api/Customer/insertCustomer",data).toPromise().then(result => {alert("Registered Successfully!"),window.location.href='/GuestMaster/CustomerRegistration'}) 
  }
  insertComplaints(data: any) {
    this.http.post("https://localhost:7124/api/Complaint/insertComplaints",data).toPromise().then(result => {alert("Registered Successfully!"),window.location.href='/CustomerMaster/CustomerComplaintRegistration'}) 
  }
  GetAgencydata(data:string)
  {
return this.http.get("https://localhost:7124/api/Agency_login/GetAgencyId?username="+data)
  }
  GetCustomerdata(data:string)
  {
return this.http.get("https://localhost:7124/api/Agency_login/GetCustomerId?username="+data)
  }
  getAgency() {

    return this.http.get<any>('https://localhost:7124/api/Agency/ViewAgency')
    
    }
    getProduct() {

      return this.http.get<any>('https://localhost:7124/api/Product/ViewProduct')
      
      }
      viewfoodwaste() {

        return this.http.get<any>('https://localhost:7124/api/foodwaste/viewfoodwaste')
        
        }
      ViewInterestedProduct() {

        return this.http.get<any>('https://localhost:7124/api/Product/ViewInterestedProduct')
        
        }
    getComplaints() {

      return this.http.get<any>('https://localhost:7124/api/Complaint/ViewComplaints')
      
      }
    getEwaste() {

      return this.http.get<any>('https://localhost:7124/api/Ewaste/viewEwaste')
      
      }
      viewEwasteDetails() {

        return this.http.get<any>('https://localhost:7124/api/Ewaste/viewEwasteDetails')
        
        }
       getCustomer() {

      return this.http.get<any>('https://localhost:7124/api/Customer/ViewCustomer')
      
      }
      ViewMyCustomer(aid:any) {

        return this.http.get<any>('https://localhost:7124/api/Agency/ViewMyCustomer?id='+aid)
        
        }
        ViewMyWallet(aid:any) {

          return this.http.get<any>('https://localhost:7124/api/Customer/ViewMyWallet?id='+aid)
          
          }
          ViewMyRequests(aid:any) {

            return this.http.get<any>('https://localhost:7124/api/Customer/ViewMyRequests?id='+aid)
            
            }
          ViewMyComplaints(aid:any) {

            return this.http.get<any>('https://localhost:7124/api/Customer/ViewMyComplaints?id='+aid)
            
            }
        ViewAgencyProfile(aid:any) {

          return this.http.get<any>('https://localhost:7124/api/Agency/ViewAgencyProfile?id='+aid)
          
          }
          ViewCustomerProfile(aid:any) {

            return this.http.get<any>('https://localhost:7124/api/Customer/ViewCustomerProfile?id='+aid)
            
            }
        ViewMyAgency(aid:any) {

          return this.http.get<any>('https://localhost:7124/api/Customer/ViewMyAgency?id='+aid)
          
          }

        ViewMyCustomerRequests(aid:any) {

          return this.http.get<any>('https://localhost:7124/api/Agency/ViewMyCustomerRequests?id='+aid)
          
          }
          
          ViewMyCustomerFoodWasteRequests(aid:any) {

          return this.http.get<any>('https://localhost:7124/api/Agency/ViewMyCustomerFoodWasteRequests?id='+aid)
          
          }
          ViewMyCustomerComplaints(aid:any) {

            return this.http.get<any>('https://localhost:7124/api/Agency/ViewMyCustomerComplaints?id='+aid)
            
            }
      
      getagencybaseid(agency_id: any) 
      {
       return this.http.get<any>('https://localhost:7124/api/Agency/ViewAgencyByid/'+ agency_id)
     }
     getDustbinbaseid(ewaste_id: any) 
     {
      return this.http.get<any>('https://localhost:7124/api/Ewaste/ViewDustbinByid/'+ ewaste_id)
    }
     getProductbaseid(product_id: any) 
     {
      return this.http.get<any>('https://localhost:7124/api/Product/ViewProductByid/'+ product_id)
    }
     getcustomerbaseid(customer_id: any) 
     {
      return this.http.get<any>('https://localhost:7124/api/Customer/ViewCustomerByid/'+ customer_id)
    }
     getComplaintsbaseid(agency_id: any) 
      {
       return this.http.get<any>('https://localhost:7124/api/Complaint/ViewComplaintsByid/'+ agency_id)
     }
     ViewfoodwasteByid(fud_id: any) 
     {
      return this.http.get<any>('https://localhost:7124/api/foodwaste/ViewfoodwasteByid/'+ fud_id)
    }
     UpdateAgency(data:any)
   
   {
   
     this.http.post('https://localhost:7124/api/Agency/updateAgency',data).toPromise().then(result => {alert("Updated Successfully!"),window.location.href='/AgencyMaster/ViewProfile'})
       }
       UpdateAgencyid(data:any)
   
       {
       
         this.http.post('https://localhost:7124/api/Agency/updateAgency',data).toPromise().then(result => {alert("Updated Successfully!"),window.location.href='/AdminMaster/viewagency'})
           }
       updateDustbin(data:any)
   
       {
       
         this.http.post('https://localhost:7124/api/Ewaste/updateDustbin',data).toPromise().then(result => {alert("Updated Successfully!"),window.location.href='/AgencyMaster/ViewMyCustomerRequests'})
           }
           updateDustbinss(data:any)
   
           {
           
             this.http.post('https://localhost:7124/api/Ewaste/updateDustbin',data).toPromise().then(result => {alert("Updated Successfully!")})
               }
           UpdateDustbins(data:any)
   
           {
           
             this.http.post('https://localhost:7124/api/Ewaste/updateDustbin',data).toPromise().then(result => {alert("E-waste Request Successfully Cancelled!"),window.location.href='/CustomerMaster/CancelRequest'})
               }
       UpdateProduct(data:any)
   
       {
       
         this.http.post('https://localhost:7124/api/Product/updateProduct',data).toPromise().then(result => {alert("Interest Successfully Registered!"),alert("Our team will contact you soon!"),window.location.href='/CustomerMaster/ProductView'})
           }
           UpdateProducts(data:any)
   
       {
       
         this.http.post('https://localhost:7124/api/Product/updateProduct',data).toPromise().then(result => {alert("Successfully Updated!"),window.location.href='/AdminMaster/ViewProducts'})
           }
       UpdateCustomer(data:any)
   
   {
   
     this.http.post('https://localhost:7124/api/Customer/updateCustomer',data).toPromise().then(result => {alert("Updated Successfully!"),window.location.href='/AdminMaster/viewcustomer'})
       }
       UpdateCustomerId(data:any)
   
       {
       
         this.http.post('https://localhost:7124/api/Customer/updateCustomer',data).toPromise().then(result => {alert("Updated Successfully!"),window.location.href='/CustomerMaster/ViewcustomerProfile'})
           }
       UpdateAgencies(data:any)
   
       {
       
         this.http.post('https://localhost:7124/api/Agency/updateAgency',data).toPromise().then(result => {alert("Updated Successfully!"),window.location.href='/AdminMaster/viewagency'})
           }
      updateComplaints(data:any)
   
       {
       
         this.http.post('https://localhost:7124/api/Complaint/updateComplaints',data).toPromise().then(result => {alert("Updated Successfully!"),window.location.href='/AdminMaster/viewcustomerComplaints'})
           }
       DeleteAgency(data:any)
   
       {
       
         this.http.post('https://localhost:7124/api/Agency/deleteAgency',data).toPromise().then(result => {alert("Deleted Successfully!"),window.location.href='/AdminMaster/viewagency'})
           }
           deleteCustomer(data:any)
   
           {
           
             this.http.post('https://localhost:7124/api/Customer/deleteCustomer',data).toPromise().then(result => {alert("Deleted Successfully!"),window.location.href='/AdminMaster/viewcustomer'})
               }
               deleteFoodwaste(data:any)
   
               {
               
                 this.http.post('https://localhost:7124/api/foodwaste/deleteFoodwaste',data).toPromise().then(result => {alert("Deleted Successfully!"),window.location.href='/AgencyMaster/ViewFoodWaste'})
                   }
           DeleteProduct(data:any)
   
           {
       
            this.http.post('https://localhost:7124/api/Product/deleteProduct',data).toPromise().then(result => {alert("Deleted Successfully!"),window.location.href='/AdminMaster/ViewProducts'})
              }
              ConfirmProductDelivery(data:any)
   
              {
          
               this.http.post('https://localhost:7124/api/Product/deleteProduct',data).toPromise().then(result => {alert("Product Delivery Confirmed!"),window.location.href='/AdminMaster/ViewIntersetedProducts'})
                 }
          //  login(loginInfo: Array<string>) 
          //  {
      
          //       return this.http.post("https://localhost:7124/api/Agency_login/login", {
              
          //           username: loginInfo[0],
                
          //           password: loginInfo[1],
              
          //         },
              
          //           {
              
          //             responseType: 'text',
              
          //           });
              
          //       }
          loginuser(loginInfo: Array<string>) {

            return this.http.post("https://localhost:7124/api/Agency_login/login", {
        
              agency_username: loginInfo[0],
        
              agency_password: loginInfo[1],
        
            },
        
              {
        
                responseType: 'text',
        
              });
        
          }
          logincustomer(loginInfo: Array<string>) {

            return this.http.post("https://localhost:7124/api/Agency_login/logincustomer", {
        
            customer_username: loginInfo[0],
        
            customer_password: loginInfo[1],
        
            },
        
              {
        
                responseType: 'text',
        
              });
        
          }
}
