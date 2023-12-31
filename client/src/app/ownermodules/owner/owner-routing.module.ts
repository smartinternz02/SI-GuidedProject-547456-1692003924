import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FlightsComponent } from './flights/flights.component';
const routes: Routes = [
  {path:'',component:HomeComponent,
    children: [
      {
        path:'bookings',
        component:BookingsComponent
      },
      {
        path:'flights',
        component:FlightsComponent
      },
      {
        path: '', redirectTo: '/owner/flights', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
