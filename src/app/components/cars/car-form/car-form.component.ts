import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../../../models/car';
import { StorageService } from '../../../services/storage.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  carForm: FormGroup;
  carList: Car[];
  carSlug = '';
  carDetails: Car;

  constructor(
    public formBuilder: FormBuilder,
    public storageService: StorageService,
    public activatedRoute: ActivatedRoute,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.carSlug = this.activatedRoute.snapshot.paramMap.get('slug');

    this.carForm = this.formBuilder.group({
      ref:['', Validators.required],
      name:['', Validators.required],
      body_type:['', Validators.required],
      engine:['', Validators.required],
      mileage:['', Validators.required],
      fuel_type:['', Validators.required],
      transmission:['', Validators.required],
      door_count:['', Validators.required],
      image_car:['', Validators.required],
      price:['', Validators.required],
      description:['', Validators.required],
      desc_excerpt:['', Validators.required],
      date_online:['', Validators.required],
      date_offline:['', Validators.required],
      currency:['', Validators.required],
      contact_phone:['', Validators.required],
      contact_email:['', Validators.required]
    });

    if(this.carSlug)
    {
      this.getCar();
    }
  }

  addCar(){
    this.apiService.request('addCar', 'post', null, this.carForm.value).subscribe(result => {
      Swal.fire('Success', 'result', 'success');
    });
  }

  getCar(){
    this.apiService.request('carDetails', 'get', this.carSlug).subscribe(result=>{
      this.carForm.patchValue(result);
    });
  }
}
