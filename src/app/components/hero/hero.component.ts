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
  
  // Replace this path with your actual profile photo path
  profilePhoto: string = 'assets/images/profile-photo.jpg';
  
  // Fallback photo in case the main photo fails to load
  fallbackPhoto: string = 'assets/images/profile-fallback.jpg';

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

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.fallbackPhoto;
    
    // If fallback also fails, show the placeholder icon
    imgElement.onerror = () => {
      imgElement.style.display = 'none';
      const placeholder = imgElement.parentElement?.querySelector('.image-placeholder') as HTMLElement;
      if (placeholder) {
        placeholder.style.display = 'flex';
      }
    };
  }
}