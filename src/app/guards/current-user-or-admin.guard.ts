import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserOrAdminGuard implements CanActivate {

  constructor(
    public storageService: StorageService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.storageService.get('user')?._id === route.paramMap.get('id') ||
      this.storageService.get('user')?.role === 'admin';
  }
  
}
