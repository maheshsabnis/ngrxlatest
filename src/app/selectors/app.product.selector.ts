import { IProductState } from './../state/app.product.state';
import { createSelector } from '@ngrx/store';
import { IAppProductState } from './../state/app.state';
// create selectors to read data from store
// thios is like 'select' query

// define a subscription for the state in store
// top read data
// state.products si actually a store
 const selectProducts = (state: IAppProductState) => state.products;

export const selectProductList = createSelector(
  selectProducts, // the store subscription
  (state:IProductState) => state.products // the data to be selecetd fromthe store
);

export const selectProduct = createSelector(
  selectProducts,
  (state: IProductState) => state.selectedProduct // write query type logic (state, id)=> state.products[i].ProdutcId ==id
);
