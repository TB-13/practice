import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavModule } from './components/sidenav/sidenav.module';
import {LoginComponent} from "./pages/login/login.component";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m=>m.DashboardModule
          )
      },
      {
        path: 'demandes',
        loadChildren: () =>
          import('./pages/demandes/demandes.module').then(
            m=>m.DemandesModule
          )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
