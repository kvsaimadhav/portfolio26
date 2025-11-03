import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: 'masters' | 'github' | 'academic' | 'employment';
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status: 'completed' | 'in-progress';
}

@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  imports: [CommonModule]
})
export class ProjectComponent {
  projects: Project[] = [
    {
      title: 'Angular Portfolio Website',
      category: 'github',
      description: 'Personal portfolio website built with Angular and modern CSS, featuring responsive design and smooth animations.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      githubUrl: 'https://github.com/kvsaimadhav/portfolio26',
      liveUrl: 'https://saimadhav.netlify.app',
      status: 'in-progress'
    },
    {
      title: 'MAssachussets Virtual Epideomological Network (SSG LLC USA) Project',
      category: 'employment',
      description: 'Worked for about 1 Quarter, MAVEN reveals the Diseases to be diagnosed by Medical Representives and Work flows in the process of teatments recording software.',
      technologies: ['AWS Workspace', 'Java', 'JSP', 'Struts', 'Cloud Watch', 'Oracle SQL'],
      status: 'completed'
    },
    {
      title: 'Server Maintenance for Oracle Database (DRDL DRDO India)',
      category: 'employment',
      description: 'Worked for about 1 year, Server Maintenance work consits of Restoring/ Daily Backups of Software and also upgrading the software to Java/JSP Clients with servers connection thorugh OJDBC Drivers.',
      technologies: ['Oracle DB', 'Java', 'JSP', 'Professional Meetings'],
      status: 'completed'
    },
    {
      title: 'QT C++ Projects (Neemus Software Pvt. Ltd. India)',
      category: 'employment',
      description: 'Worked for about 1 year, Software Enigneer work consits of QT C++ projects for DRDO clients like ADA, LRDE with client satisfaction and appreciation from CEO office.',
      technologies: ['SQLite', 'C++', 'Qt Framework', 'Client Satisfaction'],
      status: 'completed'
    },
    {
      title: 'React Portfolio Website',
      category: 'github',
      description: 'Personal portfolio website built with ReactJS, Javascript and HTML, CSS, featuring responsive design.',
      technologies: ['React', 'Javascript', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/kvsaimadhav/PortfolioReact',
      status: 'completed'
    },
    {
      title: 'Resolution of DDoS Attack with Client Puzzles and Bitcoins',
      category: 'masters',
      description: 'Similar to Google CAPTCHA, Implemented Client Puzzles in a web appication for DDoS with Predictor in-built for Kaggle Data. Further, Research focuses on actaully making the attackers mine for website and generate bitcoins to the Website and make legitimate users feel more safer to use the website.',
      technologies: ['Information Security', 'Python', 'Django', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/kvsaimadhav/ITC520-Research',
      status: 'completed'
    },
    {
      title: 'Prediction of COVID-19 Cases in Michigan Locale',
      category: 'masters',
      description: '2 year predictor with static data observed in March 2021. for Michigan Locale from COVID Tracking Government project. Results, surprised everyone as the Predictor seem to predict accurate values after enough seeding in Time series Prophet algorithm used for wbe application using Python (Django) project.',
      technologies: ['Data Mining', 'Python', 'Django', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/kvsaimadhav/ITC691-Research',
      status: 'completed'
    },
    {
      title: 'Web Scraping Project with Flipkart Goods',
      category: 'academic',
      description: 'Web scraping the computer or electronic goods from FLipkart website and store it in an excel sheet.',
      technologies: ['Web Scraping', 'Python', 'Beautiful soup', 'Selenium'],
      githubUrl: 'https://github.com/kvsaimadhav/web-scraping',
      status: 'completed'
    }

    
  ];

  filteredProjects: Project[] = [...this.projects];
  activeFilter: string = 'all';

  filterProjects(category: string) {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'masters': '📚',
      'github': '🐙',
      'academic': '🏫',
      'employment': '💼'
    };
    return icons[category] || '📁';
  }

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      'bachelors': 'Bachelors Projects',
      'masters': 'Masters Projects',
      'github': 'GitHub Projects',
      'academic': 'Academic Projects'
    };
    return labels[category] || 'Projects';
  }

  getCompletedCount(): number {
    return this.projects.filter(project => project.status === 'completed').length;
  }

  getTechnologiesCount(): number {
    const allTech = this.projects.flatMap(project => project.technologies);
    return [...new Set(allTech)].length;
  }
}