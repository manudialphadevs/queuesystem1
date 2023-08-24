import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Customer1Component } from './customer1/customer1.component';
import { Customer2Component } from './customer2/customer2.component';





const routes: Routes = [
  {
    path: '',
    component:MainComponent,
    data: {
      title: "Talemein"
    }
  },
  
  {
    path: 'customer1/:data',
    component:Customer1Component,
    data: {
      title: "Talemein"
    }
  },
  {
    path: 'customer2/:data',
    component:Customer2Component,
    data: {
      title: "Talemein"
    }
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
