import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { SeccionComponent } from './pages/seccion/seccion.component';
import { ComparadorComponent } from './pages/comparador/comparador.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent},
  { path: 'seccion', component:  SeccionComponent},
  { path: 'comparador/:tags', component:  ComparadorComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'register', component:  RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
