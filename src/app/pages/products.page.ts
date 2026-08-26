import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../shared/services/canonical.service';
import { Router } from '@angular/router';
import { VyaparLedgerComponent } from '../components/vyapar-ledger/vyapar-ledger.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { PageHeroComponent } from '../components/page-hero/page-hero.component';

declare const AOS: any;

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, VyaparLedgerComponent, ProductDetailComponent, PageHeroComponent],
  template: `
    <app-page-hero
      eyebrow="Products"
      titleLine1="Our Own Product."
      titleEm="Built by MrD Brains."
      description="Vyapar Ledger — complete business management with billing, GST, inventory, customers, ledger, expenses, reports and AI-powered insights, all in one platform."
      breadcrumbLabel="Products">
    </app-page-hero>
    <app-vyapar-ledger></app-vyapar-ledger>
    <app-product-detail></app-product-detail>
  `,
})
export class ProductsPageComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private titleSrv: Title,
    private metaSrv: Meta,
    private canonicalSrv: CanonicalService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.canonicalSrv.setCanonical('/products');
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
  nav(path: string) { this.router.navigate([path]); }
}