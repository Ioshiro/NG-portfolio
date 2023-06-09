import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'ng-portfolio';
  hideSideMenu = true;
  isSmallScreen = false;  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router,  private responsive: BreakpointObserver) {
    this.navLinks = [
        {
            label: 'Shows',
            link: './home',
            index: 0
        }, {
            label: 'Works',
            link: './works',
            index: 1
        }, {
            label: 'Portfolio',
            link: './portfolio',
            index: 2
        },  {
          label: 'Cv',
          link: './cv',
          index: 3
        },  {
          label: 'Contacts',
          link: './contacts',
          index: 4
      }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });

  this.responsive.observe([
    Breakpoints.HandsetPortrait, 
    Breakpoints.HandsetLandscape,
    Breakpoints.TabletLandscape,     
    Breakpoints.WebLandscape,
    ])
    .subscribe(result => {

      const breakpoints = result.breakpoints;
      
      if (breakpoints[Breakpoints.HandsetPortrait] || breakpoints[Breakpoints.HandsetLandscape]) {
        console.log("screens matches TabletPortrait");
        this.isSmallScreen = true;
        this.hideSideMenu = false;
      }
      else if (breakpoints[Breakpoints.WebLandscape] || breakpoints[Breakpoints.TabletLandscape]) {
        console.log("screens matches HandsetLandscape");
        this.isSmallScreen = false;
        this.hideSideMenu = true;
      }
  });
}
toggleSidenav(sidenav: MatSidenav) {
  sidenav.toggle();
}
closeSidenav(sidenav: MatSidenav) {
  sidenav.close();
}
}
