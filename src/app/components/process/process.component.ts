import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-process',
  standalone: true, imports: [CommonModule, RouterLink],
  template: `
    <section id="process" class="process-sec">
      <div class="noise"></div>
      <div class="process-glow"></div>

      <div class="container">
        <!-- Header -->
        <div class="process-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">How We Work</div>
            <h2 class="sec-h2">From First Call to <em>Go-Live</em></h2>
          </div>
          <p class="sec-lead" style="max-width:400px">
            No black boxes. No guesswork. You'll know exactly where your project
            stands at every stage — and why every decision was made.
          </p>
        </div>

        <!-- Promise bar -->
        <div class="promise-bar" data-aos="fade-up" data-aos-delay="40">
          <div class="pb-item" *ngFor="let p of promises">
            <i [class]="p.icon"></i>
            <span>{{ p.text }}</span>
          </div>
        </div>

        <!-- Steps -->
        <div class="steps-wrap">
          <div class="step-connector"></div>
          <div class="steps-grid">
            <div class="step-card" *ngFor="let s of steps; let i=index"
                 [class.featured]="s.featured"
                 data-aos="fade-up" [attr.data-aos-delay]="i*100">
              <!-- Step number -->
              <div class="sc-num-wrap">
                <div class="sc-num" [style.background]="s.numBg">
                  <span>{{ (i+1).toString().padStart(2,'0') }}</span>
                </div>
                <div class="sc-num-label">{{ s.phase }}</div>
              </div>
              <!-- Icon -->
              <div class="sc-icon" [style.background]="s.iconBg" [style.border-color]="s.iconBorder">
                <i [class]="s.icon" [style.color]="s.iconColor"></i>
              </div>
              <!-- Content -->
              <div class="sc-title">{{ s.title }}</div>
              <p class="sc-desc">{{ s.desc }}</p>
              <!-- What happens -->
              <div class="sc-what">
                <div class="scw-label">What happens</div>
                <div class="scw-item" *ngFor="let w of s.what">
                  <i class="bi bi-arrow-right-short"></i>
                  <span>{{ w }}</span>
                </div>
              </div>
              <!-- Duration chip -->
              <div class="sc-duration">
                <i class="bi bi-clock"></i> {{ s.duration }}
              </div>
              <!-- Emotion tag -->
              <div class="sc-feel" [style.background]="s.feelBg" [style.color]="s.feelColor" [style.border-color]="s.feelBorder">
                <i [class]="s.feelIcon"></i> {{ s.feel }}
              </div>
            </div>
          </div>
        </div>

        <!-- After go-live strip -->
        <div class="post-launch" data-aos="fade-up">
          <div class="pl-left">
            <div class="pl-icon"><i class="bi bi-infinity"></i></div>
            <div>
              <div class="pl-title">We don't disappear after launch.</div>
              <div class="pl-desc">
                Every project includes post-launch support. We monitor, fix, improve
                and stand by our work — because your success is our reputation.
              </div>
            </div>
          </div>
          <div class="pl-stats">
            <div class="pls-item" *ngFor="let s of postStats">
              <div class="plsi-val">{{ s.val }}</div>
              <div class="plsi-lbl">{{ s.lbl }}</div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="process-cta" data-aos="fade-up">
          <div class="pcta-text">
            <h3>Ready to start your project?</h3>
            <p>Book a free 30-minute discovery call. We'll listen, understand, and tell you honestly what we can build for you.</p>
          </div>
          <div class="pcta-actions">
            <a routerLink="/contact" class="btn-gold">
              <i class="bi bi-calendar-check"></i> Book Free Discovery Call
            </a>
            <a href="https://wa.me/919372401266?text=Hi!%20I'd%20like%20to%20start%20a%20project%20with%20MrD%20Brains."
               target="_blank" class="btn-outline">
              <i class="bi bi-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .process-sec {
      padding: 140px 0; background: var(--obsidian-s);
      position: relative; overflow: hidden;
    }
    .process-glow {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      width: 800px; height: 500px;
      background: radial-gradient(ellipse, rgba(201,151,74,.045) 0%, transparent 65%);
      pointer-events: none;
    }
    .process-top {
      display: flex; align-items: flex-end; justify-content: space-between;
      gap: 32px; margin-bottom: 36px;
    }
    @media(max-width:767px){ .process-top{ flex-direction: column; align-items: flex-start; gap: 14px; } }

    /* Promise bar */
    .promise-bar {
      display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 64px;
    }
    .pb-item {
      display: flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,.025); border: 1px solid rgba(255,255,255,.07);
      border-radius: 50px; padding: 9px 18px;
      font-family: var(--f-mono); font-size: .63rem; color: var(--ghost-d); letter-spacing: .06em;
      i { color: var(--gold); font-size: .74rem; }
    }

    /* Steps */
    .steps-wrap { position: relative; margin-bottom: 52px; }
    .step-connector {
      position: absolute; top: 52px; left: calc(12.5% - 1px); right: calc(12.5% - 1px);
      height: 1px; background: linear-gradient(90deg, transparent, rgba(201,151,74,.25) 15%, rgba(201,151,74,.25) 85%, transparent);
      pointer-events: none;
      @media(max-width:767px){ display: none; }
    }
    .steps-grid {
      display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; position: relative; z-index: 1;
    }
    @media(max-width:991px){ .steps-grid{ grid-template-columns: repeat(2,1fr); } }
    @media(max-width:480px){ .steps-grid{ grid-template-columns: 1fr; } }

    .step-card {
      background: var(--obsidian-m); border: 1px solid var(--border);
      border-radius: 20px; padding: 28px 24px;
      display: flex; flex-direction: column; gap: 0;
      box-shadow: var(--sh-sm);
      transition: all .32s cubic-bezier(.4,0,.2,1); position: relative; overflow: hidden;
      &:hover {
        border-color: rgba(201,151,74,.22); transform: translateY(-6px);
        box-shadow: var(--sh-lg);
        &::after { opacity: 1; }
      }
      &::after {
        content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, var(--gold-l), var(--coral));
        opacity: 0; transition: opacity .3s;
      }
      &.featured {
        background: linear-gradient(160deg, var(--obsidian-l), var(--obsidian-m));
        border-color: rgba(201,151,74,.25);
        &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg,transparent,rgba(201,151,74,.45),transparent); }
        &::after { opacity: 1; }
      }
    }

    /* Step number */
    .sc-num-wrap { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
    .sc-num {
      width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      span { font-family: var(--f-head); font-weight: 800; font-size: .9rem; color: var(--obsidian); }
    }
    .sc-num-label {
      font-family: var(--f-mono); font-size: .6rem; font-weight: 500;
      text-transform: uppercase; letter-spacing: .16em; color: var(--ghost-d);
    }

    /* Icon */
    .sc-icon {
      width: 52px; height: 52px; border-radius: 14px; margin-bottom: 18px;
      display: flex; align-items: center; justify-content: center;
      border: 1px solid;
      i { font-size: 1.4rem; }
    }

    /* Content */
    .sc-title { font-family: var(--f-head); font-weight: 800; font-size: 1rem; color: var(--ghost); margin-bottom: 10px; }
    .sc-desc  { font-size: .8rem; font-weight: 300; color: var(--ghost-d); line-height: 1.78; margin-bottom: 18px; }

    /* What happens */
    .sc-what { margin-bottom: 18px; }
    .scw-label { font-family: var(--f-mono); font-size: .58rem; text-transform: uppercase; letter-spacing: .14em; color: rgba(201,151,74,.4); margin-bottom: 8px; }
    .scw-item {
      display: flex; align-items: flex-start; gap: 4px;
      font-size: .76rem; color: var(--ghost-m); line-height: 1.5; margin-bottom: 5px;
      i { color: var(--gold); font-size: 1rem; flex-shrink: 0; margin-top: -1px; }
    }

    /* Duration */
    .sc-duration {
      display: inline-flex; align-items: center; gap: 6px; margin-bottom: 14px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
      border-radius: 6px; padding: 6px 12px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d);
      i { color: var(--gold); font-size: .68rem; }
    }

    /* Emotion tag */
    .sc-feel {
      display: inline-flex; align-items: center; gap: 6px; margin-top: auto;
      border-radius: 6px; padding: 6px 12px; border: 1px solid;
      font-family: var(--f-mono); font-size: .62rem; font-weight: 500;
      letter-spacing: .06em;
      i { font-size: .68rem; }
    }

    /* Post-launch strip */
    .post-launch {
      display: flex; align-items: center; justify-content: space-between; gap: 32px;
      background: linear-gradient(135deg, var(--obsidian-l), var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.16); border-radius: 20px; padding: 36px;
      margin-bottom: 36px; position: relative; overflow: hidden;
      &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg,transparent,rgba(201,151,74,.4),transparent); }
    }
    @media(max-width:767px){ .post-launch{ flex-direction: column; align-items: flex-start; padding: 24px; } }
    .pl-left { display: flex; align-items: flex-start; gap: 18px; }
    .pl-icon {
      width: 56px; height: 56px; flex-shrink: 0; border-radius: 15px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: 1.4rem; }
      animation: goldGlow 5s ease-in-out infinite;
    }
    .pl-title { font-family: var(--f-head); font-weight: 800; font-size: 1.05rem; color: var(--ghost); margin-bottom: 6px; }
    .pl-desc  { font-size: .83rem; color: var(--ghost-d); line-height: 1.72; max-width: 440px; }
    .pl-stats { display: flex; gap: 0; flex-shrink: 0; }
    .pls-item {
      text-align: center; padding: 12px 24px;
      border-left: 1px solid rgba(255,255,255,.07);
      &:first-child { border-left: none; }
    }
    .plsi-val { font-family: var(--f-head); font-weight: 800; font-size: 1.5rem; color: var(--ghost); line-height: 1; margin-bottom: 4px; }
    .plsi-lbl { font-family: var(--f-mono); font-size: .58rem; color: var(--ghost-d); text-transform: uppercase; letter-spacing: .08em; }

    /* CTA */
    .process-cta {
      display: flex; align-items: center; justify-content: space-between; gap: 32px;
      background: linear-gradient(135deg,rgba(201,151,74,.08),rgba(201,151,74,.03));
      border: 1px solid rgba(201,151,74,.2); border-radius: 20px; padding: 36px;
      position: relative; overflow: hidden;
      &::before{ content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.5),transparent) }
    }
    @media(max-width:767px){ .process-cta{ flex-direction:column;align-items:flex-start;padding:24px } }
    .pcta-text {
      h3 { font-family: var(--f-head); font-weight: 800; font-size: 1.2rem; color: var(--ghost); margin-bottom: 8px; }
      p  { font-size: .84rem; color: var(--ghost-d); line-height: 1.72; max-width: 460px; }
    }
    .pcta-actions { display: flex; gap: 10px; flex-wrap: wrap; flex-shrink: 0; }
  `]
})
export class ProcessComponent {
  promises = [
    { icon: 'bi bi-telephone-fill',      text: 'Free discovery call — always' },
    { icon: 'bi bi-file-earmark-check',  text: 'Written proposal before we start' },
    { icon: 'bi bi-eye-fill',            text: 'Weekly progress updates' },
    { icon: 'bi bi-shield-fill-check',   text: 'NDA signed on day one' },
    { icon: 'bi bi-patch-check-fill',    text: 'You own 100% of the code' },
  ];

