import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component'; 
import { HomeComponent } from './home/home.component'; 
const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'shows', component:  ShowsComponent},
  { path: 'portfolio', component:  PortfolioComponent},
  { path: 'cv', component: CvComponent},
  { path: 'contacts', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
