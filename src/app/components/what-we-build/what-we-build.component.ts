import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-what-we-build',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="wwb-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="wwb-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">What We Build</div>
            <h2 class="sec-h2">Technology Designed Around <em>How You Work.</em></h2>
          </div>
          <a routerLink="/services" class="btn-outline">Explore All Services <i class="bi bi-arrow-right"></i></a>
        </div>

        <div class="wwb-grid">
          <div class="wwb-card" *ngFor="let c of cards; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="(i%3)*80">
            <div class="wwb-icon"><i [class]="c.icon"></i></div>
            <div class="wwb-title">{{ c.title }}</div>
            <div class="wwb-desc">{{ c.desc }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .wwb-sec { padding: 100px 0; background: var(--obsidian-s); position: relative; overflow: hidden; }
    .wwb-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 42px; flex-wrap: wrap; }
    .wwb-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    @media(max-width:991px){ .wwb-grid{grid-template-columns:1fr 1fr} }
    @media(max-width:575px){ .wwb-grid{grid-template-columns:1fr} }
    .wwb-card {
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.07);
      border-radius: 16px; padding: 26px; transition: all .3s;
      &:hover { border-color: rgba(201,151,74,.22); transform: translateY(-4px); }
    }
    .wwb-icon {
      width: 42px; height: 42px; border-radius: 11px; margin-bottom: 16px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: 1.1rem; }
    }
    .wwb-title { font-family: var(--f-head); font-weight: 700; font-size: .92rem; color: var(--ghost); margin-bottom: 8px; }
    .wwb-desc { font-size: .8rem; color: var(--ghost-d); line-height: 1.7; }
  `]
})
export class WhatWeBuildComponent {
  cards = [
    { icon: 'bi bi-window',        title: 'Custom Software',    desc: 'Business applications built around your workflows.' },
    { icon: 'bi bi-globe2',        title: 'Web Applications',   desc: 'Scalable customer and internal web platforms.' },
    { icon: 'bi bi-phone',         title: 'Mobile Applications',desc: 'Mobile experiences for customers and teams.' },
    { icon: 'bi bi-robot',         title: 'AI & Automation',    desc: 'AI-powered workflows, assistants and automation.' },
    { icon: 'bi bi-building',      title: 'Hotel Technology',   desc: 'Websites, booking engines and hotel admin platforms.' },
    { icon: 'bi bi-bar-chart-line',title: 'Business Platforms', desc: 'Dashboards, management systems and operational tools.' },
  ];
}
