import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { PortfolioComponent } from '../components/Portfolio/portfolio.component';
import { PageHeroComponent } from '../components/page-hero/page-hero.component';

declare const AOS: any;

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [CommonModule, PortfolioComponent, TestimonialsComponent, PageHeroComponent],
  template: `
    <app-page-hero
      eyebrow="Selected Work"
      titleLine1="Built for Business."
      titleEm="Proven in Production."
      description="Explore the digital platforms, business applications and technology solutions we've built for clients across hospitality, education, enterprise and emerging technology."
      breadcrumbLabel="Our Work">
      <div class="ph-small">Live projects · Ongoing engagements · Proprietary products</div>
    </app-page-hero>
    <app-portfolio></app-portfolio>
    <app-testimonials></app-testimonials>
  `,
  styles: [`
    .ph-small {
      font-family: var(--f-mono); font-size: .64rem; color: var(--gold);
      letter-spacing: .08em; text-transform: uppercase; margin-bottom: 4px;
    }
  `]
})
export class WorkPageComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
    private router: Router,
  ) {}
  ngOnInit() {
    this.titleSrv.setTitle('Our Work | MrD Brains — Web, Booking & Business Solutions');
    this.metaSrv.updateTag({
      name: 'description',
      content: 'Explore live websites, hotel booking platforms, admin panels, business applications, AI solutions and proprietary products built by MrD Brains.',
    });
    if (isPlatformBrowser(this.pid)) {
      window.scrollTo(0, 0);
      if (typeof AOS !== 'undefined') AOS.refresh();
    }
  }
  nav(path: string) { this.router.navigate([path]); }
}