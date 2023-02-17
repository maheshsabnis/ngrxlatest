import { ProductInfo } from './../models/app.productinfo.model';
// define an interface that will provide an idea of schema of dtaa stored in
// store
// define schema
export interface IProductState {
  products:ProductInfo[]; // will store data from read oepration
  product:ProductInfo; // the object for Write Operations (Create/Update)
  selectedProduct:ProductInfo; // query the store for a specific record
}
// define an initial value
export const initialProductState:IProductState = {
  products:[],
  product:new ProductInfo(0,'','','','','',0),
  selectedProduct:new ProductInfo(0,'','','','','',0)
}
