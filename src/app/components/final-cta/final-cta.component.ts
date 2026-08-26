import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="fc-sec">
      <div class="noise"></div>
      <div class="fc-glow"></div>
      <div class="container">
        <div class="fc-card" data-aos="fade-up">
          <h2 class="fc-title">Have a Business Challenge to Solve?</h2>
          <p class="fc-desc">Let's turn your requirement into a working digital solution.</p>
          <div class="fc-ctas">
            <a routerLink="/contact" class="btn-gold">Start a Project <i class="bi bi-arrow-right"></i></a>
            <a href="https://wa.me/919372401266" target="_blank" rel="noopener noreferrer" class="btn-outline">
              <i class="bi bi-whatsapp"></i> Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .fc-sec { padding: 100px 0; background: var(--obsidian); position: relative; overflow: hidden; }
    .fc-glow {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      width: 700px; height: 340px;
      background: radial-gradient(ellipse, rgba(201,151,74,.08) 0%, transparent 70%);
      pointer-events: none;
    }
    .fc-card {
      text-align: center; max-width: 640px; margin: 0 auto; position: relative; z-index: 2;
    }
    .fc-title {
      font-family: var(--f-head); font-weight: 800;
      font-size: clamp(1.9rem, 4vw, 2.9rem); color: var(--ghost);
      letter-spacing: -.03em; margin-bottom: 16px; line-height: 1.15;
    }
    .fc-desc { font-size: 1rem; color: var(--ghost-d); font-weight: 300; margin-bottom: 32px; }
    .fc-ctas { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; }
  `]
})
export class FinalCtaComponent {}
