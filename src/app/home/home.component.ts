import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Delay the scroll to ensure that the page is fully loaded
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        // Scroll to the "About" section smoothly
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust delay if necessary
  }
}
