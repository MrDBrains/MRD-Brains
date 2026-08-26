import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../shared/services/canonical.service';
import { Router } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { PageHeroComponent } from '../components/page-hero/page-hero.component';


declare const AOS: any;

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactComponent, PageHeroComponent],
  template: `
    <app-page-hero
      eyebrow="Get In Touch"
      titleLine1="Let's Build Something"
      titleEm="Extraordinary."
      description="Tell us about your project. We respond within 24 hours — usually much sooner."
      breadcrumbLabel="Contact">
      <div class="ph-trust">
        <div class="pht-item" *ngFor="let t of trust">
          <i [class]="t.icon"></i>
          <span>{{ t.text }}</span>
        </div>
      </div>
    </app-page-hero>
    <app-contact></app-contact>
  `,
  styles: [`
    .ph-trust {
      display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 4px;
    }
    .pht-item {
      display: inline-flex; align-items: center; gap: 7px;
      background: rgba(0,0,0,.03); border: 1px solid rgba(0,0,0,.08);
      border-radius: 50px; padding: 7px 16px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d);
      i { color: var(--gold); font-size: .7rem; }
    }
  `]
})
export class ContactPageComponent implements OnInit {
  trust = [
    { icon: 'bi bi-clock-fill',          text: 'Reply within 24 hrs' },
    { icon: 'bi bi-shield-fill-check',   text: 'NDA on day one' },
    { icon: 'bi bi-telephone-fill',      text: 'Free discovery call' },
    { icon: 'bi bi-currency-rupee',      text: 'Fixed-price proposals' },
  ];
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
    private canonicalSrv: CanonicalService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.canonicalSrv.setCanonical('/contact');
    this.titleSrv.setTitle('Contact MrD Brains | Start a Software Project');
    this.metaSrv.updateTag({
      name: 'description',
      content: 'Tell us what you\'re trying to solve — our team will help you identify the right technology approach for your business.',
    });
    if (isPlatformBrowser(this.pid)) {
      window.scrollTo(0, 0);
      if (typeof AOS !== 'undefined') AOS.refresh();
    }
  }
  nav(path: string) { this.router.navigate([path]); }
}