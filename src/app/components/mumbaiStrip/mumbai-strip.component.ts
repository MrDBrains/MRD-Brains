import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

@Component({
  selector: 'app-mumbai-strip',
  standalone: true, imports: [CommonModule, CountUpDirective],
  template: `
    <section class="mumbai-sec">
      <div class="noise"></div>
      <div class="ms-top-rule"></div>
      <div class="ms-bottom-rule"></div>
      <div class="ms-glow g1"></div>
      <div class="ms-glow g2"></div>

      <div class="container" style="position:relative;z-index:2">
        <div class="ms-inner">

          <!-- Left: Identity -->
          <div class="ms-left" data-aos="fade-right">
            <div class="ms-flag">
              <div class="mf-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <div class="mf-city">Mumbai, Maharashtra</div>
                <div class="mf-country">India · 400051</div>
              </div>
            </div>
            <h2 class="ms-title">
              Proudly Built in <em>Mumbai.</em><br>
              For Indian Businesses.
            </h2>
            <p class="ms-desc">
              We understand Indian business because we live it. GST invoicing,
              Hindi-speaking teams, IST timezone support, UPI integrations —
              we build software that works the way India works.
            </p>
            <div class="ms-tags">
              <div class="mst-chip" *ngFor="let t of tags">
                <i [class]="t.icon"></i> {{ t.text }}
              </div>
            </div>
          </div>

          <!-- Centre: Big visual -->
          <div class="ms-centre" data-aos="fade-up" data-aos-delay="80">
            <div class="msc-card">
              <div class="msc-bg-text">मुंबई</div>
              <div class="msc-inner">
                <div class="msc-map-dot">
                  <div class="mmd-pulse p1"></div>
                  <div class="mmd-pulse p2"></div>
                  <div class="mmd-core"><i class="bi bi-geo-alt-fill"></i></div>
                </div>
                <div class="msc-label">Khar East, Mumbai</div>
                <div class="msc-sub">Our Studio Location</div>
                <div class="msc-divider"></div>
                <div class="msc-stats">
                  <div class="mscs-item" *ngFor="let s of cityStats">
                    <div class="mscsi-val" appCountUp [countUpValue]="s.val">{{ s.val }}</div>
                    <div class="mscsi-lbl">{{ s.lbl }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Why local matters -->
          <div class="ms-right" data-aos="fade-left" data-aos-delay="120">
            <div class="msr-label">Why being Mumbai-based matters to you</div>
            <div class="msr-points">
              <div class="msrp-item" *ngFor="let p of whyLocal">
                <div class="msrpi-icon"><i [class]="p.icon"></i></div>
                <div>
                  <div class="msrpi-title">{{ p.title }}</div>
                  <div class="msrpi-desc">{{ p.desc }}</div>
                </div>
              </div>
            </div>
            <a href="https://wa.me/919372401266" target="_blank" class="ms-wa-btn">
              <i class="bi bi-whatsapp"></i>
              <div>
                <div class="mswa-title">Talk to us in Hindi or English</div>
                <div class="mswa-sub">+91 937-240-1266 · Mumbai</div>
              </div>
              <i class="bi bi-arrow-up-right ms-arrow"></i>
            </a>
          </div>

        </div>

        <!-- Bottom scroll ticker -->
        <div class="ms-ticker">
          <div class="mst-track">
            <span class="mst-inner" *ngFor="let _ of [1,2,3]">
              <span class="msti" *ngFor="let t of tickerItems">
                <i [class]="t.icon"></i> {{ t.text }} <span class="msti-sep">·</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .mumbai-sec {
      padding: 100px 0 0; background: var(--obsidian);
      position: relative; overflow: hidden;
    }
    .ms-top-rule, .ms-bottom-rule {
      position: absolute; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(201,151,74,.2), transparent);
    }
    .ms-top-rule { top: 0; }
    .ms-bottom-rule { bottom: 48px; }
    .ms-glow { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(110px); }
    .g1 { width: 500px; height: 400px; background: rgba(201,151,74,.05); top: -100px; left: -100px; }
    .g2 { width: 400px; height: 300px; background: rgba(240,103,74,.04); bottom: 0; right: -80px; }

    /* Layout */
    .ms-inner {
      display: grid; grid-template-columns: 1fr auto 1fr; gap: 56px; align-items: center;
      padding-bottom: 80px;
    }
    @media(max-width:1099px){ .ms-inner{ grid-template-columns: 1fr 1fr; gap: 36px; } .ms-centre{ display: none; } }
    @media(max-width:767px) { .ms-inner{ grid-template-columns: 1fr; gap: 32px; } }

    /* Left */
    .ms-flag {
      display: inline-flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08);
      border-radius: 50px; padding: 10px 18px; margin-bottom: 22px;
    }
    .mf-icon {
      width: 32px; height: 32px; border-radius: 50%;
      background: linear-gradient(135deg,var(--coral),#F0674A);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      i { color: #fff; font-size: .78rem; }
    }
    .mf-city    { font-family: var(--f-head); font-weight: 700; font-size: .84rem; color: var(--ghost); }
    .mf-country { font-family: var(--f-mono); font-size: .6rem; color: var(--ghost-d); letter-spacing: .08em; }

    .ms-title {
      font-family: var(--f-head); font-weight: 800;
      font-size: clamp(1.8rem,3.5vw,2.6rem); color: var(--ghost);
      line-height: 1.12; letter-spacing: -.025em; margin-bottom: 16px;
      em { color: var(--gold); font-style: italic; font-family: var(--f-display); font-weight: 300; }
    }
    .ms-desc {
      font-size: .88rem; font-weight: 300; color: var(--ghost-d);
      line-height: 1.85; margin-bottom: 24px; max-width: 400px;
    }
    .ms-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .mst-chip {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
      border-radius: 6px; padding: 7px 14px;
      font-family: var(--f-mono); font-size: .63rem; color: var(--ghost-d);
      i { color: var(--gold); font-size: .72rem; }
    }

    /* Centre card */
    .msc-card {
      width: 260px; height: 300px;
      background: linear-gradient(160deg, var(--obsidian-l), var(--obsidian-m));
      border: 1px solid rgba(201,151,74,.2); border-radius: 24px;
      position: relative; overflow: hidden; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      box-shadow: var(--sh-lg);
      transition: box-shadow .3s ease, transform .3s ease;
      &::before { content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.5),transparent); }
      &:hover { transform: translateY(-4px); box-shadow: 0 12px 20px rgba(16,24,40,.06), 0 32px 64px rgba(200,146,46,.14); }
    }
    .msc-bg-text {
      position: absolute; font-family: var(--f-head); font-weight: 800;
      font-size: 6rem; color: rgba(201,151,74,.04); top: 50%; left: 50%;
      transform: translate(-50%,-50%); white-space: nowrap; pointer-events: none;
      letter-spacing: .05em;
    }
    .msc-inner { text-align: center; position: relative; z-index: 1; padding: 24px; width: 100%; }
    .msc-map-dot {
      width: 60px; height: 60px; margin: 0 auto 16px; position: relative;
      display: flex; align-items: center; justify-content: center;
    }
    .mmd-pulse {
      position: absolute; inset: 0; border-radius: 50%;
      border: 1.5px solid rgba(240,103,74,.3);
      animation: pulseRing 2.8s ease-out infinite;
    }
    .mmd-pulse.p2 { animation-delay: 1.4s; }
    .mmd-core {
      width: 44px; height: 44px; border-radius: 50%; position: relative; z-index: 1;
      background: linear-gradient(135deg,var(--coral),#F0674A);
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 6px 20px rgba(240,103,74,.4);
      i { color: #fff; font-size: 1.1rem; }
    }
    .msc-label { font-family: var(--f-head); font-weight: 800; font-size: .92rem; color: var(--ghost); margin-bottom: 3px; }
    .msc-sub   { font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d); letter-spacing: .08em; }
    .msc-divider { height: 1px; background: rgba(255,255,255,.07); margin: 18px 0; }
    .msc-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 0; }
    .mscsi-val { font-family: var(--f-head); font-weight: 800; font-size: 1.1rem; color: var(--ghost); line-height: 1; }
    .mscsi-lbl { font-family: var(--f-mono); font-size: .54rem; color: var(--ghost-d); text-transform: uppercase; letter-spacing: .07em; margin-top: 3px; }

    /* Right */
    .msr-label {
      font-family: var(--f-mono); font-size: .62rem; text-transform: uppercase;
      letter-spacing: .16em; color: rgba(201,151,74,.45); margin-bottom: 20px;
    }
    .msr-points { display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px; }
    .msrp-item {
      display: flex; align-items: flex-start; gap: 13px;
      background: rgba(255,255,255,.025); border: 1px solid rgba(255,255,255,.06);
      border-radius: 12px; padding: 14px 16px; transition: all .25s;
      &:hover { border-color: rgba(201,151,74,.18); background: var(--gold-dim); }
    }
    .msrpi-icon {
      width: 34px; height: 34px; flex-shrink: 0; border-radius: 9px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: .86rem; }
    }
    .msrpi-title { font-family: var(--f-head); font-weight: 700; font-size: .83rem; color: var(--ghost); margin-bottom: 3px; }
    .msrpi-desc  { font-size: .74rem; color: var(--ghost-d); line-height: 1.55; }

    /* WhatsApp button */
    .ms-wa-btn {
      display: flex; align-items: center; gap: 13px;
      background: linear-gradient(135deg, rgba(37,211,102,.1), rgba(37,211,102,.05));
      border: 1px solid rgba(37,211,102,.25); border-radius: 14px;
      padding: 16px 18px; cursor: pointer; transition: all .25s;
      text-decoration: none;
      &:hover { background: rgba(37,211,102,.18); border-color: rgba(37,211,102,.45); transform: translateY(-2px); }
      i.bi-whatsapp { font-size: 1.5rem; color: #25D366; flex-shrink: 0; }
    }
    .mswa-title { font-family: var(--f-head); font-weight: 700; font-size: .86rem; color: var(--ghost); margin-bottom: 2px; }
    .mswa-sub   { font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d); letter-spacing: .06em; }
    .ms-arrow   { margin-left: auto; color: rgba(37,211,102,.5); font-size: .9rem; flex-shrink: 0; }

    /* Ticker */
    .ms-ticker {
      border-top: 1px solid rgba(255,255,255,.05);
      background: rgba(255,255,255,.015);
      padding: 14px 0; overflow: hidden;
    }
    .mst-track { display: flex; white-space: nowrap; animation: ticker 35s linear infinite; }
    .mst-inner { display: flex; align-items: center; }
    .msti {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 0 22px;
      font-family: var(--f-mono); font-size: .62rem; color: rgba(201,151,74,.55);
      letter-spacing: .08em; text-transform: uppercase;
      i { font-size: .68rem; color: var(--gold); }
    }
    .msti-sep { color: rgba(201,151,74,.25); margin-left: 22px; }
  `]
})
export class MumbaiStripComponent {
  tags = [
    { icon: 'bi bi-file-earmark-text', text: 'GST-ready software' },
    { icon: 'bi bi-translate',         text: 'Hindi & English support' },
    { icon: 'bi bi-clock-fill',        text: 'IST timezone' },
    { icon: 'bi bi-currency-rupee',    text: 'INR pricing' },
    { icon: 'bi bi-phone-fill',        text: 'Indian mobile UX' },
    { icon: 'bi bi-bank',              text: 'UPI & NEFT integrations' },
  ];

