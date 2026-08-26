import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="fp-sec">
      <div class="noise"></div>
      <div class="fp-glow"></div>
      <div class="container">
        <div class="fp-card" data-aos="fade-up">
          <div class="fp-left">
            <div class="eyebrow">Built by Us. Built for Businesses.</div>
            <h2 class="sec-h2">Vyapar <em>Ledger</em></h2>
            <p class="sec-lead">A complete business management platform combining billing, GST,
              inventory, ledger, expenses, reporting and AI-powered business intelligence.</p>
            <div class="fp-chips">
              <span *ngFor="let c of chips">{{ c }}</span>
            </div>
            <a routerLink="/products" class="btn-gold">
              Explore Vyapar Ledger <i class="bi bi-arrow-right"></i>
            </a>
          </div>
          <div class="fp-right">
            <div class="fp-shot">
              <img src="assets/vyapar-dashboard.png" alt="Vyapar Ledger dashboard">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .fp-sec { padding: 100px 0; position: relative; overflow: hidden; background: var(--obsidian-s); }
    .fp-glow {
      position: absolute; top: -100px; right: -80px; width: 460px; height: 460px;
      border-radius: 50%; background: rgba(201,151,74,.06); filter: blur(120px); pointer-events: none;
    }
    .fp-card {
      display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: center;
      background: linear-gradient(160deg, var(--obsidian-l), var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.16); border-radius: 24px; padding: 48px;
      position: relative; overflow: hidden;
      box-shadow: var(--sh-lg);
      transition: box-shadow .35s ease, transform .35s ease;
      &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(201,151,74,.5), transparent); }
      &:hover { transform: translateY(-3px); box-shadow: 0 12px 20px rgba(16,24,40,.06), 0 32px 64px rgba(200,146,46,.14); }
    }
    @media(max-width:900px){ .fp-card{grid-template-columns:1fr;padding:32px} .fp-right{display:none} }
    .fp-chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 28px; }
    .fp-chips span {
      background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; padding: 6px 13px; font-family: var(--f-mono); font-size: .7rem; color: var(--ghost-d);
    }
    .fp-right { display: flex; align-items: center; justify-content: center; max-width: 460px; }
    .fp-shot {
      border-radius: 14px; overflow: hidden; border: 1px solid rgba(201,151,74,.22);
      box-shadow: var(--sh-lg);
      img { display: block; width: 100%; height: auto; }
    }
  `]
})
export class FeaturedProductComponent {
  chips = ['WEB', 'ANDROID', 'AI', 'WINDOWS — COMING SOON'];
}
