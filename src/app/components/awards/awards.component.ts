import { Component } from '@angular/core';
import { fadeInUp, listStagger } from '../../animations';

interface Award {
  title: string;
  organization: string;
  year: number;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [],
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  animations: [fadeInUp, listStagger] // Add animations
})
export class AwardsComponent {
  awards: Award[] = [
    {
      title: 'IT Olympiad Finalist',
      organization: 'National Level Competition',
      year: 2017,
      description: 'Recognized as a finalist in the national IT Olympiad among thousands of participants.',
      icon: 'fas fa-trophy',
      color: '#FFD700'
    },
    {
      title: 'BOSM Silver Medal',
      organization: 'Carrom Competition',
      year: 2016,
      description: 'Secured silver medal in carrom at the annual sports festival.',
      icon: 'fas fa-medal',
      color: '#C0C0C0'
    },
    {
      title: 'PMSS Awardee',
      organization: 'Merit Scholarship',
      year: 2014,
      description: 'Awarded prestigious scholarship for academic excellence and achievements.',
      icon: 'fas fa-award',
      color: '#CD7F32'
    },
    {
      title: 'INSPIRE Scholarship',
      organization: 'Department of Science & Technology',
      year: 2014,
      description: 'Received scholarship from Government of India for excellence in science studies.',
      icon: 'fas fa-graduation-cap',
      color: '#4f46e5'
    }
  ];
}