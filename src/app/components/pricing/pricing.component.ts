import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true, imports: [CommonModule, RouterLink],
  template: `
    <section id="pricing" class="pricing-sec">
      <div class="noise"></div>
      <div class="pricing-glow g1"></div>
      <div class="pricing-glow g2"></div>
      <div class="container">

        <div class="pricing-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">Investment</div>
            <h2 class="sec-h2">Transparent <em>Pricing</em></h2>
            
          </div>
          
          <p class="sec-lead" style="max-width:400px">
  Every project is tailored to your business. Pricing depends on scope,
  integrations, and complexity — we provide a fixed quote after discovery.
</p>
        </div>

        <!-- Trust bar -->
        <div class="trust-bar" data-aos="fade-up" data-aos-delay="40">
          <div class="tb-item" *ngFor="let t of trustItems">
            <i [class]="t.icon"></i><span>{{ t.text }}</span>
          </div>
        </div>

        <!-- Cards -->
        <div class="p-grid">
          <div class="p-card" *ngFor="let p of plans; let i=index"
               [class.featured]="p.featured"
               data-aos="fade-up" [attr.data-aos-delay]="i*80">
            <div class="pc-pop" *ngIf="p.featured"><i class="bi bi-stars"></i> Most Popular</div>
            <div class="pc-top">
              <div class="pc-icon-wrap">
                <div class="pc-icon"><i [class]="p.icon"></i></div>
                <div class="pc-tier">{{ p.tier }}</div>
              </div>
              <div class="pc-best-for">Best for: <strong>{{ p.bestFor }}</strong></div>
            </div>
            <div class="pc-price-row">
              <div class="pc-price"><sup>₹</sup>{{ p.price }}</div>
              <div class="pc-price-meta">
                <span class="ppm-period">project investment</span>
                <span class="ppm-gst">+ GST as applicable</span>
              </div>
            </div>
            <p class="pc-desc">{{ p.desc }}</p>
            <div class="pc-rule"></div>
            <div class="pc-includes-label">What's included</div>
            <ul class="pc-feats">
              <li *ngFor="let f of p.feats" [class.off]="!f.on">
                <span class="pf-ico" [class.on]="f.on">
                  <i [class]="f.on ? 'bi bi-check-lg' : 'bi bi-x-lg'"></i>
                </span>
                <div class="pf-body">
                  <span class="pf-text">{{ f.text }}</span>
                  <span class="pf-hint" *ngIf="f.hint">{{ f.hint }}</span>
                </div>
              </li>
            </ul>
            <div class="pc-delivery">
              <i class="bi bi-clock"></i>
              Typical delivery: <strong>{{ p.delivery }}</strong>
            </div>
            <a routerLink="/contact"
               [class]="p.featured ? 'btn-gold pc-btn' : 'btn-outline pc-btn'">
              {{ p.cta }} <i class="bi bi-arrow-right"></i>
            </a>
            <div class="pc-guarantee">
              <i class="bi bi-shield-fill-check"></i> Free discovery call included
            </div>
          </div>
        </div>

       
        <!-- FAQ -->
        <div class="pricing-faq" data-aos="fade-up">
          <div class="pf-header">
            <div class="eyebrow">Common Questions</div>
            <h3 class="pf-title">Pricing <em>FAQ</em></h3>
          </div>
          <div class="faq-grid">
            <div class="faq-item" *ngFor="let f of faqs"
                 (click)="f.open=!f.open" [class.open]="f.open">
              <div class="faq-q">
                <span>{{ f.q }}</span>
                <i [class]="f.open ? 'bi bi-dash' : 'bi bi-plus'"></i>
              </div>
              <div class="faq-a" *ngIf="f.open">{{ f.a }}</div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="pricing-cta" data-aos="fade-up">
          <div class="pcta-left">
            <div class="pcta-icon"><i class="bi bi-chat-dots-fill"></i></div>
            <div>
              <div class="pcta-title">Not sure which plan fits?</div>
              <div class="pcta-desc">Book a free 30-minute call. No obligation, no sales pressure — just an honest conversation about what you actually need.</div>
            </div>
          </div>
          <div class="pcta-actions">
            <a routerLink="/contact" class="btn-gold">Book Free Call <i class="bi bi-telephone-fill"></i></a>
            <a href="https://wa.me/919372401266" target="_blank" class="btn-wa">
              <i class="bi bi-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .pricing-sec { padding:140px 0;background:var(--obsidian-s);position:relative;overflow:hidden; }
    .pricing-glow { position:absolute;border-radius:50%;pointer-events:none;filter:blur(110px); }
    .g1 { width:600px;height:400px;background:rgba(201,151,74,.05);top:-100px;right:-100px; }
    .g2 { width:500px;height:400px;background:rgba(240,103,74,.04);bottom:-100px;left:-100px; }

    .pricing-top {
      display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:36px;
    }
    @media(max-width:767px){ .pricing-top{flex-direction:column;align-items:flex-start;gap:14px} }

    /* Trust bar */
    .trust-bar { display:flex;flex-wrap:wrap;gap:10px;margin-bottom:52px; }
    .tb-item {
      display:flex;align-items:center;gap:7px;
      background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);
      border-radius:50px;padding:8px 16px;
      font-family:var(--f-mono);font-size:.63rem;color:var(--ghost-d);letter-spacing:.06em;
      i{color:var(--gold);font-size:.72rem}
    }

    /* Grid */
    .p-grid {
      display:grid;grid-template-columns:repeat(3,1fr);
      gap:20px;align-items:start;margin-bottom:52px;
    }
    @media(max-width:991px){
      .p-grid{grid-template-columns:1fr;max-width:500px;margin-left:auto;margin-right:auto}
    }

    /* Card */
    .p-card {
      background:var(--obsidian-m);border:1px solid var(--border);
      border-radius:22px;padding:32px 26px;position:relative;
      display:flex;flex-direction:column;gap:0;
      box-shadow:var(--sh-sm);
      transition:all .32s cubic-bezier(.4,0,.2,1);
      &:not(.featured):hover{border-color:rgba(201,151,74,.22);transform:translateY(-5px);box-shadow:var(--sh-lg)}
    }
    .p-card.featured {
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border-color:rgba(201,151,74,.32);
      box-shadow:0 0 0 1px rgba(201,151,74,.12),var(--sh-lg);
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent)}
    }
    @media(min-width:992px){
      .p-card.featured{transform:scale(1.04)}
      .p-card.featured:hover{transform:scale(1.04) translateY(-5px)}
    }

    .pc-pop {
      position:absolute;top:-14px;left:50%;transform:translateX(-50%);
      background:linear-gradient(135deg,var(--gold-l),var(--gold));
      color:var(--obsidian);font-family:var(--f-head);font-weight:800;font-size:.65rem;
      letter-spacing:.07em;text-transform:uppercase;
      padding:5px 18px;border-radius:50px;white-space:nowrap;
      box-shadow:0 4px 18px rgba(201,151,74,.4);
      i{margin-right:4px}
    }
    .pc-top { display:flex;align-items:center;justify-content:space-between;margin-bottom:20px; }
    .pc-icon-wrap { display:flex;align-items:center;gap:11px; }
    .pc-icon {
      width:44px;height:44px;border-radius:11px;flex-shrink:0;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:1.1rem}
      .p-card.featured &{animation:goldGlow 4s ease-in-out infinite}
    }
    .pc-tier {
      font-family:var(--f-head);font-weight:800;font-size:1rem;color:var(--ghost);
      .p-card.featured &{color:var(--gold-l)}
    }
    .pc-best-for {
      font-family:var(--f-mono);font-size:.58rem;color:var(--ghost-d);
      text-align:right;letter-spacing:.05em;line-height:1.5;
      strong{color:var(--ghost-m);font-weight:500;display:block}
    }
    .pc-price-row { display:flex;align-items:flex-end;gap:12px;margin-bottom:10px; }
    .pc-price {
      font-family:var(--f-head);font-size:2.6rem;font-weight:800;color:var(--ghost);line-height:1;
      sup{font-size:1.15rem;vertical-align:top;margin-top:5px;display:inline-block}
    }
    .pc-price-meta { display:flex;flex-direction:column;gap:2px;padding-bottom:4px; }
    .ppm-period { font-family:var(--f-mono);font-size:.58rem;color:var(--ghost-d);text-transform:uppercase;letter-spacing:.08em; }
    .ppm-gst   { font-family:var(--f-mono);font-size:.56rem;color:rgba(201,151,74,.4); }
    .pc-desc { font-size:.8rem;color:var(--ghost-d);line-height:1.72;margin-bottom:20px; }
    .pc-rule { height:1px;background:rgba(255,255,255,.07);margin-bottom:18px; }
    .pc-includes-label {
      font-family:var(--f-mono);font-size:.58rem;text-transform:uppercase;
      letter-spacing:.14em;color:rgba(201,151,74,.4);margin-bottom:12px;
    }
    .pc-feats {
      list-style:none;padding:0;margin-bottom:18px;flex:1;
      display:flex;flex-direction:column;gap:10px;
      li{display:flex;align-items:flex-start;gap:10px}
      li.off .pf-text{color:var(--ghost-d)}
    }
    .pf-ico {
      width:20px;height:20px;flex-shrink:0;border-radius:5px;margin-top:1px;
      display:flex;align-items:center;justify-content:center;
      background:rgba(255,255,255,.04);i{font-size:.68rem;color:rgba(255,255,255,.18)}
      &.on{background:var(--gold-dim);border:1px solid var(--gold-ring);i{color:var(--gold)}}
    }
    .pf-body { display:flex;flex-direction:column;gap:2px; }
    .pf-text { font-size:.82rem;color:var(--ghost-m); }
    .pf-hint { font-family:var(--f-mono);font-size:.58rem;color:var(--ghost-d);letter-spacing:.04em; }
    .pc-delivery {
      display:flex;align-items:center;gap:7px;margin-bottom:18px;
      font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d);letter-spacing:.05em;
      background:rgba(255,255,255,.025);border-radius:8px;padding:9px 13px;
      i{color:var(--gold);font-size:.7rem}
      strong{color:var(--ghost-m);font-weight:500}
    }
    .pc-btn {
      display:flex;width:100%;justify-content:center;align-items:center;gap:8px;
      text-decoration:none;font-size:.78rem;padding:14px;margin-bottom:12px;
    }
    .pc-guarantee {
      display:flex;align-items:center;justify-content:center;gap:6px;
      font-family:var(--f-mono);font-size:.58rem;color:rgba(201,151,74,.4);letter-spacing:.06em;
      i{font-size:.65rem}
    }

    /* Comparison table */
    .compare-wrap {
      background:var(--obsidian-m);border:1px solid var(--border);
      border-radius:20px;overflow:hidden;margin-bottom:48px;box-shadow:var(--sh-md);
    }
    .compare-header { padding:26px 28px;border-bottom:1px solid rgba(255,255,255,.06); }
    .ch-title { font-family:var(--f-head);font-weight:800;font-size:1.05rem;color:var(--ghost);margin-bottom:3px; }
    .ch-subtitle { font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d);letter-spacing:.08em; }
    .compare-table-scroll { overflow-x:auto; }
    .compare-table { min-width:520px; }
    .ct-head {
      display:grid;grid-template-columns:2fr 1fr 1fr 1fr;
      padding:14px 28px;background:rgba(255,255,255,.025);
      border-bottom:1px solid rgba(255,255,255,.06);
    }
    .cth-feat { font-family:var(--f-mono);font-size:.6rem;text-transform:uppercase;letter-spacing:.14em;color:var(--ghost-d); }
    .cth-plan { font-family:var(--f-head);font-weight:700;font-size:.78rem;color:var(--ghost-d);text-align:center;&.hi{color:var(--gold)} }
    .ct-row {
      display:grid;grid-template-columns:2fr 1fr 1fr 1fr;
      padding:13px 28px;border-bottom:1px solid rgba(255,255,255,.04);
      transition:background .2s;
      &:hover{background:rgba(255,255,255,.02)}
      &.alt{background:rgba(255,255,255,.012)}
      &:last-child{border-bottom:none}
    }
    .ctr-feat { font-size:.8rem;color:var(--ghost-m);display:flex;align-items:center; }
    .ctr-val {
      display:flex;align-items:center;justify-content:center;
      font-family:var(--f-mono);font-size:.74rem;color:var(--ghost-m);
      &.hi{color:var(--gold-l)}
      i{font-size:.8rem}
    }

    /* FAQ */
    .pricing-faq { margin-bottom:48px; }
    .pf-header { margin-bottom:28px; }
    .pf-title {
      font-family:var(--f-head);font-weight:800;font-size:1.5rem;color:var(--ghost);
      em{color:var(--gold);font-style:italic;font-family:var(--f-display);font-weight:300}
    }
    .faq-grid { display:grid;grid-template-columns:1fr 1fr;gap:10px; }
    @media(max-width:767px){ .faq-grid{grid-template-columns:1fr} }
    .faq-item {
      background:var(--obsidian-m);border:1px solid var(--border);
      border-radius:13px;cursor:pointer;transition:all .22s;
      &:hover,.open{border-color:rgba(201,151,74,.2);background:var(--obsidian-l)}
    }
    .faq-q {
      display:flex;align-items:center;justify-content:space-between;gap:16px;
      padding:17px 20px;
      font-family:var(--f-head);font-weight:700;font-size:.84rem;color:var(--ghost);
      i{flex-shrink:0;color:var(--gold);font-size:.88rem}
    }
    .faq-a {
      padding:0 20px 17px;font-size:.8rem;color:var(--ghost-d);line-height:1.8;
      border-top:1px solid rgba(255,255,255,.05);padding-top:13px;
      animation:revealUp .22s ease;
    }

    /* Bottom CTA */
    .pricing-cta {
      display:flex;align-items:center;justify-content:space-between;gap:28px;
      background:linear-gradient(135deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.18);border-radius:20px;
      padding:32px 36px;position:relative;overflow:hidden;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.4),transparent)}
    }
    @media(max-width:767px){ .pricing-cta{flex-direction:column;align-items:flex-start;padding:24px 20px} }
    .pcta-left { display:flex;align-items:flex-start;gap:16px; }
    .pcta-icon {
      width:52px;height:52px;flex-shrink:0;border-radius:14px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:1.3rem}
      animation:goldGlow 5s ease-in-out infinite;
    }
    .pcta-title { font-family:var(--f-head);font-weight:800;font-size:1rem;color:var(--ghost);margin-bottom:5px; }
    .pcta-desc  { font-size:.81rem;color:var(--ghost-d);line-height:1.72;max-width:440px; }
    .pcta-actions { display:flex;gap:10px;flex-wrap:wrap;flex-shrink:0; }
    .btn-wa {
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(37,211,102,.1);border:1px solid rgba(37,211,102,.26);
      border-radius:4px;padding:14px 24px;
      font-family:var(--f-head);font-weight:700;font-size:.78rem;
      letter-spacing:.05em;text-transform:uppercase;
      color:#25D366 !important;transition:all .25s;
      i{font-size:.88rem}
      &:hover{background:rgba(37,211,102,.2);border-color:rgba(37,211,102,.45);transform:translateY(-2px)}
    }
  `]
})
export class PricingComponent {
  trustItems = [
    { icon: 'bi bi-telephone-fill', text: 'Free 30-min discovery call' },
    { icon: 'bi bi-file-earmark-text', text: 'Detailed proposal within 48 hrs' },
    { icon: 'bi bi-shield-fill-check', text: 'NDA signed before kickoff' },
    { icon: 'bi bi-arrow-repeat', text: 'Agile delivery with weekly updates' },
    { icon: 'bi bi-patch-check-fill', text: '90-day post-launch support' },
  ];

