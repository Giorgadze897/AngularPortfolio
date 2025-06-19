import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { AboutmeComponent } from './Pages/aboutme/aboutme.component';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { ServicesComponent } from './Pages/services/services.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'AboutMe',component:AboutmeComponent},
  {path:'Portfolio',component:PortfolioComponent},
  {path:'Services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
