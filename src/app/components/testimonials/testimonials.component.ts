import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  standalone: true, imports: [CommonModule, RouterLink, CountUpDirective],
  template: `
    <section class="testi-sec">
      <div class="noise"></div>
      <div class="testi-glow"></div>
      <div class="container">

        <div class="testi-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">Client Stories</div>
            <h2 class="sec-h2">What Our <em>Clients</em> Say</h2>
          </div>
          <div class="testi-aggregate">
            <div class="ta-right">
              <div class="ta-label">Trusted by businesses across multiple industries</div>
              <div class="ta-count">Selected client feedback</div>
            </div>
          </div>
        </div>

        <!-- Featured quote -->
        <div class="testi-hero" data-aos="fade-up" data-aos-delay="50">
          <div class="th-left">
            <div class="th-openquote">"</div>
            <blockquote class="th-text">
              MrD Brains Technology didn't just deliver software — they delivered confidence.
              Every milestone was hit on time, every promise kept. The .NET system they built
              has eliminated <strong>3 hours of manual work per day</strong> across our team.
              If you need a technology partner who actually gives a damn about your business,
              these are the people.
            </blockquote>
            <div class="th-author">
              <div class="th-av">DC</div>
              <div class="th-info">
                <div class="th-name">Deepak Chaubey</div>
                <div class="th-role">Director · Techvision Engineering, Mumbai</div>
                <div class="th-project">
                  <i class="bi bi-folder-fill"></i> HR & Payroll Desktop System (.NET)
                </div>
              </div>
            </div>
          </div>
          <div class="th-right">
            <div class="th-metric" *ngFor="let m of heroMetrics">
              <div class="thm-val" appCountUp [countUpValue]="m.val">{{ m.val }}</div>
              <div class="thm-lbl">{{ m.lbl }}</div>
              <div class="thm-desc">{{ m.desc }}</div>
            </div>
          </div>
        </div>

        <!-- Grid -->
        <div class="testi-grid">
          <div class="testi-card" *ngFor="let t of list; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*80">
            <div class="tc-header">
              <div class="tc-platform">
                <i class="bi bi-chat-quote-fill"></i> Client Feedback
              </div>
            </div>
            <p class="tc-text">"{{ t.text }}"</p>
            <div class="tc-result" *ngIf="t.result">
              <i class="bi bi-graph-up-arrow"></i>
              <span>{{ t.result }}</span>
            </div>
            <div class="tc-divider"></div>
            <div class="tc-footer">
              <div class="tc-av" [style.background]="t.color">{{ t.init }}</div>
              <div class="tc-meta">
                <div class="tc-name">{{ t.name }}</div>
                <div class="tc-role">{{ t.role }}</div>
                <div class="tc-company">{{ t.company }}</div>
              </div>
              <div class="tc-project-chip">
                <i class="bi bi-code-slash"></i>
                <span>{{ t.service }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom strip -->
        <div class="testi-bottom" data-aos="fade-up">
          <div class="tb-left">
            <div class="tb-avatars">
              <div class="tba" style="background:linear-gradient(135deg,#C9974A,#F0674A)">D</div>
              <div class="tba" style="background:linear-gradient(135deg,#F0674A,#C9974A)">D</div>
              <div class="tba" style="background:linear-gradient(135deg,#C9974A,#8B5E2A)">M</div>
              <div class="tba" style="background:linear-gradient(135deg,#25D366,#128C7E)">S</div>
              <div class="tba tba-more">+1</div>
            </div>
            <div>
              <div class="tb-title">Join 5+ businesses already growing with us</div>
              <div class="tb-sub">Mumbai · Maharashtra · Pan-India delivery</div>
            </div>
          </div>
          <a routerLink="/contact" class="btn-gold">
            Start Your Project <i class="bi bi-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .testi-sec { padding:140px 0;background:var(--obsidian-m);position:relative;overflow:hidden; }
    .testi-glow {
      position:absolute;top:0;left:50%;transform:translateX(-50%);
      width:800px;height:360px;
      background:radial-gradient(ellipse,rgba(201,151,74,.05) 0%,transparent 70%);
      pointer-events:none;
    }
    .testi-top {
      display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:52px;
    }
    @media(max-width:767px){ .testi-top{flex-direction:column;align-items:flex-start;gap:20px} }
    .testi-aggregate { display:flex;align-items:center;gap:16px; }
    .ta-score {
      font-family:var(--f-head);font-weight:800;font-size:3.5rem;color:var(--gold);
      line-height:1;letter-spacing:-.03em;
    }
    .ta-stars { i{color:var(--gold);font-size:.9rem;margin-right:2px} margin-bottom:5px; }
    .ta-label { font-size:.78rem;color:var(--ghost-m);margin-bottom:2px; }
    .ta-count { font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d);letter-spacing:.06em; }

    /* Hero testimonial */
    .testi-hero {
      display:grid;grid-template-columns:1.6fr 1fr;gap:48px;align-items:center;
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.16);border-radius:24px;padding:48px;
      position:relative;overflow:hidden;margin-bottom:28px;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.45),transparent)}
    }
    @media(max-width:991px){ .testi-hero{grid-template-columns:1fr;gap:32px;padding:32px 28px} }
    .th-openquote {
      font-family:var(--f-display);font-size:7rem;color:rgba(201,151,74,.1);
      line-height:.55;margin-bottom:-20px;user-select:none;
    }
    .th-text {
      font-family:var(--f-display);font-style:italic;font-weight:300;
      font-size:clamp(1.05rem,2vw,1.3rem);color:var(--ghost-m);line-height:1.82;
      margin-bottom:28px;
      strong{color:var(--ghost);font-weight:600;font-style:normal}
    }
    .th-author { display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap; }
    .th-av {
      width:50px;height:50px;border-radius:14px;flex-shrink:0;
      background:linear-gradient(135deg,var(--gold-l),var(--coral));
      display:flex;align-items:center;justify-content:center;
      font-family:var(--f-head);font-weight:800;color:var(--obsidian);font-size:.9rem;
    }
    .th-name { font-family:var(--f-head);font-weight:700;font-size:.9rem;color:var(--ghost);margin-bottom:2px; }
    .th-role { font-size:.76rem;color:var(--ghost-d);margin-bottom:5px; }
    .th-project {
      display:inline-flex;align-items:center;gap:5px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      border-radius:5px;padding:3px 10px;
      font-family:var(--f-mono);font-size:.6rem;color:var(--gold);
      i{font-size:.62rem}
    }
    .th-stars { margin-left:auto;flex-shrink:0; i{color:var(--gold);font-size:.8rem;margin-right:1px} }

    /* Metrics */
    .th-right { display:flex;flex-direction:column;gap:14px; }
    .th-metric {
      background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);
      border-radius:14px;padding:18px 20px;transition:all .25s;
      &:hover{border-color:rgba(201,151,74,.2);background:var(--gold-dim)}
    }
    .thm-val { font-family:var(--f-head);font-weight:800;font-size:1.6rem;color:var(--ghost);line-height:1;margin-bottom:3px; }
    .thm-lbl { font-family:var(--f-mono);font-size:.62rem;color:var(--gold);text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px; }
    .thm-desc { font-size:.74rem;color:var(--ghost-d);line-height:1.5; }

    /* Grid */
    .testi-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:36px; }
    @media(max-width:991px){ .testi-grid{grid-template-columns:1fr 1fr} }
    @media(max-width:575px){ .testi-grid{grid-template-columns:1fr} }
    .testi-card {
      background:var(--obsidian-l);border:1px solid var(--border);
      border-radius:18px;padding:26px;position:relative;overflow:hidden;
      box-shadow:var(--sh-sm);
      transition:all .32s cubic-bezier(.4,0,.2,1);
      &:hover{border-color:rgba(201,151,74,.2);transform:translateY(-5px);box-shadow:var(--sh-lg)}
    }
    .tc-header { display:flex;align-items:center;justify-content:space-between;margin-bottom:16px; }
    .tc-stars { i{color:var(--gold);font-size:.7rem;margin-right:1px} }
    .tc-platform {
      display:flex;align-items:center;gap:4px;
      font-family:var(--f-mono);font-size:.58rem;color:rgba(46,204,113,.7);
      i{font-size:.65rem}
    }
    .tc-text {
      font-family:var(--f-display);font-style:italic;font-weight:300;
      font-size:.96rem;color:var(--ghost-m);line-height:1.82;margin-bottom:14px;
    }
    .tc-result {
      display:flex;align-items:center;gap:7px;margin-bottom:14px;
      background:rgba(201,151,74,.07);border:1px solid rgba(201,151,74,.15);
      border-radius:7px;padding:8px 12px;
      font-size:.74rem;color:var(--gold);font-weight:600;
      i{font-size:.78rem;flex-shrink:0}
    }
    .tc-divider { height:1px;background:rgba(255,255,255,.06);margin-bottom:16px; }
    .tc-footer { display:flex;align-items:center;gap:10px; }
    .tc-av {
      width:38px;height:38px;flex-shrink:0;border-radius:10px;
      display:flex;align-items:center;justify-content:center;
      font-family:var(--f-head);font-weight:800;color:var(--obsidian);font-size:.85rem;
    }
    .tc-meta { flex:1; }
    .tc-name { font-family:var(--f-head);font-weight:700;font-size:.82rem;color:var(--ghost); }
    .tc-role { font-size:.7rem;color:var(--ghost-d);margin-top:1px; }
    .tc-company { font-family:var(--f-mono);font-size:.6rem;color:rgba(201,151,74,.5);margin-top:2px; }
    .tc-project-chip {
      display:flex;align-items:center;gap:5px;flex-shrink:0;
      background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
      border-radius:6px;padding:5px 10px;
      font-family:var(--f-mono);font-size:.58rem;color:var(--ghost-d);
      i{font-size:.62rem;color:var(--coral)}
    }

    /* Bottom strip */
    .testi-bottom {
      display:flex;align-items:center;justify-content:space-between;gap:24px;
      background:var(--obsidian-l);border:1px solid rgba(255,255,255,.07);
      border-radius:18px;padding:26px 32px;
    }
    @media(max-width:767px){ .testi-bottom{flex-direction:column;align-items:flex-start;padding:22px} }
    .tb-left { display:flex;align-items:center;gap:16px; }
    .tb-avatars { display:flex; }
    .tba {
      width:36px;height:36px;border-radius:50%;border:2px solid var(--obsidian-l);
      display:flex;align-items:center;justify-content:center;
      font-family:var(--f-head);font-weight:800;font-size:.76rem;color:#fff;
      margin-left:-9px;&:first-child{margin-left:0}
    }
    .tba-more {
      background:var(--obsidian-xl);border-color:rgba(201,151,74,.3);
      color:var(--gold);font-size:.64rem;
    }
    .tb-title { font-family:var(--f-head);font-weight:700;font-size:.9rem;color:var(--ghost);margin-bottom:3px; }
    .tb-sub   { font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d);letter-spacing:.06em; }
  `]
})
export class TestimonialsComponent {
  heroMetrics = [
    { val: '3 hrs',  lbl: 'Daily time saved',    desc: 'Automated payroll & attendance processing replaced manual Excel work.' },
    { val: '85%',    lbl: 'Faster processing',    desc: 'Monthly payroll run reduced from 1 day to under 2 hours.' },
    { val: '0',      lbl: 'Errors since go-live', desc: 'Automated calculations eliminated human error in salary computation.' },
  ];

