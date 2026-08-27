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

      <div class="container" style="position:relative;z-index:3">
        <div class="hero-inner">

          <!-- ── Left Column ── -->
          <div class="hero-left">
            <!-- Premium eyebrow -->
            <div class="hero-eyebrow animate-in" style="animation-delay:.08s">
              <span class="he-pulse"></span>
              <i class="bi bi-geo-alt-fill"></i>
              <span>Mumbai</span>
              <div class="he-div"></div>
              <span>Digital Engineering &amp; Software Solutions</span>
            </div>

            <!-- Headline -->
            <h1 class="hero-h1">
              <span class="h1-we animate-in" style="animation-delay:.18s">We Build Technology</span>
              <span class="h1-word animate-in" style="animation-delay:.3s">
                That Works for <em>Real Indian Businesses.</em>
              </span>
            </h1>

            <p class="hero-desc animate-in" style="animation-delay:.4s">
              Real code, running in production — hotel booking systems, GST-ready billing
              software and <strong>working solutions</strong> Indian businesses actually use every day.
            </p>

            <!-- CTA Row -->
            <div class="hero-ctas animate-in" style="animation-delay:.5s">
              <a routerLink="/contact" class="btn-gold">
                <i class="bi bi-rocket-takeoff"></i>
                <span>Start a Project</span>
              </a>
              <a routerLink="/work" class="btn-outline">
                Explore Our Work <i class="bi bi-arrow-right"></i>
              </a>
            </div>

            <!-- WhatsApp highlight — one compact line, not a whole card -->
            <a routerLink="/services" class="wa-chip animate-in" style="animation-delay:.58s">
              <i class="bi bi-whatsapp"></i>
              <span>WhatsApp Automation &amp; AI Solutions</span>
              <span class="wa-badge">NEW</span>
            </a>

            <!-- Social proof -->
            <div class="hero-proof animate-in" style="animation-delay:.66s">
              <div class="pc-avatars">
                <div class="pca" style="background:#C8922E">T</div>
                <div class="pca" style="background:#D9A84F">V</div>
                <div class="pca" style="background:#B27F26">D</div>
                <div class="pca pca-more">+2</div>
              </div>
              <span class="pc-text">Trusted by <strong>5+ Indian businesses</strong></span>
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

            <!-- Tech stack strip -->
            <div class="hero-tech animate-in" style="animation-delay:.74s">
              <span class="ht-label">Our Stack</span>
              <div class="ht-chips">
                <span class="ht-chip" *ngFor="let t of techStack"><i [class]="t.icon"></i>{{ t.name }}</span>
              </div>
            </div>
          </div>

          <!-- ── Right Visual ── -->
          <div class="hero-visual animate-in d-none d-lg-block" style="animation-delay:.24s">
            <div class="vis-wrap">
              <!-- One ambient ring, not three -->
              <div class="vis-ring vr1"></div>

              <!-- Central logo -->
              <div class="vis-core">
                <div class="vc-glow"></div>
                <div class="vc-logo">
                  <img src="assets/logo.png" alt="MrD Brains Technology">
                </div>
                <div class="vc-pulse p1"></div>
              </div>

              <!-- A handful of tech chips, simply placed (not 6 orbiting) -->
              <div class="orbit-chip oc1"><i class="bi bi-microsoft"></i><span>.NET</span></div>
              <div class="orbit-chip oc2"><i class="bi bi-hexagon"></i><span>MERN</span></div>
              <div class="orbit-chip oc3"><i class="bi bi-code-slash"></i><span>MEAN</span></div>

              <!-- One floating stat card, not three -->
              <div class="vis-card vc-a">
                <div class="vcard-icon vi-gold"><i class="bi bi-folder2-open"></i></div>
                <div>
                  <div class="vcard-val">20+</div>
                  <div class="vcard-lbl">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh; min-height: 100svh; min-height: 100dvh;
      background: var(--obsidian);
      display: flex; flex-direction: column; justify-content: center;
      padding-top: 96px; padding-bottom: 30px; overflow: hidden; position: relative;
    }
    @media(max-width:767px){ .hero{ padding-top: 78px; padding-bottom: 18px; } }
    /* Shorter viewports (small laptops, landscape phones) — tighten rhythm so
       everything still lands inside one screen */
    @media(min-height:768px) and (max-height:860px){
      .hero{ padding-top: 84px; }
      .hero-eyebrow{ margin-bottom:16px; }
      .hero-h1{ margin-bottom:18px; }
      .hero-desc{ margin-bottom:20px; }
      .hero-ctas{ margin-bottom:16px; }
      .wa-chip{ margin-bottom:18px; }
      .hero-tech{ margin-top:16px; }
    }
    @media(max-height:767px){
      .hero{ padding-top: 72px; padding-bottom: 14px; }
      .hero-eyebrow{ margin-bottom:14px; }
      .hero-h1{ margin-bottom:14px; font-size: clamp(1.9rem,4.4vw,3.2rem); }
      .hero-desc{ margin-bottom:16px; line-height:1.6; }
      .hero-ctas{ margin-bottom:14px; }
      .wa-chip{ margin-bottom:14px; }
      .hero-tech{ margin-top:12px; }
    }

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
    /* Entrance */
    .animate-in { opacity: 0; animation: revealUp .75s cubic-bezier(.16,1,.3,1) forwards; }

    /* Layout */
    .hero-inner {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 72px; align-items: center; padding: 18px 0 20px;
    }
    @media(max-width:1099px){ .hero-inner{grid-template-columns:1fr;gap:56px} }

    /* Eyebrow — single clean line */
    .hero-eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--obsidian-s); border: 1px solid var(--border);
      border-radius: 40px; padding: 8px 18px; margin-bottom: 22px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d);
      letter-spacing: .06em; text-transform: uppercase;
      i { color: var(--gold); font-size: .68rem; }
    }
    .he-pulse {
      width: 6px; height: 6px; border-radius: 50%; background: var(--emerald);
      box-shadow: 0 0 0 3px var(--emerald-ring); animation: blink 2s ease-in-out infinite;
      flex-shrink: 0;
    }
    .he-div { width: 1px; height: 14px; background: var(--border); margin: 0 2px; }

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
      max-width: 480px; line-height: 1.75; margin-bottom: 28px;
      strong { color: var(--ghost-m); font-weight: 500; }
    }

    .hero-ctas { display: flex; gap: 13px; flex-wrap: wrap; margin-bottom: 20px; }

    /* WhatsApp highlight — one compact pill, not a full card */
    .wa-chip {
      display: inline-flex; align-items: center; gap: 9px;
      background: var(--emerald-dim); border: 1px solid var(--emerald-ring);
      border-radius: 40px; padding: 8px 14px 8px 12px; margin-bottom: 24px;
      text-decoration: none; max-width: 100%;
      font-family: var(--f-head); font-weight: 600; font-size: .78rem; color: var(--ghost);
      transition: border-color .2s ease, transform .2s ease;
      i { color: var(--wa-green); font-size: 1rem; flex-shrink: 0; }
      span:not(.wa-badge) { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      &:hover { border-color: var(--emerald); transform: translateY(-1px); }
    }
    .wa-badge {
      background: var(--emerald); border-radius: 6px; padding: 2px 8px;
      font-family: var(--f-mono); font-size: .56rem; font-weight: 500; color: #fff; letter-spacing: .1em;
      flex-shrink: 0;
    }

    /* Social proof */
    .hero-proof {
      display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
    }
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
    .pc-text { font-size: .76rem; color: var(--ghost-m); strong{color:var(--ghost);font-weight:600} }
    .proof-divider { width: 1px; height: 32px; background: var(--border); }
    .proof-stat { display: flex; flex-direction: column; gap: 2px; }
    .ps-val { font-family: var(--f-head); font-weight: 800; font-size: 1.1rem; color: var(--ghost); line-height: 1; }
    .ps-lbl { font-family: var(--f-mono); font-size: .58rem; color: var(--ghost-d); text-transform: uppercase; letter-spacing: .1em; }

    /* Tech stack strip */
    .hero-tech { margin-top: 22px; max-width: 520px; }
    .ht-label {
      display: block; font-family: var(--f-mono); font-size: .58rem; color: var(--ghost-d);
      text-transform: uppercase; letter-spacing: .12em; margin-bottom: 9px;
    }
    .ht-chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .ht-chip {
      display: inline-flex; align-items: center; gap: 6px;
      background: var(--obsidian-s); border: 1px solid var(--border);
      border-radius: 40px; padding: 6px 12px;
      font-family: var(--f-mono); font-size: .68rem; font-weight: 500; color: var(--ghost-m);
      i { color: var(--gold); font-size: .78rem; }
    }

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

    /* Tech chips — three, simply placed around the core */
    .orbit-chip {
      position: absolute; z-index: 5;
      display: flex; align-items: center; gap: 6px;
      background: #FFFFFF;
      border: 1px solid var(--border); border-radius: 50px;
      padding: 7px 14px; cursor: default; box-shadow: var(--sh-sm);
      font-family: var(--f-mono); font-size: .7rem; font-weight: 500; color: var(--ghost-m);
      transition: all .25s ease;
      i { font-size: .85rem; color: var(--gold); }
      span { white-space: nowrap; }
      &:hover { border-color: var(--gold-ring); color: var(--gold); background: var(--gold-dim); }
    }
    .oc1 { top:  30px; left:  10px; animation: floatSlow 6s ease-in-out infinite .0s; }
    .oc2 { top: 50%; right: -10px; transform: translateY(-50%); animation: floatSlow 5.5s ease-in-out infinite 1.4s; }
    .oc3 { bottom: 30px; left: 30px; animation: floatSlow 6.5s ease-in-out infinite 2.8s; }

    /* One float card */
    .vis-card {
      position: absolute; z-index: 6;
      display: flex; align-items: center; gap: 12px;
      background: #FFFFFF;
      border: 1px solid var(--border); border-radius: 13px;
      padding: 14px 18px; box-shadow: var(--sh-md);
    }
    .vcard-icon {
      width: 38px; height: 38px; flex-shrink: 0; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      i { font-size: 1.1rem; }
    }
    .vi-gold { background: var(--gold-dim); border: 1px solid var(--gold-ring); i { color: var(--gold); } }
    .vcard-val { font-family: var(--f-head); font-weight: 800; font-size: 1rem; color: var(--ghost); line-height: 1; }
    .vcard-lbl { font-family: var(--f-mono); font-size: .6rem; color: var(--ghost-m); text-transform: uppercase; letter-spacing: .08em; margin-top: 2px; }
    .vc-a { bottom: 10px; right: 10px; animation: floatSlow 5s ease-in-out infinite 0s; }

    /* Scale the visual down on shorter laptop screens so the whole
       hero still fits inside one viewport without clipping */
    @media(min-width:1100px) and (max-height:860px){
      .hero-visual{ height: 430px; }
      .vis-wrap{ transform: scale(.83); transform-origin: center; }
    }
    @media(min-width:1100px) and (max-height:720px){
      .hero-visual{ height: 350px; }
      .vis-wrap{ transform: scale(.68); transform-origin: center; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  techStack = [
    { icon: 'bi bi-microsoft', name: '.NET' },
    { icon: 'bi bi-hexagon', name: 'MERN' },
    { icon: 'bi bi-code-slash', name: 'MEAN' },
    { icon: 'bi bi-robot', name: 'AI / LLM' },
    { icon: 'bi bi-cloud', name: 'Azure' },
    { icon: 'bi bi-window', name: 'WPF' },
    { icon: 'bi bi-diagram-3', name: 'Node.js' },
    { icon: 'bi bi-gear-wide-connected', name: 'n8n Automation' },
  ];

  ngOnInit() { }
  ngOnDestroy() { }
  constructor(@Inject(PLATFORM_ID) private pid: object) { }
}