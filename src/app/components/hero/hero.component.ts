import { Component } from '@angular/core';
import { fadeInUp, bounceIn, pulse } from '../../animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [fadeInUp, bounceIn, pulse] // Add animations
})
export class HeroComponent {}