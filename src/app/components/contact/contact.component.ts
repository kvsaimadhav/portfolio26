import { Component } from '@angular/core';
import { fadeInUp, listStagger, pulse } from '../../animations';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInUp, listStagger, pulse] // Add animations
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91-6360591271',
      link: 'tel:+916360591271',
      color: '#25D366'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'kvsaimadhav@gmail.com',
      link: 'mailto:kvsaimadhav@gmail.com',
      color: '#EA4335'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Hi-Tech City, Hyderabad, India',
      link: 'https://maps.google.com/?q=Hi-Tech+City,Hyderabad,India',
      color: '#4285F4'
    }
  ];

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
    }
  ];
}