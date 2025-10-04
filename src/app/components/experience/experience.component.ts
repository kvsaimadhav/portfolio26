import { Component } from '@angular/core';
import { fadeInUp, listStagger } from '../../animations';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  current?: boolean;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [fadeInUp, listStagger] // Add animations
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Ekluvya',
      position: 'Senior Software Developer',
      period: 'Dec 2024 – Present',
      icon: 'fas fa-laptop-code',
      color: '#ff6b6b',
      description: [
        'Lead a team of 15 software developers, mentoring and guiding them through full SDLC',
        'Act as AWS system administrator, managing cloud infrastructure, ensuring scalability, security, and cost optimization',
        'Successfully delivered in-house projects for product-based companies, meeting tight deadlines and high-quality standards',
        'Spearheaded automation and CI/CD pipeline integration, improving deployment efficiency by 30%',
        'Collaborated with cross-functional teams to align software solutions with client business needs'
      ],
      current: true
    },
    {
      company: 'Neemus Software Solutions Pvt. Ltd.',
      position: 'Software Engineer',
      period: 'Aug 2023 – Sep 2024',
      icon: 'fas fa-shield-alt',
      color: '#339af0',
      description: [
        'Contributed to defense-related projects at LRDE (Electronics & Radar Development Establishment) and ADA (Aeronautical Development Agency)',
        'Developed software modules adhering to industrial standards and rigorous defense project guidelines',
        'Led a team of 4 members at ADA, ensuring on-time delivery and compliance with project specifications',
        'Successfully completed 2 key projects, earning formal appreciation from project mentors and stakeholders',
        'Maintained detailed technical documentation to support future maintenance and audits'
      ]
    },
    {
      company: 'DRDO - DRDL',
      position: 'Server Engineer',
      period: 'Aug 2022 – Aug 2023',
      icon: 'fas fa-database',
      color: '#51cf66',
      description: [
        'Maintained and optimized complex Oracle Databases, ensuring uninterrupted access for 50+ end-users across mission-critical projects',
        'Developed a new Java/JSP-based user interface, modernizing legacy systems while retaining seamless integration with Oracle Forms & Reports',
        'Ensured smooth database operations, security, and backup management to support defense project requirements',
        'Mentored 3 team members, and trained 1 apprentice on the QA module, ensuring future scalability and KT',
        'Collaborated with cross-functional stakeholders to align system performance with organizational needs'
      ]
    }
  ];
}