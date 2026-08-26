import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true, imports: [CommonModule, RouterLink],
  template: `
    <section id="services" class="svc-sec">
      <div class="noise"></div>
      <div class="svc-glow sg1"></div>
      <div class="svc-glow sg2"></div>

      <div class="container">
        <!-- Header -->
        <div class="svc-top" data-aos="fade-up">
          <div class="svc-top-left">
            <div class="eyebrow">What We Do</div>
            <h2 class="sec-h2">End-to-End <em>Technology</em> Services</h2>
          </div>
          <p class="sec-lead" style="max-width:380px">
            From custom software engineering to cloud infrastructure and AI automation —
            every service is delivered with the precision your business demands.
          </p>
        </div>

        <!-- Featured spotlight -->
        <div class="svc-spotlight" data-aos="fade-up" data-aos-delay="60">
          <!-- Nav tabs -->
          <div class="spot-tabs">
            <button class="spot-tab" *ngFor="let s of svcs; let i=index"
                    [class.active]="i===cur" [class.wa-tab]="s.isWa"
                    (click)="cur=i">
              <i [class]="s.icon"></i>
              <span>{{ s.short }}</span>
              <span class="tab-new" *ngIf="s.isNew">NEW</span>
            </button>
          </div>

          <!-- Content pane -->
          <div class="spot-pane" [class.wa-pane]="svcs[cur].isWa">
            <div class="spot-left">
              <div class="sp-index">{{ (cur+1).toString().padStart(2,'0') }} / {{ svcs.length.toString().padStart(2,'0') }}</div>
              <div class="sp-ico-wrap" [class.sp-wa]="svcs[cur].isWa">
                <div class="sp-ico">
                  <i [class]="svcs[cur].icon"></i>
                </div>
              </div>
              <div class="sp-badge" *ngIf="svcs[cur].isNew">
                <i class="bi bi-stars"></i> New Service — 2025
              </div>
              <h3 class="sp-title">{{ svcs[cur].title }}</h3>
              <p class="sp-desc">{{ svcs[cur].desc }}</p>
              <ul class="sp-bullets">
                <li *ngFor="let b of svcs[cur].bullets">
                  <div class="spb-check"><i class="bi bi-check-lg"></i></div>
                  <div class="spb-body">
                    <div class="spb-title">{{ b.title }}</div>
                    <div class="spb-desc">{{ b.desc }}</div>
                  </div>
                </li>
              </ul>
              <div class="sp-ctas">
                <a routerLink="/contact" class="btn-gold">Get a Quote <i class="bi bi-arrow-right"></i></a>
                <div class="sp-timeframe" *ngIf="svcs[cur].timeframe">
                  <i class="bi bi-clock"></i> Typical delivery: {{ svcs[cur].timeframe }}
                </div>
              </div>
            </div>
            <div class="spot-right" [class.spot-wa]="svcs[cur].isWa">
              <div class="spr-visual">
                <i [class]="svcs[cur].icon + ' spr-big'"></i>
                <div class="spr-ring sr1"></div>
                <div class="spr-ring sr2"></div>
              </div>
              <!-- Tech stack tags -->
              <div class="spr-stack">
                <div class="spr-stack-label">Tech Stack</div>
                <div class="spr-tags">
                  <span class="spr-tag" *ngFor="let t of svcs[cur].stack">{{ t }}</span>
                </div>
              </div>
              <!-- Stats row -->
              <div class="spr-stats">
                <div class="sps-item" *ngFor="let st of svcs[cur].stats">
                  <div class="sps-val">{{ st.val }}</div>
                  <div class="sps-lbl">{{ st.lbl }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- All services grid -->
        <div class="svc-grid">
          <div class="svc-card" *ngFor="let s of svcs; let i=index"
               [class.active]="i===cur" [class.wa-card]="s.isWa"
               (click)="cur=i" data-aos="fade-up" [attr.data-aos-delay]="(i%3)*80">
            <div class="scc-inner">
              <div class="scc-top">
                <div class="scc-icon" [class.scc-wa]="s.isWa"><i [class]="s.icon"></i></div>
                <span class="scc-new" *ngIf="s.isNew"><i class="bi bi-stars"></i> New</span>
                <span class="scc-num">{{ (i+1).toString().padStart(2,'0') }}</span>
              </div>
              <div class="scc-title">{{ s.title }}</div>
              <div class="scc-desc">{{ s.summary }}</div>
              <div class="scc-tags">
                <span *ngFor="let t of s.stack | slice:0:3">{{ t }}</span>
              </div>
              <div class="scc-cta">
                <span>Explore</span> <i class="bi bi-arrow-right"></i>
              </div>
            </div>
            <div class="scc-bar"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .svc-sec { padding: 140px 0; background: var(--obsidian-s); position: relative; overflow: hidden; }
    .svc-glow { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(100px); }
    .sg1 { width:500px;height:500px;background:rgba(201,151,74,.05);top:-100px;right:-150px; }
    .sg2 { width:400px;height:400px;background:rgba(232,93,58,.04);bottom:-100px;left:-100px; }

    .svc-top {
      display: flex; align-items: flex-end; justify-content: space-between; gap: 32px;
      margin-bottom: 56px;
    }
    @media(max-width:767px){ .svc-top{flex-direction:column;align-items:flex-start} }

    /* ── Spotlight ── */
    .svc-spotlight {
      background: linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.14); border-radius: 24px;
      overflow: hidden; margin-bottom: 36px; position: relative;
      &::before {
        content:''; position:absolute; top:0; left:0; right:0; height:1px;
        background:linear-gradient(90deg,transparent,rgba(201,151,74,.4),transparent);
      }
    }

    /* Tabs */
    .spot-tabs {
      display: flex; gap: 0; border-bottom: 1px solid rgba(255,255,255,.06);
      overflow-x: auto; scrollbar-width: none;
      &::-webkit-scrollbar { display: none; }
    }
    .spot-tab {
      display: flex; align-items: center; gap: 7px;
      padding: 16px 22px; background: none; border: none; cursor: pointer;
      font-family: var(--f-head); font-weight: 600; font-size: .78rem;
      color: rgba(237,233,225,.4); white-space: nowrap; position: relative;
      transition: all .22s; border-bottom: 2px solid transparent; margin-bottom: -1px;
      i { font-size: .85rem; color: var(--coral); }
      &.active { color: var(--ghost); border-bottom-color: var(--gold); i{color:var(--gold)} }
      &.wa-tab.active { border-bottom-color: #25D366; i{color:#25D366} }
      &:hover:not(.active) { color: var(--ghost-m); }
    }
    .tab-new {
      background: rgba(37,211,102,.14); border: 1px solid rgba(37,211,102,.25);
      border-radius: 4px; padding: 2px 7px;
      font-family: var(--f-mono); font-size: .56rem; color: #25D366; letter-spacing: .08em;
    }

    /* Content pane */
    .spot-pane {
      display: grid; grid-template-columns: 1.2fr 1fr; gap: 0;
      min-height: 440px;
    }
    .spot-pane.wa-pane { background: rgba(37,211,102,.02); }
    @media(max-width:767px){ .spot-pane{grid-template-columns:1fr} }

    .spot-left { padding: 40px; }
    .sp-index { font-family:var(--f-mono);font-size:.6rem;color:rgba(201,151,74,.3);letter-spacing:.1em;margin-bottom:8px; }
    .sp-ico-wrap {
      display: inline-flex; margin-bottom: 12px;
    }
    .sp-ico {
      width: 56px; height: 56px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      border-radius: 15px; display: flex; align-items: center; justify-content: center;
      animation: goldGlow 4s ease-in-out infinite;
      i { color: var(--gold); font-size: 1.5rem; }
    }
    .sp-ico-wrap.sp-wa .sp-ico {
      background: rgba(37,211,102,.1); border-color: rgba(37,211,102,.25);
      animation: none; i { color: #25D366; }
    }
    .sp-badge {
      display: inline-flex; align-items: center; gap: 5px;
      background: rgba(37,211,102,.08); border: 1px solid rgba(37,211,102,.2);
      border-radius: 50px; padding: 4px 13px; margin-bottom: 14px;
      font-family: var(--f-mono); font-size: .64rem; color: #25D366; letter-spacing: .06em;
      i { font-size: .7rem; }
    }
    .sp-title { font-family:var(--f-head);font-weight:800;font-size:1.55rem;color:var(--ghost);margin-bottom:12px; }
    .sp-desc  { font-size:.88rem;font-weight:300;color:var(--ghost-d);line-height:1.82;margin-bottom:22px; }
    .sp-bullets { list-style:none;padding:0;display:flex;flex-direction:column;gap:10px;margin-bottom:28px; }
    .sp-bullets li { display:flex;align-items:flex-start;gap:10px; }
    .spb-check {
      width:22px;height:22px;flex-shrink:0;border-radius:6px;margin-top:1px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:.7rem}
    }
    .spb-title { font-family:var(--f-head);font-weight:700;font-size:.82rem;color:var(--ghost);margin-bottom:2px; }
    .spb-desc  { font-size:.74rem;color:var(--ghost-d);line-height:1.5; }
    .sp-ctas { display:flex;align-items:center;gap:18px;flex-wrap:wrap; }
    .sp-timeframe {
      display:flex;align-items:center;gap:6px;
      font-family:var(--f-mono);font-size:.66rem;color:var(--ghost-d);letter-spacing:.06em;
      i{color:var(--gold);font-size:.72rem}
    }

    .spot-right {
      border-left:1px solid rgba(255,255,255,.06);
      display:flex;flex-direction:column;gap:0;
    }
    .spot-right.spot-wa { border-color:rgba(37,211,102,.08); }
    @media(max-width:767px){ .spot-right{border-left:none;border-top:1px solid rgba(255,255,255,.06)} }
    .spr-visual {
      flex:1;display:flex;align-items:center;justify-content:center;
      position:relative;overflow:hidden;padding:32px;min-height:200px;
    }
    .spr-big { font-size:6rem;color:var(--gold);opacity:.2;animation:floatSlow 5s ease-in-out infinite; }
    .spot-right.spot-wa .spr-big { color:#25D366;opacity:.25; }
    .spr-ring {
      position:absolute;border-radius:50%;
      top:50%;left:50%;transform:translate(-50%,-50%);
      border:1px solid rgba(201,151,74,.08);
    }
    .sr1 { width:200px;height:200px;animation:rotateSlow 22s linear infinite; }
    .sr2 { width:130px;height:130px;animation:rotateSlowReverse 16s linear infinite;border-style:dashed; }
    .spot-right.spot-wa .spr-ring { border-color:rgba(37,211,102,.08); }

    .spr-stack {
      border-top:1px solid rgba(255,255,255,.06);padding:18px 24px;
    }
    .spr-stack-label { font-family:var(--f-mono);font-size:.58rem;text-transform:uppercase;letter-spacing:.16em;color:rgba(201,151,74,.4);margin-bottom:10px; }
    .spr-tags { display:flex;flex-wrap:wrap;gap:6px; }
    .spr-tag {
      background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
      border-radius:5px;padding:4px 11px;
      font-family:var(--f-mono);font-size:.65rem;color:var(--ghost-d);
    }
    .spr-stats {
      border-top:1px solid rgba(255,255,255,.06);
      display:grid;grid-template-columns:repeat(3,1fr);
    }
    .sps-item {
      padding:16px;text-align:center;border-right:1px solid rgba(255,255,255,.06);
      &:last-child{border-right:none}
    }
    .sps-val { font-family:var(--f-head);font-weight:800;font-size:1.2rem;color:var(--ghost);line-height:1;margin-bottom:3px; }
    .sps-lbl { font-family:var(--f-mono);font-size:.58rem;color:var(--ghost-d);text-transform:uppercase;letter-spacing:.08em; }

    /* ── Grid ── */
    .svc-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:14px; }
    @media(max-width:991px){ .svc-grid{grid-template-columns:repeat(2,1fr)} }
    @media(max-width:575px){ .svc-grid{grid-template-columns:1fr} }
    .svc-card {
      background:var(--obsidian-m);border:1px solid rgba(255,255,255,.06);
      border-radius:16px;overflow:hidden;cursor:pointer;position:relative;
      transition:all .32s cubic-bezier(.4,0,.2,1);
      &:hover { border-color:rgba(201,151,74,.2);transform:translateY(-5px);box-shadow:0 20px 50px rgba(0,0,0,.35); }
      &.active { border-color:rgba(201,151,74,.3);background:var(--obsidian-l); .scc-bar{transform:scaleX(1)} }
      &.wa-card { border-color:rgba(37,211,102,.1); &:hover{border-color:rgba(37,211,102,.25)} &.active{border-color:rgba(37,211,102,.3);.scc-bar{background:linear-gradient(90deg,#25D366,#128C7E)}} }
    }
    .scc-inner { padding:24px; }
    .scc-top { display:flex;align-items:center;margin-bottom:14px;gap:8px; }
    .scc-icon {
      width:40px;height:40px;border-radius:10px;
      background:var(--coral-dim);border:1px solid var(--coral-ring);
      display:flex;align-items:center;justify-content:center;flex-shrink:0;
      transition:all .28s;
      i{color:var(--coral);font-size:1.15rem}
    }
    .scc-icon.scc-wa { background:rgba(37,211,102,.08);border-color:rgba(37,211,102,.2); i{color:#25D366} }
    .svc-card.active .scc-icon { background:var(--gold-dim);border-color:var(--gold-ring); i{color:var(--gold)} }
    .scc-new {
      display:inline-flex;align-items:center;gap:3px;
      background:rgba(37,211,102,.1);border:1px solid rgba(37,211,102,.2);border-radius:4px;
      padding:2px 8px;font-family:var(--f-mono);font-size:.58rem;color:#25D366;letter-spacing:.06em;
      i{font-size:.6rem}
    }
    .scc-num { margin-left:auto;font-family:var(--f-mono);font-size:.62rem;color:rgba(201,151,74,.25); }
    .scc-title { font-family:var(--f-head);font-weight:700;font-size:.88rem;color:var(--ghost);margin-bottom:8px; }
    .scc-desc  { font-size:.76rem;color:var(--ghost-d);line-height:1.65;margin-bottom:14px; }
    .scc-tags  { display:flex;flex-wrap:wrap;gap:5px;margin-bottom:16px;
      span{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:4px;padding:3px 9px;font-family:var(--f-mono);font-size:.6rem;color:var(--ghost-d)} }
    .scc-cta { display:flex;align-items:center;gap:5px;font-family:var(--f-mono);font-size:.68rem;color:rgba(201,151,74,.35);transition:all .22s;
      .svc-card:hover &{color:var(--gold);gap:9px} }
    .scc-bar {
      height:2px;background:linear-gradient(90deg,var(--gold-l),var(--coral));
      transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.4,0,.2,1);
      .svc-card:hover &{transform:scaleX(1)}
    }
  `]
})
export class ServicesComponent {
  cur = 0;
  svcs = [
    {
      icon: 'bi bi-window', isWa: false, isNew: false,
      short: 'Custom Software', title: 'Custom Software Development',
      summary: 'Business applications built around how you actually work.',
      desc: 'From internal business tools to full enterprise platforms, we design and build custom software that fits your existing workflows — not the other way around.',
      timeframe: '6–16 weeks',
      stack: ['.NET 8', 'Angular', 'SQL Server', 'REST API'],
      bullets: [
        { title: 'Business Applications',  desc: 'Internal tools and dashboards built around your day-to-day operations.' },
        { title: 'Enterprise Applications', desc: 'Multi-department systems that handle complex business logic and data.' },
        { title: 'Desktop Applications',    desc: 'Reliable Windows applications for teams that need offline access.' },
        { title: 'Admin Panels',            desc: 'Purpose-built back-office interfaces to manage your business.' },
        { title: 'API Development',         desc: 'Clean, documented APIs that connect your software to the tools you already use.' },
      ],
      stats: [{ val: '.NET 8', lbl: 'Latest Stack' }, { val: 'REST API', lbl: 'Integration Ready' }],
    },
    {
      icon: 'bi bi-globe2', isWa: false, isNew: false,
      short: 'Web & Mobile', title: 'Web & Mobile Development',
      summary: 'Websites, web applications, mobile apps and dashboards.',
      desc: 'Customer-facing websites, internal web applications, mobile apps and dashboards — built to be fast, responsive and easy for real people to use.',
      timeframe: '8–20 weeks',
      stack: ['Angular', 'React', 'ASP.NET Core', 'TypeScript'],
      bullets: [
        { title: 'Websites',           desc: 'Marketing and business websites built to convert visitors into leads.' },
        { title: 'Web Applications',   desc: 'Scalable customer and internal web platforms.' },
        { title: 'Mobile Applications',desc: 'Mobile experiences for customers and field teams.' },
        { title: 'Dashboards',         desc: 'Real-time dashboards that turn business data into decisions.' },
      ],
      stats: [{ val: 'Angular / React', lbl: 'Frontend' }, { val: 'Responsive', lbl: 'Every Device' }],
    },
    {
      icon: 'bi bi-robot', isWa: true, isNew: false,
      short: 'AI & Automation', title: 'AI & Automation',
      summary: 'AI assistants, WhatsApp automation and workflow automation.',
      desc: 'AI-powered assistants, WhatsApp Business automation, chatbots and workflow automation that take repetitive work off your team\'s plate.',
      timeframe: '3–8 weeks',
      stack: ['WhatsApp Business API', 'OpenAI GPT-4', 'Node.js', 'Webhook'],
      bullets: [
        { title: 'AI Assistants',       desc: 'AI-powered assistants that handle FAQs, lookups and routine requests.' },
        { title: 'WhatsApp Automation', desc: 'Order confirmations, payment reminders and customer support on WhatsApp.' },
        { title: 'Workflow Automation', desc: 'Automate repetitive, multi-step business processes end to end.' },
        { title: 'Chatbots',            desc: 'Conversational bots trained on your business, available around the clock.' },
        { title: 'Integrations',        desc: 'Connect AI workflows directly into your existing business software.' },
      ],
      stats: [{ val: 'WhatsApp API', lbl: 'Native' }, { val: '24/7', lbl: 'Always On' }],
    },
    {
      icon: 'bi bi-building', isWa: false, isNew: false,
      short: 'Hospitality', title: 'Hospitality Technology',
      summary: 'Hotel websites, booking engines and admin panels.',
      desc: 'Connected digital experiences for hotels — guest-facing websites, direct booking engines, reservation systems and administrative panels that support real hotel operations.',
      timeframe: '6–14 weeks',
      stack: ['Angular', '.NET Core', 'SQL Server', 'Payment Gateway'],
      bullets: [
        { title: 'Hotel Websites',      desc: 'Guest-facing websites designed to showcase the property and drive bookings.' },
        { title: 'Booking Engines',     desc: 'Direct booking engines that reduce dependency on third-party OTAs.' },
        { title: 'Hotel Admin Panels',  desc: 'Operational dashboards for managing bookings and day-to-day admin.' },
        { title: 'Reservation Systems', desc: 'Reservation workflows connected to your booking and admin tools.' },
        { title: 'Integrations',        desc: 'Payment gateways and other third-party systems connected end to end.' },
      ],
      stats: [{ val: 'Direct Booking', lbl: 'No OTA Commission' }, { val: 'Admin Panel', lbl: 'Included' }],
    },
    {
      icon: 'bi bi-bar-chart-line', isWa: false, isNew: false,
      short: 'Business & Enterprise', title: 'Business & Enterprise Solutions',
      summary: 'HR & payroll, business management and reporting.',
      desc: 'Internal systems that keep growing businesses organised — HR and payroll, business management platforms, reporting dashboards and the internal tools your team relies on daily.',
      timeframe: '6–14 weeks',
      stack: ['.NET 8', 'SQL Server', 'Crystal Reports'],
      bullets: [
        { title: 'HR & Payroll',         desc: 'Employee management, payroll processing and attendance tracking.' },
        { title: 'Business Management',  desc: 'Platforms that bring scattered business data into one place.' },
        { title: 'Reporting',            desc: 'Custom reports and compliance documentation, generated automatically.' },
        { title: 'Dashboards',           desc: 'At-a-glance views of the metrics that matter to your business.' },
        { title: 'Internal Tools',       desc: 'Purpose-built tools for the workflows off-the-shelf software doesn\'t cover.' },
      ],
      stats: [{ val: 'Role-Based', lbl: 'Access Control' }, { val: 'Custom', lbl: 'Reporting' }],
    },
  ];
}