  cityStats = [
    { val: '20+', lbl: 'Projects' },
    { val: '5+',  lbl: 'Clients' },
    { val: 'Multiple', lbl: 'Industries' },
  ];

  whyLocal = [
    {
      icon: 'bi bi-clock-fill',
      title: 'Same Timezone. Always.',
      desc: 'No 3am calls. No delays. We work IST — your workday is our workday.',
    },
    {
      icon: 'bi bi-translate',
      title: 'You Can Talk in Hindi',
      desc: 'Explain your business in whatever language feels natural. We get it.',
    },
    {
      icon: 'bi bi-file-earmark-check-fill',
      title: 'We Know Indian Compliance',
      desc: 'GST, TDS, MSME norms — we build software that already understands Indian rules.',
    },
    {
      icon: 'bi bi-handshake-fill',
      title: 'Meet Us in Person',
      desc: 'We\'re in Khar East. You can visit, have chai, and look us in the eye.',
    },
  ];

  tickerItems = [
    { icon: 'bi bi-geo-alt-fill',         text: 'Proudly Mumbai-Based' },
    { icon: 'bi bi-translate',            text: 'Hindi & English' },
    { icon: 'bi bi-file-earmark-text',    text: 'GST-Ready Software' },
    { icon: 'bi bi-currency-rupee',       text: 'INR Pricing, No Surprises' },
    { icon: 'bi bi-clock-fill',           text: 'IST Timezone Support' },
    { icon: 'bi bi-handshake-fill',       text: 'Meet Us in Khar East' },
    { icon: 'bi bi-bank',                 text: 'UPI & NEFT Integrations' },
    { icon: 'bi bi-shield-fill-check',    text: 'Built for Indian Businesses' },
  ];
}