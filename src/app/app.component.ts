import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { routeAnimations } from './animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollAnimationService } from './services/scroll-animation.service';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ProjectComponent,
    ExperienceComponent,
    SkillsComponent,
    AwardsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimations] // Add route animations
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sai Madhav Portfolio';
  
  constructor(
    private contexts: ChildrenOutletContexts,
    private scrollAnimationService: ScrollAnimationService
  ) {}
  
  ngOnInit() {
    // Initialize scroll animations after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.scrollAnimationService.init();
    }, 1000);
  }
  
  ngOnDestroy() {
    this.scrollAnimationService.destroy();
  }
  
  // This method is used for route animation
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}