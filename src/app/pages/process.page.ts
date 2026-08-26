import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { PricingComponent } from '../components/pricing/pricing.component';
import { ProcessComponent } from '../components/process/process.component';

declare const AOS: any;

@Component({
  selector: 'app-process-page',
  standalone: true,
  imports: [CommonModule, ProcessComponent, PricingComponent],
  template: `
    <div class="page-hero">
      <div class="ph-glow"></div>
      <div class="ph-grid"></div>
      <div class="container" style="position:relative;z-index:2">
        <div class="ph-inner">
          <div class="eyebrow">How We Work</div>
          <h1 class="ph-title">
            Transparent Process.<br>
            <em>No Surprises.</em>
          </h1>
          <p class="ph-desc">
            From first call to go-live — exactly what happens at every stage,
            what it costs, and what you can expect from us.
          </p>
          <div class="ph-breadcrumb">
            <a (click)="nav('/')">Home</a>
            <span>/</span>
            <span>How We Work</span>
          </div>
        </div>
      </div>
    </div>
    <app-process></app-process>
    <app-pricing></app-pricing>
  `,
  styles: [`
    .page-hero {
      padding: 160px 0 100px; background: var(--obsidian);
      position: relative; overflow: hidden; text-align: center;
    }
    .ph-glow {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      width: 600px; height: 400px;
      background: radial-gradient(ellipse, rgba(46,204,113,.05) 0%, transparent 65%);
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
      line-height: 1.8; max-width: 500px; margin: 0 auto 24px;
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
export class ProcessPageComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
  ) {}
  ngOnInit() {
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
  nav(path: string) { window.location.href = path; }
}