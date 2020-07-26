import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasingComponent } from './pasing/pasing.component';


const routes: Routes = [
  {
    path: '',
    component: PasingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
