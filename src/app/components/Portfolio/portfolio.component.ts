import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true, imports: [CommonModule, RouterLink],
  template: `
    <section id="portfolio" class="port-sec">
      <div class="noise"></div>
      <div class="port-glow pg1"></div>
      <div class="port-glow pg2"></div>

      <div class="container">

        <!-- Portfolio Snapshot -->
        <div class="snapshot-bar" data-aos="fade-up">
          <div class="snap-item">
            <div class="snap-val">{{ snapshotProjects }}+</div>
            <div class="snap-lbl">Projects</div>
          </div>
          <div class="snap-item">
            <div class="snap-val">5+</div>
            <div class="snap-lbl">Clients</div>
          </div>
          <div class="snap-item">
            <div class="snap-val">Multiple</div>
            <div class="snap-lbl">Industries</div>
          </div>
          <div class="snap-item">
            <div class="snap-val">Live &amp; Ongoing</div>
            <div class="snap-lbl">Systems</div>
          </div>
        </div>

        <!-- Filters -->
        <div class="port-filters" data-aos="fade-up" data-aos-delay="40">
          <button class="pf-chip" *ngFor="let f of filters"
                  [class.active]="activeFilter === f.key" (click)="activeFilter = f.key">
            {{ f.label }}
          </button>
        </div>

        <!-- ═══ Featured Project: Hotel Evara Inn ═══ -->
        <div class="featured-label" *ngIf="showsCat('hospitality')" data-aos="fade-up">
          <i class="bi bi-star-fill"></i> Featured Project
        </div>
        <div class="hotel-card" *ngIf="showsCat('hospitality')" data-aos="fade-up" data-aos-delay="60">
          <div class="hc-status"><span class="hc-dot"></span> LIVE — Production System</div>

          <div class="hc-top">
            <div class="hc-left">
              <div class="hc-category">Hospitality Technology · Booking Engine · Admin Panel</div>
              <h3 class="hc-title">Hotel Evara Inn</h3>
              <p class="hc-desc">
                MrD Brains built the digital technology ecosystem for Hotel Evara Inn — the
                hotel's public-facing website, online booking engine and administrative
                management system. Guests discover the property and manage their booking
                journey through the site, while the admin panel supports internal hotel
                operations and booking management.
              </p>
              <div class="hc-tags">
                <span *ngFor="let t of hotelTags">{{ t }}</span>
              </div>
              <div class="hc-ctas">
                <a href="https://hotelevarainn.com/" target="_blank" rel="noopener noreferrer" class="btn-gold">
                  Visit Live Website <i class="bi bi-arrow-up-right"></i>
                </a>
                <button class="btn-outline" (click)="showHotelDetail = !showHotelDetail">
                  {{ showHotelDetail ? 'Hide Case Study' : 'View Case Study' }}
                  <i class="bi" [class.bi-chevron-down]="!showHotelDetail" [class.bi-chevron-up]="showHotelDetail"></i>
                </button>
              </div>
            </div>

            <!-- Architecture diagram -->
            <div class="hc-right">
              <div class="arch">
                <div class="arch-node arch-top">Hotel Evara Inn</div>
                <div class="arch-branch">
                  <div class="arch-col">
                    <div class="arch-line"></div>
                    <div class="arch-node">Guest Website</div>
                    <div class="arch-line"></div>
                    <div class="arch-node arch-sub">Booking Engine</div>
                  </div>
                  <div class="arch-col">
                    <div class="arch-line"></div>
                    <div class="arch-node">Admin Panel</div>
                    <div class="arch-line"></div>
                    <div class="arch-node arch-sub">Booking Management</div>
                  </div>
                </div>
                <div class="arch-line arch-line-center"></div>
                <div class="arch-node arch-bottom">Hotel Operations</div>
              </div>
            </div>
          </div>

          <!-- Expandable case study detail -->
          <div class="hc-detail" *ngIf="showHotelDetail" data-aos="fade-up">
            <div class="hc-detail-grid">
              <div class="hcd-block">
                <div class="hcd-h"><i class="bi bi-flag-fill"></i> Challenge</div>
                <p>Hotel businesses need a digital presence that does more than display
                  property information — guests need to discover the property, book directly,
                  and the hotel needs a reliable way to manage those bookings operationally.</p>
              </div>
              <div class="hcd-block">
                <div class="hcd-h"><i class="bi bi-tools"></i> Solution</div>
                <p>MrD Brains built the hotel website, a direct booking engine and a supporting
                  admin panel — a connected digital platform covering both the guest-facing
                  journey and internal hotel operations.</p>
              </div>
              <div class="hcd-block">
                <div class="hcd-h"><i class="bi bi-check-circle-fill"></i> Result</div>
                <p>The solution is currently live and in production, supporting the hotel's
                  online presence and day-to-day booking workflow.</p>
              </div>
            </div>

            <div class="hcd-tech">
              <div class="hcd-tech-h">Technology &amp; Capabilities</div>
              <div class="hcd-tech-grid">
                <div class="htg-item" *ngFor="let g of hotelCapabilities">
                  <div class="htg-label">{{ g.label }}</div>
                  <div class="htg-chips">
                    <span *ngFor="let c of g.items">{{ c }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- More hospitality work (breadth beyond the flagship) -->
          <div class="more-hosp">
            <div class="mh-head">More Hospitality Work</div>
            <p class="mh-sub">
              Hotel Evara Inn is one of several hospitality projects we've worked on across
              websites, booking experiences and administrative systems.
            </p>
            <div class="mh-list">
              <div class="mh-item" *ngFor="let h of moreHospitality">
                <span class="mh-name">{{ h.name }}</span>
                <span class="mh-scope">{{ h.scope }}</span>
                <span class="mh-status" [class.live]="h.status==='LIVE'">{{ h.status }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Business & Enterprise -->
        <div class="group-block" *ngIf="showsCat('business')">
          <div class="group-head" data-aos="fade-up">
            <div class="eyebrow">Business &amp; Enterprise Solutions</div>
            <p class="group-desc">
              Custom platforms designed to simplify operational workflows, manage business
              data and support day-to-day decision making.
            </p>
          </div>
          <ng-container *ngIf="isSingle('business'); else businessGrid">
            <div class="case-full" *ngIf="soloCase('business') as c" data-aos="fade-up">
              <div class="cf-header">
                <div class="cf-header-left">
                  <div class="cf-icon" [style.background]="c.iconBg">
                    <i [class]="c.icon" [style.color]="c.iconColor"></i>
                  </div>
                  <div>
                    <div class="cc-category">{{ c.category }}</div>
                    <h4 class="cf-title">{{ c.title }}</h4>
                  </div>
                </div>
                <div class="status-badge" [class]="'sb-' + c.status.toLowerCase()">{{ c.status }}</div>
              </div>
              <div class="cf-body">
                <div class="cf-block">
                  <div class="cf-h"><i class="bi bi-flag-fill"></i> Challenge</div>
                  <p>{{ c.challenge }}</p>
                </div>
                <div class="cf-block">
                  <div class="cf-h"><i class="bi bi-tools"></i> Solution</div>
                  <p>{{ c.solution }}</p>
                </div>
              </div>
              <div class="cf-footer">
                <div class="cf-results">
                  <div class="cf-results-h">Results</div>
                  <div class="ccr-item" *ngFor="let r of c.results">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>{{ r }}</span>
                  </div>
                </div>
                <div class="cf-stack">
                  <div class="cf-results-h">Technology</div>
                  <div class="cc-stack">
                    <span *ngFor="let t of c.stack">{{ t }}</span>
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
          <ng-template #businessGrid>
            <div class="cases-grid">
              <div class="case-card" *ngFor="let c of casesIn('business'); let i=index"
                   data-aos="fade-up" [attr.data-aos-delay]="i*90">
                <div class="cc-top">
                  <div class="cc-icon" [style.background]="c.iconBg">
                    <i [class]="c.icon" [style.color]="c.iconColor"></i>
                  </div>
                  <div class="status-badge" [class]="'sb-' + c.status.toLowerCase()">{{ c.status }}</div>
                </div>
                <div class="cc-category">{{ c.category }}</div>
                <h4 class="cc-title">{{ c.title }}</h4>
                <p class="cc-challenge"><strong>Challenge:</strong> {{ c.challenge }}</p>
                <p class="cc-solution"><strong>Solution:</strong> {{ c.solution }}</p>
                <div class="cc-results">
                  <div class="ccr-item" *ngFor="let r of c.results">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>{{ r }}</span>
                  </div>
                </div>
                <div class="cc-stack">
                  <span *ngFor="let t of c.stack">{{ t }}</span>
                </div>
                <div class="cc-bar"></div>
              </div>
            </div>
          </ng-template>
        </div>

        <!-- AI & Automation -->
        <div class="group-block" *ngIf="showsCat('ai')">
          <div class="group-head" data-aos="fade-up">
            <div class="eyebrow">AI &amp; Automation</div>
            <p class="group-desc">
              Intelligent workflows that reduce repetitive work and connect businesses with
              customers through automation.
            </p>
          </div>
          <ng-container *ngIf="isSingle('ai'); else aiGrid">
            <div class="case-full" *ngIf="soloCase('ai') as c" data-aos="fade-up">
              <div class="cf-header">
                <div class="cf-header-left">
                  <div class="cf-icon" [style.background]="c.iconBg">
                    <i [class]="c.icon" [style.color]="c.iconColor"></i>
                  </div>
                  <div>
                    <div class="cc-category">{{ c.category }}</div>
                    <h4 class="cf-title">{{ c.title }}</h4>
                  </div>
                </div>
                <div class="status-badge" [class]="'sb-' + c.status.toLowerCase()">{{ c.status }}</div>
              </div>
              <div class="cf-body">
                <div class="cf-block">
                  <div class="cf-h"><i class="bi bi-flag-fill"></i> Challenge</div>
                  <p>{{ c.challenge }}</p>
                </div>
                <div class="cf-block">
                  <div class="cf-h"><i class="bi bi-tools"></i> Solution</div>
                  <p>{{ c.solution }}</p>
                </div>
              </div>
              <div class="cf-footer">
                <div class="cf-results">
                  <div class="cf-results-h">Results</div>
                  <div class="ccr-item" *ngFor="let r of c.results">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>{{ r }}</span>
                  </div>
                </div>
                <div class="cf-stack">
                  <div class="cf-results-h">Technology</div>
                  <div class="cc-stack">
                    <span *ngFor="let t of c.stack">{{ t }}</span>
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
          <ng-template #aiGrid>
            <div class="cases-grid">
              <div class="case-card" *ngFor="let c of casesIn('ai'); let i=index"
                   data-aos="fade-up" [attr.data-aos-delay]="i*90">
                <div class="cc-top">
                  <div class="cc-icon" [style.background]="c.iconBg">
                    <i [class]="c.icon" [style.color]="c.iconColor"></i>
                  </div>
                  <div class="status-badge" [class]="'sb-' + c.status.toLowerCase()">{{ c.status }}</div>
                </div>
                <div class="cc-category">{{ c.category }}</div>
                <h4 class="cc-title">{{ c.title }}</h4>
                <p class="cc-challenge"><strong>Challenge:</strong> {{ c.challenge }}</p>
                <p class="cc-solution"><strong>Solution:</strong> {{ c.solution }}</p>
                <div class="cc-results">
                  <div class="ccr-item" *ngFor="let r of c.results">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>{{ r }}</span>
                  </div>
                </div>
                <div class="cc-stack">
                  <span *ngFor="let t of c.stack">{{ t }}</span>
                </div>
                <div class="cc-bar"></div>
              </div>
            </div>
          </ng-template>
        </div>

        <!-- Web & Mobile -->
        <div class="group-block" *ngIf="showsCat('web')">
          <div class="group-head" data-aos="fade-up">
            <div class="eyebrow">Web &amp; Mobile Experiences</div>
            <p class="group-desc">
              Customer-facing websites, web applications and dashboards built for real
              day-to-day use.
            </p>
          </div>
          <ng-container *ngIf="isSingle('web'); else webGrid">
            <div class="case-full" *ngIf="soloCase('web') as c" data-aos="fade-up">
              <div class="cf-header">
                <div class="cf-header-left">
                  <div class="cf-icon" [style.background]="c.iconBg">
                    <i [class]="c.icon" [style.color]="c.iconColor"></i>
                  </div>
                  <div>
                    <div class="cc-category">{{ c.category }}</div>
                    <h4 class="cf-title">{{ c.title }}</h4>
                  </div>
                </div>
                <div class="status-badge" [class]="'sb-' + c.status.toLowerCase()">{{ c.status }}</div>
              </div>
              <div class="cf-body">
                <div class="cf-block">
                  <div class="cf-h"><i class="bi bi-flag-fill"></i> Challenge</div>
                  <p>{{ c.challenge }}</p>
                </div>
                <div class="cf-block">
                  <div class="cf-h"><i class="bi bi-tools"></i> Solution</div>
                  <p>{{ c.solution }}</p>
                </div>
              </div>
              <div class="cf-footer">
                <div class="cf-results">
                  <div class="cf-results-h">Results</div>
                  <div class="ccr-item" *ngFor="let r of c.results">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>{{ r }}</span>
                  </div>
                </div>
                <div class="cf-stack">
                  <div class="cf-results-h">Technology</div>
                  <div class="cc-stack">
                    <span *ngFor="let t of c.stack">{{ t }}</span>
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
          <ng-template #webGrid>
            <div class="cases-grid">
              <div class="case-card" *ngFor="let c of casesIn('web'); let i=index"
                   data-aos="fade-up" [attr.data-aos-delay]="i*90">
                <div class="cc-top">
                  <div class="cc-icon" [style.background]="c.iconBg">
                    <i [class]="c.icon" [style.color]="c.iconColor"></i>
                  </div>
                  <div class="status-badge" [class]="'sb-' + c.status.toLowerCase()">{{ c.status }}</div>
                </div>
                <div class="cc-category">{{ c.category }}</div>
                <h4 class="cc-title">{{ c.title }}</h4>
                <p class="cc-challenge"><strong>Challenge:</strong> {{ c.challenge }}</p>
                <p class="cc-solution"><strong>Solution:</strong> {{ c.solution }}</p>
                <div class="cc-results">
                  <div class="ccr-item" *ngFor="let r of c.results">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>{{ r }}</span>
                  </div>
                </div>
                <div class="cc-stack">
                  <span *ngFor="let t of c.stack">{{ t }}</span>
                </div>
                <div class="cc-bar"></div>
              </div>
            </div>
          </ng-template>
        </div>

        <!-- Our Product — kept separate from client work -->
        <a routerLink="/products" class="prod-ref" *ngIf="showsCat('product')" data-aos="fade-up" data-aos-delay="80">
          <div class="pr-left">
            <div class="pr-ico"><i class="bi bi-box-seam-fill"></i></div>
            <div>
              <div class="pr-eyebrow">Proprietary Product by MrD Brains</div>
              <div class="pr-title">Vyapar Ledger</div>
              <div class="pr-desc">Complete business management — billing, GST, inventory, ledger &amp; AI.</div>
            </div>
          </div>
          <span class="pr-cta">View Product <i class="bi bi-arrow-up-right"></i></span>
        </a>

        <!-- CTA strip -->
        <div class="port-cta" data-aos="fade-up">
          <div class="pc-left">
            <div class="pc-icon"><i class="bi bi-briefcase-fill"></i></div>
            <div>
              <div class="pc-title">Have a Similar Project in Mind?</div>
              <div class="pc-desc">Tell us what you're building. We'll help you turn the
                requirement into a practical digital solution.</div>
            </div>
          </div>
          <div class="pc-ctas">
            <a routerLink="/contact" class="btn-gold">
              Start a Project <i class="bi bi-arrow-right"></i>
            </a>
            <a href="https://wa.me/919372401266" target="_blank" rel="noopener noreferrer" class="btn-outline">
              Talk on WhatsApp <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .port-sec { padding:140px 0;background:var(--obsidian);position:relative;overflow:hidden; }
    .port-glow { position:absolute;border-radius:50%;pointer-events:none;filter:blur(110px); }
    .pg1 { width:500px;height:500px;background:rgba(201,151,74,.055);top:-100px;left:-100px; }
    .pg2 { width:400px;height:400px;background:rgba(240,103,74,.04);bottom:-100px;right:-100px; }

    /* ── Portfolio Snapshot ── */
    .snapshot-bar {
      display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:36px;
      background:var(--obsidian-m);border:1px solid rgba(255,255,255,.07);
      border-radius:18px;padding:26px 18px;
    }
    @media(max-width:767px){ .snapshot-bar{grid-template-columns:1fr 1fr;gap:20px 12px} }
    .snap-item { text-align:center; }
    .snap-val { font-family:var(--f-head);font-weight:800;font-size:1.5rem;color:var(--gold);line-height:1.1;letter-spacing:-.02em; }
    .snap-lbl { font-family:var(--f-mono);font-size:.6rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ghost-d);margin-top:6px; }

    /* ── Filters ── */
    .port-filters { display:flex;flex-wrap:wrap;gap:9px;margin-bottom:40px; }
    .pf-chip {
      background:var(--obsidian-m);border:1px solid rgba(255,255,255,.08);
      border-radius:50px;padding:9px 18px;cursor:pointer;
      font-family:var(--f-mono);font-size:.68rem;color:var(--ghost-d);
      letter-spacing:.04em;transition:all .22s;
      &:hover{border-color:rgba(201,151,74,.25);color:var(--ghost-m)}
      &.active{background:var(--gold-dim);border-color:var(--gold-ring);color:var(--gold)}
    }

    .featured-label {
      display:inline-flex;align-items:center;gap:8px;margin-bottom:16px;
      font-family:var(--f-mono);font-size:.64rem;text-transform:uppercase;letter-spacing:.12em;
      color:var(--gold);
      i{font-size:.6rem}
    }

    /* ── Hotel Evara Inn featured card ── */
    .hotel-card {
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.18);border-radius:24px;
      padding:36px 40px;margin-bottom:48px;position:relative;overflow:hidden;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.5),transparent)}
    }
    @media(max-width:900px){ .hotel-card{padding:26px} }
    .hc-status {
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(46,204,113,.1);border:1px solid rgba(46,204,113,.25);
      border-radius:50px;padding:6px 14px;margin-bottom:20px;
      font-family:var(--f-mono);font-size:.62rem;color:#2ECC71;letter-spacing:.08em;text-transform:uppercase;
    }
    .hc-dot { width:6px;height:6px;border-radius:50%;background:#2ECC71;box-shadow:0 0 8px #2ECC71;animation:blink 1.8s ease-in-out infinite; }
    .hc-top { display:grid;grid-template-columns:1.3fr 1fr;gap:44px;align-items:center; }
    @media(max-width:991px){ .hc-top{grid-template-columns:1fr} }
    .hc-category { font-family:var(--f-mono);font-size:.64rem;text-transform:uppercase;letter-spacing:.1em;color:var(--gold);margin-bottom:10px; }
    .hc-title { font-family:var(--f-head);font-weight:800;font-size:1.7rem;color:var(--ghost);margin-bottom:14px;line-height:1.15; }
    .hc-desc { font-size:.88rem;color:var(--ghost-d);line-height:1.85;margin-bottom:22px;max-width:520px; }
    .hc-tags { display:flex;flex-wrap:wrap;gap:7px;margin-bottom:26px; }
    .hc-tags span {
      background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
      border-radius:5px;padding:5px 12px;font-family:var(--f-mono);font-size:.65rem;color:var(--ghost-d);
    }
    .hc-ctas { display:flex;gap:12px;flex-wrap:wrap; }

    /* Architecture diagram */
    .hc-right { display:flex;align-items:center;justify-content:center; }
    .arch { display:flex;flex-direction:column;align-items:center;width:100%;max-width:340px; }
    .arch-node {
      background:var(--obsidian-m);border:1px solid rgba(201,151,74,.22);border-radius:10px;
      padding:9px 16px;font-family:var(--f-head);font-weight:700;font-size:.74rem;color:var(--ghost);
      text-align:center;white-space:nowrap;
    }
    .arch-top { border-color:var(--gold-ring);background:var(--gold-dim);color:var(--gold); }
    .arch-bottom { border-color:var(--coral-ring);background:var(--coral-dim);color:var(--coral-l);margin-top:0; }
    .arch-sub { font-size:.66rem;font-weight:600;color:var(--ghost-d);border-color:rgba(255,255,255,.08); }
    .arch-line { width:1px;height:16px;background:rgba(201,151,74,.28); }
    .arch-line-center { height:18px; }
    .arch-branch { display:flex;gap:28px;margin:0; }
    .arch-col { display:flex;flex-direction:column;align-items:center;gap:0; }
    @media(max-width:480px){ .arch-branch{gap:12px} .arch-node{font-size:.66rem;padding:7px 10px} }

    /* Expandable detail */
    .hc-detail { margin-top:32px;padding-top:28px;border-top:1px solid rgba(255,255,255,.08); }
    .hc-detail-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:28px; }
    @media(max-width:767px){ .hc-detail-grid{grid-template-columns:1fr} }
    .hcd-h { display:flex;align-items:center;gap:8px;font-family:var(--f-head);font-weight:700;font-size:.82rem;color:var(--gold);margin-bottom:8px;
      i{font-size:.78rem} }
    .hcd-block p { font-size:.78rem;color:var(--ghost-d);line-height:1.75; }
    .hcd-tech-h { font-family:var(--f-mono);font-size:.62rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ghost-d);margin-bottom:14px; }
    .hcd-tech-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:14px; }
    @media(max-width:767px){ .hcd-tech-grid{grid-template-columns:repeat(2,1fr)} }
    .htg-label { font-family:var(--f-head);font-weight:700;font-size:.76rem;color:var(--ghost);margin-bottom:8px; }
    .htg-chips { display:flex;flex-direction:column;gap:5px; }
    .htg-chips span { font-size:.7rem;color:var(--ghost-d);
      &::before{content:'—';margin-right:6px;color:rgba(201,151,74,.5)} }

    /* More hospitality work */
    .more-hosp { margin-top:28px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08); }
    .mh-head { font-family:var(--f-head);font-weight:700;font-size:.92rem;color:var(--ghost);margin-bottom:6px; }
    .mh-sub { font-size:.78rem;color:var(--ghost-d);line-height:1.7;margin-bottom:16px;max-width:520px; }
    .mh-list { display:flex;flex-direction:column;gap:10px; }
    .mh-item {
      display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;
      background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);
      border-radius:10px;padding:10px 16px;
    }
    .mh-name { font-size:.82rem;color:var(--ghost-m);font-weight:600; }
    .mh-scope { font-family:var(--f-mono);font-size:.66rem;color:var(--ghost-d); }
    .mh-status {
      font-family:var(--f-mono);font-size:.58rem;text-transform:uppercase;letter-spacing:.06em;
      background:rgba(255,255,255,.05);color:var(--ghost-d);border-radius:50px;padding:3px 10px;
      &.live{ background:rgba(46,204,113,.1);color:#2ECC71; }
    }

    /* ── Group sections (Business / AI / Web) ── */
    .group-block { margin-bottom:48px; }
    .group-head { max-width:640px;margin-bottom:24px; }
    .group-desc { font-size:.86rem;color:var(--ghost-d);line-height:1.8;margin-top:8px; }

    /* ── Product reference banner ── */
    .prod-ref {
      display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.16);border-radius:18px;padding:22px 28px;
      margin-bottom:48px;text-decoration:none;transition:all .28s;
      &:hover{border-color:rgba(201,151,74,.32);transform:translateY(-2px)}
    }
    .pr-left { display:flex;align-items:center;gap:16px; }
    .pr-ico {
      width:46px;height:46px;flex-shrink:0;border-radius:12px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:1.2rem}
    }
    .pr-eyebrow { font-family:var(--f-mono);font-size:.6rem;color:var(--gold);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px; }
    .pr-title { font-family:var(--f-head);font-weight:800;font-size:1.05rem;color:var(--ghost); }
    .pr-desc { font-size:.78rem;color:var(--ghost-d);margin-top:2px; }
    .pr-cta {
      display:inline-flex;align-items:center;gap:8px;flex-shrink:0;
      font-family:var(--f-head);font-weight:700;font-size:.78rem;color:var(--gold);
      i{font-size:.8rem}
    }

    /* ── Cases grid ── */
    .cases-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:16px; }
    @media(max-width:991px){ .cases-grid{grid-template-columns:repeat(2,1fr)} }
    @media(max-width:575px){ .cases-grid{grid-template-columns:1fr} }

    .case-card {
      background:var(--obsidian-m);border:1px solid rgba(255,255,255,.07);
      border-radius:18px;padding:28px;position:relative;overflow:hidden;
      transition:all .32s cubic-bezier(.4,0,.2,1);
      &:hover{border-color:rgba(201,151,74,.22);transform:translateY(-6px);box-shadow:0 24px 56px rgba(0,0,0,.4);.cc-bar{transform:scaleX(1)}}
    }
    .cc-top { display:flex;align-items:center;justify-content:space-between;margin-bottom:14px; }
    .cc-icon {
      width:44px;height:44px;border-radius:11px;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;
      i{font-size:1.2rem}
    }
    .status-badge {
      font-family:var(--f-mono);font-size:.58rem;text-transform:uppercase;letter-spacing:.08em;
      border-radius:50px;padding:4px 11px;
      background:rgba(255,255,255,.05);color:var(--ghost-d);
      &.sb-live{ background:rgba(46,204,113,.1);color:#2ECC71; }
      &.sb-ongoing{ background:rgba(201,151,74,.1);color:var(--gold); }
      &.sb-delivered{ background:rgba(255,255,255,.06);color:var(--ghost-m); }
      &.sb-confidential{ background:rgba(255,255,255,.04);color:var(--ghost-d); }
    }
    .cc-category {
      font-family:var(--f-mono);font-size:.62rem;text-transform:uppercase;letter-spacing:.14em;
      color:var(--gold);margin-bottom:8px;
    }
    .cc-title { font-family:var(--f-head);font-weight:800;font-size:.96rem;color:var(--ghost);margin-bottom:12px;line-height:1.3; }
    .cc-challenge,.cc-solution {
      font-size:.78rem;color:var(--ghost-d);line-height:1.68;margin-bottom:8px;
      strong{color:var(--ghost-m);font-weight:600}
    }
    .cc-results { display:flex;flex-direction:column;gap:6px;margin:14px 0; }
    .ccr-item { display:flex;align-items:center;gap:7px;font-size:.76rem;color:var(--ghost-m);
      i{color:var(--gold);font-size:.72rem;flex-shrink:0}
    }
    .cc-stack { display:flex;flex-wrap:wrap;gap:5px;margin-top:14px;
      span{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:4px;padding:3px 9px;font-family:var(--f-mono);font-size:.6rem;color:var(--ghost-d)}
    }
    .cc-bar {
      position:absolute;bottom:0;left:0;right:0;height:2px;
      background:linear-gradient(90deg,var(--gold-l),var(--coral));
      transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.4,0,.2,1);
    }

    /* ── Full-width editorial case-study (single-project groups) ── */
    .case-full {
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(255,255,255,.08); border-radius:20px;
      padding:32px; position:relative; overflow:hidden;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.4),transparent)}
    }
    .cf-header { display:flex; align-items:flex-start; justify-content:space-between; gap:20px; margin-bottom:26px; flex-wrap:wrap; }
    .cf-header-left { display:flex; align-items:center; gap:16px; }
    .cf-icon {
      width:52px;height:52px;border-radius:13px;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;
      i{font-size:1.35rem}
    }
    .cf-title { font-family:var(--f-head); font-weight:800; font-size:1.2rem; color:var(--ghost); line-height:1.3; margin-top:4px; }
    .cf-body { display:grid; grid-template-columns:1fr 1fr; gap:28px; padding:24px 0; border-top:1px solid rgba(255,255,255,.06); border-bottom:1px solid rgba(255,255,255,.06); }
    @media(max-width:767px){ .cf-body{grid-template-columns:1fr} }
    .cf-block p { font-size:.86rem; color:var(--ghost-d); line-height:1.75; }
    .cf-h {
      display:flex; align-items:center; gap:8px; margin-bottom:10px;
      font-family:var(--f-mono); font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; color:var(--gold);
      i{font-size:.7rem}
    }
    .cf-footer { display:grid; grid-template-columns:1.2fr 1fr; gap:32px; padding-top:24px; }
    @media(max-width:767px){ .cf-footer{grid-template-columns:1fr} }
    .cf-results-h { font-family:var(--f-mono); font-size:.62rem; text-transform:uppercase; letter-spacing:.1em; color:var(--ghost-d); margin-bottom:12px; }
    .cf-results { display:flex; flex-direction:column; gap:10px; }
    .cf-stack { }

    /* CTA strip */
    .port-cta {
      display:flex;align-items:center;justify-content:space-between;gap:24px;
      background:linear-gradient(135deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.16);border-radius:18px;padding:30px 36px;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.35),transparent)}
      position:relative;overflow:hidden;
    }
    @media(max-width:767px){ .port-cta{flex-direction:column;align-items:flex-start;padding:24px} }
    .pc-left { display:flex;align-items:center;gap:16px; }
    .pc-icon {
      width:52px;height:52px;flex-shrink:0;border-radius:13px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:1.3rem}
      animation:goldGlow 4s ease-in-out infinite;
    }
    .pc-title { font-family:var(--f-head);font-weight:800;font-size:1.05rem;color:var(--ghost);margin-bottom:4px; }
    .pc-desc  { font-size:.82rem;color:var(--ghost-d);max-width:420px; }
    .pc-ctas { display:flex;gap:12px;flex-wrap:wrap;flex-shrink:0; }
  `]
})
export class PortfolioComponent {
  activeFilter = 'all';
  showHotelDetail = false;

