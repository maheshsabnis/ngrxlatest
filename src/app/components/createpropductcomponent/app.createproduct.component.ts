import { ProductActions } from 'src/app/actions';
import { IAppProductState } from './../../state/app.state';
import { Store } from '@ngrx/store';
// Router: the class that provides a method to execute
// explictit navigation using  'navigate()' method
import { Router } from "@angular/router";
import { Categories, Manufacturers } from './../../models/app.constants';
import { ProductInfo } from './../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createproduct-component',
  templateUrl: 'app.createproduct.view.html'
})
export class CreateProductComponent implements OnInit {
  product:ProductInfo;
  categories = Categories;
  manufacturers = Manufacturers;
  // inject the store
  //  inject the Router class
  // the Router class will be resolved by the 'RouterModule' that is
  // imported by the @NgModule in it 'impports:[]'
  constructor(private _store: Store<IAppProductState>, private router:Router) {
    this.product = new ProductInfo(0,'','','','','',0);
  }

  ngOnInit(): void { }

  clear():void {
    this.product = new ProductInfo(0,'','','','','',0);
  }
  save():void {
    // displatch the action to create product
    this._store.dispatch(ProductActions.postProduct({payload:this.product}));
    // wait for 4 seconds and navigate to the ProductList
    setTimeout(()=>{
      this.router.navigate(['']);
    },4000);

  }
}
