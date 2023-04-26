import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-portfolio';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: './home',
            index: 0
        }, {
            label: 'Shows',
            link: './shows',
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
}
}
