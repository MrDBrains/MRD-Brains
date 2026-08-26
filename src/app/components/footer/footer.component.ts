import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true, imports: [CommonModule, FormsModule, RouterLink],
   template: `
    <footer class="footer">
      <div class="noise"></div>
      <div class="ft-top-rule"></div>
      <div class="ft-glow"></div>

      <!-- Newsletter strip -->
      <div class="ft-newsletter">
        <div class="container">
          <div class="fn-inner">
            <div class="fn-left">
              <div class="fn-label">Stay in the loop</div>
              <div class="fn-title">Tech insights &amp; product updates from MrD Brains</div>
            </div>
            <div class="fn-right">
              <div class="fn-form">
                <input type="email" [(ngModel)]="email" placeholder="your@email.com">
                <button (click)="subscribe()" [class.success]="subscribed">
                  <span *ngIf="!subscribed"><i class="bi bi-send-fill"></i> Subscribe</span>
                  <span *ngIf="subscribed"><i class="bi bi-check-lg"></i> Subscribed!</span>
                </button>
              </div>
              <div class="fn-note">No spam. Unsubscribe anytime. We respect your inbox.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="ft-grid">
          <!-- Brand column -->
          <div class="ft-brand">
            <div class="ft-logo">
              <div class="ft-logo-mark">
                <img src="assets/logo.png" alt="MrD Brains Technology">
              </div>
              <div>
                <div class="ftl-name"><span class="bn-coral">Mr</span><span class="bn-light">D Brains</span></div>
                <div class="ftl-sub">Technology</div>
              </div>
            </div>
            <p class="ft-desc">
              A Mumbai-based technology partner — crafting scalable .NET, Angular &amp; React
              solutions, AI-powered automation, and enterprise IT infrastructure since 2022.
            </p>
            <div class="ft-badges">
              <div class="ftb-item"><i class="bi bi-shield-fill-check"></i> Industry-standard delivery practices</div>
              <div class="ftb-item"><i class="bi bi-geo-alt-fill"></i> Made in Mumbai</div>
              <div class="ftb-item" style="grid-column:1/-1"><i class="bi bi-whatsapp"></i> WhatsApp AI — Now Live</div>
            </div>
            <div class="ft-socials">
              <a href="https://www.linkedin.com/company/mrd-brains" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/MrDBrains" target="_blank"><i class="bi bi-github"></i></a>
              <a href="https://www.instagram.com/mrdbrainstechnology/" target="_blank"><i class="bi bi-instagram"></i></a>
            </div>
          </div>

          <!-- Company -->
          <div class="ft-col">
            <h5>Company</h5>
            <ul>
              <li *ngFor="let l of nav"><a (click)="go(l.id)">{{ l.label }}</a></li>
            </ul>
          </div>

          <!-- Products -->
          <div class="ft-col">
            <h5>Products</h5>
            <ul>
              <li><a (click)="go('/products')">Vyapar Ledger</a></li>
            </ul>
            <h5 class="ft-sub-h5">Industries</h5>
            <ul>
              <li *ngFor="let s of svcs"><a (click)="go('/work')">{{ s }}</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="ft-col ft-contact-col">
            <h5>Get in Touch</h5>
            <div class="ft-contact-rows">
              <div class="fcr-item" *ngFor="let c of contacts">
                <div class="fcr-icon"><i [class]="c.icon"></i></div>
                <div>
                  <div class="fcr-label">{{ c.label }}</div>
                  <div class="fcr-value">{{ c.value }}</div>
                </div>
              </div>
            </div>
            <div class="ft-tech-chips">
              <span *ngFor="let t of tech">{{ t }}</span>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="ft-bottom">
          <div class="ftb-left">
            <p>© {{ year }} <strong>MrD Brains Technology</strong>. All Rights Reserved.</p>
            <div class="ftb-links">
              <a routerLink="/privacy">Privacy Policy</a>
              <span>·</span>
              <a routerLink="/terms">Terms of Service</a>
            </div>
          </div>
          <div class="ftb-right">
            <span class="ftbr-tag">Designed &amp; Engineered in</span>
            <span class="ftbr-city">Mumbai <i class="bi bi-heart-fill"></i></span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Footer palette — deep navy / white / orange */
   

    .footer { background: var(--footer-bg, #0F172A); color: var(--footer-text, #FFFFFF); position: relative; overflow: hidden; }
    .ft-top-rule { height:1px;background:linear-gradient(90deg,transparent,var(--footer-orange, #FF6B1A) 25%,var(--footer-orange, #FF6B1A) 75%,transparent); }
    .ft-glow { display: none; }

    /* Newsletter */
    .ft-newsletter {
      border-bottom:1px solid var(--footer-border, rgba(148,180,216,.14));padding:36px 0;
    }
    .fn-inner { display:flex;align-items:center;justify-content:space-between;gap:36px; }
    @media(max-width:767px){ .fn-inner{flex-direction:column;align-items:flex-start} }
    .fn-label { font-family:var(--f-mono);font-size:.62rem;text-transform:uppercase;letter-spacing:.18em;color:var(--footer-orange, #FF6B1A);margin-bottom:4px; }
    .fn-title { font-family:var(--f-head);font-weight:700;font-size:1.05rem;color:var(--footer-text, #FFFFFF); }
    .fn-right { flex-shrink:0;min-width:360px; }
    @media(max-width:575px){ .fn-right{min-width:unset;width:100%} }
    .fn-form { display:flex;gap:0;margin-bottom:8px;
      input {
        flex:1;background:#FFFFFF;border:1px solid var(--footer-border, rgba(148,180,216,.14));
        border-right:none;border-radius:7px 0 0 7px;padding:12px 16px;
        color:#111111;font-family:var(--f-body);font-size:.86rem;outline:none;
        &::placeholder{color:#8FA7C2}
        &:focus{border-color:var(--footer-orange, #FF6B1A)}
      }
      button {
        background:var(--footer-orange, #FF6B1A);color:#fff;
        border:none;border-radius:0 7px 7px 0;padding:12px 20px;cursor:pointer;
        font-family:var(--f-head);font-weight:700;font-size:.76rem;letter-spacing:.04em;
        white-space:nowrap;transition:all .25s;
        &:hover{background:var(--footer-orange-dark, #E85A0C)}
        &.success{background:var(--emerald)}
        i{margin-right:5px}
      }
    }
    .fn-note { font-family:var(--f-mono);font-size:.6rem;color:var(--footer-text-muted, #6F89A8);letter-spacing:.06em; }

    /* Main grid */
    .ft-grid { display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:48px;padding:60px 0 40px; }
    @media(max-width:1099px){ .ft-grid{grid-template-columns:1fr 1fr} }
    @media(max-width:575px){ .ft-grid{grid-template-columns:1fr} }

    .ft-logo { display:flex;align-items:center;gap:12px;margin-bottom:16px; }
    .ft-logo-mark {
      width:44px;height:44px;border-radius:11px;
      background:#fff;border:1px solid rgba(255,255,255,.18);
      display:flex;align-items:center;justify-content:center;flex-shrink:0;
      img{width:36px;height:36px;object-fit:contain}
    }
    .ftl-name { font-family:var(--f-head);font-weight:800;font-size:.9rem;line-height:1.1; }
    .bn-coral { color: var(--gold); }
    .bn-dark  { color: var(--ghost); }
    .ftl-sub  { font-family:var(--f-mono);font-size:.58rem;color:#8FA7C2;letter-spacing:.12em;text-transform:uppercase; }
    .ft-desc  { font-size:.82rem;font-weight:300;color:var(--ghost-d);line-height:1.82;margin-bottom:18px;max-width:280px; }
    .ft-badges { display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:18px;
      .ftb-item {
        display:flex;align-items:center;gap:6px;
        background:#FFFFFF;border:1px solid var(--footer-border, rgba(148,180,216,.14));
        border-radius:7px;padding:7px 11px;
        font-family:var(--f-mono);font-size:.62rem;color:var(--footer-text-soft, #94B4D8);
        i{color:var(--footer-orange, #FF6B1A);font-size:.72rem}
      }
    }
    .ft-socials { display:flex;gap:7px;
      a {
        width:34px;height:34px;border-radius:8px;
        background:#FFFFFF;border:1px solid var(--footer-border, rgba(148,180,216,.14));
        display:flex;align-items:center;justify-content:center;color:var(--footer-text-soft, #94B4D8);
        transition:all .2s; i{font-size:.82rem}
        &:hover{background:var(--footer-orange, #FF6B1A);color:#fff;border-color:var(--footer-orange, #FF6B1A)}
      }
    }

    .ft-col {
      h5 {
        font-family:var(--f-mono);font-size:.66rem;font-weight:500;
        text-transform:uppercase;letter-spacing:.18em;color:var(--footer-orange, #FF6B1A);margin-bottom:20px;
      }
      .ft-sub-h5 { margin-top:24px; }
      ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:9px;
        li a{font-size:.82rem;font-weight:400;color:var(--footer-text-soft, #94B4D8);cursor:pointer;transition:all .2s;display:inline-flex;align-items:center;gap:0;
          &:hover{color:var(--footer-orange, #FF6B1A);padding-left:7px}
        }
      }
    }

    .ft-contact-rows { display:flex;flex-direction:column;gap:11px;margin-bottom:18px; }
    .fcr-item { display:flex;gap:10px;align-items:flex-start; }
    .fcr-icon {
      width:32px;height:32px;flex-shrink:0;border-radius:8px;
      background:rgba(255,107,26,.08);border:1px solid rgba(255,107,26,.20);
      display:flex;align-items:center;justify-content:center;
      i{color:var(--footer-orange, #FF6B1A);font-size:.76rem}
    }
    .fcr-label { font-family:var(--f-mono);font-size:.58rem;text-transform:uppercase;letter-spacing:.1em;color:#8FA7C2; }
    .fcr-value { font-size:.8rem;color:var(--footer-text-soft, #94B4D8);margin-top:2px; }
    .ft-tech-chips { display:flex;flex-wrap:wrap;gap:5px;
      span{background:rgba(255,107,26,.08);border:1px solid rgba(255,107,26,.20);border-radius:4px;padding:3px 9px;font-family:var(--f-mono);font-size:.62rem;color:var(--gold)} }

    /* Bottom */
    .ft-bottom {
      border-top:1px solid var(--footer-border, rgba(148,180,216,.14));padding:22px 0;
      display:flex;align-items:center;justify-content:space-between;gap:20px;
    }
    @media(max-width:767px){ .ft-bottom{flex-direction:column;gap:12px;text-align:center} }
    .ftb-left p { color:var(--footer-text-soft, #94B4D8);font-size:.78rem; strong{color:var(--footer-text, #FFFFFF);font-weight:600} }
    .ftb-links { display:flex;align-items:center;gap:10px;margin-top:5px;
      a{font-family:var(--f-mono);font-size:.62rem;color:var(--footer-text-soft, #94B4D8);transition:color .2s;&:hover{color:var(--gold)}}
      span{color:var(--border)}
    }
    .ftb-right { display:flex;flex-direction:column;align-items:flex-end;gap:3px; }
    .ftbr-tag { font-family:var(--f-mono);font-size:.58rem;color:var(--footer-text-soft, #94B4D8);letter-spacing:.1em;text-transform:uppercase; }
    .ftbr-city { font-family:var(--f-head);font-weight:700;font-size:.84rem;color:var(--footer-text, #FFFFFF); i{color:var(--footer-orange, #FF6B1A);font-size:.72rem;margin-left:4px} }
  `]
})
export class FooterComponent {
  email = ''; subscribed = false;
  year = new Date().getFullYear();
  nav = [
    { id: '/about',    label: 'About'    },
    { id: '/services', label: 'Services' },
    { id: '/work',     label: 'Our Work' },
    { id: '/process',  label: 'Process'  },
    { id: '/contact',  label: 'Contact'  },
  ];
  svcs = ['Hospitality', 'Business', 'Enterprise'];
  contacts = [
    { icon: 'bi bi-geo-alt-fill',   label: 'Address',       value: '03 Jawahar Nagar, Khar East, Mumbai 400051' },
    { icon: 'bi bi-telephone-fill', label: 'Phone / WA',    value: '+91 937-240-1266' },
    { icon: 'bi bi-envelope-fill',  label: 'Email',         value: 'mrdbrainstechnology@gmail.com' },
    { icon: 'bi bi-clock-fill',     label: 'Working Hours', value: 'Mon–Sat · 9:00 AM – 7:00 PM IST' },
  ];
  tech = ['.NET', 'Angular', 'React', 'Azure', 'SQL Server', 'MongoDB'];
  subscribe() { if (this.email) { this.subscribed = true; this.email = ''; } }
  constructor(private router: Router) {}
  go(route: string) { this.router.navigate([route]); }
}