  steps = [
    {
      phase: 'Step 01 · Discover',
      title: 'We Listen First',
      icon: 'bi bi-ear-fill', iconColor: '#C9974A',
      iconBg: 'rgba(201,151,74,.1)', iconBorder: 'rgba(201,151,74,.25)',
      numBg: 'linear-gradient(135deg,#DFB870,#C9974A)',
      desc: 'Before we write a single line of code, we spend time deeply understanding your business, your team, and your goals.',
      what: [
        'Free 30-min discovery call',
        'Business process walkthrough',
        'Requirements documentation',
        'Budget & timeline discussion',
      ],
      duration: '1–3 days',
      feel: 'You feel heard', feelIcon: 'bi bi-heart-fill',
      feelBg: 'rgba(201,151,74,.08)', feelColor: '#C9974A', feelBorder: 'rgba(201,151,74,.2)',
      featured: false,
    },
    {
      phase: 'Step 02 · Design',
      title: 'Blueprint Before Build',
      icon: 'bi bi-pencil-fill', iconColor: '#F0674A',
      iconBg: 'rgba(240,103,74,.1)', iconBorder: 'rgba(240,103,74,.25)',
      numBg: 'linear-gradient(135deg,#F07858,#E85D3A)',
      desc: 'We present a detailed proposal with scope, timeline and fixed price — then design wireframes so you see it before we build it.',
      what: [
        'Fixed-price written proposal',
        'UI wireframes & mockups',
        'Tech architecture plan',
        'Milestone schedule agreed',
      ],
      duration: '3–7 days',
      feel: 'You feel confident', feelIcon: 'bi bi-lightning-charge-fill',
      feelBg: 'rgba(240,103,74,.08)', feelColor: '#F0674A', feelBorder: 'rgba(240,103,74,.2)',
      featured: false,
    },
    {
      phase: 'Step 03 · Build',
      title: 'We Build With You',
      icon: 'bi bi-code-slash', iconColor: '#C9974A',
      iconBg: 'rgba(201,151,74,.12)', iconBorder: 'rgba(201,151,74,.3)',
      numBg: 'linear-gradient(135deg,#C9974A,#8B5E2A)',
      desc: 'Agile sprints with weekly demos. You can see, test and give feedback at every stage — no surprises at the end.',
      what: [
        'Weekly sprint demos',
        'WhatsApp progress updates',
        'Staging environment access',
        'Feedback incorporated fast',
      ],
      duration: 'Per scope agreed',
      feel: 'You feel in control', feelIcon: 'bi bi-hand-thumbs-up-fill',
      feelBg: 'rgba(201,151,74,.1)', feelColor: '#DFB870', feelBorder: 'rgba(201,151,74,.25)',
      featured: true,
    },
    {
      phase: 'Step 04 · Support',
      title: 'We Stay With You',
      icon: 'bi bi-headset', iconColor: '#2ECC71',
      iconBg: 'rgba(46,204,113,.1)', iconBorder: 'rgba(46,204,113,.25)',
      numBg: 'linear-gradient(135deg,#2ECC71,#27AE60)',
      desc: 'Go-live is not the end — it\'s the beginning. We provide hands-on support, fixes and improvements post-launch.',
      what: [
        'Go-live handover & training',
        'Post-launch bug fixes',
        'Performance monitoring',
        'Ongoing support retainer',
      ],
      duration: '90 days included',
      feel: 'You feel secure', feelIcon: 'bi bi-shield-fill-check',
      feelBg: 'rgba(46,204,113,.08)', feelColor: '#2ECC71', feelBorder: 'rgba(46,204,113,.2)',
      featured: false,
    },
  ];

  postStats = [
    { val: '90',   lbl: 'Days support included' },
    { val: '< 4h', lbl: 'Avg bug fix time' },
    { val: '100%', lbl: 'Projects maintained' },
  ];
}