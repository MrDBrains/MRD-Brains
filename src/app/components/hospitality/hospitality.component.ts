import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hospitality',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hosp-sec">
      <div class="noise"></div>
      <div class="hosp-glow"></div>
      <div class="container">
        <div class="hosp-grid">
          <div class="hosp-left" data-aos="fade-right">
            <div class="eyebrow">Hospitality Technology</div>
            <h2 class="sec-h2">One of Several <em>Hospitality Projects.</em></h2>
            <p class="sec-lead">
              We build connected digital experiences for hotels — from guest-facing
              websites and direct booking engines to administrative platforms.
            </p>

            <div class="hosp-flow">
              <div class="hf-step"><i class="bi bi-globe2"></i><span>Hotel Website</span></div>
              <i class="bi bi-arrow-right hf-arrow"></i>
              <div class="hf-step"><i class="bi bi-calendar-check"></i><span>Booking Engine</span></div>
              <i class="bi bi-arrow-right hf-arrow"></i>
              <div class="hf-step"><i class="bi bi-speedometer2"></i><span>Admin Panel</span></div>
            </div>

            <a routerLink="/work" class="btn-gold">Explore Hospitality Work <i class="bi bi-arrow-right"></i></a>
          </div>

          <div class="hosp-right" data-aos="fade-left" data-aos-delay="60">
            <div class="hosp-featured">
              <div class="hf-badge"><span class="hf-dot"></span> LIVE</div>
              <div class="hf-name">Hotel Evara Inn</div>
              <div class="hf-cat">Website · Booking Engine · Admin Panel</div>
              <a href="https://hotelevarainn.com/" target="_blank" rel="noopener noreferrer" class="hf-link">
                Visit Website <i class="bi bi-arrow-up-right"></i>
              </a>
            </div>

            <div class="hosp-more">
              <div class="hm-title">More Hospitality Projects</div>
              <div class="hm-list">
                <div class="hm-item" *ngFor="let h of moreProjects">
                  <span class="hm-name">{{ h.name }}</span>
                  <span class="hm-status" [class.live]="h.status==='LIVE'">{{ h.status }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hosp-sec { padding: 100px 0; background: var(--obsidian); position: relative; overflow: hidden; }
    .hosp-glow {
      position: absolute; top: -80px; left: -80px; width: 460px; height: 460px;
      border-radius: 50%; background: rgba(232,93,58,.05); filter: blur(120px); pointer-events: none;
    }
    .hosp-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 48px; align-items: center; }
    @media(max-width:900px){ .hosp-grid{grid-template-columns:1fr} }

    .hosp-flow {
      display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin: 24px 0 28px;
    }
    .hf-step {
      display: flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08);
      border-radius: 50px; padding: 9px 16px;
      font-family: var(--f-mono); font-size: .72rem; color: var(--ghost-m);
      i { color: var(--gold); font-size: .8rem; }
    }
    .hf-arrow { color: rgba(201,151,74,.4); font-size: .8rem; }

    .hosp-featured {
      background: linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.18); border-radius: 18px; padding: 26px; margin-bottom: 16px;
      position: relative;
      &::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(201,151,74,.5),transparent); }
    }
    .hf-badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(46,204,113,.1); color: #2ECC71; border-radius: 50px;
      padding: 4px 12px; font-family: var(--f-mono); font-size: .6rem; letter-spacing: .08em;
      margin-bottom: 14px;
    }
    .hf-dot { width: 5px; height: 5px; border-radius: 50%; background: #2ECC71; box-shadow: 0 0 6px #2ECC71; }
    .hf-name { font-family: var(--f-head); font-weight: 800; font-size: 1.1rem; color: var(--ghost); margin-bottom: 6px; }
    .hf-cat { font-family: var(--f-mono); font-size: .66rem; color: var(--gold); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 16px; }
    .hf-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--f-head); font-weight: 700; font-size: .78rem; color: var(--gold); text-decoration: none; }

    .hosp-more {
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.07);
      border-radius: 18px; padding: 22px 26px;
    }
    .hm-title { font-family: var(--f-mono); font-size: .62rem; text-transform: uppercase; letter-spacing: .12em; color: var(--ghost-d); margin-bottom: 14px; }
    .hm-list { display: flex; flex-direction: column; gap: 10px; }
    .hm-item { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .hm-name { font-size: .84rem; color: var(--ghost-m); }
    .hm-status {
      font-family: var(--f-mono); font-size: .58rem; text-transform: uppercase; letter-spacing: .06em;
      background: rgba(255,255,255,.05); color: var(--ghost-d); border-radius: 50px; padding: 3px 10px;
      &.live { background: rgba(46,204,113,.1); color: #2ECC71; }
    }
  `]
})
export class HospitalityComponent {
  moreProjects = [
    { name: 'Hospitality Client — Confidential', status: 'LIVE' },
    { name: 'Hospitality Client — Confidential', status: 'ONGOING' },
  ];
}
