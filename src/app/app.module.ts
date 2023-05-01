import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list'; 
import {MatTabsModule} from '@angular/material/tabs';
import { WorksComponent } from './works/works.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component';
import { TestComponent } from './test/test.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DallaTerraAlCieloComponent } from './dalla-terra-al-cielo/dalla-terra-al-cielo.component'; 
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    PortfolioComponent,
    CvComponent,
    TestComponent,
    HomeComponent,
    DallaTerraAlCieloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
