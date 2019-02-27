import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageDetailComponent } from './language-detail/language-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'language/:id', component: LanguageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
