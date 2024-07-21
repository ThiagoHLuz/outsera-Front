import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ListComponent} from "./pages/list/list.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
