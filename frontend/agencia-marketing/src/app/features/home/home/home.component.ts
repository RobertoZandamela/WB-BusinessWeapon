// src/app/features/home/home/home.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from '../../home/banner/banner.component';
import { WhyChooseUsComponent } from '../../home/why-choose-us/why-choose-us.component';
import { FeaturedServicesComponent } from '../../home/featured-services/featured-services.component';
import { SuccessStoriesComponent } from '../../home/success-stories/success-stories.component';
import { TestimonialsComponent } from '../../home/testimonials/testimonials.component';
import { ClientsPartnersComponent } from '../../home/clients-partners/clients-partners.component';
import { BlogArticlesComponent } from '../../home/blog-articles/blog-articles.component';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    ScrollingModule,
    BannerComponent,
    WhyChooseUsComponent,
    FeaturedServicesComponent,
    SuccessStoriesComponent,
    TestimonialsComponent,
    ClientsPartnersComponent,
    BlogArticlesComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  showScrollButton = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 500;
  }

  scrollToSection(elementId: string): void {
    if (elementId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
