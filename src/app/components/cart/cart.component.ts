import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Cart from '../../store/actions/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Observable<Array<any>>;

  constructor(
    private store: Store<any>
  ) {
   }

  ngOnInit(): void {
    this.cartList = this.store.select('cart');
  }

  removeFromCart(item){
    this.store.dispatch(new Cart.RemoveCar(item));
  }

}