  plans = [
    {
      tier: 'MVP Build',
      price: '50K+',
      featured: false,
      cta: 'Get Estimate',
      icon: 'bi bi-rocket-takeoff',
      bestFor: 'Startups & Idea Validation',
      delivery: '3–6 weeks',
      desc: 'Launch a working product fast. Perfect for validating ideas and getting your first users.',
      feats: [
        { on: true, text: 'Core business workflow system', hint: 'Billing / CRM / basic automation' },
        { on: true, text: 'Clean & scalable architecture', hint: null },
        { on: true, text: 'Basic cloud deployment', hint: 'Azure / VPS' },
        { on: true, text: 'Free discovery & planning call', hint: null },
        { on: false, text: 'Advanced integrations (ERP / APIs)', hint: null },
        { on: false, text: 'Dedicated account manager', hint: null },
      ],
    },
    {
      tier: 'Business System',
      price: '1.5L+',
      featured: true,
      cta: 'Get Exact Quote',
      icon: 'bi bi-lightning-charge-fill',
      bestFor: 'SMEs & Growing Businesses',
      delivery: '6–14 weeks',
      desc: 'End-to-end system to automate operations, reduce manual work, and improve efficiency.',
      feats: [
        { on: true, text: 'Complete business automation system', hint: 'ERP / CRM / dashboards' },
        { on: true, text: 'WhatsApp automation integration', hint: 'Reminders, alerts, workflows' },
        { on: true, text: 'Secure cloud hosting + backups', hint: null },
        { on: true, text: 'Performance & scalability ready', hint: null },
        { on: true, text: 'Dedicated developer support', hint: 'Direct WhatsApp access' },
        { on: true, text: 'Priority updates & changes', hint: '< 48 hr turnaround' },
      ],
    },
    {
      tier: 'Custom Platform',
      price: '5L+',
      featured: false,
      cta: "Let's Discuss",
      icon: 'bi bi-building-fill',
      bestFor: 'Enterprises & SaaS Platforms',
      delivery: '12–24 weeks',
      desc: 'Fully custom, scalable platforms with enterprise-grade architecture, security, and long-term support.',
      feats: [
        { on: true, text: 'Full-scale SaaS / enterprise platform', hint: 'Multi-tenant capable' },
        { on: true, text: 'Advanced integrations & APIs', hint: '3rd-party + internal systems' },
        { on: true, text: 'Dedicated cloud infrastructure', hint: 'Azure / AWS' },
        { on: true, text: 'High-level security & compliance', hint: null },
        { on: true, text: '24/7 priority support', hint: null },
        { on: true, text: 'SLA-backed uptime guarantee', hint: '99.9%' },
      ],
    },
  ];

