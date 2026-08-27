import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../shared/services/canonical.service';
import { Router } from '@angular/router';
import { PricingComponent } from '../components/pricing/pricing.component';
import { ProcessComponent } from '../components/process/process.component';
import { PageHeroComponent } from '../components/page-hero/page-hero.component';

declare const AOS: any;

@Component({
  selector: 'app-process-page',
  standalone: true,
  imports: [CommonModule, ProcessComponent, PricingComponent, PageHeroComponent],
  template: `
    <app-page-hero
      eyebrow="How We Work"
      titleLine1="Transparent Process."
      titleEm="No Surprises."
      description="From first call to go-live — exactly what happens at every stage, what it costs in plain rupees, and what you can expect from us. No jargon, no hidden line items."
      breadcrumbLabel="How We Work">
    </app-page-hero>
    <app-process></app-process>
    <app-pricing></app-pricing>
  `,
})
export class ProcessPageComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
    private canonicalSrv: CanonicalService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.canonicalSrv.setCanonical('/process');
    this.titleSrv.setTitle('Our Development Process | MrD Brains');
    this.metaSrv.updateTag({
      name: 'description',
      content: 'How MrD Brains takes a project from requirement to production — discovery, design, build, testing, launch and ongoing support.',
    });
    if (isPlatformBrowser(this.pid)) {
      window.scrollTo(0, 0);
      if (typeof AOS !== 'undefined') AOS.refresh();
    }
  }
  nav(path: string) { this.router.navigate([path]); }
}