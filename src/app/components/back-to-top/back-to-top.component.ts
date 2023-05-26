import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleBackToTopVisibility();
  }

  toggleBackToTopVisibility() {
    const backToTopElement = document.getElementById('back-top');
    if (backToTopElement) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop > 100) {
        backToTopElement.style.display = 'block';
      } else {
        backToTopElement.style.display = 'none';
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