  compareRows: { label: string; vals: any[] }[] = [
    { label: 'Applications / Modules', vals: ['1 app', 'Multi-module', 'Unlimited'] },
    { label: 'Post-launch support', vals: ['20 hrs', '80 hrs', 'Unlimited'] },
    { label: 'Hosting included', vals: [true, true, true] },
    { label: 'Custom API integrations', vals: [false, true, true] },
    { label: 'Dedicated account manager', vals: [false, true, true] },
    { label: 'SLA uptime guarantee', vals: [false, false, true] },
    { label: 'Source code handover', vals: [true, true, true] },
    { label: 'NDA & IP protection', vals: [true, true, true] },
    { label: 'Typical delivery', vals: ['3–6 wks', '6–14 wks', '12–24 wks'] },
  ];

  faqs: any[] = [
    {
      open: false, q: 'Are these fixed prices or estimates?',
      a: 'These are starting prices. Every project is scoped individually — we provide a fixed-price proposal after the discovery call, so you know the exact cost before committing. No surprises.'
    },
    {
      open: false, q: 'Do you sign NDAs before discussing my project?',
      a: 'Absolutely. We sign a mutual NDA before any detailed discussion. Your idea, business logic, and data remain completely confidential throughout the engagement.'
    },
    {
      open: false, q: 'What happens if the project scope changes mid-way?',
      a: 'We work on fixed-scope agreements. If you request scope changes mid-project, we agree on a change order first — you\'ll always know the cost impact before we proceed.'
    },
    {
      open: false, q: 'Do you offer milestone-based or EMI payments?',
      a: 'Yes. We typically split into 3 milestones: 30% on kickoff, 40% at mid-delivery, 30% on final handover. Flexible arrangements are available for enterprise projects.'
    },
    {
      open: false, q: 'Who owns the source code after delivery?',
      a: 'You do — 100%. On final payment, full source code, documentation, and all IP are formally transferred to you. We retain absolutely no rights.'
    },
    {
      open: false, q: 'Can I start with Starter and scale up later?',
      a: 'Yes. Many clients start with Starter to validate their idea, then upgrade. We build everything with scalability in mind — upgrading is a continuation, not a rebuild.'
    },
  ];
}