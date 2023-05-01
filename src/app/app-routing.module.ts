import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component'; 
import { HomeComponent } from './home/home.component'; 
import { DallaTerraAlCieloComponent } from './dalla-terra-al-cielo/dalla-terra-al-cielo.component';
const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'works', component:  WorksComponent},
  { path: 'portfolio', component:  PortfolioComponent},
  { path: 'cv', component: CvComponent},
  { path: 'contacts', redirectTo: 'home', pathMatch: 'full'},
  { path: 'dalla-terra-al-cielo', component: DallaTerraAlCieloComponent},
  { path: '**', redirectTo: 'home' }
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
