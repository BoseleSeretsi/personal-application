import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AloginComponent } from './admin/alogin/alogin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'product-details/:id', component: ProductdetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'alogin', component: AloginComponent },
  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
