import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PorfolioContainerComponent } from './porfolio-container/porfolio-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'viljo', pathMatch: 'full' },
  { path: 'viljo', component: PorfolioContainerComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
