// ActionReducerMap, combine all reducers are return them as a single reducer object
import {ActionReducerMap } from "@ngrx/store";
// initial state schema
import { IAppProductState } from "./../state/app.state";
// reducers
import { reducer } from "./app.product.reducers";

export const mainReducers: ActionReducerMap<IAppProductState,any> = {
  products: reducer  // all reducers will be referres as products to read/write operations on reh store
}
