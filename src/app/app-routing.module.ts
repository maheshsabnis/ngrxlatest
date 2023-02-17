import { EditProductComponent } from './components/editproductcomponent/app.editproduct.component';
import { CreateProductComponent } from './components/createpropductcomponent/app.createproduct.component';
import { ProductListComponent } from './components/productlistcomponent/app.productlist.component';
import { NgModule } from '@angular/core';
// RouterModule, the class that provides platform for Routing for Single Page Application
// Routes: the class representing the Route tabel as collection of 'Route' class
import { RouterModule, Routes } from '@angular/router';

// Route table and entry in table id 'Route' object with following properties
// path: the url of the route to navigate to
// component: the component to be loaded
// children: array of type 'Route' tha represent the child routing
// canActivate, used for Role-Based-Security,aka routing based on logic user's role
// data: the object that contains the role information  for routing
// redirectTo: If the 'path' for route is not found then by default redirect to specific route
const routes: Routes = [
  {path:'',component: ProductListComponent},
  {path: 'create', component:CreateProductComponent},
  // the Rputer with Parameter
  {path: 'edit/:id', component:EditProductComponent},
  {path: '**', redirectTo:'' } // if path not found then redirect to the default path i,e. '' means ProductListComponent
];

@NgModule({
  // the route table is registered at root of the application where the
  // current NgModule is imported. In this case it will be loaded on
  // root of the AppModule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
