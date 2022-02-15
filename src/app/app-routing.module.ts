import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

const routes: Routes = [
  { path: "home", component: FormComponent },
  { path: "user", component: RepositoriesComponent },
  { path: "**", component: NotFoundComponent },

  { path: 'lemmymwaura.github.io/GithubSearch-App', redirectTo:"/home", pathMatch:"full"},
  { path: 'quotesearchappbylemmymwaura.netlify.app', redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }