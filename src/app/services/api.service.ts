import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://test-marketplace-api.herokuapp.com/api/';
  constructor(
    public http: HttpClient
  ) { }

  endpoints: any = {
    carList: `${this.baseUrl}car/list`,
    addCar: `${this.baseUrl}car/add-car`,
    carDetails: (slug) => `${this.baseUrl}car/${slug}`,
    userSignIn: `${this.baseUrl}car/signin`
  }

  // getCarList(){
  //   return this.http.get(`${this.baseUrl}car/list`);
  // }

  // addCar(carDetails){
  //   return this.http.post(`${this.baseUrl}car/add-car`, carDetails);
  // }

  request(url: endpointType, method, urlParams?, payload?){
    const requestUrl = (!urlParams)? this.endpoints[url]: this.endpoints[url](urlParams);
    
    
    return !payload? 
    this.http[method](requestUrl): 
    this.http[method](requestUrl, payload);
  }

}

export type endpointType = "carList" | "addCar" | "userSignIn" | "carDetails";