import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _currentTheme = '';
  public outsetTheme: Subject<any> = new Subject();

  constructor(
    public storageService: StorageService
  ) { }

  get theme(){
    return this.storageService.get('theme');
  }
  set theme(value){
    this._currentTheme = value;
    this.outsetTheme.next(value);
    console.log(`Set theme to: ${value}`);
    this.storageService.set('theme', value);
  }
}
