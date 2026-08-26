import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- ═══ Platforms: Web / Android / Windows ═══ -->
    <section id="platforms" class="pd-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="pd-top" data-aos="fade-up">
          <div class="eyebrow">Every Platform, One Product</div>
          <h2 class="sec-h2">Built for <em>Web</em>, Android & Windows</h2>
          <p class="sec-lead">Run your business from your desk, your pocket, or your shop counter — all
            three stay perfectly in sync.</p>
        </div>

        <div class="plat-tabs" data-aos="fade-up" data-aos-delay="60">
          <button class="plat-tab" *ngFor="let p of platforms; let i = index"
                  [class.active]="i === curPlat" (click)="curPlat = i">
            <i [class]="p.icon"></i>
            <span>{{ p.name }}</span>
            <span class="plat-status" [class.soon]="p.soon">{{ p.soon ? 'Coming Soon' : 'Available' }}</span>
          </button>
        </div>

        <div class="plat-pane" data-aos="fade-up" data-aos-delay="100">
          <div class="pp-left">
            <div class="pp-badge" *ngIf="platforms[curPlat].soon">
              <i class="bi bi-hourglass-split"></i> {{ platforms[curPlat].soon }}
            </div>
            <h3 class="pp-title">{{ platforms[curPlat].name }}</h3>
            <p class="pp-desc">{{ platforms[curPlat].desc }}</p>
            <div class="pp-groups">
              <div class="pp-group" *ngFor="let g of platforms[curPlat].groups">
                <div class="ppg-h">{{ g.h }}</div>
                <div class="ppg-chips">
                  <span *ngFor="let f of g.items">{{ f }}</span>
                </div>
              </div>
            </div>
            <a *ngIf="!platforms[curPlat].soon" href="https://www.vyaparledger.com" target="_blank" class="btn-outline pp-cta">
              Explore {{ platforms[curPlat].name }} <i class="bi bi-arrow-up-right"></i>
            </a>
          </div>
          <div class="pp-right">
            <div class="pp-icon-ring">
              <i [class]="platforms[curPlat].icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ AI Features ═══ -->
    <section id="ai-features" class="pd-sec ai-sec">
      <div class="noise"></div>
      <div class="ai-glow"></div>
      <div class="container">
        <div class="pd-top" data-aos="fade-up">
          <div class="eyebrow"><i class="bi bi-stars"></i> Major Highlight</div>
          <h2 class="sec-h2">AI-Powered <em>Business Intelligence</em></h2>
          <p class="sec-lead">Vyapar Ledger doesn't just record your business — it understands it.</p>
        </div>
        <div class="ai-grid">
          <div class="ai-card" *ngFor="let a of aiFeatures; let i = index"
               [class.ai-big]="i === 0" data-aos="fade-up" [attr.data-aos-delay]="i * 70">
            <div class="ai-ico"><i [class]="a.icon"></i></div>
            <div class="ai-h">{{ a.title }}</div>
            <p class="ai-p">{{ a.desc }}</p>
            <div class="ai-example" *ngIf="a.example">
              <i class="bi bi-chat-quote-fill"></i> {{ a.example }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Core Features grid ═══ -->
    <section id="features" class="pd-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="pd-top" data-aos="fade-up">
          <div class="eyebrow">Everything Included</div>
          <h2 class="sec-h2">All Core <em>Features</em></h2>
          <p class="sec-lead">Every business module you need, already built in — no add-ons, no hidden modules.</p>
        </div>
        <div class="feat-grid">
          <div class="feat-card" *ngFor="let c of featureCategories; let i = index"
               data-aos="fade-up" [attr.data-aos-delay]="i * 50">
            <div class="fc-top">
              <div class="fc-ico"><i [class]="c.icon"></i></div>
              <div class="fc-h">{{ c.name }}</div>
            </div>
            <div class="fc-chips">
              <span *ngFor="let it of c.items">{{ it }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Industries ═══ -->
    <section id="industries" class="pd-sec ind-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="pd-top" data-aos="fade-up">
          <div class="eyebrow">Who It's For</div>
          <h2 class="sec-h2">Built for Different <em>Businesses</em></h2>
          <p class="sec-lead">One platform, tuned to how your trade actually works.</p>
        </div>
        <div class="ind-grid">
          <div class="ind-card" *ngFor="let ind of industries; let i = index"
               data-aos="fade-up" [attr.data-aos-delay]="i * 40">
            <div class="ic-ico"><i [class]="ind.icon"></i></div>
            <div class="ic-h">{{ ind.name }}</div>
            <div class="ic-feats">
              <span *ngFor="let f of ind.feats">{{ f }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Security & Backup ═══ -->
    <section id="security" class="pd-sec sec-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="sec-inner">
          <div class="sec-left" data-aos="fade-right">
            <div class="eyebrow">Trust & Safety</div>
            <h2 class="sec-h2">Your Business Data. <em>Protected.</em></h2>
            <p class="sec-lead">We only make security claims that are actually implemented — nothing marketing-only.</p>
          </div>
          <div class="sec-list" data-aos="fade-left">
            <div class="sl-item" *ngFor="let s of security; let i = index"
                 data-aos="fade-up" [attr.data-aos-delay]="i * 40">
              <div class="sl-ico"><i [class]="s.icon"></i></div>
              <div>
                <div class="sl-h">{{ s.h }}</div>
                <div class="sl-p">{{ s.p }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Pricing summary ═══ -->
    <section id="pricing" class="pd-sec price-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="pd-top" data-aos="fade-up">
          <div class="eyebrow">Plans</div>
          <h2 class="sec-h2">Choose the Plan That <em>Fits Your Business</em></h2>
          <p class="sec-lead">Simple, transparent tiers. Full feature comparison and billing details live on the Vyapar Ledger site.</p>
        </div>
        <div class="price-grid">
          <div class="price-card" *ngFor="let p of plans; let i = index" [class.featured]="p.featured"
               data-aos="fade-up" [attr.data-aos-delay]="i * 70">
            <div class="pc-pop" *ngIf="p.featured"><i class="bi bi-stars"></i> Most Popular</div>
            <div class="pc-name">{{ p.name }}</div>
            <p class="pc-desc">{{ p.desc }}</p>
            <ul class="pc-list">
              <li *ngFor="let f of p.feats"><i class="bi bi-check-lg"></i> {{ f }}</li>
            </ul>
          </div>
        </div>
        <div class="price-cta" data-aos="fade-up">
          <a href="https://www.vyaparledger.com" target="_blank" class="btn-gold">
            View Full Plans & Pricing <i class="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ Upcoming Features ═══ -->
    <section id="upcoming" class="pd-sec up-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="pd-top" data-aos="fade-up">
          <div class="eyebrow">Roadmap</div>
          <h2 class="sec-h2">What's Coming <em>Next?</em></h2>
        </div>
        <div class="up-grid">
          <div class="up-card" *ngFor="let u of upcoming; let i = index"
               data-aos="fade-up" [attr.data-aos-delay]="i * 50">
            <div class="up-ico"><i [class]="u.icon"></i></div>
            <div class="up-h">{{ u.h }}</div>
            <p class="up-p">{{ u.p }}</p>
            <span class="up-tag" [class.planned]="u.tag === 'Planned'">{{ u.tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Final CTA ═══ -->
    <section class="pd-sec final-cta">
      <div class="noise"></div>
      <div class="fc-glow"></div>
      <div class="container">
        <div class="fc-inner" data-aos="fade-up">
          <h2 class="sec-h2" style="margin:0 auto 14px">Ready to Simplify <em>Your Business?</em></h2>
          <p class="sec-lead" style="margin:0 auto 32px">Start free on Web or Android today — no credit card, no setup fees.</p>
          <div class="fc-actions">
            <a href="https://www.vyaparledger.com/download" target="_blank" class="btn-gold">
              <i class="bi bi-download"></i> Get Started Free
            </a>
            <a routerLink="/contact" class="btn-outline">
              Talk to Us <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pd-sec { padding: 110px 0; position: relative; overflow: hidden; background: var(--obsidian); }
    .pd-sec:nth-of-type(even) { background: var(--obsidian-s); }
    .pd-top { max-width: 640px; margin-bottom: 52px; }
    .pd-top .eyebrow i { color: var(--gold); margin-right: 2px; }

    /* ── Platform tabs ── */
    .plat-tabs { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 32px; }
    .plat-tab {
      display: flex; align-items: center; gap: 9px;
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.08);
      border-radius: 50px; padding: 12px 20px; cursor: pointer;
      font-family: var(--f-head); font-weight: 700; font-size: .82rem; color: var(--ghost-m);
      transition: all .25s;
      i { font-size: 1rem; color: var(--ghost-d); }
      &:hover { border-color: rgba(201,151,74,.25); color: var(--ghost); }
      &.active { background: var(--gold-dim); border-color: var(--gold-ring); color: var(--gold); i{color:var(--gold)} }
    }
    .plat-status {
      font-family: var(--f-mono); font-size: .56rem; text-transform: uppercase; letter-spacing: .06em;
      background: rgba(46,204,113,.12); color: #2ECC71; padding: 3px 8px; border-radius: 50px;
      &.soon { background: rgba(232,93,58,.12); color: var(--coral-l); }
    }
    .plat-pane {
      display: grid; grid-template-columns: 1fr 260px; gap: 40px; align-items: center;
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.07);
      border-radius: 24px; padding: 44px;
    }
    @media(max-width:900px){ .plat-pane{grid-template-columns:1fr;padding:28px} .pp-right{display:none} }
    .pp-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(232,93,58,.1); border: 1px solid rgba(232,93,58,.25);
      color: var(--coral-l); border-radius: 50px; padding: 6px 14px;
      font-family: var(--f-mono); font-size: .64rem; letter-spacing: .06em; text-transform: uppercase;
      margin-bottom: 16px;
    }
    .pp-title { font-family: var(--f-head); font-weight: 800; font-size: 1.6rem; color: var(--ghost); margin-bottom: 10px; }
    .pp-desc { font-size: .92rem; color: var(--ghost-d); line-height: 1.8; max-width: 480px; margin-bottom: 26px; }
    .pp-groups { display: flex; flex-direction: column; gap: 16px; margin-bottom: 26px; }
    .ppg-h { font-family: var(--f-mono); font-size: .62rem; text-transform: uppercase; letter-spacing: .1em; color: var(--gold); margin-bottom: 9px; }
    .ppg-chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .ppg-chips span {
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; padding: 6px 12px; font-size: .76rem; color: var(--ghost-m);
    }
    .pp-right { display: flex; align-items: center; justify-content: center; }
    .pp-icon-ring {
      width: 180px; height: 180px; border-radius: 50%;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { font-size: 4rem; color: var(--gold); }
      animation: goldGlow 5s ease-in-out infinite;
    }

    /* ── AI section ── */
    .ai-sec { background: linear-gradient(180deg, var(--obsidian-s), var(--obsidian)); }
    .ai-glow { position: absolute; top: -120px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: rgba(232,93,58,.06); filter: blur(120px); pointer-events: none; }
    .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    @media(max-width:991px){ .ai-grid{grid-template-columns:1fr 1fr} }
    @media(max-width:575px){ .ai-grid{grid-template-columns:1fr} }
    .ai-card {
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.07);
      border-radius: 18px; padding: 26px; transition: all .3s;
      &:hover { border-color: rgba(212,168,83,.25); transform: translateY(-5px); }
    }
    .ai-big { grid-column: span 1; }
    .ai-ico {
      width: 46px; height: 46px; border-radius: 12px;
      background: var(--coral-dim); border: 1px solid var(--coral-ring);
      display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
      i { color: var(--coral-l); font-size: 1.25rem; }
    }
    .ai-h { font-family: var(--f-head); font-weight: 800; font-size: 1rem; color: var(--ghost); margin-bottom: 8px; }
    .ai-p { font-size: .82rem; color: var(--ghost-d); line-height: 1.75; }
    .ai-example {
      margin-top: 14px; font-size: .74rem; color: var(--gold-l); font-style: italic;
      background: rgba(201,151,74,.06); border-left: 2px solid var(--gold); border-radius: 4px;
      padding: 9px 12px; line-height: 1.6;
      i { margin-right: 6px; }
    }

    /* ── Core features grid ── */
    .feat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    @media(max-width:1199px){ .feat-grid{grid-template-columns:repeat(3,1fr)} }
    @media(max-width:767px){ .feat-grid{grid-template-columns:repeat(2,1fr)} }
    @media(max-width:480px){ .feat-grid{grid-template-columns:1fr} }
    .feat-card {
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.06);
      border-radius: 16px; padding: 22px; transition: all .28s;
      &:hover { border-color: rgba(201,151,74,.2); transform: translateY(-4px); }
    }
    .fc-top { display: flex; align-items: center; gap: 11px; margin-bottom: 14px; }
    .fc-ico {
      width: 36px; height: 36px; border-radius: 9px; flex-shrink: 0;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: .95rem; }
    }
    .fc-h { font-family: var(--f-head); font-weight: 700; font-size: .88rem; color: var(--ghost); }
    .fc-chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .fc-chips span { font-size: .68rem; color: var(--ghost-d); background: rgba(255,255,255,.03); border-radius: 5px; padding: 4px 9px; }

    /* ── Industries ── */
    .ind-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
    @media(max-width:1199px){ .ind-grid{grid-template-columns:repeat(3,1fr)} }
    @media(max-width:767px){ .ind-grid{grid-template-columns:repeat(2,1fr)} }
    .ind-card {
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.06);
      border-radius: 16px; padding: 20px; text-align: center; transition: all .28s;
      &:hover { border-color: rgba(232,93,58,.22); transform: translateY(-4px); }
    }
    .ic-ico {
      width: 44px; height: 44px; margin: 0 auto 12px; border-radius: 11px;
      background: var(--coral-dim); border: 1px solid var(--coral-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--coral-l); font-size: 1.1rem; }
    }
    .ic-h { font-family: var(--f-head); font-weight: 700; font-size: .84rem; color: var(--ghost); margin-bottom: 10px; }
    .ic-feats { display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; }
    .ic-feats span { font-size: .62rem; color: var(--ghost-d); background: rgba(255,255,255,.03); border-radius: 4px; padding: 3px 7px; }

    /* ── Security ── */
    .sec-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
    @media(max-width:900px){ .sec-inner{grid-template-columns:1fr} }
    .sec-list { display: flex; flex-direction: column; gap: 14px; }
    .sl-item {
      display: flex; align-items: flex-start; gap: 14px;
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.06);
      border-radius: 13px; padding: 16px 18px;
    }
    .sl-ico {
      width: 36px; height: 36px; flex-shrink: 0; border-radius: 9px;
      background: var(--emerald-dim); border: 1px solid var(--emerald-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--emerald); font-size: .9rem; }
    }
    .sl-h { font-family: var(--f-head); font-weight: 700; font-size: .85rem; color: var(--ghost); margin-bottom: 2px; }
    .sl-p { font-size: .76rem; color: var(--ghost-d); line-height: 1.6; }

    /* ── Pricing ── */
    .price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 32px; }
    @media(max-width:900px){ .price-grid{grid-template-columns:1fr;max-width:420px;margin-left:auto;margin-right:auto} }
    .price-card {
      position: relative; background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.08);
      border-radius: 20px; padding: 30px 26px; transition: all .3s;
      &.featured { border-color: rgba(201,151,74,.32); background: linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m)); }
      &:hover { transform: translateY(-4px); }
    }
    .pc-pop {
      position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
      background: linear-gradient(135deg,var(--gold-l),var(--gold)); color: var(--obsidian);
      font-family: var(--f-head); font-weight: 800; font-size: .62rem; letter-spacing: .06em; text-transform: uppercase;
      padding: 5px 14px; border-radius: 50px;
    }
    .pc-name { font-family: var(--f-head); font-weight: 800; font-size: 1.15rem; color: var(--ghost); margin-bottom: 8px; }
    .pc-desc { font-size: .8rem; color: var(--ghost-d); margin-bottom: 18px; line-height: 1.65; }
    .pc-list { display: flex; flex-direction: column; gap: 9px; }
    .pc-list li { display: flex; align-items: center; gap: 8px; font-size: .78rem; color: var(--ghost-m); i { color: var(--gold); font-size: .8rem; } }
    .price-cta { text-align: center; }

    /* ── Upcoming ── */
    .up-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    @media(max-width:991px){ .up-grid{grid-template-columns:1fr 1fr} }
    @media(max-width:575px){ .up-grid{grid-template-columns:1fr} }
    .up-card {
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.06);
      border-radius: 16px; padding: 24px; transition: all .28s;
      &:hover { border-color: rgba(201,151,74,.2); }
    }
    .up-ico { font-size: 1.6rem; margin-bottom: 12px; display: block; }
    .up-h { font-family: var(--f-head); font-weight: 700; font-size: .92rem; color: var(--ghost); margin-bottom: 8px; }
    .up-p { font-size: .78rem; color: var(--ghost-d); line-height: 1.7; margin-bottom: 14px; }
    .up-tag {
      display: inline-block; font-family: var(--f-mono); font-size: .58rem; text-transform: uppercase; letter-spacing: .06em;
      background: rgba(232,93,58,.1); color: var(--coral-l); border-radius: 50px; padding: 4px 11px;
      &.planned { background: rgba(255,255,255,.05); color: var(--ghost-d); }
    }

    /* ── Final CTA ── */
    .final-cta { padding: 130px 0; text-align: center; }
    .fc-glow {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      width: 700px; height: 400px; background: radial-gradient(ellipse, rgba(212,168,83,.08), transparent 65%);
      pointer-events: none;
    }
    .fc-inner { max-width: 620px; margin: 0 auto; position: relative; z-index: 2; }
    .fc-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  `]
})
export class ProductDetailComponent {
  curPlat = 0;

  platforms = [
    {
      name: 'Web App', icon: 'bi bi-globe2', soon: null, desc: 'The complete business command centre — dashboard, billing, GST, inventory and reports, all from your browser.',
      groups: [
        { h: 'Business Management', items: ['Dashboard', 'Sales', 'Billing', 'GST', 'Customers', 'Suppliers', 'Ledger', 'Inventory', 'Purchases', 'Expenses', 'Reports'] },
        { h: 'Advanced Capabilities', items: ['Multi-user', 'Multi-device', 'Cloud data', 'Backup', 'Export', 'Notifications', 'Subscription management'] },
      ],
    },
    {
      name: 'Android App', icon: 'bi bi-android2', soon: null, desc: 'A full-featured business app in your pocket — built for shop owners who are always on the move.',
      groups: [
        { h: 'Customer Management', items: ['Customers', 'Customer ledger', 'Transactions', 'Outstanding', 'Payment tracking'] },
        { h: 'Supplier Management', items: ['Suppliers', 'Supplier ledger', 'Purchase history', 'Outstanding'] },
        { h: 'Transactions', items: ['You Got', 'You Gave', 'Payment', 'Attachments', 'Transaction history'] },
        { h: 'Byaj Khata & Calculator', items: ['Interest accounts', 'Principal', 'Rate', 'Duration', 'Interest tracking'] },
        { h: 'Security & Reports', items: ['MPIN', 'Smart App Lock', 'Customer reports', 'Supplier reports', 'Outstanding reports'] },
      ],
    },
    {
      name: 'Windows App', icon: 'bi bi-windows', soon: 'Coming Soon', desc: 'A dedicated desktop experience for fast billing, offline business operations and professional desktop workflows.',
      groups: [
        { h: 'Planned Capabilities', items: ['Fast billing', 'Desktop POS', 'Offline mode', 'Local database', 'Local backup & restore', 'Printing', 'Barcode / QR', 'Auto updates', 'Security Center', 'Audit logs'] },
      ],
    },
  ];

  aiFeatures = [
    { icon: 'bi bi-chat-dots-fill', title: 'AI Assistant', desc: 'Ask your business questions in plain language and get instant answers.', example: '"Mere top selling products kaunse hain?"' },
    { icon: 'bi bi-camera-fill', title: 'AI Bill Scanner', desc: 'Upload a bill or receipt and let the system extract the details — no manual data entry.', example: null },
    { icon: 'bi bi-lightbulb-fill', title: 'AI Business Insights', desc: 'Automatically surfaces sales trends, slow-moving products, outstanding customers and inventory issues.', example: null },
    { icon: 'bi bi-graph-up-arrow', title: 'Sales Forecasting', desc: 'Uses your historical business data to estimate future sales and demand.', example: null },
    { icon: 'bi bi-file-earmark-bar-graph-fill', title: 'AI Reports', desc: 'Not just numbers — plain-language explanations of what your numbers mean.', example: null },
  ];

  featureCategories = [
    { icon: 'bi bi-receipt-cutoff', name: 'Billing', items: ['GST Billing', 'POS', 'Sales Invoice', 'Purchase Bill', 'Estimate', 'Quotation', 'Sales Order', 'Purchase Order', 'Delivery Challan', 'Credit Note', 'Debit Note'] },
    { icon: 'bi bi-boxes', name: 'Inventory', items: ['Products', 'Categories', 'Brands', 'Units', 'Stock', 'Warehouses', 'Stock Transfer', 'Stock Adjustment', 'Low Stock Alerts', 'Inventory Reports'] },
    { icon: 'bi bi-cart-fill', name: 'Purchase', items: ['Purchase Bills', 'Purchase Orders', 'Purchase Returns', 'Supplier Payments', 'Purchase History'] },
    { icon: 'bi bi-people-fill', name: 'Customers', items: ['Customer Profile', 'Customer Ledger', 'Payments', 'Outstanding', 'Transaction History'] },
    { icon: 'bi bi-truck', name: 'Suppliers', items: ['Supplier Profile', 'Supplier Ledger', 'Payments', 'Outstanding', 'Purchase History'] },
    { icon: 'bi bi-journal-text', name: 'Accounting', items: ['Ledger', 'Cash Book', 'Payment Tracking', 'Byaj Khata', 'Outstanding'] },
    { icon: 'bi bi-wallet2', name: 'Expenses', items: ['Expenses', 'Categories', 'Recurring Expenses', 'Expense Reports', 'Expense Analytics'] },
    { icon: 'bi bi-bar-chart-fill', name: 'Reports', items: ['Sales Reports', 'Purchase Reports', 'GST Reports', 'Inventory Reports', 'Profit & Loss', 'HSN Summary'] },
  ];

  industries = [
    { icon: 'bi bi-shop', name: 'Retail', feats: ['POS', 'Inventory', 'GST Billing'] },
    { icon: 'bi bi-box-seam', name: 'Wholesale', feats: ['Bulk Orders', 'Ledger', 'Outstanding'] },
    { icon: 'bi bi-truck', name: 'Distribution', feats: ['Suppliers', 'Stock Transfer'] },
    { icon: 'bi bi-gem', name: 'Jewellery', feats: ['Gold/Silver Ledger', 'Live Rates'] },
    { icon: 'bi bi-cpu-fill', name: 'Electronics', feats: ['Serial Tracking', 'Warranty'] },
    { icon: 'bi bi-bag-heart-fill', name: 'Garments', feats: ['Size/Variant', 'Seasonal Stock'] },
    { icon: 'bi bi-heart-pulse-fill', name: 'Medical', feats: ['Batch & Expiry', 'Fast Billing'] },
    { icon: 'bi bi-gear-fill', name: 'Manufacturing', feats: ['Raw Materials', 'Production'] },
    { icon: 'bi bi-cup-hot-fill', name: 'Restaurants', feats: ['Quick Billing', 'Daily Reports'] },
    { icon: 'bi bi-briefcase-fill', name: 'Service Businesses', feats: ['Invoicing', 'Customer Ledger'] },
  ];

  security = [
    { icon: 'bi bi-shield-lock-fill', h: 'Secure Authentication', p: 'Protected login for every user account.' },
    { icon: 'bi bi-lock-fill', h: 'MPIN & Smart App Lock', p: 'An extra layer of protection on the Android app.' },
    { icon: 'bi bi-person-badge-fill', h: 'Role-Based Access', p: 'Control what each team member can see and do.' },
    { icon: 'bi bi-cloud-check-fill', h: 'Cloud & Local Backup', p: 'Your data is backed up automatically, with local backup available too.' },
    { icon: 'bi bi-arrow-counterclockwise', h: 'Restore & Export', p: 'Recover your data anytime, or export it whenever you need.' },
    { icon: 'bi bi-list-check', h: 'Audit Logs', p: 'A clear trail of key actions taken across your business account.' },
  ];

  plans = [
    { name: 'Silver', desc: 'Everything you need to get started with billing and ledger.', feats: ['GST Billing & Invoicing', 'Customer & Supplier Ledger', 'Basic Reports', 'Android App'], featured: false },
    { name: 'Gold', desc: 'For growing businesses that need deeper inventory and reporting.', feats: ['Everything in Silver', 'Full Inventory Management', 'AI Business Insights', 'Web + Android Access'], featured: true },
    { name: 'Diamond', desc: 'The complete platform for established, multi-user operations.', feats: ['Everything in Gold', 'Multi-user Access', 'Priority Support', 'Advanced AI Reports'], featured: false },
  ];

  upcoming = [
    { icon: '🪟', h: 'Windows Desktop App', p: 'A dedicated desktop experience for fast, offline-first billing.', tag: 'Coming Soon' },
    { icon: '🔄', h: 'Advanced Synchronization', p: 'A seamless, cross-platform business experience.', tag: 'Planned' },
    { icon: '🤖', h: 'More AI Automation', p: 'More automated business recommendations and workflows.', tag: 'Planned' },
    { icon: '📊', h: 'Advanced Analytics', p: 'Deeper business intelligence and reporting.', tag: 'Planned' },
    { icon: '🏢', h: 'Multi-Branch Management', p: 'Built for businesses running more than one location.', tag: 'Planned' },
  ];
}
