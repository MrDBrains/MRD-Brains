import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

@Component({
  selector: 'app-vyapar-ledger',
  standalone: true, imports:[CommonModule, CountUpDirective],
  template: `
    <section id="product" class="vl-sec">
      <div class="noise"></div>
      <div class="vl-grid"></div>
      <div class="vl-glow g1"></div>
      <div class="vl-glow g2"></div>

      <div class="container" style="position:relative;z-index:2">
        <!-- Launch banner -->
        <div class="launch-banner" data-aos="fade-down">
          <div class="lb-pulse"></div>
          <i class="bi bi-rocket-takeoff-fill"></i>
          <span>Proprietary Product</span>
          <div class="lb-line"></div>
          <span class="lb-sub">by MrD Brains Technology</span>
        </div>

        <div class="vl-main">
          <!-- Left column -->
          <div class="vl-info" data-aos="fade-right" data-aos-duration="800">
            <h2 class="vl-title">
              <span class="vlt-1">Vyapar</span>
              <span class="vlt-2"><em>Ledger</em></span>
            </h2>
            <p class="vl-tagline">A complete business management platform — billing, GST, inventory, ledger, expenses, reports and AI-powered insights, all in one place.</p>

            <div class="vl-feats">
              <div class="vf-row" *ngFor="let f of feats; let i=index"
                   data-aos="fade-up" [attr.data-aos-delay]="i*60">
                <div class="vf-ico"><i [class]="f.icon"></i></div>
                <div class="vf-body">
                  <div class="vf-h">{{ f.label }}</div>
                  <div class="vf-p">{{ f.desc }}</div>
                </div>
                <div class="vf-check"><i class="bi bi-check-lg"></i></div>
              </div>
            </div>

            <div class="vl-actions" data-aos="fade-up" data-aos-delay="400">
              <a href="https://www.vyaparledger.com/download" target="_blank" class="btn-gold">
                <i class="bi bi-download"></i> Download Free
              </a>
              <a href="https://www.vyaparledger.com" target="_blank" class="btn-outline">
                Visit Website <i class="bi bi-arrow-up-right"></i>
              </a>
            </div>

            <div class="vl-plats" data-aos="fade-up" data-aos-delay="480">
              <div class="vp-chip" *ngFor="let p of plats">
                <i [class]="p.icon"></i> {{ p.label }}
              </div>
            </div>
          </div>

          <!-- Centre phone -->
          <div class="vl-phone-col" data-aos="fade-up" data-aos-delay="120">
            <div class="phone-frame">
              <div class="pf-glow"></div>
              <div class="phone">
                <div class="ph-punch"></div>
                <div class="ph-screen">
                  <!-- Status bar -->
                  <div class="ph-status">
                    <div class="ph-brand-row">
                      <img src="assets/logo.png" alt="" class="ph-logo">
                      <span class="ph-app-name">Vyapar Ledger</span>
                    </div>
                    <span class="ph-live">● LIVE</span>
                  </div>
                  <!-- Sales card -->
                  <div class="ph-sales-card">
                    <div class="psc-lbl">Today's Sales</div>
                    <div class="psc-amount">₹2,84,500</div>
                    <div class="psc-trend"><i class="bi bi-arrow-up-short"></i>+12.4% vs yesterday</div>
                    <div class="psc-bars">
                      <div class="psc-bar" style="height:50%"></div>
                      <div class="psc-bar" style="height:65%"></div>
                      <div class="psc-bar" style="height:45%"></div>
                      <div class="psc-bar" style="height:80%"></div>
                      <div class="psc-bar" style="height:58%"></div>
                      <div class="psc-bar hi" style="height:100%"></div>
                    </div>
                  </div>
                  <!-- Data rows -->
                  <div class="ph-rows">
                    <div class="ph-row" *ngFor="let r of rows">
                      <span class="ph-dot" [style.background]="r.c"></span>
                      <span class="phr-lbl">{{ r.l }}</span>
                      <span class="phr-val">{{ r.v }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Floating tags -->
            <div class="vl-tag vt1">
              <i class="bi bi-shield-fill-check"></i>
              <div><div class="vt-h">GST Ready</div><div class="vt-s">Auto invoicing</div></div>
            </div>
            <div class="vl-tag vt2">
              <i class="bi bi-cloud-check-fill"></i>
              <div><div class="vt-h">Cloud Sync</div><div class="vt-s">Always backed up</div></div>
            </div>
          </div>

          <!-- Right: highlight metrics -->
          <div class="vl-metrics" data-aos="fade-left" data-aos-delay="200">
            <div class="vm-card" *ngFor="let m of metrics; let i=index"
                 data-aos="fade-up" [attr.data-aos-delay]="i*80">
              <div class="vm-icon"><i [class]="m.icon"></i></div>
              <div class="vm-val" appCountUp [countUpValue]="m.val">{{ m.val }}</div>
              <div class="vm-lbl">{{ m.lbl }}</div>
            </div>
            <!-- CTA card -->
            <div class="vm-cta-card">
              <div class="vmcta-logo">
                <img src="assets/logo.png" alt="">
                <span>MrD Brains</span>
              </div>
              <p>Built for Indian businesses — GST-ready, mobile-first and backed by MrD Brains Technology.</p>
              <a href="https://www.vyaparledger.com" target="_blank" class="vmcta-link">
                vyaparledger.com <i class="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .vl-sec {
      padding:120px 0; background:var(--obsidian);
      position:relative; overflow:hidden;
    }
    .vl-grid {
      position:absolute; inset:0; pointer-events:none;
      background-image:radial-gradient(circle,var(--border) 1px,transparent 1px);
      background-size:32px 32px; opacity:.5;
    }
    .vl-glow { position:absolute; border-radius:50%; pointer-events:none; filter:blur(120px); }
    .g1 { width:500px;height:500px;background:var(--gold-tint);top:-150px;left:-100px; }
    .g2 { width:400px;height:400px;background:var(--gold-tint);bottom:-100px;right:-80px; }

    /* Launch banner */
    .launch-banner {
      display:inline-flex; align-items:center; gap:10px;
      background:var(--gold-tint); border:1px solid var(--gold-ring);
      border-radius:50px; padding:8px 20px; margin-bottom:52px;
      position:relative;
      i { color:var(--gold); font-size:1rem; animation:floatSlow 2s ease-in-out infinite; }
      span { font-family:'DM Mono',monospace; font-size:.7rem; font-weight:500; color:var(--gold); letter-spacing:.1em; text-transform:uppercase; }
      .lb-sub { color:var(--ghost-muted); }
    }
    .lb-pulse {
      position:absolute; inset:0; border-radius:50px;
      border:1px solid var(--gold-ring);
      animation:pulseRing 3s ease-out infinite;
    }
    .lb-line { width:1px; height:14px; background:var(--gold-ring); }

    /* Layout */
    .vl-main { display:grid; grid-template-columns:1fr auto 1fr; gap:56px; align-items:center; }
    @media(max-width:1199px){ .vl-main{grid-template-columns:1fr;gap:48px} .vl-metrics{display:none} }

    /* Left info */
    .vl-title {
      margin-bottom:16px;
      .vlt-1 { display:block; font-family:var(--f-head); font-weight:800; font-size:clamp(2.4rem,4.5vw,4rem); color:var(--ghost); line-height:1; letter-spacing:-.02em; }
      .vlt-2 { display:block; font-family:var(--f-head); font-style:normal; font-weight:800; font-size:clamp(2.4rem,4.5vw,4rem); color:var(--gold); line-height:1; letter-spacing:-.02em; }
    }
    .vl-tagline { font-size:.98rem; font-weight:300; color:var(--ghost-d); max-width:440px; line-height:1.82; margin-bottom:32px; }

    .vl-feats { display:flex; flex-direction:column; gap:0; margin-bottom:36px; }
    .vf-row {
      display:flex; align-items:center; gap:13px;
      padding:13px 0; border-bottom:1px solid var(--border);
      transition:all .25s;
      &:last-child{border-bottom:none}
      &:hover { padding-left:6px; .vf-ico{background:var(--gold-dim);border-color:var(--gold-ring);i{color:var(--gold)}} }
    }
    .vf-ico {
      width:36px; height:36px; flex-shrink:0;
      background:var(--gold-dim); border:1px solid var(--gold-ring);
      border-radius:9px; display:flex; align-items:center; justify-content:center; transition:all .25s;
      i{color:var(--gold);font-size:.95rem}
    }
    .vf-h { font-family:'Syne',sans-serif; font-weight:700; font-size:.84rem; color:var(--ghost); }
    .vf-p { font-size:.74rem; color:var(--ghost-d); margin-top:1px; }
    .vf-check { margin-left:auto; flex-shrink:0; i{color:var(--emerald);font-size:.88rem} }

    .vl-actions { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:22px; }
    .vl-plats { display:flex; gap:8px; flex-wrap:wrap; }
    .vp-chip {
      display:flex; align-items:center; gap:6px;
      background:#FFFFFF; border:1px solid var(--border);
      border-radius:6px; padding:7px 13px;
      font-family:'DM Mono',monospace; font-size:.7rem; font-weight:500; color:var(--ghost-m);
      i{font-size:.9rem;color:var(--gold)}
    }

    /* Phone */
    .vl-phone-col { position:relative; display:flex; align-items:center; justify-content:center; padding:30px 70px; min-width:340px; }
    .phone-frame { position:relative; }
    .pf-glow {
      position:absolute; inset:-30px;
      background:radial-gradient(ellipse,var(--gold-tint) 0%,transparent 70%);
      pointer-events:none;
    }
    .phone {
      width:234px;
      background:linear-gradient(160deg,#1E1208,#120E08);
      border:2px solid var(--gold-ring); border-radius:34px;
      padding:14px 11px; position:relative; z-index:2;
      box-shadow:0 0 0 6px var(--gold-tint), 0 24px 56px rgba(16,24,40,.16);
      animation:floatSlow 5s ease-in-out infinite;
    }
    .ph-punch { width:58px; height:5px; background:var(--obsidian-s); border-radius:3px; margin:0 auto 13px; }
    .ph-screen { background:#080604; border-radius:22px; padding:14px 12px; }
    .ph-status { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
    .ph-brand-row { display:flex; align-items:center; gap:6px; }
    .ph-logo { width:20px; height:20px; border-radius:4px; background:#fff; padding:1.5px; object-fit:contain; }
    .ph-app-name { font-family:'Syne',sans-serif; font-size:.62rem; font-weight:700; color:#fff; }
    .ph-live { background:rgba(74,222,128,.12); border:1px solid rgba(74,222,128,.25); color:#4ade80; font-family:'DM Mono',monospace; font-size:.52rem; font-weight:500; padding:2px 7px; border-radius:50px; }
    .ph-sales-card { background:rgba(200,146,46,.1); border:1px solid rgba(200,146,46,.22); border-radius:11px; padding:11px; margin-bottom:10px; }
    .psc-lbl { font-family:'DM Mono',monospace; font-size:.54rem; color:#555; text-transform:uppercase; letter-spacing:.08em; margin-bottom:5px; }
    .psc-amount { font-family:'Syne',sans-serif; font-size:1.45rem; font-weight:800; color:#fff; margin-bottom:3px; }
    .psc-trend { font-size:.55rem; color:#4ade80; font-weight:600; margin-bottom:9px; }
    .psc-bars { display:flex; align-items:flex-end; gap:3px; height:34px; }
    .psc-bar { flex:1; border-radius:2px 2px 0 0; background:rgba(200,146,46,.28); }
    .psc-bar.hi { background:var(--gold); }
    .ph-rows { display:flex; flex-direction:column; gap:5px; }
    .ph-row { display:flex; align-items:center; background:var(--obsidian-s); border-radius:7px; padding:7px 9px; }
    .ph-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; }
    .phr-lbl { font-family:'DM Mono',monospace; font-size:.55rem; color:#555; flex:1; margin-left:7px; }
    .phr-val { font-family:'Syne',sans-serif; font-size:.58rem; font-weight:700; color:#fff; }

    /* Float tags */
    .vl-tag {
      position:absolute; z-index:5;
      display:flex; align-items:center; gap:9px;
      background:#FFFFFF; box-shadow:var(--sh-md);
      border-radius:11px; padding:10px 14px;
      .vt-h { font-family:var(--f-head); font-weight:700; font-size:.8rem; color:var(--ghost); }
      .vt-s { font-size:.62rem; color:var(--ghost-m); }
      i { font-size:.9rem; }
    }
    .vt1 { top:8px; right:-4px; border:1px solid var(--gold-ring); animation:floatSlow 4s ease-in-out infinite; i{color:var(--gold)} }
    .vt2 { bottom:36px; left:-4px; border:1px solid var(--emerald-ring); animation:floatSlow 4s ease-in-out infinite 1.8s; i{color:var(--emerald)} }
    @media(max-width:1399px){ .vl-tag{display:none} }

    /* Right metrics */
    .vl-metrics { display:flex; flex-direction:column; gap:14px; }
    .vm-card {
      background:#FFFFFF; border:1px solid var(--border); box-shadow:var(--sh-sm);
      border-radius:14px; padding:20px; text-align:center; transition:all .28s;
      &:hover { border-color:var(--gold-ring); box-shadow:var(--sh-md); transform:translateY(-3px); }
    }
    .vm-icon { width:44px; height:44px; background:var(--gold-dim); border:1px solid var(--gold-ring); border-radius:11px; display:flex; align-items:center; justify-content:center; margin:0 auto 10px; i{color:var(--gold);font-size:1.2rem} }
    .vm-val { font-family:'Syne',sans-serif; font-size:1.8rem; font-weight:800; color:var(--ghost); line-height:1; margin-bottom:4px; }
    .vm-lbl { font-family:'DM Mono',monospace; font-size:.64rem; color:var(--ghost-d); text-transform:uppercase; letter-spacing:.08em; }
    .vm-cta-card {
      background:var(--gold-tint);
      border:1px solid var(--gold-ring); border-radius:14px; padding:20px;
      .vmcta-logo { display:flex; align-items:center; gap:8px; margin-bottom:10px;
        img{width:26px;height:26px;border-radius:6px;object-fit:contain}
        span{font-family:'Syne',sans-serif;font-weight:700;font-size:.8rem;color:var(--gold)} }
      p { font-size:.76rem; color:var(--ghost-d); line-height:1.7; margin-bottom:12px; }
    }
    .vmcta-link {
      display:inline-flex; align-items:center; gap:6px;
      font-family:'DM Mono',monospace; font-size:.72rem; color:var(--gold);
      transition:gap .2s;
      &:hover{gap:10px}
    }
  `]
})
export class VyaparLedgerComponent {
  feats=[
    {icon:'bi bi-receipt',label:'Billing & GST',desc:'One-tap GST-compliant invoice generation and billing.'},
    {icon:'bi bi-journal-text',label:'Ledger',desc:'Track all transactions with complete history.'},
    {icon:'bi bi-boxes',label:'Inventory',desc:'Stock tracking with real-time quantity updates.'},
    {icon:'bi bi-cash-stack',label:'Expenses',desc:'Record and categorise business expenses effortlessly.'},
    {icon:'bi bi-bar-chart-line',label:'Reports',desc:'Sales, GST and business reports generated automatically.'},
    {icon:'bi bi-stars',label:'AI-Powered Insights',desc:'AI-assisted analytics that help you understand your business.'},
  ];
  rows=[
    {c:'var(--gold)',l:'GST This Month',v:'₹42,800'},
    {c:'#4ade80',l:'Pending Invoices',v:'7 items'},
    {c:'#D4A853',l:'Active Customers',v:'142'},
  ];
  plats=[
    {icon:'bi bi-globe2',label:'Web — Available'},
    {icon:'bi bi-android2',label:'Android — Available'},
    {icon:'bi bi-stars',label:'AI — Available'},
    {icon:'bi bi-windows',label:'Windows — Coming Soon'},
  ];
  metrics=[
    {icon:'bi bi-globe2',val:'Web',lbl:'Available Now'},
    {icon:'bi bi-android2',val:'Android',lbl:'Available Now'},
    {icon:'bi bi-windows',val:'Windows',lbl:'Coming Soon'},
  ];
}