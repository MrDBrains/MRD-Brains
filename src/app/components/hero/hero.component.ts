import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, CountUpDirective],
  template: `
    <section id="hero" class="hero">
      <!-- Layered atmosphere -->
      <div class="noise"></div>
      <div class="hero-mesh"></div>
      <div class="hero-grid"></div>
      <div class="blob b1"></div>
      <div class="blob b2"></div>
      <div class="blob b3"></div>
      <div class="scan-line"></div>

      <div class="container" style="position:relative;z-index:3">
        <div class="hero-inner">

          <!-- ── Left Column ── -->
          <div class="hero-left">
            <!-- Premium eyebrow -->
            <div class="hero-eyebrow animate-in" style="animation-delay:.08s">
              <div class="he-flag">
                <span class="he-pulse"></span>
                <i class="bi bi-geo-alt-fill"></i>
                <span>Mumbai</span>
              </div>
              <div class="he-div"></div>
              <div class="he-rating">
                <i class="bi bi-cpu"></i>
                <span>Digital Engineering &amp; Software Solutions</span>
              </div>
            </div>

            <!-- Headline -->
            <h1 class="hero-h1">
              <span class="h1-we animate-in" style="animation-delay:.18s">We Build Technology</span>
              <span class="h1-word animate-in" style="animation-delay:.3s">
                That Works for <em>Real Businesses.</em>
              </span>
            </h1>

            <p class="hero-desc animate-in" style="animation-delay:.52s">
              From hotel booking platforms and business applications to
              <strong>AI-powered automation</strong> and proprietary products, MrD Brains
              builds digital solutions designed around real business needs.
            </p>

            <!-- WhatsApp highlight -->
            <div class="wa-strip animate-in" style="animation-delay:.6s">
              <div class="was-icon"><i class="bi bi-whatsapp"></i></div>
              <div class="was-body">
                <div class="was-title">WhatsApp Automation &amp; AI Solutions</div>
                <div class="was-desc">Automate customer conversations, order reminders &amp; support with intelligent AI chatbots.</div>
              </div>
              <div class="was-badge">NEW</div>
            </div>

            <!-- Capability line -->
            <div class="hero-capabilities animate-in" style="animation-delay:.68s">
              <span *ngFor="let c of capabilities; let last=last">{{ c }}<i class="bi bi-dot" *ngIf="!last"></i></span>
            </div>

            <!-- CTA Row -->
            <div class="hero-ctas animate-in" style="animation-delay:.76s">
              <a routerLink="/contact" class="btn-gold">
                <i class="bi bi-rocket-takeoff"></i>
                <span>Start a Project</span>
              </a>
              <a routerLink="/work" class="btn-outline">
                Explore Our Work <i class="bi bi-arrow-right"></i>
              </a>
            </div>

            <!-- Social proof -->
            <div class="hero-proof animate-in" style="animation-delay:.84s">
              <div class="proof-clients">
                <div class="pc-avatars">
                  <div class="pca" style="background:#C8922E">T</div>
                  <div class="pca" style="background:#D9A84F">V</div>
                  <div class="pca" style="background:#B27F26">D</div>
                  <div class="pca pca-more">+2</div>
                </div>
                <div class="pc-text">
                  <span>Trusted by <strong>5+ Indian businesses</strong></span>
                </div>
              </div>
              <div class="proof-divider"></div>
              <div class="proof-stat">
                <span class="ps-val" appCountUp countUpValue="20+">20+</span>
                <span class="ps-lbl">Projects Shipped</span>
              </div>
              <div class="proof-divider"></div>
              <div class="proof-stat">
                <span class="ps-val">Multiple</span>
                <span class="ps-lbl">Industries</span>
              </div>
            </div>
          </div>

          <!-- ── Right Visual ── -->
          <div class="hero-visual animate-in d-none d-lg-block" style="animation-delay:.24s">
            <div class="vis-wrap">
              <!-- Ambient rings -->
              <div class="vis-ring vr1"></div>
              <div class="vis-ring vr2"></div>
              <div class="vis-ring vr3"></div>

              <!-- Central logo -->
              <div class="vis-core">
                <div class="vc-glow"></div>
                <div class="vc-logo">
                  <img src="assets/logo.png" alt="MrD Brains Technology">
                </div>
                <div class="vc-pulse p1"></div>
                <div class="vc-pulse p2"></div>
              </div>

              <!-- Orbiting tech chips -->
              <div class="orbit-chip oc1"><i class="bi bi-microsoft"></i><span>.NET 8</span></div>
              <div class="orbit-chip oc2"><i class="bi bi-code-slash"></i><span>Angular 17</span></div>
              <div class="orbit-chip oc3"><i class="bi bi-cloud"></i><span>Azure</span></div>
              <div class="orbit-chip oc4"><i class="bi bi-app"></i><span>React 18</span></div>
              <div class="orbit-chip oc5"><i class="bi bi-database"></i><span>SQL Server</span></div>
              <div class="orbit-chip oc6"><i class="bi bi-robot"></i><span>AI/LLM</span></div>

              <!-- Floating stat cards -->
              <div class="vis-card vc-a">
                <div class="vcard-icon vi-gold"><i class="bi bi-folder2-open"></i></div>
                <div>
                  <div class="vcard-val">20+</div>
                  <div class="vcard-lbl">Projects Delivered</div>
                </div>
              </div>

              <div class="vis-card vc-b">
                <div class="vcard-icon vi-green"><i class="bi bi-whatsapp"></i></div>
                <div>
                  <div class="vcard-val">AI Ready</div>
                  <div class="vcard-lbl">WhatsApp Automation</div>
                </div>
              </div>

              <div class="vis-card vc-c">
                <div class="vcard-icon vi-coral"><i class="bi bi-shield-fill-check"></i></div>
                <div>
                  <div class="vcard-val">Built for Scale</div>
                  <div class="vcard-lbl">Production Ready</div>
                </div>
              </div>

              <!-- Live indicator -->
              <div class="vis-live">
                <span class="vl-dot"></span>
                <span>Live support available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats strip -->
      <div class="hero-strip">
        <div class="container">
          <div class="strip-row">
            <div class="strip-item" *ngFor="let s of stats; let i=index" [style.animation-delay]="(i*.12)+'s'">
              <div class="si-icon"><i [class]="s.icon"></i></div>
              <div class="si-body">
                <span class="si-val" appCountUp [countUpValue]="s.val">{{ s.val }}</span>
                <span class="si-lbl">{{ s.lbl }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="strip-gold-line"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh; background: var(--obsidian);
      display: flex; flex-direction: column; justify-content: center;
      padding-top: 96px; overflow: hidden; position: relative;
    }
    @media(max-width:767px){ .hero{ padding-top: 72px; } }

    /* Atmosphere layers */
    .hero-mesh {
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 70% 55% at 72% 35%, var(--gold-tint) 0%, transparent 65%);
      opacity: .55;
    }
    .hero-grid {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: radial-gradient(ellipse 80% 80% at 60% 40%, black 0%, transparent 75%);
      opacity: .4;
    }
    .blob { display: none; }
    .scan-line { display: none; }

    /* Entrance */
    .animate-in { opacity: 0; animation: revealUp .75s cubic-bezier(.16,1,.3,1) forwards; }

    /* Layout */
    .hero-inner {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 72px; align-items: center; padding: 18px 0 20px;
    }
    @media(max-width:1099px){ .hero-inner{grid-template-columns:1fr;gap:56px} }

    /* Eyebrow */
    .hero-eyebrow {
      display: inline-flex; align-items: center; gap: 14px;
      background: var(--obsidian-s); border: 1px solid var(--border);
      border-radius: 40px; padding: 8px 18px; margin-bottom: 22px;
    }
    .he-flag {
      display: flex; align-items: center; gap: 6px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d); letter-spacing: .1em; text-transform: uppercase;
      i { color: var(--gold); font-size: .68rem; }
    }
    .he-pulse {
      width: 6px; height: 6px; border-radius: 50%; background: var(--emerald);
      box-shadow: 0 0 0 3px var(--emerald-ring); animation: blink 2s ease-in-out infinite;
      flex-shrink: 0;
    }
    .he-div { width: 1px; height: 14px; background: var(--border); }
    .he-rating {
      display: flex; align-items: center; gap: 5px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d);
      i { color: var(--gold); font-size: .62rem; }
      span { margin-left: 2px; }
    }

    /* Headline */
   /* Headline */
.hero-h1 {
  display: flex;
  flex-direction: column;
  font-family: var(--f-head);
  font-size: clamp(2.2rem, 4.8vw, 3.8rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -.035em;
  margin-bottom: 26px;
}
    .h1-we   { color: var(--ghost); }
    .h1-word {
      em {
        font-family: var(--f-head); font-style: normal; font-weight: 800;
        color: var(--gold); font-size: 1em; letter-spacing: -.01em;
      }
    }
    .h1-soft { color: var(--border); }
    .caret {
      display: inline-block; width: 3px; height: .82em;
      background: var(--gold); vertical-align: middle; margin-left: 4px;
      opacity: 0; transition: opacity .1s;
      &.show { opacity: 1; animation: blink .85s step-end infinite; }
    }

    .hero-desc {
      font-size: 1.02rem; font-weight: 400; color: var(--ghost-m);
      max-width: 500px; line-height: 1.88; margin-bottom: 24px;
      strong { color: var(--ghost-m); font-weight: 500; }
    }

    /* WhatsApp strip */
    .wa-strip {
      display: flex; align-items: center; gap: 14px;
      background: var(--emerald-dim);
      border: 1px solid var(--emerald-ring); border-radius: 14px;
      padding: 16px 20px; margin-bottom: 24px; max-width: 510px; position: relative;
    }
    .was-icon {
      width: 40px; height: 40px; flex-shrink: 0; border-radius: 10px;
      background: #FFFFFF; border: 1px solid var(--emerald-ring); display: flex; align-items: center; justify-content: center;
      i { color: var(--wa-green); font-size: 1.2rem; }
    }
    .was-body { flex: 1; }
    .was-title { font-family: var(--f-head); font-weight: 700; font-size: .84rem; color: var(--ghost); margin-bottom: 3px; }
    .was-desc  { font-size: .76rem; color: var(--ghost-m); line-height: 1.5; }
    .was-badge {
      background: var(--emerald); border: 1px solid var(--emerald);
      border-radius: 6px; padding: 3px 10px;
      font-family: var(--f-mono); font-size: .58rem; font-weight: 500; color: #fff; letter-spacing: .1em;
      flex-shrink: 0;
    }

    /* Capability line */
    .hero-capabilities {
      display: flex; flex-wrap: wrap; align-items: center;
      font-family: var(--f-mono); font-size: .74rem; color: var(--ghost-d);
      letter-spacing: .04em; margin-bottom: 32px; max-width: 510px;
      i { color: var(--gold); margin: 0 2px; }
    }

    .hero-ctas { display: flex; gap: 13px; flex-wrap: wrap; margin-bottom: 34px; }

    /* Social proof */
    .hero-proof {
      display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
    }
    .proof-clients { display: flex; align-items: center; gap: 12px; }
    .pc-avatars { display: flex; }
    .pca {
      width: 34px; height: 34px; border-radius: 50%;
      border: 2px solid #FFFFFF;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--f-head); font-weight: 800; font-size: .76rem; color: #fff;
      margin-left: -9px; &:first-child { margin-left: 0; }
    }
    .pca-more {
      background: var(--gold-tint); border-color: var(--gold-ring);
      color: var(--gold); font-size: .65rem;
    }
    .pct-stars { i{color:var(--gold);font-size:.68rem;margin-right:1px} margin-bottom:3px; }
    .pc-text { font-size: .76rem; color: var(--ghost-m); strong{color:var(--ghost);font-weight:600} }
    .proof-divider { width: 1px; height: 32px; background: var(--border); }
    .proof-stat { display: flex; flex-direction: column; gap: 2px; }
    .ps-val { font-family: var(--f-head); font-weight: 800; font-size: 1.1rem; color: var(--ghost); line-height: 1; }
    .ps-lbl { font-family: var(--f-mono); font-size: .58rem; color: var(--ghost-d); text-transform: uppercase; letter-spacing: .1em; }

    /* ── Visual column ── */
    .hero-visual { position: relative; height: 520px; }
    .vis-wrap { position: relative; width: 100%; height: 100%; }

    .vis-ring {
      position: absolute; border-radius: 50%;
      top: 50%; left: 50%;
      border: 1px solid var(--gold-ring);
    }
    .vr1 {
      width: 420px; height: 420px;
      transform: translate(-50%,-50%);
      animation: rotateSlow 35s linear infinite;
      border-style: dashed;
      &::before {
        content: ''; position: absolute; width: 9px; height: 9px;
        background: var(--gold); border-radius: 50%;
        top: -4.5px; left: 50%; transform: translateX(-50%);
        box-shadow: 0 0 14px var(--gold);
      }
      &::after {
        content: ''; position: absolute; width: 6px; height: 6px;
        background: var(--gold); border-radius: 50%;
        bottom: -3px; right: 40px; box-shadow: 0 0 10px var(--gold);
      }
    }
    .vr2 {
      width: 290px; height: 290px;
      transform: translate(-50%,-50%);
      animation: rotateSlowReverse 24s linear infinite;
      border-color: var(--border);
      &::before {
        content: ''; position: absolute; width: 7px; height: 7px;
        background: var(--gold); border-radius: 50%;
        bottom: -3.5px; left: 50%; transform: translateX(-50%);
        box-shadow: 0 0 10px var(--gold);
      }
    }
    .vr3 {
      width: 170px; height: 170px;
      transform: translate(-50%,-50%);
      animation: rotateSlow 16s linear infinite;
      border-color: var(--border);
      border-style: dotted;
    }

    .vis-core {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%,-50%); z-index: 4;
      display: flex; align-items: center; justify-content: center;
    }
    .vc-glow {
      position: absolute; inset: -30px; border-radius: 50%;
      background: radial-gradient(circle, var(--gold-tint) 0%, transparent 70%);
      animation: goldGlow 5s ease-in-out infinite;
    }
    .vc-logo {
      width: 136px; height: 136px; border-radius: 28px;
      background: #fff;
      border: 1px solid var(--border);
      box-shadow: 0 0 0 8px var(--gold-tint), 0 16px 40px rgba(16,24,40,.10);
      display: flex; align-items: center; justify-content: center;
      position: relative; z-index: 2;
      img { width: 104px; height: 104px; object-fit: contain; }
    }
    .vc-pulse {
      position: absolute; inset: -8px; border-radius: 32px;
      border: 1.5px solid var(--gold-ring);
      animation: pulseRing 3.5s ease-out infinite;
    }
    .p2 { animation-delay: 1.75s; }

    /* Orbit chips */
    .orbit-chip {
      position: absolute; z-index: 5;
      display: flex; align-items: center; gap: 6px;
      background: #FFFFFF; backdrop-filter: blur(16px);
      border: 1px solid var(--border); border-radius: 50px;
      padding: 7px 14px; cursor: default; box-shadow: var(--sh-sm);
      font-family: var(--f-mono); font-size: .7rem; font-weight: 500; color: var(--ghost-m);
      transition: all .25s ease;
      i { font-size: .85rem; color: var(--gold); }
      span { white-space: nowrap; }
      &:hover { border-color: var(--gold-ring); color: var(--gold); background: var(--gold-dim); }
    }
    .oc1 { top:  52px; left:  42px; animation: floatSlow 6s ease-in-out infinite .0s; }
    .oc2 { top:  52px; right: 42px; animation: floatSlow 6s ease-in-out infinite .8s; }
    .oc3 { top: 50%; transform:translateY(-50%); right: 8px; animation: floatSlow 5s ease-in-out infinite 1.6s; }
    .oc4 { bottom: 100px; right: 50px; animation: floatSlow 6.5s ease-in-out infinite 2.4s; }
    .oc5 { bottom: 50px;  left:  50px; animation: floatSlow 5.5s ease-in-out infinite 3.2s; }
    .oc6 { top: 50%; transform:translateY(-50%); left: 8px; animation: floatSlow 6s ease-in-out infinite 4s; }

    /* Float cards */
    .vis-card {
      position: absolute; z-index: 6;
      display: flex; align-items: center; gap: 12px;
      background: #FFFFFF; backdrop-filter: blur(20px);
      border: 1px solid var(--border); border-radius: 13px;
      padding: 14px 18px; box-shadow: var(--sh-md);
    }
    .vcard-icon {
      width: 38px; height: 38px; flex-shrink: 0; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      i { font-size: 1.1rem; }
    }
    .vi-gold { background: var(--gold-dim); border: 1px solid var(--gold-ring); i { color: var(--gold); } }
    .vi-green { background: var(--emerald-dim); border: 1px solid var(--emerald-ring); i { color: var(--wa-green); } }
    .vi-coral { background: var(--gold-dim); border: 1px solid var(--gold-ring); i { color: var(--gold); } }
    .vcard-val { font-family: var(--f-head); font-weight: 800; font-size: 1rem; color: var(--ghost); line-height: 1; }
    .vcard-lbl { font-family: var(--f-mono); font-size: .6rem; color: var(--ghost-m); text-transform: uppercase; letter-spacing: .08em; margin-top: 2px; }
    .vc-a { top: 10px; left: 0; animation: floatSlow 5s ease-in-out infinite 0s; }
    .vc-b { bottom: 130px; right: 0; animation: floatSlow 5s ease-in-out infinite 1.5s; }
    .vc-c { bottom: 30px; left: 20px; animation: floatSlow 5s ease-in-out infinite 3s; }

    /* Live indicator */
    .vis-live {
      position: absolute; top: 14px; right: 10px; z-index: 6;
      display: flex; align-items: center; gap: 7px;
      background: #FFFFFF; border: 1px solid var(--emerald-ring); box-shadow: var(--sh-sm);
      border-radius: 50px; padding: 6px 13px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--emerald);
      letter-spacing: .07em; text-transform: uppercase;
    }
    .vl-dot {
      width: 7px; height: 7px; border-radius: 50%; background: var(--emerald);
      animation: blink 1.8s ease-in-out infinite;
      box-shadow: 0 0 6px var(--emerald-ring);
    }

    /* ── Strip ── */
    .hero-strip {
      position: relative; z-index: 2;
      background: var(--obsidian-s);
      border-top: 1px solid var(--border);
      padding: 34px 0; margin-top: 60px;
    }
    .strip-gold-line {
      position: absolute; top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg,transparent,var(--gold) 25%,var(--gold-l) 75%,transparent);
    }
    .strip-row {
      display: grid; grid-template-columns: repeat(4,1fr);
    }
    @media(max-width:767px){
      .strip-row { grid-template-columns: repeat(2,1fr); }
    }
    .strip-item {
      display: flex; align-items: center; gap: 10px;
      padding: 14px 12px;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      opacity: 0; animation: counterUp .65s cubic-bezier(.16,1,.3,1) 1s forwards;
      &:last-child { border-right: none; }
    }
    @media(max-width:767px){
      .strip-item { padding: 16px 10px; justify-content: center; flex-direction: column; text-align: center; gap: 6px; }
      .si-icon { width: 32px; height: 32px; }
    }
    @media(max-width:480px){
      .strip-item:nth-child(3n){ border-right: 1px solid var(--border); }
      .strip-item:nth-child(2n){ border-right: none; }
    }
    .si-icon {
      width: 36px; height: 36px; flex-shrink: 0; border-radius: 9px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: .85rem; }
    }
    .si-val {
      font-family: var(--f-head); font-weight: 800;
      font-size: clamp(1.2rem,3vw,1.7rem);
      color: var(--ghost); line-height: 1; display: block;
    }
    .si-lbl {
      font-family: var(--f-mono); font-size: .56rem; color: var(--ghost-m);
      text-transform: uppercase; letter-spacing: .08em; display: block; margin-top: 2px;
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  capabilities = ['Web', 'Mobile', 'Enterprise', 'AI', 'Hospitality'];

  stats = [
    { icon: 'bi bi-folder2-open', val: '20+', lbl: 'Projects' },
    { icon: 'bi bi-people-fill', val: '5+', lbl: 'Clients' },
    { icon: 'bi bi-diagram-3', val: 'Multiple', lbl: 'Industries' },
    { icon: 'bi bi-broadcast', val: 'Live & Ongoing', lbl: 'Systems' },
  ];

  ngOnInit() { }
  ngOnDestroy() { }
  constructor(@Inject(PLATFORM_ID) private pid: object) { }
}