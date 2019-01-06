import { AuthGuard } from './auth.gaurd';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { NavComponent } from './nav/nav.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'nav', component:NavComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent
/*  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]
*/}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
