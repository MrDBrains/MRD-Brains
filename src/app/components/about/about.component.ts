import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

@Component({
  selector: 'app-about',
  standalone: true, imports: [CommonModule, CountUpDirective],
  template: `
    <section id="about" class="about">
      <div class="noise"></div>
      <div class="about-top-rule"></div>

      <div class="container">
        <!-- Section intro -->
        <div class="about-intro" data-aos="fade-up">
          <div>
            <div class="eyebrow">About MrD Brains Technology</div>
            <h2 class="sec-h2">Mumbai's Trusted<br><em>Software Partner</em></h2>
          </div>
          <div class="ai-right">
            <p class="sec-lead">
              Founded in 2022, we are a team of engineers, designers and strategists committed to one purpose:
              delivering technology that genuinely moves businesses forward.
            </p>
          </div>
        </div>

        <!-- Main grid -->
        <div class="about-grid">
          <!-- Story card -->
          <div class="story-card" data-aos="fade-right" data-aos-duration="900">
            <div class="sc-eyebrow">
              <span class="sc-num">001</span>
              <span class="sc-label">Our Story</span>
            </div>
            <h3 class="sc-title">Built on Expertise,<br>Driven by Results</h3>
            <p class="sc-body">
              MrD Brains Technology was born in the heart of Mumbai's tech ecosystem in 2022.
              Frustrated by off-the-shelf software that never quite fit, our founders — seasoned
              .NET, MERN and MEAN stack engineers — set out to build a studio that creates
              bespoke, elegant technology tailored to each client's unique reality.
            </p>
            <p class="sc-body" style="margin-top:14px">
              Today we serve startups, SMEs and enterprises across Maharashtra, delivering
              everything from custom ERP systems to AI-powered WhatsApp automation platforms.
              Every line of code we ship is written with long-term maintainability and business
              impact in mind.
            </p>

            <!-- Timeline -->
            <div class="timeline">
              <div class="tl-item" *ngFor="let t of timeline">
                <div class="tli-year">{{ t.year }}</div>
                <div class="tli-dot"><div class="tli-dot-inner"></div></div>
                <div class="tli-body">
                  <div class="tli-title">{{ t.title }}</div>
                  <div class="tli-desc">{{ t.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right panel: strengths + card -->
          <div class="about-right" data-aos="fade-left" data-aos-delay="120">
            <!-- Strengths list -->
            <div class="strengths">
              <div class="strength-item" *ngFor="let s of strengths; let i=index"
                   data-aos="fade-up" [attr.data-aos-delay]="80+i*70">
                <div class="sti-header">
                  <div class="sti-icon-wrap">
                    <div class="sti-icon"><i [class]="s.icon"></i></div>
                  </div>
                  <div class="sti-meta">
                    <div class="sti-num">{{ (i+1).toString().padStart(2,'0') }}</div>
                    <div class="sti-name">{{ s.title }}</div>
                  </div>
                  <div class="sti-score">{{ s.score }}%</div>
                </div>
                <div class="sti-bar-track">
                  <div class="sti-bar" [style.width]="s.score+'%'"></div>
                </div>
                <div class="sti-desc">{{ s.desc }}</div>
              </div>
            </div>

            <!-- Company card -->
            <div class="company-card" data-aos="fade-up" data-aos-delay="300">
              <div class="cc-top">
                <div class="cc-logo">
                  <img src="assets/logo.png" alt="MrD Brains Technology">
                </div>
                <div class="cc-info">
                  <div class="cc-name">MrD Brains Technology</div>
                  <div class="cc-loc"><i class="bi bi-geo-alt-fill"></i> Mumbai, India</div>
                </div>
                <div class="cc-est">
                  <span>Est.</span>
                  <strong>2022</strong>
                </div>
              </div>
              <div class="cc-divider"></div>
              <div class="cc-tagline">
                <span class="cc-quote">"</span>
                Building tomorrow's software, today — with craftsmanship that endures.
              </div>
              <div class="cc-tech">
                <div class="cct-chip" *ngFor="let t of tech">
                  <i [class]="t.icon"></i>
                  <span>{{ t.name }}</span>
                </div>
              </div>
              <div class="cc-divider"></div>
              <div class="cc-stats-row">
                <div class="ccsr-item" *ngFor="let s of miniStats">
                  <span class="ccs-val" appCountUp [countUpValue]="s.val">{{ s.val }}</span>
                  <span class="ccs-lbl">{{ s.lbl }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Values strip -->
        <div class="values-strip" data-aos="fade-up" data-aos-delay="80">
          <div class="vs-label">Our Core Values</div>
          <div class="values-row">
            <div class="val-item" *ngFor="let v of values">
              <div class="vi-icon"><i [class]="v.icon"></i></div>
              <div class="vi-title">{{ v.title }}</div>
              <div class="vi-desc">{{ v.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 140px 0; background: var(--obsidian-s); position: relative; overflow: hidden;
    }
    .about-top-rule {
      position: absolute; top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg,transparent,var(--gold) 30%,var(--coral) 70%,transparent);
    }

    /* Intro */
    .about-intro {
      display: flex; align-items: flex-end; justify-content: space-between; gap: 40px;
      margin-bottom: 72px;
    }
    @media(max-width:767px){ .about-intro{flex-direction:column;align-items:flex-start;gap:20px} }
    .ai-right { max-width: 420px; }

    /* Main grid */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; margin-bottom: 60px; }
    @media(max-width:1099px){ .about-grid{grid-template-columns:1fr} }

    /* Story card */
    .story-card {
      background: linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.14); border-radius: 22px; padding: 40px;
      position: relative; overflow: hidden;
      box-shadow: var(--sh-lg);
      transition: box-shadow .35s ease, transform .35s ease;
      &::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg,transparent,rgba(201,151,74,.45),transparent);
      }
      &:hover { transform: translateY(-3px); box-shadow: 0 12px 20px rgba(16,24,40,.06), 0 32px 64px rgba(200,146,46,.14); }
    }
    .sc-eyebrow {
      display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
    }
    .sc-num {
      font-family: var(--f-mono); font-size: .64rem; color: rgba(201,151,74,.3);
      letter-spacing: .12em;
    }
    .sc-label {
      font-family: var(--f-mono); font-size: .64rem; text-transform: uppercase;
      letter-spacing: .2em; color: var(--gold);
    }
    .sc-title { font-family: var(--f-head); font-weight: 800; font-size: 1.6rem; color: var(--ghost); margin-bottom: 18px; line-height: 1.15; }
    .sc-body { font-size: .88rem; font-weight: 300; color: var(--ghost-d); line-height: 1.85; }

    /* Timeline */
    .timeline { margin-top: 32px; display: flex; flex-direction: column; gap: 0; position: relative; }
    .timeline::before {
      content: ''; position: absolute; left: 51px; top: 8px; bottom: 8px; width: 1px;
      background: linear-gradient(180deg,var(--gold) 0%,rgba(201,151,74,.2) 100%);
    }
    .tl-item { display: flex; gap: 16px; align-items: flex-start; padding: 12px 0; }
    .tli-year {
      font-family: var(--f-mono); font-size: .62rem; font-weight: 500; color: var(--gold);
      letter-spacing: .08em; min-width: 36px; text-align: right; padding-top: 3px;
    }
    .tli-dot {
      width: 14px; height: 14px; flex-shrink: 0; margin-top: 2px;
      border-radius: 50%; background: var(--obsidian-m);
      border: 2px solid rgba(201,151,74,.4);
      display: flex; align-items: center; justify-content: center;
    }
    .tli-dot-inner { width: 5px; height: 5px; border-radius: 50%; background: var(--gold); }
    .tli-title { font-family: var(--f-head); font-weight: 700; font-size: .82rem; color: var(--ghost); margin-bottom: 2px; }
    .tli-desc  { font-size: .74rem; color: var(--ghost-d); line-height: 1.5; }

    /* Right panel */
    .about-right { display: flex; flex-direction: column; gap: 24px; }

    /* Strengths */
    .strengths { display: flex; flex-direction: column; gap: 14px; }
    .strength-item {
      background: var(--obsidian-m); border: 1px solid var(--border);
      border-radius: 14px; padding: 16px 20px; box-shadow: var(--sh-sm); transition: all .28s;
      &:hover { border-color: rgba(201,151,74,.18); background: var(--obsidian-l); box-shadow: var(--sh-md); }
    }
    .sti-header { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
    .sti-icon-wrap { flex-shrink: 0; }
    .sti-icon {
      width: 36px; height: 36px; border-radius: 9px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: .9rem; }
    }
    .sti-meta { flex: 1; }
    .sti-num  { font-family: var(--f-mono); font-size: .56rem; color: rgba(201,151,74,.3); }
    .sti-name { font-family: var(--f-head); font-weight: 700; font-size: .84rem; color: var(--ghost); }
    .sti-score { font-family: var(--f-mono); font-size: .78rem; font-weight: 500; color: var(--gold); flex-shrink: 0; }
    .sti-bar-track {
      height: 3px; background: rgba(255,255,255,.06); border-radius: 2px; margin-bottom: 9px;
    }
    .sti-bar {
      height: 100%; border-radius: 2px;
      background: linear-gradient(90deg,var(--gold-l),var(--gold));
      animation: progressBar .8s cubic-bezier(.4,0,.2,1) .4s both;
    }
    .sti-desc { font-size: .76rem; color: var(--ghost-d); line-height: 1.6; }

    /* Company card */
    .company-card {
      background: linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.16); border-radius: 20px; padding: 26px;
      position: relative; overflow: hidden;
      box-shadow: var(--sh-md);
      transition: box-shadow .3s ease, transform .3s ease;
      &::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg,transparent,rgba(201,151,74,.4),transparent);
      }
      &:hover { transform: translateY(-4px); box-shadow: var(--sh-lg); }
    }
    .cc-top { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
    .cc-logo {
      width: 52px; height: 52px; flex-shrink: 0; border-radius: 13px;
      background: #fff; border: 1.5px solid rgba(201,151,74,.22);
      display: flex; align-items: center; justify-content: center;
      img { width: 42px; height: 42px; object-fit: contain; }
    }
    .cc-name { font-family: var(--f-head); font-weight: 700; font-size: .9rem; color: var(--ghost); }
    .cc-loc  { font-size: .73rem; color: var(--ghost-d); margin-top: 3px; i{color:var(--gold);font-size:.68rem} }
    .cc-est  {
      margin-left: auto; flex-shrink: 0; text-align: center;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      border-radius: 10px; padding: 8px 14px;
      span { display: block; font-family: var(--f-mono); font-size: .56rem; color: rgba(201,151,74,.6); letter-spacing: .1em; text-transform: uppercase; }
      strong { display: block; font-family: var(--f-head); font-size: 1.1rem; font-weight: 800; color: var(--gold); }
    }
    .cc-divider { height: 1px; background: rgba(255,255,255,.06); margin: 14px 0; }
    .cc-tagline {
      font-family: var(--f-display); font-style: italic; font-weight: 300;
      font-size: 1.05rem; color: rgba(201,151,74,.55); line-height: 1.6; margin-bottom: 16px;
    }
    .cc-quote { font-size: 2rem; line-height: .4; vertical-align: middle; margin-right: 4px; }
    .cc-tech { display: grid; grid-template-columns: repeat(3,1fr); gap: 7px; margin-bottom: 0; }
    .cct-chip {
      display: flex; align-items: center; gap: 6px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06);
      border-radius: 8px; padding: 9px 10px; cursor: default; transition: all .22s;
      i { font-size: 1rem; color: var(--coral); }
      span { font-family: var(--f-mono); font-size: .64rem; color: var(--ghost-d); }
      &:hover { border-color: rgba(201,151,74,.18); background: var(--gold-dim); i{color:var(--gold)} }
    }
    .cc-stats-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; }
    .ccsr-item { text-align: center; padding: 10px 6px; border-right: 1px solid rgba(255,255,255,.06); &:last-child{border-right:none} }
    .ccs-val { display: block; font-family: var(--f-head); font-weight: 800; font-size: 1.2rem; color: var(--ghost); line-height: 1; margin-bottom: 3px; }
    .ccs-lbl { display: block; font-family: var(--f-mono); font-size: .56rem; color: var(--ghost-d); text-transform: uppercase; letter-spacing: .08em; }

    /* Values strip */
    .values-strip {
      background: var(--obsidian-m); border: 1px solid var(--border);
      border-radius: 20px; padding: 36px; box-shadow: var(--sh-md);
    }
    .vs-label {
      font-family: var(--f-mono); font-size: .64rem; font-weight: 500; text-transform: uppercase;
      letter-spacing: .2em; color: rgba(201,151,74,.5); margin-bottom: 24px;
    }
    .values-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
    @media(max-width:767px){ .values-row{grid-template-columns:repeat(2,1fr)} }
    .val-item { text-align: center; }
    .vi-icon {
      width: 50px; height: 50px; margin: 0 auto 12px;
      background: linear-gradient(135deg,var(--gold-dim),rgba(201,151,74,.04));
      border: 1px solid var(--gold-ring); border-radius: 13px;
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: 1.2rem; }
      animation: goldGlow 4.5s ease-in-out infinite;
    }
    .vi-title { font-family: var(--f-head); font-weight: 700; font-size: .86rem; color: var(--ghost); margin-bottom: 6px; }
    .vi-desc  { font-size: .75rem; color: var(--ghost-d); line-height: 1.65; }
  `]
})
export class AboutComponent {
  timeline = [
    {
      year: '2022',
      title: 'Studio Founded',
      desc: 'Launched MrD Brains Technology in Mumbai, India, with a focus on custom .NET development and business-focused software solutions.',
    },
    {
      year: '2023',
      title: 'Cloud & Web Expansion',
      desc: 'Expanded into full MERN and MEAN stack development alongside Azure cloud technologies, while delivering our first enterprise business and ERP solutions.',
    },
    {
      year: '2025',
      title: 'Vyapar Ledger — Our Own Product',
      desc: 'Started building Vyapar Ledger, our proprietary business management platform for billing, inventory, GST, ledger and day-to-day business operations.',
    },
    {
      year: '2026',
      title: 'AI, Automation & Product Expansion',
      desc: 'Expanded into AI-powered applications and WhatsApp Business API automation for SMEs, while continuing to evolve Vyapar Ledger across mobile and upcoming Windows experiences.',
    },
  ];

