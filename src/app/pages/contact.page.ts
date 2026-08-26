import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { ContactComponent } from '../components/contact/contact.component';


declare const AOS: any;

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  template: `
    <div class="page-hero">
      <div class="ph-glow"></div>
      <div class="ph-grid"></div>
      <div class="container" style="position:relative;z-index:2">
        <div class="ph-inner">
          <div class="eyebrow">Get In Touch</div>
          <h1 class="ph-title">
            Let's Build Something<br>
            <em>Extraordinary.</em>
          </h1>
          <p class="ph-desc">
            Tell us about your project. We respond within 24 hours —
            usually much sooner.
          </p>
          <div class="ph-trust">
            <div class="pht-item" *ngFor="let t of trust">
              <i [class]="t.icon"></i>
              <span>{{ t.text }}</span>
            </div>
          </div>
          <div class="ph-breadcrumb">
            <a (click)="nav('/')">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
    <app-contact></app-contact>
  `,
  styles: [`
    .page-hero {
      padding: 140px 0 80px; background: var(--obsidian);
      position: relative; overflow: hidden; text-align: center;
    }
    .ph-glow {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      width: 600px; height: 400px;
      background: radial-gradient(ellipse, rgba(201,151,74,.07) 0%, transparent 65%);
      pointer-events: none;
    }
    .ph-grid {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(201,151,74,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201,151,74,.03) 1px, transparent 1px);
      background-size: 56px 56px;
    }
    .ph-inner { max-width: 700px; margin: 0 auto; }
    .ph-title {
      font-family: var(--f-head); font-weight: 800;
      font-size: clamp(2.4rem, 5vw, 4rem);
      color: var(--ghost); line-height: 1.08;
      letter-spacing: -.03em; margin-bottom: 18px;
      em { color: var(--gold); font-style: italic; font-family: var(--f-display); font-weight: 300; font-size: 1.1em; }
    }
    .ph-desc {
      font-size: 1rem; font-weight: 300; color: var(--ghost-d);
      line-height: 1.8; max-width: 480px; margin: 0 auto 28px;
    }
    .ph-trust {
      display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 24px;
    }
    .pht-item {
      display: inline-flex; align-items: center; gap: 7px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08);
      border-radius: 50px; padding: 7px 16px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d);
      i { color: var(--gold); font-size: .7rem; }
    }
    .ph-breadcrumb {
      display: inline-flex; align-items: center; gap: 10px;
      font-family: var(--f-mono); font-size: .62rem;
      color: var(--ghost-d); letter-spacing: .08em;
      a { color: var(--gold); cursor: pointer; &:hover { text-decoration: underline; } }
      span:not(:first-child) { color: rgba(255,255,255,.2); }
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
  ) {}
  ngOnInit() {
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
  nav(path: string) { window.location.href = path; }
}