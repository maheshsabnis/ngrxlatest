import { EditProductComponent } from './components/editproductcomponent/app.editproduct.component';
import { CreateProductComponent } from './components/createpropductcomponent/app.createproduct.component';
import { ProductListComponent } from './components/productlistcomponent/app.productlist.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainAppComponent} from './components/app.mainapp.component';


// importing object for NGRX
// StoreModule: Represent the NGRX Store
import { StoreModule } from '@ngrx/store';
// EffectsModule: monitor the execution of effects
import {EffectsModule} from '@ngrx/effects'
// simulation
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
// importing reducers
import {mainReducers} from './reducers/app.reducers';
// importing effects
import { ProductsEffect } from "./effects/app.product.effect";
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent, ProductListComponent, EditProductComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    // loading the route table at the root of the application
    AppRoutingModule, HttpClientModule,
    // configure all reducers at global level so that
    // all actions are monitored
    StoreModule.forRoot(mainReducers),
    // all effects for Async operations are initialized at root level
    EffectsModule.forRoot([ProductsEffect]),
    StoreDevtoolsModule.instrument({
      name: 'The NGRX app',
      // log the NGRX execution in browser
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [MainAppComponent]
})
export class AppModule { }
