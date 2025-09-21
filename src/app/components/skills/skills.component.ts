import { Component } from '@angular/core';
import { fadeInUp, listStagger, pulse } from '../../animations';

interface Skill {
  name: string;
  icon: string;
  items: string[];
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [fadeInUp, listStagger, pulse] // Add animations
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'AWS',
      icon: 'fab fa-aws',
      color: '#FF9900',
      items: ['EC2', 'S3', 'RDS', 'Lambda', 'IAM', 'CloudFront']
    },
    {
      name: 'Oracle Database',
      icon: 'fas fa-database',
      color: '#EA1B22',
      items: ['Administration', 'PL/SQL', 'Performance Tuning', 'Backup & Recovery']
    },
    {
      name: 'Java Technologies',
      icon: 'fab fa-java',
      color: '#007396',
      items: ['Java', 'JSP', 'Servlets', 'Spring Boot', 'Hibernate']
    },
    {
      name: 'Programming',
      icon: 'fas fa-code',
      color: '#6F42C1',
      items: ['Python', 'C++', 'JavaScript', 'TypeScript']
    },
    {
      name: 'Methodologies',
      icon: 'fas fa-tasks',
      color: '#20C997',
      items: ['Agile', 'Scrum', 'Waterfall', 'CI/CD']
    },
    {
      name: 'DevOps',
      icon: 'fas fa-cogs',
      color: '#2496ED',
      items: ['Docker', 'Jenkins', 'Git', 'Automation']
    }
  ];

  // For the circular progress indicators (just for visual effect)
  skillLevels: { [key: string]: number } = {
    'AWS': 90,
    'Oracle Database': 85,
    'Java Technologies': 88,
    'Programming': 82,
    'Methodologies': 85,
    'DevOps': 80
  };
}