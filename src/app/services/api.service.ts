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
    userSignIn: `${this.baseUrl}user/signin`,
    carEdit: (slug) => `${this.baseUrl}car/edit/${slug}`,
    imageUpload: `${this.baseUrl}car/img-upload`
  }

  request(url: endpointType, method, urlParams?, payload?){
    const requestUrl = (!urlParams)? this.endpoints[url]: this.endpoints[url](urlParams);
    return !payload? 
    this.http[method](requestUrl): 
    this.http[method](requestUrl, payload);
  }

}

export type endpointType = 
  "carList" | 
  "addCar" | 
  "userSignIn" | 
  "carDetails" |
  "carEdit" |
  "imageUpload";