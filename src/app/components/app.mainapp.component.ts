import { Component, OnInit } from '@angular/core';

// to query to route table loaded on Root, use the [routerLink] attribute directive
// on '<a></a>' tag and use <router-outlet> to load the navigated component
@Component({
  selector: 'app-mainapp-component',
  template: `
    <h1>The NGRX Application</h1>
    <table class="table table-bordered table-striped">
        <tr>
          <td>
            <a [routerLink]="['']">Product List</a>
          </td>
          <td>
            <a [routerLink]="['create']">Create Component</a>
          </td>
        </tr>
    </table>
    <hr>
    <router-outlet></router-outlet>

  `
})

export class MainAppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
