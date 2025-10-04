import { Component } from '@angular/core';
import { fadeInUp, bounceIn, pulse } from '../../animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [fadeInUp, bounceIn, pulse]
})
export class HeroComponent {
  
  scrollToContact(event: Event): void {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToExperience(event: Event): void {
    event.preventDefault();
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}