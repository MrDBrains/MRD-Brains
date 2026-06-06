import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true, imports: [CommonModule],
  template: `
    <section id="team" class="team-sec">
      <div class="noise"></div>
      <div class="team-glow"></div>

      <div class="container">
        <div class="team-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">The People</div>
            <h2 class="sec-h2">Meet the <em>Team</em></h2>
          </div>
          <p class="sec-lead" style="max-width:380px">
            The engineers, strategists and creatives who bring your vision to life with precision and passion.
          </p>
        </div>

        <!-- Team cards -->
        <div class="team-grid">
          <div class="team-card" *ngFor="let m of team; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*110">
            <div class="tc-shimmer"></div>
            <div class="tc-header">
              <div class="tc-av-zone">
                <div class="tc-av">
                  <span>{{ m.init }}</span>
                </div>
                <div class="tc-av-ring"></div>
                <div class="tc-av-status"></div>
              </div>
              <div class="tc-socials">
                <a *ngFor="let s of m.socials" href="#" (click)="$event.preventDefault()">
                  <i [class]="s.icon"></i>
                </a>
              </div>
            </div>
            <div class="tc-body">
              <div class="tc-role-chip">
                <i class="bi bi-briefcase-fill"></i> {{ m.role }}
              </div>
              <div class="tc-name">{{ m.name }}</div>
              <p class="tc-bio">{{ m.bio }}</p>
              <div class="tc-skills">
                <span *ngFor="let sk of m.skills">{{ sk }}</span>
              </div>
            </div>
            <div class="tc-footer">
              <div class="tcf-stat" *ngFor="let s of m.stats">
                <span class="tcfs-val">{{ s.val }}</span>
                <span class="tcfs-lbl">{{ s.lbl }}</span>
              </div>
            </div>
            <div class="tc-bottom-bar"></div>
          </div>
        </div>

        <!-- Culture strip -->
        <div class="culture-strip" data-aos="fade-up" data-aos-delay="100">
          <div class="cs-header">
            <div class="eyebrow">Life at MrD Brains</div>
            <h3 class="cs-title">A Studio Built on <em>Excellence</em></h3>
          </div>
          <div class="culture-cards">
            <div class="cc-item" *ngFor="let c of culture">
              <i [class]="c.icon"></i>
              <div class="cc-title">{{ c.title }}</div>
              <div class="cc-desc">{{ c.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-sec { padding:140px 0;background:var(--obsidian-s);position:relative;overflow:hidden; }
    .team-glow {
      position:absolute;top:0;right:0;width:600px;height:600px;
      background:radial-gradient(circle,rgba(201,151,74,.05) 0%,transparent 65%);
      pointer-events:none;
    }
    .team-top {
      display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:60px;
    }
    @media(max-width:767px){ .team-top{flex-direction:column;align-items:flex-start} }

    .team-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:48px; }
    @media(max-width:991px){ .team-grid{grid-template-columns:repeat(2,1fr)} }
    @media(max-width:575px){ .team-grid{grid-template-columns:1fr} }

    .team-card {
      background:var(--obsidian-l);border:1px solid rgba(255,255,255,.07);
      border-radius:22px;overflow:hidden;position:relative;
      transition:all .38s cubic-bezier(.4,0,.2,1);
      &:hover {
        border-color:rgba(201,151,74,.22);transform:translateY(-7px);
        box-shadow:0 28px 72px rgba(0,0,0,.5);
        .tc-shimmer{opacity:1}
        .tc-av-ring{animation:pulseRing 2.2s ease-out infinite}
        .tc-bottom-bar{transform:scaleX(1)}
        .tc-socials{opacity:1;transform:translateY(0)}
      }
    }
    .tc-shimmer {
      position:absolute;inset:0;opacity:0;transition:opacity .4s;
      background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(201,151,74,.06) 0%,transparent 60%);
      pointer-events:none;
    }
    .tc-header {
      display:flex;align-items:flex-end;justify-content:space-between;
      padding:34px 28px 22px;border-bottom:1px solid rgba(255,255,255,.05);
    }
    .tc-av-zone { position:relative; }
    .tc-av {
      width:82px;height:82px;border-radius:22px;
      background:linear-gradient(135deg,var(--gold-l),var(--coral));
      display:flex;align-items:center;justify-content:center;
      position:relative;z-index:1;
      box-shadow:0 8px 28px rgba(201,151,74,.25);
      span{font-family:var(--f-head);font-weight:800;color:var(--obsidian);font-size:2.2rem}
    }
    .tc-av-ring {
      position:absolute;inset:-7px;border-radius:28px;
      border:1px solid rgba(201,151,74,.28);
    }
    .tc-av-status {
      position:absolute;bottom:-3px;right:-3px;z-index:2;
      width:14px;height:14px;border-radius:50%;
      background:#2ECC71;border:2px solid var(--obsidian-l);
      box-shadow:0 0 8px rgba(46,204,113,.5);
    }
    .tc-socials {
      display:flex;flex-direction:column;gap:6px;
      opacity:0;transform:translateY(6px);transition:all .32s ease;
      a {
        width:33px;height:33px;border-radius:8px;
        background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);
        display:flex;align-items:center;justify-content:center;
        color:var(--ghost-d);transition:all .2s;
        i{font-size:.8rem}
        &:hover{background:var(--gold);color:var(--obsidian);border-color:var(--gold)}
      }
    }
    .tc-body { padding:22px 28px 18px; }
    .tc-role-chip {
      display:inline-flex;align-items:center;gap:6px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      border-radius:50px;padding:4px 13px;margin-bottom:10px;
      font-family:var(--f-mono);font-size:.62rem;font-weight:500;
      color:var(--gold);letter-spacing:.08em;text-transform:uppercase;
      i{font-size:.65rem}
    }
    .tc-name { font-family:var(--f-head);font-weight:800;font-size:1.1rem;color:var(--ghost);margin-bottom:10px; }
    .tc-bio  { font-size:.82rem;font-weight:300;color:var(--ghost-d);line-height:1.78;margin-bottom:16px; }
    .tc-skills { display:flex;flex-wrap:wrap;gap:5px;
      span{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:4px;padding:3px 9px;font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d)} }
    .tc-footer {
      display:grid;grid-template-columns:repeat(3,1fr);
      border-top:1px solid rgba(255,255,255,.05);
    }
    .tcf-stat {
      display:flex;flex-direction:column;align-items:center;gap:2px;
      padding:14px 8px;border-right:1px solid rgba(255,255,255,.05);
      &:last-child{border-right:none}
    }
    .tcfs-val { font-family:var(--f-head);font-weight:800;font-size:1rem;color:var(--ghost);line-height:1; }
    .tcfs-lbl { font-family:var(--f-mono);font-size:.56rem;color:var(--ghost-d);text-transform:uppercase;letter-spacing:.08em;text-align:center; }
    .tc-bottom-bar {
      height:2px;background:linear-gradient(90deg,var(--gold-l),var(--coral));
      transform:scaleX(0);transform-origin:left;transition:transform .42s cubic-bezier(.4,0,.2,1);
    }

    /* Culture strip */
    .culture-strip {
      background:var(--obsidian-m);border:1px solid rgba(255,255,255,.06);
      border-radius:22px;padding:44px;
    }
    .cs-header { margin-bottom:36px; }
    .cs-title {
      font-family:var(--f-head);font-weight:800;font-size:1.5rem;color:var(--ghost);
      em{color:var(--gold);font-style:italic;font-family:var(--f-display);font-weight:300}
    }
    .culture-cards { display:grid;grid-template-columns:repeat(4,1fr);gap:20px; }
    @media(max-width:767px){ .culture-cards{grid-template-columns:repeat(2,1fr)} }
    .cc-item {
      text-align:center;padding:20px;border-radius:14px;
      background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.05);
      transition:all .25s;
      &:hover{border-color:rgba(201,151,74,.18);background:var(--gold-dim)}
      i{
        font-size:1.5rem;color:var(--gold);display:block;margin-bottom:12px;
        filter:drop-shadow(0 4px 12px rgba(201,151,74,.3));
      }
    }
    .cc-title { font-family:var(--f-head);font-weight:700;font-size:.86rem;color:var(--ghost);margin-bottom:6px; }
    .cc-desc  { font-size:.74rem;color:var(--ghost-d);line-height:1.65; }
  `]
})
export class TeamComponent {
  team = [
    {
      init: 'V', name: 'Vikas Seth', role: 'Founder & CEO',
      bio: 'Visionary entrepreneur with 5+ years in technology and business strategy. Vikas drives client relationships, business development and the long-term vision of MrD Brains Technology.',
      skills: ['Business Strategy', '.NET', 'Azure', 'Leadership'],
      socials: [{ icon: 'bi bi-linkedin' }, { icon: 'bi bi-twitter-x' }],
      stats: [{ val: '5+', lbl: 'Yrs Exp' }, { val: '15+', lbl: 'Projects' }, { val: '5+', lbl: 'Clients' }],
    },
    {
      init: 'A', name: 'Adarsh Dubey', role: 'Co-Founder & CTO',
      bio: 'Full-stack architect specialising in .NET Core, Angular and Azure cloud. Adarsh leads technical architecture decisions, code quality standards and infrastructure strategy across all client projects.',
      skills: ['.NET 8', 'Angular 17', 'Azure', 'SQL Server'],
      socials: [{ icon: 'bi bi-linkedin' }, { icon: 'bi bi-github' }],
      stats: [{ val: '7+', lbl: 'Yrs Dev' }, { val: '50+', lbl: 'Modules' }, { val: '3', lbl: 'Certs' }],
    },
    {
      init: 'D', name: 'Engineering Team', role: 'Software Engineers & Designers',
      bio: 'A talented multidisciplinary team of developers, UI/UX designers and QA engineers — each bringing deep domain expertise and a shared commitment to shipping software that makes a real difference.',
      skills: ['React', 'TypeScript', 'UI/UX', 'QA Testing'],
      socials: [{ icon: 'bi bi-linkedin' }, { icon: 'bi bi-github' }],
      stats: [{ val: '3+', lbl: 'Engineers' }, { val: '200+', lbl: 'Hrs/mo' }, { val: '99%', lbl: 'On-time' }],
    },
  ];

  culture = [
    { icon: 'bi bi-code-square',         title: 'Clean Code Culture',     desc: 'We write readable, maintainable code that future developers will thank us for.' },
    { icon: 'bi bi-people-fill',          title: 'Client-First Always',    desc: 'Every decision is filtered through one question: does this genuinely help our client?' },
    { icon: 'bi bi-rocket-takeoff-fill',  title: 'Continuous Learning',    desc: 'Our team actively pursues Azure certifications, tech conferences and internal knowledge sharing.' },
    { icon: 'bi bi-heart-fill',           title: 'Work We\'re Proud Of',   desc: 'We only ship software we\'d be happy to put our name on — and tell our clients about.' },
  ];
}