import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '',pathMatch:'full', component:LoginComponent},
  {path: 'posts', component:AdminLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
