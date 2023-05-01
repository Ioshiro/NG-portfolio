import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  navLinks: any[];
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Dalla Terra al Cielo, 2023',
            img: 'assets/locandina.jpg',
            link: './dalla-terra-al-cielo',
            index: 0
        }
    ];
  };
}
