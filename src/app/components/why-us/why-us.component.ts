import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="wu-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="wu-top" data-aos="fade-up">
          <div class="eyebrow">Why Businesses Choose Us</div>
          <h2 class="sec-h2">Why Businesses Choose <em>MrD Brains.</em></h2>
        </div>

        <div class="wu-grid">
          <div class="wu-card" *ngFor="let p of points; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="(i%3)*80">
            <div class="wu-icon"><i [class]="p.icon"></i></div>
            <div class="wu-title">{{ p.title }}</div>
            <div class="wu-desc">{{ p.desc }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .wu-sec { padding: 100px 0; background: var(--obsidian-s); position: relative; overflow: hidden; }
    .wu-top { text-align: center; max-width: 620px; margin: 0 auto 48px; }
    .wu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    @media(max-width:991px){ .wu-grid{grid-template-columns:1fr 1fr} }
    @media(max-width:575px){ .wu-grid{grid-template-columns:1fr} }
    .wu-card {
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.07);
      border-radius: 16px; padding: 26px; transition: all .3s;
      &:hover { border-color: rgba(201,151,74,.22); transform: translateY(-4px); }
    }
    .wu-icon {
      width: 42px; height: 42px; border-radius: 11px; margin-bottom: 16px;
      background: var(--coral-dim); border: 1px solid var(--coral-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--coral); font-size: 1.1rem; }
    }
    .wu-title { font-family: var(--f-head); font-weight: 700; font-size: .92rem; color: var(--ghost); margin-bottom: 8px; }
    .wu-desc { font-size: .8rem; color: var(--ghost-d); line-height: 1.7; }
  `]
})
export class WhyUsComponent {
  points = [
    { icon: 'bi bi-diagram-3',        title: 'Business-First Engineering', desc: 'We understand the workflow before building the software.' },
    { icon: 'bi bi-layers',           title: 'Full-Stack Capability',      desc: 'Frontend, backend, database, APIs and deployment.' },
    { icon: 'bi bi-shield-fill-check',title: 'Production Mindset',         desc: 'Built for real users, real data and real operations.' },
    { icon: 'bi bi-briefcase',        title: 'Industry Experience',        desc: 'Hospitality, business applications, enterprise and AI.' },
    { icon: 'bi bi-headset',          title: 'Long-Term Support',          desc: 'We stay involved beyond initial deployment.' },
  ];
}