  strengths = [
    { icon: 'bi bi-cpu-fill', title: 'Custom Software Development', desc: 'Full-stack engineering across .NET, MERN and MEAN — precision-built apps for scale and longevity.', score: 96 },
    { icon: 'bi bi-cloud-check-fill', title: 'Cloud & Azure Infrastructure', desc: 'Resilient, secure cloud architecture with 99.9% uptime commitments.', score: 92 },
    { icon: 'bi bi-robot', title: 'AI & WhatsApp Automation', desc: 'Intelligent workflow automation reducing manual effort by 70%+.', score: 89 },

  ];

  tech = [
    { icon: 'bi bi-microsoft', name: '.NET' },
    { icon: 'bi bi-hexagon', name: 'MERN' },
    { icon: 'bi bi-code-slash', name: 'MEAN' },
    { icon: 'bi bi-robot', name: 'AI / LLM' },
    { icon: 'bi bi-cloud', name: 'Azure' },
    { icon: 'bi bi-window', name: 'WPF' },
    { icon: 'bi bi-diagram-3', name: 'Node.js' },
    { icon: 'bi bi-gear-wide-connected', name: 'n8n Automation' },
  ];

  miniStats = [
    { val: '15+', lbl: 'Projects' },
    { val: '5+', lbl: 'Clients' },
    { val: '3+', lbl: 'Years' },
    { val: '5.0', lbl: 'Rating' },
  ];

  values = [
    { icon: 'bi bi-gem', title: 'Craftsmanship', desc: 'Every feature is deliberate, clean, and built to last beyond launch day.' },
    { icon: 'bi bi-transparency', title: 'Transparency', desc: 'Clear timelines, honest updates, and no surprises on scope or billing.' },
    { icon: 'bi bi-arrow-up-circle', title: 'Ownership', desc: 'We treat your product as if it were ours — with pride and accountability.' },
    { icon: 'bi bi-lightning-charge', title: 'Speed & Agility', desc: 'Lean processes that ship fast without compromising on quality or security.' },
  ];
}