  filters = [
    { key: 'all', label: 'All' },
    { key: 'hospitality', label: 'Hospitality' },
    { key: 'business', label: 'Business & Enterprise' },
    { key: 'ai', label: 'AI & Automation' },
    { key: 'web', label: 'Web & Mobile' },
    { key: 'product', label: 'Our Product' },
  ];

  hotelTags = ['Booking Engine', 'Admin Panel', 'Hotel Technology', 'Web Application', 'Live Production'];

  hotelCapabilities = [
    { label: 'Frontend', items: ['Responsive web application', 'Mobile-first experience'] },
    { label: 'Booking', items: ['Hotel booking engine', 'Reservation workflow'] },
    { label: 'Backend', items: ['Business logic', 'Booking management', 'Data processing'] },
    { label: 'Administration', items: ['Admin dashboard', 'Booking management', 'Operational controls'] },
  ];

  // Additional hospitality clients that cannot be named publicly (NDA).
  // Replace/extend this list once real project details are confirmed.
  moreHospitality = [
    { name: 'Hospitality Client — Confidential', scope: 'Booking Engine · Admin Panel', status: 'ONGOING' },
    { name: 'Hospitality Client — Confidential', scope: 'Website · Booking Engine', status: 'LIVE' },
  ];

  cases = [
    {
      icon: 'bi bi-building',
      iconBg: 'rgba(201,151,74,.1)', iconColor: '#C9974A',
      category: 'Desktop Application · .NET',
      categories: ['business'],
      primaryGroup: 'business',
      status: 'DELIVERED',
      title: 'Custom HR & Payroll Management System',
      challenge: 'A Mumbai-based engineering firm was managing payroll and attendance across 80+ employees using Excel sheets, causing errors and delays every month.',
      solution: 'Built a full .NET WPF desktop application with role-based access, biometric attendance integration, automated payslip generation and GST-compliant reporting.',
      results: ['Reduced payroll processing time by 85%', 'Zero calculation errors since go-live', 'Automated compliance reports saved 12 hrs/month'],
      stack: ['.NET 8', 'WPF', 'SQL Server', 'Crystal Reports', 'MVVM'],
    },
    {
      icon: 'bi bi-whatsapp',
      iconBg: 'rgba(37,211,102,.1)', iconColor: '#25D366',
      category: 'WhatsApp Automation · AI',
      categories: ['ai'],
      primaryGroup: 'ai',
      status: 'ONGOING',
      title: 'WhatsApp Order & Payment Reminder Bot',
      challenge: 'An e-commerce business was losing repeat orders due to no follow-up system — customers forgot about abandoned carts and unpaid invoices.',
      solution: 'Deployed a WhatsApp Business API automation system with AI-powered chatbot handling order confirmations, payment reminders, and post-purchase support 24/7.',
      results: ['Increase in repeat purchases', 'Recovers revenue from abandoned carts monthly', 'Major reduction in manual follow-up calls'],
      stack: ['WhatsApp API', 'OpenAI GPT-4', 'Node.js', 'Webhook', 'MongoDB'],
    },
    {
      icon: 'bi bi-mortarboard-fill',
      iconBg: 'rgba(240,103,74,.1)', iconColor: '#F0674A',
      category: 'Web Application · LMS',
      categories: ['web', 'business'],
      primaryGroup: 'web',
      status: 'LIVE',
      title: 'Online Learning Management System for Trendify Digital',
      challenge: 'Trendify Digital\'s students had no centralised platform to access courses — content was scattered across WhatsApp groups, PDFs and emails, making learning inconsistent and hard to track.',
      solution: 'Built a full-featured LMS web platform where students can register, browse courses, stream video lessons, track progress, take quizzes and download certificates — all from one clean interface.',
      results: ['All students now access courses from anywhere, anytime', 'Course completion tracking reduced instructor admin', 'Clean, mobile-friendly UI adopted immediately with zero training needed'],
      stack: ['Angular 17', 'ASP.NET Core', 'SQL Server', 'Azure Blob', 'REST API'],
    },
  ];

  get snapshotProjects(): string {
    return '20';
  }

  showsCat(cat: string): boolean {
    return this.activeFilter === 'all' || this.activeFilter === cat;
  }

  casesIn(group: string) {
    if (this.activeFilter !== 'all' && this.activeFilter !== group) return [];
    return this.cases.filter(c => c.primaryGroup === group);
  }

  isSingle(group: string): boolean {
    return this.cases.filter(c => c.primaryGroup === group).length === 1;
  }

  soloCase(group: string) {
    return this.cases.find(c => c.primaryGroup === group);
  }

  smooth(e: Event) {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}