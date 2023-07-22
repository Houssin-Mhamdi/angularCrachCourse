import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostsComponent } from './addposts/addposts.component';
import { ListesComponent } from './listes/listes.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: "",redirectTo:"/add",pathMatch:"full"},
  { path: "add",component: AddpostsComponent},
  { path: "list",component: ListesComponent},
  { path: "**",component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
