import { IProductState,initialProductState } from "./app.product.state";

// the store object that will have schema and intial value
// 'products' is the name of the store that will contain
// all data
export interface IAppProductState{
  products: IProductState
}
