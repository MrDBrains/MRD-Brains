import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../shared/services/canonical.service';
import { HeroComponent } from '../components/hero/hero.component';
import { MumbaiStripComponent } from '../components/mumbaiStrip/mumbai-strip.component';
import { StatsComponent } from '../components/stats/stats.component';
import { WhatWeBuildComponent } from '../components/what-we-build/what-we-build.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { FeaturedProductComponent } from '../components/featured-product/featured-product.component';
import { FeaturedWorkComponent } from '../components/featured-work/featured-work.component';
import { HospitalityComponent } from '../components/hospitality/hospitality.component';
import { WhyUsComponent } from '../components/why-us/why-us.component';
import { FinalCtaComponent } from '../components/final-cta/final-cta.component';

declare const AOS: any;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent, MumbaiStripComponent, StatsComponent,
    FeaturedWorkComponent, HospitalityComponent, WhatWeBuildComponent,
    FeaturedProductComponent, TestimonialsComponent, WhyUsComponent, FinalCtaComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-mumbai-strip></app-mumbai-strip>
    <!-- <app-stats></app-stats> -->
    <app-what-we-build></app-what-we-build>
    <app-featured-work></app-featured-work>
    <app-hospitality></app-hospitality>
    <app-featured-product></app-featured-product>
    <app-testimonials></app-testimonials>
    <app-why-us></app-why-us>
    <app-final-cta></app-final-cta>
  `,
})
export class HomePageComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
    private canonicalSrv: CanonicalService,
  ) {}
  ngOnInit() {
    this.canonicalSrv.setCanonical('/');
    this.titleSrv.setTitle('MrD Brains | Software Development & Digital Solutions');
    this.metaSrv.updateTag({
      name: 'description',
      content: 'MrD Brains builds custom software, web & mobile applications, AI automation and hospitality technology for real businesses — plus Vyapar Ledger, our own business management product.',
    });
    if (isPlatformBrowser(this.pid)) {
      window.scrollTo(0, 0);
      if (typeof AOS !== 'undefined') AOS.refresh();
    }
  }
}