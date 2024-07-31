import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {path:'ajout' , component:AjoutComponent},
  {path:'list' , component:ListComponent},
  {path:'app' , component:FirstComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
