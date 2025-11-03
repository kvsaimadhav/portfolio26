import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  description: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule]
})
export class EducationComponent {
  educationList: Education[] = [
    {
      degree: 'Masters Degree',
      institution: 'Central Michigan University',
      duration: '2020 - 2021',
      score: '3.93/4 CGPA',
      description: 'Master of Science in Computer Science with specialization in Cloud Computing and Distributed Systems'
    },
    {
      degree: 'Bachelors Degree',
      institution: 'BITS Pilani, Hyderabad',
      duration: '2014 - 2018',
      score: '7.71/10 CGPA',
      description: 'Bachelor of Technology in Electronics and Communication Engineering with focus on Software Development'
    },
    {
      degree: 'Intermediate',
      institution: 'SR Educational Center',
      duration: '2012 - 2014',
      score: '97.8%',
      description: 'Mathematics, Physics, Chemistry with Computer Science as additional subject'
    },
    {
      degree: 'Class X',
      institution: 'Warangal Public School',
      duration: '2011 - 2012',
      score: '95%',
      description: 'Secondary School Education with distinction in Mathematics and Science'
    }
  ];

  getProgressWidth(score: string): number {
    // Extract numeric value from score string
    const numericScore = parseFloat(score.replace(/[^\d.]/g, ''));
    
    if (score.includes('%')) {
      return numericScore; // Percentage scores
    } else if (score.includes('CGPA')) {
      return (numericScore / 10) * 100; // Convert CGPA to percentage
    } else {
      return 85; // Default value
    }
  }
}