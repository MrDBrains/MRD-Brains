import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-work',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="fw-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="fw-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">Selected Work</div>
            <h2 class="sec-h2">Built for Business. <em>Proven in Production.</em></h2>
          </div>
          <a routerLink="/work" class="btn-outline">View 20+ Projects <i class="bi bi-arrow-right"></i></a>
        </div>

        <div class="fw-grid">
          <ng-container *ngFor="let p of projects; let i = index">
            <a *ngIf="p.external" [href]="p.url" target="_blank" rel="noopener noreferrer"
               class="fw-card" data-aos="fade-up" [attr.data-aos-delay]="i * 70">
              <div class="fw-badge" [class.live]="p.status === 'LIVE'">
                <span class="fw-dot" *ngIf="p.status === 'LIVE'"></span>{{ p.status }}
              </div>
              <div class="fw-ico"><i [class]="p.icon"></i></div>
              <div class="fw-cat">{{ p.category }}</div>
              <div class="fw-name">{{ p.name }}</div>
              <p class="fw-desc">{{ p.desc }}</p>
              <span class="fw-link">Visit Live Site <i class="bi bi-arrow-up-right"></i></span>
            </a>
            <a *ngIf="!p.external" routerLink="/work"
               class="fw-card" data-aos="fade-up" [attr.data-aos-delay]="i * 70">
              <div class="fw-badge" [class.live]="p.status === 'LIVE'">
                <span class="fw-dot" *ngIf="p.status === 'LIVE'"></span>{{ p.status }}
              </div>
              <div class="fw-ico"><i [class]="p.icon"></i></div>
              <div class="fw-cat">{{ p.category }}</div>
              <div class="fw-name">{{ p.name }}</div>
              <p class="fw-desc">{{ p.desc }}</p>
              <span class="fw-link">View Case Study <i class="bi bi-arrow-up-right"></i></span>
            </a>
          </ng-container>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .fw-sec { padding: 100px 0; position: relative; background: var(--obsidian); }
    .fw-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 42px; flex-wrap: wrap; }
    .fw-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
    @media(max-width:1199px){ .fw-grid{grid-template-columns:1fr 1fr} }
    @media(max-width:650px){ .fw-grid{grid-template-columns:1fr} }
    .fw-card {
      display: block; text-decoration: none;
      background: var(--obsidian-m); border: 1px solid var(--border);
      border-radius: 18px; padding: 26px; position: relative;
      box-shadow: var(--sh-sm);
      transition: all .3s;
      &:hover { border-color: rgba(201,151,74,.25); transform: translateY(-5px); box-shadow: var(--sh-lg); }
    }
    .fw-badge {
      display: inline-flex; align-items: center; gap: 6px;
      font-family: var(--f-mono); font-size: .6rem; text-transform: uppercase; letter-spacing: .08em;
      background: rgba(255,255,255,.05); color: var(--ghost-d);
      border-radius: 50px; padding: 4px 11px; margin-bottom: 16px;
      &.live { background: rgba(46,204,113,.1); color: #2ECC71; }
    }
    .fw-dot { width: 5px; height: 5px; border-radius: 50%; background: #2ECC71; box-shadow: 0 0 6px #2ECC71; }
    .fw-ico {
      width: 42px; height: 42px; border-radius: 11px; margin-bottom: 14px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: 1.1rem; }
    }
    .fw-cat { font-family: var(--f-mono); font-size: .6rem; text-transform: uppercase; letter-spacing: .1em; color: var(--gold); margin-bottom: 8px; }
    .fw-name { font-family: var(--f-head); font-weight: 800; font-size: 1rem; color: var(--ghost); margin-bottom: 8px; }
    .fw-desc { font-size: .78rem; color: var(--ghost-d); line-height: 1.7; margin-bottom: 16px; }
    .fw-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--f-head); font-weight: 700; font-size: .74rem; color: var(--gold);
      i { font-size: .74rem; } }
  `]
})
export class FeaturedWorkComponent {
  projects = [
    {
      icon: 'bi bi-building',
      category: 'Hotel Technology · Booking Engine',
      name: 'Hotel Evara Inn',
      desc: 'Website, direct booking engine and admin panel for a live hospitality business.',
      status: 'LIVE',
      external: true,
      url: 'https://hotelevarainn.com/',
    },
    {
      icon: 'bi bi-mortarboard-fill',
      category: 'Business Platform · Web App',
      name: 'Trendify Digital LMS',
      desc: 'A full learning management platform — courses, quizzes, progress tracking and certificates.',
      status: 'DELIVERED',
      external: false,
    },
    {
      icon: 'bi bi-whatsapp',
      category: 'AI & Automation',
      name: 'WhatsApp Order Automation',
      desc: 'AI-powered WhatsApp automation for order confirmations and payment reminders.',
      status: 'DELIVERED',
      external: false,
    },
    {
      icon: 'bi bi-person-badge',
      category: 'Business & Enterprise · Web App',
      name: 'HR & Payroll Management System',
      desc: 'Employee management, payroll, attendance and reporting in one internal platform.',
      status: 'DELIVERED',
      external: false,
    },
  ];
}
