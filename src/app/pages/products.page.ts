import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { VyaparLedgerComponent } from '../components/vyapar-ledger/vyapar-ledger.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

declare const AOS: any;

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, VyaparLedgerComponent, ProductDetailComponent],
  template: `
    <div class="page-hero">
      <div class="ph-glow"></div>
      <div class="ph-grid"></div>
      <div class="container" style="position:relative;z-index:2">
        <div class="ph-inner">
          <div class="eyebrow">Products</div>
          <h1 class="ph-title">
            Our Own Product.<br>
            <em>Built by MrD Brains.</em>
          </h1>
          <p class="ph-desc">
            Vyapar Ledger — complete business management with billing, GST, inventory,
            customers, ledger, expenses, reports and AI-powered insights, all in one platform.
          </p>
          <div class="ph-breadcrumb">
            <a (click)="nav('/')">Home</a>
            <span>/</span>
            <span>Products</span>
          </div>
        </div>
      </div>
    </div>
    <app-vyapar-ledger></app-vyapar-ledger>
    <app-product-detail></app-product-detail>
  `,
  styles: [`
    .page-hero {
      padding: 160px 0 100px; background: var(--obsidian);
      position: relative; overflow: hidden; text-align: center;
    }
    .ph-glow {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      width: 600px; height: 400px;
      background: radial-gradient(ellipse, rgba(232,93,58,.06) 0%, transparent 65%);
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
      line-height: 1.8; max-width: 540px; margin: 0 auto 24px;
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
export class ProductsPageComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
  ) {}
  ngOnInit() {
    this.titleSrv.setTitle('Vyapar Ledger & Products | MrD Brains');
    this.metaSrv.updateTag({
      name: 'description',
      content: 'Vyapar Ledger — billing, GST, inventory, ledger, expenses, reports and AI-powered business insights in one platform, built and owned by MrD Brains.',
    });
    if (isPlatformBrowser(this.pid)) {
      window.scrollTo(0, 0);
      if (typeof AOS !== 'undefined') AOS.refresh();
    }
  }
  nav(path: string) { window.location.href = path; }
}