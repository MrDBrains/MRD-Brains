import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Top ticker bar -->
    <div class="ticker-bar" [class.hidden]="pinned">
      <div class="ticker-track">
        <span class="ticker-inner" *ngFor="let _ of [1,2]">
          <span class="ti" *ngFor="let t of tickers">
            <i [class]="t.icon"></i> {{ t.text }}
            <span class="ti-sep">·</span>
          </span>
        </span>
      </div>
    </div>

    <nav class="nav" [class.pinned]="pinned">
      <div class="nav-shimmer"></div>
      <div class="container">
        <div class="nav-row">

          <!-- Brand -->
          <a class="brand" (click)="go('/')">
            <div class="brand-mark">
              <img src="assets/logo.png" alt="MrD Brains">
              <div class="brand-mark-ring"></div>
            </div>
            <div class="brand-text">
              <span class="b-name"><span class="bn-coral">Mr</span><span class="bn-dark">D Brains</span></span>
              <span class="b-tag">Technology · Est. 2022</span>
            </div>
          </a>

          <ul class="links">
            <li *ngFor="let l of links">
              <a (click)="go(l.route)" [class.active]="cur===l.route">
                <span class="lbl">{{ l.label }}</span>
              </a>
            </li>
          </ul>

          <div class="nav-actions">
            <div class="nav-status d-none d-xl-flex">
              <span class="ns-dot"></span>
              <span>Available for projects</span>
            </div>
            <a class="btn-gold nav-cta d-none d-lg-inline-flex" (click)="go('/contact')">
              Let's Talk <i class="bi bi-arrow-up-right"></i>
            </a>
            <button class="burger" [class.open]="open" (click)="toggle()" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile drawer -->
    <div class="drawer" [class.open]="open">
      <div class="dr-top">
        <div class="dr-brand">
          <img src="assets/logo.png" alt="" class="dr-logo">
          <div>
            <div class="dr-name"><span class="bn-coral">Mr</span><span class="bn-dark">D Brains Technology</span></div>
            <div class="dr-tag">Premium Software Studio</div>
          </div>
        </div>
        <button (click)="open=false" class="dr-close"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="dr-status">
        <span class="ns-dot"></span>
        <span>Available for new projects — Mumbai</span>
      </div>
      <nav class="dr-links">
        <a *ngFor="let l of links" (click)="go(l.route)">
          <div class="dla-left">
            <span>{{ l.label }}</span>
            <small *ngIf="l.sub">{{ l.sub }}</small>
          </div>
          <i class="bi bi-arrow-up-right"></i>
        </a>
      </nav>
      <div class="dr-footer">
        <a class="btn-gold" style="justify-content:center" (click)="go('contact')">
          Start a Project <i class="bi bi-arrow-right"></i>
        </a>
        <div class="dr-contact">
          <span><i class="bi bi-telephone-fill"></i> +91 937-240-1266</span>
          <span><i class="bi bi-geo-alt-fill"></i> Khar East, Mumbai</span>
        </div>
      </div>
    </div>
    <div class="veil" [class.on]="open" (click)="open=false"></div>
  `,
  styles: [`
    /* ── Ticker ── */
    .ticker-bar {
      height: 32px; background: var(--obsidian-m);
      border-bottom: 1px solid var(--border);
      display: flex; align-items: center; overflow: hidden;
      position: fixed; top: 0; left: 0; right: 0; z-index: 901;
      transition: height .4s ease, opacity .4s ease;
      &.hidden { height: 0; opacity: 0; pointer-events: none; }
    }
    .ticker-track { display: flex; white-space: nowrap; animation: ticker 40s linear infinite; }
    .ticker-inner { display: flex; align-items: center; }
    .ti {
      display: inline-flex; align-items: center; gap: 6px; padding: 0 18px;
      font-family: var(--f-mono); font-size: .58rem; font-weight: 500;
      color: var(--gold); opacity: .8; letter-spacing: .08em; text-transform: uppercase;
      i { font-size: .62rem; color: var(--gold); }
    }
    .ti-sep { color: var(--border); margin-left: 18px; }

    /* ── Nav ── */
    .nav {
      position: fixed; top: 32px; left: 0; right: 0; z-index: 900;
      padding: 16px 0; transition: all .42s cubic-bezier(.4,0,.2,1);
    }
    .nav-shimmer {
      position: absolute; inset: 0; pointer-events: none;
      display: none;
    }
    .nav.pinned {
      top: 0; padding: 12px 0;
      background: rgba(255,255,255,.85);
      backdrop-filter: blur(20px) saturate(1.4);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 4px 24px rgba(16,24,40,.06);
    }
    .nav-row {
      display: flex; align-items: center; gap: 8px;
      flex-wrap: nowrap; white-space: nowrap;
    }

    /* Brand */
    .brand {
      display: flex; align-items: center; gap: 10px;
      cursor: pointer; flex-shrink: 0; text-decoration: none;
    }
    .brand-mark {
      width: 38px; height: 38px; border-radius: 9px; flex-shrink: 0;
      background: var(--gold-tint);
      border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      position: relative;
      img { width: 32px; height: 32px; object-fit: contain; border-radius: 7px; }
    }
    .brand-mark-ring {
      position: absolute; inset: -3px; border-radius: 12px;
      border: 1px solid var(--gold-ring); pointer-events: none; opacity: .5;
    }
    .b-name { display: block; font-family: var(--f-head); font-weight: 800; font-size: .84rem; line-height: 1.15; white-space: nowrap; }
    .bn-coral { color: var(--gold); }
    .bn-dark  { color: var(--ghost); }
    .b-tag { display: block; font-family: var(--f-mono); font-size: .5rem; color: var(--ghost-muted); letter-spacing: .14em; text-transform: uppercase; margin-top: 1px; white-space: nowrap; }

    /* Nav links - compact, no wrap */
    .links {
      display: flex; gap: 0; list-style: none; padding: 0; margin: 0 auto;
      flex-wrap: nowrap; overflow: hidden;
      a {
        display: flex; align-items: center; gap: 4px;
        padding: 8px 11px; border-radius: 6px;
        font-family: var(--f-head); font-weight: 600; font-size: .74rem;
        color: var(--ghost-m); letter-spacing: .01em;
        cursor: pointer; transition: all .22s ease; position: relative;
        white-space: nowrap;
        .lbl { position: relative; z-index: 1; }
        &::after {
          content: ''; position: absolute; bottom: 4px; left: 11px; right: 11px;
          height: 1px; background: var(--gold);
          transform: scaleX(0); transform-origin: left; transition: transform .24s ease;
        }
        &:hover { color: var(--ghost); }
        &:hover::after { transform: scaleX(1); }
        &.active { color: var(--gold); }
        &.active::after { transform: scaleX(1); }
      }
    }

    /* Actions */
    .nav-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
    .nav-status {
      display: flex; align-items: center; gap: 6px;
      font-family: var(--f-mono); font-size: .56rem; color: var(--ghost-d);
      letter-spacing: .07em; text-transform: uppercase; white-space: nowrap;
    }
    .ns-dot {
      width: 6px; height: 6px; border-radius: 50%; background: #2ECC71; flex-shrink: 0;
      box-shadow: 0 0 0 2px rgba(46,204,113,.2); animation: blink 2.4s ease-in-out infinite;
    }
    .nav-cta { font-size: .7rem !important; padding: 10px 20px !important; white-space: nowrap; }

    /* Burger */
    .burger {
      display: none; flex-direction: column; gap: 4px;
      background: none; border: 1px solid var(--border);
      border-radius: 6px; cursor: pointer; padding: 8px 9px; margin-left: 4px; flex-shrink: 0;
      span {
        display: block; width: 16px; height: 1.5px;
        background: var(--ghost); border-radius: 2px; transition: all .3s;
      }
      &.open span:nth-child(1){ transform: rotate(45deg) translate(4px,4px); }
      &.open span:nth-child(2){ opacity: 0; transform: scaleX(0); }
      &.open span:nth-child(3){ transform: rotate(-45deg) translate(4px,-4px); }
    }

    /* ── Drawer ── */
    .drawer {
      position: fixed; top: 0; right: 0; bottom: 0; width: 300px;
      background: #FFFFFF; border-left: 1px solid var(--border);
      padding: 24px 20px; z-index: 902;
      display: flex; flex-direction: column; gap: 6px;
      transform: translateX(100%); transition: transform .38s cubic-bezier(.4,0,.2,1);
      &.open { transform: none; box-shadow: -24px 0 60px rgba(16,24,40,.12); }
    }
    .dr-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .dr-brand { display: flex; align-items: center; gap: 9px; }
    .dr-logo { height: 34px; width: 34px; object-fit: contain; border-radius: 8px; background: #fff; padding: 2px; }
    .dr-name { font-family: var(--f-head); font-weight: 700; font-size: .82rem; color: var(--ghost); }
    .dr-tag  { font-family: var(--f-mono); font-size: .54rem; color: var(--ghost-muted); letter-spacing: .1em; text-transform: uppercase; margin-top: 2px; }
    .dr-close { background: none; border: 1px solid var(--border); border-radius: 6px; cursor: pointer; color: var(--ghost-m); padding: 6px 8px; font-size: .82rem; transition: all .2s; &:hover{color:var(--ghost);border-color:var(--gold)} }
    .dr-status {
      display: flex; align-items: center; gap: 7px;
      background: var(--emerald-dim); border: 1px solid var(--emerald-ring);
      border-radius: 8px; padding: 8px 13px; margin-bottom: 8px;
      font-family: var(--f-mono); font-size: .6rem; color: var(--emerald); letter-spacing: .07em;
    }
    .dr-links { display: flex; flex-direction: column; gap: 2px; flex: 1;
      a {
        display: flex; align-items: center; justify-content: space-between;
        padding: 12px 14px; border-radius: 8px; cursor: pointer;
        font-family: var(--f-head); font-weight: 600; font-size: .88rem;
        color: var(--ghost); border: 1px solid transparent;
        transition: all .22s; text-decoration: none;
        .dla-left { display: flex; flex-direction: column; gap: 1px; }
        small { font-family: var(--f-mono); font-size: .54rem; color: var(--ghost-muted); letter-spacing: .08em; text-transform: uppercase; }
        i { font-size: .76rem; opacity: 0; transform: translate(-4px,2px); transition: all .22s; color: var(--gold); }
        &:hover { color: var(--gold); border-color: var(--gold-ring); background: var(--gold-dim); i{opacity:1;transform:none} }
      }
    }
    .dr-footer { border-top: 1px solid var(--border); padding-top: 16px; display: flex; flex-direction: column; gap: 12px; }
    .dr-contact {
      display: flex; flex-direction: column; gap: 6px;
      span { display: flex; align-items: center; gap: 7px; font-family: var(--f-mono); font-size: .6rem; color: var(--ghost-m); letter-spacing: .05em; i { color: var(--gold); font-size: .68rem; } }
    }

    .veil { position: fixed; inset: 0; background: rgba(17,24,39,.35); z-index: 899; opacity: 0; visibility: hidden; transition: all .35s; pointer-events: none; backdrop-filter: blur(2px); &.on{opacity:1;visibility:visible;pointer-events:auto} }

    /* ── Breakpoints ── */
    @media(max-width:1199px) {
      .links { display: none !important; }
      .burger { display: flex; }
      .nav-status { display: none !important; }
    }
    @media(min-width:1200px) and (max-width:1400px) {
      .links a { padding: 7px 9px; font-size: .7rem; }
      .nav-status { display: none; }
    }
    /* Mobile */
    @media(max-width:767px) {
      .ticker-bar { display: none; }
      .nav { top: 0; padding: 10px 0; }
      .nav.pinned { padding: 10px 0; }
      .nav-row { gap: 0; justify-content: space-between; }
      /* Logo smaller on mobile */
      .brand-mark {
        width: 34px; height: 34px; border-radius: 8px;
        img { width: 28px; height: 28px; }
      }
      .brand-mark-ring { display: none; }
      .b-name { font-size: .78rem; }
      .b-tag { display: none; }
      /* Push burger to far right */
      .nav-actions { margin-left: auto; }
      .burger { display: flex; margin-left: 8px; }
    }
  `]
})
export class NavbarComponent {
  pinned = false; open = false; cur = '/';
  tickers = [
    { icon: 'bi bi-geo-alt-fill',      text: 'Mumbai, Maharashtra — Khar East' },
    { icon: 'bi bi-check-circle-fill', text: 'Industry-standard delivery practices' },
    { icon: 'bi bi-whatsapp',          text: 'WhatsApp Automation & AI Solutions Now Available' },
    { icon: 'bi bi-telephone-fill',    text: '+91 937-240-1266' },
    { icon: 'bi bi-stars',             text: 'New: Vyapar Ledger — Free Download' },
  ];
  links = [
    { route: '/',        label: 'Home',      sub: 'Welcome'      },
    { route: '/about',   label: 'About',     sub: 'Our story'    },
    { route: '/services',label: 'Services',  sub: 'What we do'   },
    { route: '/products',label: 'Products',  sub: 'Vyapar Ledger'},
    { route: '/work',    label: 'Our Work',  sub: 'Portfolio'    },
    { route: '/process', label: 'Process',   sub: 'How we work'  },
    { route: '/contact', label: 'Contact',   sub: 'Get in touch' },
  ];
  constructor(
    @Inject(PLATFORM_ID) private pid: object,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.cur = e.urlAfterRedirects;
      this.open = false;
      document.body.style.overflow = '';
    });
  }
  @HostListener('window:scroll') onScroll() {
    if (!isPlatformBrowser(this.pid)) return;
    this.pinned = window.scrollY > 60;
  }
  go(route: string) {
    if (!isPlatformBrowser(this.pid)) return;
    this.open = false;
    document.body.style.overflow = '';
    this.router.navigate([route]);
  }
  toggle() {
    this.open = !this.open;
    if (isPlatformBrowser(this.pid)) document.body.style.overflow = this.open ? 'hidden' : '';
  }
}