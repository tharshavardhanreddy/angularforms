import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppformComponent } from './appform/appform.component';


const routes: Routes = [
  {path : '', component: AppformComponent},
  {path : 'appform', component: AppformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
