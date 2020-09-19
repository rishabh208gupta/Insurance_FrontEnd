import { NgModule, Renderer2 } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from '../app/admin-page/admin-page.component';
import{ CalculatePremiumComponent } from '../app/calculate-premium/calculate-premium.component';
import { ClaimComponent } from '../app/claim/claim.component';
import { ForgotPasswordComponent } from '../app/forgot-password/forgot-password.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { LoginComponent } from '../app/login/login.component';
import { NewPolicyDetailsComponent } from '../app/new-policy-details/new-policy-details.component';
import { RegisterComponent } from '../app/register/register.component';
import { RenewPolicyComponent } from '../app/renew-policy/renew-policy.component';
import { ResetPasswordComponent } from '../app/reset-password/reset-password.component';
import { UserPageComponent } from '../app/user-page/user-page.component';
import { VehicleDetailsComponent } from '../app/vehicle-details/vehicle-details.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path:'admin-page', component: AdminPageComponent},
  { path:'calculate-premium', component: CalculatePremiumComponent },
  { path: 'claim', component:ClaimComponent},
  { path: 'forgot-password', component:ForgotPasswordComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'login', component:LoginComponent},
  { path:'new-policy', component:NewPolicyDetailsComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'renew-policy', component:RenewPolicyComponent},
  { path:'reset-password', component:ResetPasswordComponent},
  { path:'user-page', component:UserPageComponent},
  { path:'vehicle-details', component:VehicleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
