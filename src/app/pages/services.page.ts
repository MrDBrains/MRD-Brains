import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { ServicesComponent } from '../components/services/services.component';
import { PageHeroComponent } from '../components/page-hero/page-hero.component';

declare const AOS: any;

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, ServicesComponent, PageHeroComponent],
  template: `
    <app-page-hero
      eyebrow="What We Do"
      titleLine1="End-to-End"
      titleEm="Technology Services."
      description="Custom software, web & mobile applications, AI automation, hotel technology, cloud infrastructure and business platforms — built around how your business actually works."
      breadcrumbLabel="Services">
    </app-page-hero>
    <app-services></app-services>
  `,
})
export class ServicesPageComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
  ) {}
  ngOnInit() {
    this.titleSrv.setTitle('Software Development Services | MrD Brains');
    this.metaSrv.updateTag({
      name: 'description',
      content: 'Custom software, web & mobile development, AI automation, hospitality technology and business & enterprise solutions from MrD Brains.',
    });
    if (isPlatformBrowser(this.pid)) {
      window.scrollTo(0, 0);
      if (typeof AOS !== 'undefined') AOS.refresh();
    }
  }
  nav(path: string) { window.location.href = path; }
}