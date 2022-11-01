import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropheciesComponent } from './prophecies/prophecies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProphecyDetailComponent } from './prophecy-detail/prophecy-detail.component';
import { AdminpropheciesComponent } from './adminprophecies/adminprophecies.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'prophecies', component: PropheciesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // changed the below from dashboard to prophecies bc it looks better lol
  { path: '', redirectTo: '/prophecies', pathMatch: 'full' },
  { path: 'detail/:id', component: ProphecyDetailComponent },
  { path: 'adminprophecies', component: AdminpropheciesComponent },
  {path: 'admin-detail/:id', component: AdminDetailComponent},
  {path: 'cart/:username', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }