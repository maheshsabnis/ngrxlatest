import { selectProductList } from './../../selectors/app.product.selector';
import { select } from '@ngrx/store';
import { Router } from "@angular/router";
import { IAppProductState } from './../../state/app.state';
import { Store } from '@ngrx/store';
import { ProductInfo } from './../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';
import { ProductActions } from 'src/app/actions';


@Component({
  selector: 'app-productlist-component',
  templateUrl: './app.productlist.view.html'
})
export class ProductListComponent implements OnInit {
  product:ProductInfo;
  products: Array<ProductInfo>;
  coloumnHeaders:Array<string>;

// use the selector to read data
// select(selectProductList), will be used to execute the
// selector to read data from store
  products$ =  this._store.pipe(select(selectProductList));

  // inject the store aka the subscription
  constructor(private _store:Store<IAppProductState>,
     private router:Router) {
    this.product = new ProductInfo(0,'','','','','',0);
    this.products = new Array<ProductInfo>();
    this.coloumnHeaders = new Array<string>();
  }

  ngOnInit(): void {

    // if the data is present in store, read data from the Store and show on the UI else
    // HINT: Create a Selector
    // fetch data by dispatching the action

    this.coloumnHeaders = Object.keys(this.product);
    // dispatch the action to receive the data
    this._store.dispatch(ProductActions.getProducts())
  }

  navigateToEdit(id:number):void {
     // router to edit component with 'id' as parameter
     this.router.navigate(['edit', id]);
  }
}
