import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() {
    // Simulate a delay before setting pageLoaded to true
    setTimeout(() => {
      this.pageLoaded = true;
    }, 2000000);
  }
  pageLoaded = false;

  isNavbarOpen = false;
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
