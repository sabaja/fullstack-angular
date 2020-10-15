import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {ItemsComponent} from './items/items.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "index", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "welcome/:userId", component: WelcomeComponent},
  {path: "items", component: ItemsComponent},
  {path: "**", component: ErrorComponent}//per specificare i path inesistenti
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
