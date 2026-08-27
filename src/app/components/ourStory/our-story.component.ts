import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-story',
  standalone: true, imports: [CommonModule, RouterLink],
  template: `
    <section id="our-story" class="story-sec">
      <div class="noise"></div>
      <div class="story-glow g1"></div>
      <div class="story-glow g2"></div>
      <div class="story-top-rule"></div>

      <div class="container">
        <div class="story-grid">

          <!-- Left: Founder visual -->
          <div class="story-left" data-aos="fade-right" data-aos-duration="900">
            <div class="founder-card">
              <div class="fc-bg-pattern"></div>
              <!-- Avatar -->
              <div class="fc-avatar-wrap">
                <div class="fc-avatar">
                  <span>VS</span>
                  <div class="fca-ring r1"></div>
                  <div class="fca-ring r2"></div>
                </div>
                <div class="fc-status">
                  <span class="fcs-dot"></span>
                  <span>Open to new projects</span>
                </div>
              </div>
              <!-- Identity -->
              <div class="fc-identity">
                <div class="fc-name">Vikas Seth</div>
                <div class="fc-title">Founder & CEO · MrD Brains Technology</div>
                <div class="fc-location">
                  <i class="bi bi-geo-alt-fill"></i>
                  Mumbai, India
                </div>
              </div>
              <div class="fc-divider"></div>
              <!-- Quote -->
              <div class="fc-quote">
                <div class="fcq-mark">"</div>
                <p>
                  MrD stands for Mr Developer's Brains. We are developers.
                  We will always be developers. And we put every bit of that
                  into every project we take on.
                </p>
                <div class="fcq-sig">— Vikas Seth, Founder & CEO, 2022</div>
              </div>
              <div class="fc-divider"></div>
              <!-- Mini stats -->
              <div class="fc-stats">
                <div class="fcs-item" *ngFor="let s of founderStats">
                  <div class="fcsi-val">{{ s.val }}</div>
                  <div class="fcsi-lbl">{{ s.lbl }}</div>
                </div>
              </div>
              <!-- Socials -->
              <div class="fc-socials">
                <a href="https://www.linkedin.com/company/mrd-brains" target="_blank">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/MrDBrains" target="_blank">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://wa.me/919372401266" target="_blank">
                  <i class="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Right: Story content -->
          <div class="story-right" data-aos="fade-left" data-aos-delay="100">
            <div class="eyebrow">The Story Behind MrD Brains</div>
            <h2 class="sec-h2">
              The Name Says<br>
              <em>Everything.</em>
            </h2>

            <!-- Name breakdown card -->
            <div class="name-card" data-aos="fade-up">
              <div class="nc-row">
                <div class="nc-part">
                  <div class="nc-letters">Mr</div>
                  <div class="nc-meaning">Mister</div>
                  <div class="nc-hint">Respect. Ownership.</div>
                </div>
                <div class="nc-plus">+</div>
                <div class="nc-part featured">
                  <div class="nc-letters">D</div>
                  <div class="nc-meaning">Developer's</div>
                  <div class="nc-hint">The craft. The code.</div>
                </div>
                <div class="nc-plus">+</div>
                <div class="nc-part">
                  <div class="nc-letters">Brains</div>
                  <div class="nc-meaning">Intelligence</div>
                  <div class="nc-hint">Strategy. Thinking.</div>
                </div>
              </div>
              <div class="nc-full">
                <i class="bi bi-quote"></i>
                Mr Developer's Brains — because the founders are developers,
                and developers think differently.
              </div>
            </div>

            <div class="story-body">
              <p class="sb-lead">
                When Vikas Seth and Adarsh Dubey named their studio in 2022,
                they weren't being clever. They were being honest.
                <strong>MrD Brains = Mr Developer's Brains</strong> — two developers
                who believed that the best software comes not from salespeople,
                not from project managers, but from people who actually
                write the code.
              </p>

              <p class="sb-p">
                Both founders are developers first. Vikas built systems. Adarsh
                architected them. They spent years inside the industry watching
                the same frustrating pattern — Mumbai businesses paying lakhs
                for software built by agencies where the developers were the last
                people in the room. Requirements got lost in translation.
                Deadlines got missed. Software got delivered that no one
                actually wanted to use.
              </p>

              <!-- Values callout -->
              <div class="story-callout">
                <i class="bi bi-cpu-fill"></i>
                <p>
                  So they decided: what if the people who talk to the client
                  are the same people who build the product? What if the
                  <em>developer's brain</em> was in the room from day one?
                </p>
              </div>

              <p class="sb-p">
                That's the MrD Brains model. Every project is led by a developer.
                Every requirement is reviewed by a developer. Every decision
                — timeline, architecture, technology — is made by someone who
                will personally write the code. <strong>No middlemen.
                No lost-in-translation moments. Just developer brains,
                applied directly to your problem.</strong>
              </p>

              <p class="sb-p">
                Three years on, from their studio in Mumbai, the team has
                shipped 15+ projects across Mumbai — ERP systems, WhatsApp AI bots,
                LMS platforms, jewellery management SaaS — all built the
                MrD Brains way. The name on the door is a daily reminder
                of the standard they hold themselves to.
              </p>
            </div>

            <!-- Story milestones -->
            <div class="story-milestones">
              <div class="sm-item" *ngFor="let m of milestones; let i=index"
                   data-aos="fade-up" [attr.data-aos-delay]="i*60">
                <div class="smi-left">
                  <div class="smi-icon"><i [class]="m.icon"></i></div>
                  <div class="smi-line" *ngIf="i < milestones.length-1"></div>
                </div>
                <div class="smi-body">
                  <div class="smi-year">{{ m.year }}</div>
                  <div class="smi-title">{{ m.title }}</div>
                  <div class="smi-desc">{{ m.desc }}</div>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="story-cta">
              <a routerLink="/contact" class="btn-gold">
                Work With Us <i class="bi bi-arrow-right"></i>
              </a>
              <a href="https://wa.me/919372401266?text=Hi%20Vikas!%20I%20read%20your%20story%20and%20would%20love%20to%20discuss%20a%20project."
                 target="_blank" class="btn-outline">
                <i class="bi bi-whatsapp"></i> Message Vikas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .story-sec {
      padding: 140px 0; background: var(--obsidian-m);
      position: relative; overflow: hidden;
    }
    .story-top-rule {
      position: absolute; top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--coral) 70%, transparent);
    }
    .story-glow { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(120px); }
    .g1 { width: 500px; height: 500px; background: rgba(201,151,74,.055); top: -150px; left: -100px; }
    .g2 { width: 400px; height: 400px; background: rgba(240,103,74,.04); bottom: -100px; right: -100px; }

    /* Grid */
    .story-grid {
      display: grid; grid-template-columns: 420px 1fr;
      gap: 72px; align-items: start;
    }
    @media(max-width:1199px){ .story-grid{ grid-template-columns: 380px 1fr; gap: 48px; } }
    @media(max-width:991px) { .story-grid{ grid-template-columns: 1fr; gap: 48px; } }

    /* ── Founder Card ── */
    .founder-card {
      background: linear-gradient(160deg, var(--obsidian-l), var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.18); border-radius: 26px; padding: 36px;
      position: relative; overflow: hidden;
      box-shadow: var(--sh-lg);
      &::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg, transparent, rgba(201,151,74,.55), transparent);
      }
    }
    .fc-bg-pattern {
      position: absolute; inset: 0; pointer-events: none; opacity: .04;
      background-image: radial-gradient(circle, rgba(201,151,74,1) 1px, transparent 1px);
      background-size: 24px 24px;
    }

    /* Avatar */
    .fc-avatar-wrap {
      display: flex; align-items: center; gap: 16px; margin-bottom: 22px;
    }
    .fc-avatar {
      width: 80px; height: 80px; border-radius: 22px; flex-shrink: 0;
      background: linear-gradient(135deg, #C9974A, #F0674A);
      display: flex; align-items: center; justify-content: center;
      font-family: var(--f-head); font-weight: 800; font-size: 1.6rem;
      color: var(--obsidian); position: relative;
      box-shadow: 0 8px 32px rgba(201,151,74,.3);
    }
    .fca-ring {
      position: absolute; border-radius: 26px;
      border: 1.5px solid rgba(201,151,74,.25);
    }
    .fca-ring.r1 { inset: -6px; }
    .fca-ring.r2 { inset: -12px; opacity: .5; }
    .fc-status {
      display: flex; align-items: center; gap: 7px;
      background: rgba(46,204,113,.07); border: 1px solid rgba(46,204,113,.2);
      border-radius: 50px; padding: 6px 13px;
      font-family: var(--f-mono); font-size: .62rem; color: rgba(46,204,113,.8);
      letter-spacing: .07em;
    }
    .fcs-dot {
      width: 7px; height: 7px; border-radius: 50%; background: #2ECC71;
      animation: blink 2s ease-in-out infinite;
      box-shadow: 0 0 6px rgba(46,204,113,.5);
    }

    /* Identity */
    .fc-name  { font-family: var(--f-head); font-weight: 800; font-size: 1.2rem; color: var(--ghost); margin-bottom: 4px; }
    .fc-title { font-size: .78rem; color: var(--ghost-d); margin-bottom: 8px; }
    .fc-location {
      display: inline-flex; align-items: center; gap: 6px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d); letter-spacing: .06em;
      i { color: var(--coral); font-size: .68rem; }
    }
    .fc-divider { height: 1px; background: rgba(255,255,255,.07); margin: 20px 0; }

    /* Quote */
    .fc-quote { position: relative; padding-left: 16px; }
    .fcq-mark {
      font-family: var(--f-display); font-size: 5rem; color: rgba(201,151,74,.12);
      line-height: .4; position: absolute; top: 0; left: -8px;
    }
    .fc-quote p {
      font-family: var(--f-display); font-style: italic; font-weight: 300;
      font-size: 1rem; color: var(--ghost-m); line-height: 1.78;
      margin-bottom: 10px;
    }
    .fcq-sig {
      font-family: var(--f-mono); font-size: .62rem; color: rgba(201,151,74,.5);
      letter-spacing: .08em;
    }

    /* Stats */
    .fc-stats {
      display: grid; grid-template-columns: repeat(3,1fr); gap: 0;
    }
    .fcs-item { text-align: center; padding: 12px 8px; border-right: 1px solid rgba(255,255,255,.06); &:last-child{border-right:none} }
    .fcsi-val { font-family: var(--f-head); font-weight: 800; font-size: 1.2rem; color: var(--ghost); line-height: 1; margin-bottom: 3px; }
    .fcsi-lbl { font-family: var(--f-mono); font-size: .56rem; color: var(--ghost-d); text-transform: uppercase; letter-spacing: .08em; }

    /* Socials */
    .fc-socials { display: flex; gap: 8px; margin-top: 20px;
      a {
        width: 36px; height: 36px; border-radius: 9px;
        background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.09);
        display: flex; align-items: center; justify-content: center;
        color: var(--ghost-d); transition: all .2s;
        i { font-size: .86rem; }
        &:hover { background: var(--gold); color: var(--obsidian); border-color: var(--gold); }
      }
    }

    /* ── Story Right ── */
    /* Name breakdown card */
    .name-card {
      background: linear-gradient(135deg, var(--obsidian-l), var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.22); border-radius: 18px;
      padding: 28px; margin-bottom: 32px; position: relative; overflow: hidden;
      box-shadow: var(--sh-md);
      &::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background: linear-gradient(90deg,transparent,rgba(201,151,74,.5),transparent); }
    }
    .nc-row {
      display: flex; align-items: center; justify-content: center;
      gap: 12px; margin-bottom: 20px; flex-wrap: wrap;
    }
    .nc-part {
      text-align: center; padding: 14px 18px; flex: 1; min-width: 90px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
      border-radius: 12px; transition: all .25s;
      &:hover { border-color: rgba(201,151,74,.2); background: var(--gold-dim); }
      &.featured { background: var(--gold-dim); border-color: var(--gold-ring); box-shadow: 0 4px 20px rgba(201,151,74,.12); }
    }
    .nc-letters {
      font-family: var(--f-head); font-weight: 800;
      font-size: 1.7rem; color: var(--ghost); line-height: 1; margin-bottom: 6px;
      .nc-part.featured & { color: var(--gold); font-size: 2rem; }
    }
    .nc-meaning { font-family: var(--f-head); font-weight: 700; font-size: .76rem; color: var(--ghost-m); margin-bottom: 3px; }
    .nc-hint    { font-family: var(--f-mono); font-size: .58rem; color: var(--ghost-d); letter-spacing: .08em; }
    .nc-plus    { font-family: var(--f-head); font-weight: 800; font-size: 1.3rem; color: rgba(201,151,74,.3); flex-shrink: 0; }
    .nc-full {
      border-top: 1px solid rgba(255,255,255,.06); padding-top: 16px;
      font-family: var(--f-display); font-style: italic; font-weight: 300;
      font-size: .96rem; color: var(--ghost-m); line-height: 1.7;
      i { color: var(--gold); font-size: 1rem; margin-right: 6px; vertical-align: middle; }
    }

    .story-body { margin-bottom: 36px; }
    .sb-lead {
      font-family: var(--f-display); font-style: italic; font-weight: 300;
      font-size: 1.18rem; color: var(--ghost-m); line-height: 1.82;
      margin-bottom: 22px;
    }
    .sb-p {
      font-size: .92rem; font-weight: 300; color: var(--ghost-d); line-height: 1.9;
      margin-bottom: 18px;
      strong { color: var(--ghost-m); font-weight: 600; }
    }
    .story-callout {
      display: flex; align-items: flex-start; gap: 14px;
      background: linear-gradient(135deg, rgba(201,151,74,.08), rgba(201,151,74,.03));
      border: 1px solid rgba(201,151,74,.2); border-left: 3px solid var(--gold);
      border-radius: 0 12px 12px 0; padding: 18px 22px; margin: 22px 0;
      i { color: var(--gold); font-size: 1rem; flex-shrink: 0; margin-top: 2px; }
      p { font-family: var(--f-display); font-style: italic; font-size: 1rem; color: var(--ghost-m); line-height: 1.75; margin: 0; }
    }

    /* Milestones */
    .story-milestones { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }
    .sm-item { display: flex; gap: 16px; align-items: flex-start; }
    .smi-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 40px; }
    .smi-icon {
      width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: .95rem; }
    }
    .smi-line {
      width: 1px; flex: 1; min-height: 24px;
      background: linear-gradient(180deg, rgba(201,151,74,.3), rgba(201,151,74,.08));
      margin: 6px 0;
    }
    .smi-body { padding: 8px 0 20px; }
    .smi-year  { font-family: var(--f-mono); font-size: .62rem; color: var(--gold); letter-spacing: .1em; margin-bottom: 3px; }
    .smi-title { font-family: var(--f-head); font-weight: 700; font-size: .9rem; color: var(--ghost); margin-bottom: 4px; }
    .smi-desc  { font-size: .8rem; color: var(--ghost-d); line-height: 1.65; }

    /* CTA */
    .story-cta { display: flex; gap: 12px; flex-wrap: wrap; }
  `]
})
export class OurStoryComponent {
  founderStats = [
    { val: '3+', lbl: 'Yrs Building' },
    { val: '15+', lbl: 'Projects' },
    { val: '5.0', lbl: 'Rating' },
  ];

 milestones = [
  {
    icon: 'bi bi-lightbulb-fill',
    year: '2022',
    title: 'The Studio Begins',
    desc: 'MrD Brains Technology was founded in Mumbai with a focus on building custom .NET solutions that solve real business problems instead of forcing businesses into one-size-fits-all software.',
  },
  {
    icon: 'bi bi-people-fill',
    year: '2023',
    title: 'Enterprise Solutions & Technology Expansion',
    desc: 'Delivered our first enterprise business systems and expanded our capabilities across Angular, React and Azure cloud technologies. The team grew with a stronger focus on scalable, maintainable software engineering.',
  },
  {
    icon: 'bi bi-box-seam-fill',
    year: '2025',
    title: 'Vyapar Ledger — Our Own Product',
    desc: 'Started building Vyapar Ledger, our proprietary business management platform for billing, inventory, GST, ledger and day-to-day business operations, with an AI-ready and offline-first approach.',
  },
  {
    icon: 'bi bi-robot',
    year: '2026',
    title: 'AI, Automation & Product Expansion',
    desc: 'Expanded into AI-powered applications and WhatsApp Business API automation for SMEs, while continuing the development and expansion of Vyapar Ledger across mobile and upcoming Windows experiences.',
  },
];
}