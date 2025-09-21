import { Component } from '@angular/core';
import { fadeInUp, listStagger } from '../../animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [fadeInUp, listStagger] // Add animations
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  socialLinks = [
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sai-madhav-761759335/',
      color: '#0077B5'
    },
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com/kvsaimadhav',
      color: '#333333'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/kvsaimadhav',
      color: '#1DA1F2'
    },
    {
      icon: 'fab fa-stack-overflow',
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/23655247/sai-madhav',
      color: '#F48024'
    },
    {
      icon: 'fas fa-envelope',
      name: 'Email',
      url: 'mailto:kvsaimadhav@gmail.com',
      color: '#EA4335'
    }
  ];

  quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skills' },
    { name: 'Awards', path: '#awards' },
    { name: 'Contact', path: '#contact' }
  ];

  navigateTo(path: string): void {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}