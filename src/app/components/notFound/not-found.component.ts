import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="nf-wrap">
      <div class="noise"></div>
      <div class="nf-glow g1"></div>
      <div class="nf-glow g2"></div>
      <div class="nf-grid"></div>

      <div class="nf-inner">
        <!-- Logo -->
        <a class="nf-logo" (click)="home()">
          <div class="nf-logo-mark">
            <img src="assets/logo.png" alt="MrD Brains Technology">
          </div>
          <div>
            <div class="nfl-name">
              <span class="nfl-coral">Mr</span><span class="nfl-ghost">D Brains</span>
            </div>
            <div class="nfl-tag">Technology</div>
          </div>
        </a>

        <!-- 404 visual -->
        <div class="nf-code-wrap">
          <div class="nf-code">
            <span class="nfc-4 left">4</span>
            <div class="nfc-zero">
              <div class="nfcz-inner">
                <img src="assets/logo.png" alt="">
                <div class="nfcz-ring r1"></div>
                <div class="nfcz-ring r2"></div>
              </div>
            </div>
            <span class="nfc-4 right">4</span>
          </div>
          <div class="nf-scan"></div>
        </div>

        <!-- Message -->
        <div class="nf-content">
          <div class="nf-eyebrow">
            <i class="bi bi-exclamation-circle"></i>
            Error 404 · Page Not Found
          </div>
          <h1 class="nf-title">
            Oops. This page<br>
            doesn't <em>exist.</em>
          </h1>
          <p class="nf-desc">
            The page you're looking for may have been moved, renamed or never existed.
            Let's get you back on track.
          </p>

          <!-- Quick links -->
          <div class="nf-links">
            <div class="nfl-label">Where would you like to go?</div>
            <div class="nfl-grid">
              <button class="nfl-item" *ngFor="let l of quickLinks" (click)="scrollTo(l.id)">
                <div class="nfli-icon"><i [class]="l.icon"></i></div>
                <div>
                  <div class="nfli-title">{{ l.title }}</div>
                  <div class="nfli-sub">{{ l.sub }}</div>
                </div>
                <i class="bi bi-arrow-right nfli-arrow"></i>
              </button>
            </div>
          </div>

          <!-- CTA -->
          <div class="nf-ctas">
            <button class="btn-gold" (click)="home()">
              <i class="bi bi-house-fill"></i> Back to Home
            </button>
            <a href="https://wa.me/919372401266?text=Hi!%20I%20got%20a%20404%20error%20on%20your%20website."
               target="_blank" class="btn-outline">
              <i class="bi bi-whatsapp"></i> Report This
            </a>
          </div>
        </div>

        <!-- Footer note -->
        <div class="nf-footer">
          <span>© 2025 MrD Brains Technology</span>
          <span class="nff-sep">·</span>
          <span>Khar East, Mumbai</span>
          <span class="nff-sep">·</span>
          <a href="tel:+919372401266">+91 937-240-1266</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .nf-wrap {
      min-height: 100vh; background: var(--obsidian);
      display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden; padding: 40px 20px;
    }
    .nf-glow { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(120px); }
    .g1 { width: 600px; height: 600px; background: rgba(201,151,74,.06); top: -200px; right: -100px; }
    .g2 { width: 500px; height: 500px; background: rgba(240,103,74,.05); bottom: -150px; left: -100px; }
    .nf-grid {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(201,151,74,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201,151,74,.03) 1px, transparent 1px);
      background-size: 56px 56px;
    }

    .nf-inner {
      position: relative; z-index: 2;
      display: flex; flex-direction: column; align-items: center;
      gap: 0; width: 100%; max-width: 680px; text-align: center;
    }

    /* Logo */
    .nf-logo {
      display: flex; align-items: center; gap: 12px;
      cursor: pointer; margin-bottom: 52px; text-decoration: none;
    }
    .nf-logo-mark {
      width: 44px; height: 44px; border-radius: 11px; flex-shrink: 0;
      background: #fff; border: 1.5px solid rgba(201,151,74,.25);
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 20px rgba(201,151,74,.15);
      img { width: 36px; height: 36px; object-fit: contain; }
    }
    .nfl-name { font-family: var(--f-head); font-weight: 800; font-size: .9rem; }
    .nfl-coral { color: #F0674A; }
    .nfl-ghost { color: var(--ghost); }
    .nfl-tag   { font-family: var(--f-mono); font-size: .56rem; color: rgba(201,151,74,.5); letter-spacing: .14em; text-transform: uppercase; margin-top: 2px; }

    /* 404 visual */
    .nf-code-wrap { position: relative; margin-bottom: 48px; }
    .nf-code {
      display: flex; align-items: center; justify-content: center; gap: 0;
      position: relative;
    }
    .nfc-4 {
      font-family: var(--f-head); font-weight: 800;
      font-size: clamp(6rem, 18vw, 10rem);
      line-height: 1; letter-spacing: -.04em;
      background: linear-gradient(135deg, var(--ghost) 0%, rgba(237,233,225,.2) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      user-select: none;
    }
    .nfc-zero {
      width: clamp(80px,16vw,120px); height: clamp(80px,16vw,120px);
      display: flex; align-items: center; justify-content: center;
      margin: 0 8px;
    }
    .nfcz-inner {
      width: 100%; height: 100%; border-radius: 24px;
      background: #fff; border: 2px solid rgba(201,151,74,.3);
      display: flex; align-items: center; justify-content: center;
      position: relative;
      box-shadow: 0 0 0 8px rgba(201,151,74,.06), 0 20px 50px rgba(0,0,0,.5);
      animation: goldGlow 4s ease-in-out infinite;
      img { width: 72%; height: 72%; object-fit: contain; position: relative; z-index: 1; }
    }
    .nfcz-ring {
      position: absolute; border-radius: 28px;
      border: 1.5px solid rgba(201,151,74,.2);
    }
    .r1 { inset: -8px; animation: pulseRing 3s ease-out infinite; }
    .r2 { inset: -16px; animation: pulseRing 3s ease-out infinite .8s; }

    /* Scan line */
    .nf-scan {
      position: absolute; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(201,151,74,.3), transparent);
      animation: scanLine 4s linear infinite;
    }

    /* Content */
    .nf-eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(240,103,74,.08); border: 1px solid rgba(240,103,74,.2);
      border-radius: 50px; padding: 7px 18px; margin-bottom: 20px;
      font-family: var(--f-mono); font-size: .64rem; color: var(--coral);
      letter-spacing: .08em; text-transform: uppercase;
      i { font-size: .7rem; }
    }
    .nf-title {
      font-family: var(--f-head); font-weight: 800;
      font-size: clamp(2rem, 5vw, 3.2rem); color: var(--ghost);
      line-height: 1.1; letter-spacing: -.03em; margin-bottom: 16px;
      em {
        color: var(--gold); font-style: italic;
        font-family: var(--f-display); font-weight: 300; font-size: 1.12em;
      }
    }
    .nf-desc {
      font-size: .92rem; font-weight: 300; color: var(--ghost-d);
      line-height: 1.8; max-width: 480px; margin: 0 auto 36px;
    }

    /* Quick links */
    .nf-links { margin-bottom: 32px; width: 100%; }
    .nfl-label {
      font-family: var(--f-mono); font-size: .62rem; text-transform: uppercase;
      letter-spacing: .16em; color: rgba(201,151,74,.4); margin-bottom: 14px;
    }
    .nfl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    @media(max-width:480px){ .nfl-grid{ grid-template-columns: 1fr; } }
    .nfl-item {
      display: flex; align-items: center; gap: 12px; text-align: left;
      background: var(--obsidian-m); border: 1px solid var(--border);
      border-radius: 12px; padding: 14px 16px; cursor: pointer; box-shadow: var(--sh-sm);
      transition: all .25s; width: 100%;
      &:hover {
        border-color: rgba(201,151,74,.22); background: var(--obsidian-l);
        transform: translateY(-2px); box-shadow: var(--sh-lg);
        .nfli-arrow { opacity: 1; transform: translateX(0); color: var(--gold); }
      }
    }
    .nfli-icon {
      width: 36px; height: 36px; flex-shrink: 0; border-radius: 9px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: .88rem; }
    }
    .nfli-title { font-family: var(--f-head); font-weight: 700; font-size: .82rem; color: var(--ghost); }
    .nfli-sub   { font-size: .7rem; color: var(--ghost-d); margin-top: 1px; }
    .nfli-arrow {
      margin-left: auto; flex-shrink: 0; color: var(--ghost-d);
      font-size: .82rem; opacity: 0; transform: translateX(-4px);
      transition: all .22s;
    }

    /* CTAs */
    .nf-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }

    /* Footer */
    .nf-footer {
      display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d); letter-spacing: .06em;
      a { color: var(--gold); text-decoration: none; &:hover { text-decoration: underline; } }
    }
    .nff-sep { color: rgba(255,255,255,.15); }
  `]
})
export class NotFoundComponent {
  quickLinks = [
    { id: 'hero',      icon: 'bi bi-house-fill',       title: 'Home',         sub: 'Back to the beginning' },
    { id: 'services',  icon: 'bi bi-grid-fill',         title: 'Services',     sub: 'What we offer' },
    { id: 'portfolio', icon: 'bi bi-folder2-open',      title: 'Portfolio',    sub: 'Our work & case studies' },
    { id: 'contact',   icon: 'bi bi-chat-dots-fill',    title: 'Contact Us',   sub: 'Get in touch' },
  ];

  home() {
    window.location.href = '/';
  }

  scrollTo(id: string) {
    window.location.href = `/#${id}`;
  }
}