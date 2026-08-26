import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <!-- Animated atmosphere (shared across every inner page for a consistent look) -->
      <div class="ph-noise"></div>
      <div class="ph-mesh"></div>
      <div class="ph-grid"></div>
      <div class="ph-blob b1"></div>
      <div class="ph-blob b2"></div>
      <div class="ph-blob b3"></div>
      <div class="ph-ring r1"></div>
      <div class="ph-ring r2"></div>
      <div class="ph-particles">
        <span *ngFor="let p of particles"></span>
      </div>
      <div class="ph-scan"></div>

      <div class="container" style="position:relative;z-index:3">
        <div class="ph-inner">
          <div class="eyebrow" *ngIf="eyebrow" style="justify-content:center">{{ eyebrow }}</div>
          <h1 class="ph-title">
            {{ titleLine1 }}<br *ngIf="titleEm">
            <em *ngIf="titleEm">{{ titleEm }}</em>
          </h1>
          <p class="ph-desc" *ngIf="description">{{ description }}</p>

          <!-- Slot for page-specific extras: trust rows, small print, etc. -->
          <ng-content></ng-content>

          <div class="ph-breadcrumb">
            <a (click)="nav('/')">Home</a>
            <span>/</span>
            <span>{{ breadcrumbLabel }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 160px 0 100px; background: var(--obsidian);
      position: relative; overflow: hidden; text-align: center;
    }
    @media(max-width:767px){ .page-hero{ padding: 128px 0 72px; } }

    /* Subtle grain so the flat panel never reads as "empty" */
    .ph-noise {
      position: absolute; inset: 0; pointer-events: none; opacity: .5; mix-blend-mode: multiply;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
    }

    /* Warm ambient glow, drifting slowly */
    .ph-mesh {
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 70% 55% at 72% 30%, var(--gold-tint) 0%, transparent 65%),
                  radial-gradient(ellipse 55% 45% at 15% 80%, var(--gold-tint) 0%, transparent 70%);
      opacity: .6; animation: phMeshDrift 16s ease-in-out infinite alternate;
    }
    @keyframes phMeshDrift {
      0%   { transform: translate(0,0) scale(1); }
      100% { transform: translate(-2%,2%) scale(1.06); }
    }

    /* Grid, masked to a soft vignette */
    .ph-grid {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 0%, transparent 75%);
      opacity: .45;
    }

    /* Floating gradient blobs — the actual "graphic" behind the copy */
    .ph-blob {
      position: absolute; border-radius: 50%; pointer-events: none;
      filter: blur(60px); opacity: .5;
    }
    .ph-blob.b1 {
      width: 340px; height: 340px; top: -90px; right: 8%;
      background: radial-gradient(circle, var(--gold-l) 0%, transparent 70%);
      animation: phFloat1 13s ease-in-out infinite;
    }
    .ph-blob.b2 {
      width: 260px; height: 260px; bottom: -60px; left: 6%;
      background: radial-gradient(circle, var(--gold) 0%, transparent 70%);
      opacity: .32; animation: phFloat2 17s ease-in-out infinite;
    }
    .ph-blob.b3 {
      width: 180px; height: 180px; top: 30%; left: 46%;
      background: radial-gradient(circle, var(--gold-bright) 0%, transparent 70%);
      opacity: .22; animation: phFloat3 11s ease-in-out infinite;
    }
    @keyframes phFloat1 {
      0%,100% { transform: translate(0,0); }
      50%     { transform: translate(-26px, 22px); }
    }
    @keyframes phFloat2 {
      0%,100% { transform: translate(0,0); }
      50%     { transform: translate(24px, -18px); }
    }
    @keyframes phFloat3 {
      0%,100% { transform: translate(0,0) scale(1); }
      50%     { transform: translate(14px, 16px) scale(1.15); }
    }

    /* Faint rotating rings for depth */
    .ph-ring {
      position: absolute; border-radius: 50%; pointer-events: none;
      border: 1px dashed var(--gold-ring);
    }
    .ph-ring.r1 { width: 520px; height: 520px; top: -180px; right: -120px; animation: phSpin 90s linear infinite; }
    .ph-ring.r2 { width: 360px; height: 360px; bottom: -140px; left: -100px; animation: phSpin 70s linear infinite reverse; }
    @keyframes phSpin { to { transform: rotate(360deg); } }
    @media(max-width:767px){ .ph-ring{ display:none; } }

    /* Slow-rising ember particles */
    .ph-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
    .ph-particles span {
      position: absolute; bottom: -10px; width: 4px; height: 4px; border-radius: 50%;
      background: var(--gold); opacity: 0; animation: phRise linear infinite;
    }
    .ph-particles span:nth-child(1) { left: 8%;  animation-duration: 9s;  animation-delay: 0s; }
    .ph-particles span:nth-child(2) { left: 22%; animation-duration: 12s; animation-delay: 1.5s; }
    .ph-particles span:nth-child(3) { left: 38%; animation-duration: 10s; animation-delay: 3s; }
    .ph-particles span:nth-child(4) { left: 55%; animation-duration: 14s; animation-delay: .8s; }
    .ph-particles span:nth-child(5) { left: 68%; animation-duration: 11s; animation-delay: 2.4s; }
    .ph-particles span:nth-child(6) { left: 81%; animation-duration: 13s; animation-delay: 4s; }
    .ph-particles span:nth-child(7) { left: 92%; animation-duration: 9.5s; animation-delay: 1s; }
    .ph-particles span:nth-child(8) { left: 15%; animation-duration: 15s; animation-delay: 5s; }
    @keyframes phRise {
      0%   { transform: translateY(0) scale(.6); opacity: 0; }
      10%  { opacity: .55; }
      90%  { opacity: .35; }
      100% { transform: translateY(-260px) scale(1); opacity: 0; }
    }

    /* Soft light sweep for a touch of motion on load */
    .ph-scan {
      position: absolute; top: 0; left: -30%; width: 30%; height: 100%; pointer-events: none;
      background: linear-gradient(100deg, transparent, rgba(242,106,33,.06), transparent);
      animation: phSweep 7s ease-in-out infinite;
    }
    @keyframes phSweep {
      0%   { left: -30%; }
      50%  { left: 110%; }
      100% { left: 110%; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ph-mesh, .ph-blob, .ph-ring, .ph-particles span, .ph-scan { animation: none !important; }
    }

    .ph-inner { max-width: 700px; margin: 0 auto; }
    .ph-title {
      font-family: var(--f-head); font-weight: 800;
      font-size: clamp(2.4rem, 5vw, 4rem);
      color: var(--ghost); line-height: 1.08;
      letter-spacing: -.03em; margin-bottom: 18px;
      em { color: var(--gold); font-style: italic; font-family: var(--f-display); font-weight: 300; font-size: 1.1em; }
    }
    .ph-desc {
      font-size: 1rem; font-weight: 300; color: var(--ghost-d);
      line-height: 1.8; max-width: 500px; margin: 0 auto 24px;
    }
    .ph-breadcrumb {
      display: inline-flex; align-items: center; gap: 10px;
      font-family: var(--f-mono); font-size: .62rem;
      color: var(--ghost-d); letter-spacing: .08em; margin-top: 20px;
      a { color: var(--gold); cursor: pointer; &:hover { text-decoration: underline; } }
      span:not(:first-child) { color: rgba(0,0,0,.2); }
    }
  `]
})
export class PageHeroComponent {
  @Input() eyebrow = '';
  @Input() titleLine1 = '';
  @Input() titleEm = '';
  @Input() description = '';
  @Input() breadcrumbLabel = '';

  particles = Array.from({ length: 8 });

  constructor(private router: Router) {}
  nav(path: string) { this.router.navigateByUrl(path); }
}