  list = [
    {
      init: 'DV', color: 'linear-gradient(135deg,#C9974A,#F0674A)',
      name: 'Devesh Vishwakarma', role: 'Founder', company: 'Trendify Digital',
      service: 'LMS Web Platform',
      result: 'Students now access all courses seamlessly online',
      text: 'MrD Brains built a complete online learning platform for our students. The LMS is clean, fast, and easy to navigate — our students can access courses, track progress and learn from anywhere without any friction. Exactly what we needed.',
    },
    {
      init: 'MP', color: 'linear-gradient(135deg,#F0674A,#C9974A)',
      name: 'Mangesh Prajapati', role: 'Operations Head', company: 'Techvision Engineering',
      service: 'ERP System (.NET)',
      result: 'Payroll processing cut from 8 hrs to 45 mins',
      text: 'Highly responsive, technically brilliant. The ERP system they built has transformed our operations entirely. What used to take hours now takes minutes. ROI was clearly visible within the very first month.',
    },
    {
      init: 'SR', color: 'linear-gradient(135deg,#F0674A,#C9974A)',
      name: 'Sneha Rathi', role: 'Founder', company: 'ArtisanMart Mumbai',
      service: 'WhatsApp Automation',
      result: '₹1.2L recovered from abandoned carts monthly',
      text: 'The WhatsApp automation bot they built has completely transformed how we talk to customers. Order confirmations, payment reminders, post-purchase support — all running automatically 24/7. Incredible value.',
    },
  ];
}