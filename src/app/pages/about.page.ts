import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../shared/services/canonical.service';
import { Router } from '@angular/router';
import { TeamComponent } from '../components/team/team.component';
import { AboutComponent } from '../components/about/about.component';
import { OurStoryComponent } from '../components/ourStory/our-story.component';
import { MumbaiStripComponent } from '../components/mumbaiStrip/mumbai-strip.component';
import { StatsComponent } from '../components/stats/stats.component';
import { PageHeroComponent } from '../components/page-hero/page-hero.component';

declare const AOS: any;

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent, OurStoryComponent,
    TeamComponent, MumbaiStripComponent, StatsComponent,
    PageHeroComponent,
  ],
  template: `
    <app-page-hero
      eyebrow="About MrD Brains"
      titleLine1="The Team Behind"
      titleEm="Mumbai's Software Studio"
      description="Founded in 2022 with one mission — build software that actually fits the business it's made for."
      breadcrumbLabel="About">
    </app-page-hero>
    <app-stats></app-stats>
    <app-about></app-about>
    <app-our-story></app-our-story>
    <app-team></app-team>
    <app-mumbai-strip></app-mumbai-strip>
  `,
})
export class AboutPageComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
    private canonicalSrv: CanonicalService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.canonicalSrv.setCanonical('/about');
    this.titleSrv.setTitle('About MrD Brains | Technology Partner for Real Businesses');
    this.metaSrv.updateTag({
      name: 'description',
      content: 'MrD Brains is a Mumbai-based technology partner building custom software, hospitality platforms and business applications for real businesses.',
    });
    if (isPlatformBrowser(this.pid)) {
      window.scrollTo(0, 0);
      if (typeof AOS !== 'undefined') AOS.refresh();
    }
  }
  nav(path: string) { this.router.navigate([path]); }
}