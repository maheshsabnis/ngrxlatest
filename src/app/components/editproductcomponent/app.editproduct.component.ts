import { Observable } from 'rxjs';
import { ProductActions } from 'src/app/actions';
import { IAppProductState } from './../../state/app.state';
import { select, Store } from '@ngrx/store';
// Router: the class that provides a method to execute
// explictit navigation using  'navigate()' method
// ActivatedRoute: The class that is used to suvscribe to the
// Route URL and read the route parameter
import { Router, ActivatedRoute } from "@angular/router";
import { Categories, Manufacturers } from './../../models/app.constants';
import { ProductInfo } from './../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';
import { selectProduct, /*selectProductList, selectProducts*/ } from 'src/app/selectors/app.product.selector';

@Component({
  selector: 'app-editproduct-component',
  templateUrl: 'app.editproduct.view.html'
})
export class EditProductComponent implements OnInit {
  product:ProductInfo;
  categories = Categories;
  manufacturers = Manufacturers;
  product$: Observable<ProductInfo>;

  // inject the store
  //  inject the Router and ActivatedRoute classes
  // the Router, ActivatedRoute classes will be resolved by the 'RouterModule' that is
  // imported by the @NgModule in it 'impports:[]'
  constructor(private _store: Store<IAppProductState>, private router:Router,
     private act:ActivatedRoute) {
    this.product = new ProductInfo(0,'','','','','',0);
    this.product$ = new Observable<ProductInfo>();
  }

  // subscribe to the URL to read the Route parameter
  // subscribe only one to the route parameter
  ngOnInit(): void {

      this.act.params.subscribe((params)=>{
        this.product.ProductRowId = params['id']; // id is a parameter name

        this._store.dispatch(ProductActions.getProductById({payload : this.product.ProductRowId}));
        this.product$ =  this._store.pipe(select(selectProduct));
        this.product$.subscribe((p) => {
          this.product =p;
        });
      });
      // load the record to be edited from the store HINT: Create a selector
      // OR
      // May be by making call to HTTP to read tge record by Id
  }

  clear():void {
    this.product = new ProductInfo(0,'','','','','',0);
  }
  save():void {
     // dispatch the action for the edit
     alert(`Save Edit ${JSON.stringify(this.product)}`);
     // navigate to  List of Success
     // once the action is disp;atched navigate to Product List
     this._store.dispatch(ProductActions.putProduct({product:this.product}));
     setTimeout(()=>{
       this.router.navigate(['']);
     }, 4000);
  }
}
