import { Component } from '@angular/core';
import { fadeInUp, listStagger } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInUp, listStagger] // Add animations
})
export class AboutComponent {}