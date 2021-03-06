import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path: "home", component: FormComponent },
  { path: "user", component: RepositoriesComponent },

  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }