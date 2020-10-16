import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {ItemsComponent} from './items/items.component';
import {LogoutComponent} from "./logout/logout.component";
import {RouteGaurdService} from "./services/route-guard.service";


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "index", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "welcome/:userId", component: WelcomeComponent, canActivate: [RouteGaurdService]},
  {path: "items", component: ItemsComponent, canActivate: [RouteGaurdService]},
  {path: "**", component: ErrorComponent}//per specificare i path inesistenti
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
