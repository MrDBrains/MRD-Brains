import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-wrap">
      <div class="legal-hero">
        <div class="container">
          <div class="lh-inner">
            <div class="eyebrow">Legal</div>
            <h1 class="lh-title">Privacy Policy</h1>
            <div class="lh-meta">
              <span><i class="bi bi-calendar3"></i> Effective: 1 January 2025</span>
              <span><i class="bi bi-arrow-clockwise"></i> Last updated: 24 March 2026</span>
            </div>
            <div class="lh-breadcrumb">
              <a routerLink="/">Home</a>
              <span>/</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="legal-layout">

          <!-- Sidebar TOC -->
          <div class="legal-toc">
            <div class="toc-label">Contents</div>
            <a class="toc-link" *ngFor="let s of sections" [href]="'#' + s.id">
              {{ s.title }}
            </a>
          </div>

          <!-- Body -->
          <div class="legal-body">

            <div class="intro-card">
              <i class="bi bi-shield-fill-check"></i>
              <p>
                MrD Brains Technology ("we", "us", "our") is committed to protecting
                your privacy. This policy explains what information we collect, how
                we use it, and your rights regarding your data.
                We comply with the <strong>Information Technology Act, 2000</strong> and
                the <strong>Information Technology (Amendment) Act, 2008</strong> of India.
              </p>
            </div>

            <div class="legal-section" id="information-we-collect">
              <h2>1. Information We Collect</h2>
              <h3>1.1 Information you provide directly</h3>
              <ul>
                <li><strong>Contact details</strong> — name, email address, phone number, company name when you fill our contact form or reach us via WhatsApp.</li>
                <li><strong>Project information</strong> — details about your business requirements, budget, and project scope shared during consultations.</li>
                <li><strong>Payment information</strong> — billing name, address, and payment records for services rendered. We do not store card numbers — payments are processed via secure third-party gateways.</li>
                <li><strong>Communications</strong> — emails, WhatsApp messages, and call records related to project delivery and support.</li>
              </ul>
              <h3>1.2 Information collected automatically</h3>
              <ul>
                <li><strong>Usage data</strong> — pages visited, time spent, browser type, device type, IP address, and referral source via Google Analytics.</li>
                <li><strong>Cookies</strong> — session cookies for site functionality and analytics cookies to understand how visitors use our website.</li>
              </ul>
            </div>

            <div class="legal-section" id="how-we-use">
              <h2>2. How We Use Your Information</h2>
              <p>We use your information exclusively to:</p>
              <ul>
                <li>Respond to your enquiries and project requests</li>
                <li>Deliver, manage and support software projects</li>
                <li>Send project updates, invoices and support communications</li>
                <li>Improve our website and services based on usage patterns</li>
                <li>Comply with legal and regulatory obligations in India</li>
                <li>Send relevant service updates (you may opt out at any time)</li>
              </ul>
              <div class="legal-note">
                <i class="bi bi-info-circle-fill"></i>
                We do <strong>not</strong> sell, rent, or trade your personal information
                to any third party under any circumstances.
              </div>
            </div>

            <div class="legal-section" id="data-sharing">
              <h2>3. Data Sharing</h2>
              <p>We only share your data with:</p>
              <ul>
                <li><strong>Service providers</strong> — Google (Analytics), Microsoft (Azure hosting), and Formspree (contact form processing) strictly for delivering our services.</li>
                <li><strong>Legal authorities</strong> — only if required by Indian law, court order, or government regulation.</li>
                <li><strong>Business transfers</strong> — in the event of a merger or acquisition, with prior notice to you.</li>
              </ul>
              <p>All third-party providers are bound by data protection agreements and are prohibited from using your data for their own purposes.</p>
            </div>

            <div class="legal-section" id="data-security">
              <h2>4. Data Security</h2>
              <p>We implement industry-standard safeguards to protect your data:</p>
              <ul>
                <li>SSL/TLS encryption on all data transmission</li>
                <li>Azure cloud infrastructure with enterprise-grade security</li>
                <li>Access controls — only authorised team members can access client data</li>
                <li>NDA agreements signed before any sensitive project details are shared</li>
                <li>Regular security reviews and patch management</li>
              </ul>
              <p>While we take all reasonable precautions, no method of internet transmission is 100% secure. We will notify you promptly in the event of any data breach affecting your information.</p>
            </div>

            <div class="legal-section" id="cookies">
              <h2>5. Cookies</h2>
              <p>Our website uses the following types of cookies:</p>
              <div class="cookie-table">
                <div class="ct-row header">
                  <span>Cookie Type</span>
                  <span>Purpose</span>
                  <span>Duration</span>
                </div>
                <div class="ct-row">
                  <span>Essential</span>
                  <span>Site functionality and security</span>
                  <span>Session</span>
                </div>
                <div class="ct-row">
                  <span>Analytics</span>
                  <span>Google Analytics — page views and usage</span>
                  <span>2 years</span>
                </div>
                <div class="ct-row">
                  <span>Preference</span>
                  <span>Remember your settings and language</span>
                  <span>1 year</span>
                </div>
              </div>
              <p style="margin-top:16px">You can disable cookies in your browser settings. Disabling analytics cookies will not affect site functionality.</p>
            </div>

            <div class="legal-section" id="your-rights">
              <h2>6. Your Rights</h2>
              <p>Under applicable Indian law and global best practices, you have the right to:</p>
              <ul>
                <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
                <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion</strong> — request deletion of your personal data, subject to legal obligations</li>
                <li><strong>Opt-out</strong> — unsubscribe from marketing communications at any time</li>
                <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
              </ul>
              <p>To exercise any of these rights, contact us at <strong>mrdbrainstech&#64;hotmail.com</strong> or WhatsApp <strong>+91 937-240-1266</strong>. We will respond within 30 days.</p>
            </div>

            <div class="legal-section" id="retention">
              <h2>7. Data Retention</h2>
              <ul>
                <li><strong>Contact enquiries</strong> — retained for 2 years from last contact</li>
                <li><strong>Client project data</strong> — retained for 5 years after project completion for legal and support purposes</li>
                <li><strong>Financial records</strong> — retained for 7 years as required by Indian tax law (Income Tax Act)</li>
                <li><strong>Analytics data</strong> — retained for 26 months in Google Analytics</li>
              </ul>
            </div>

            <div class="legal-section" id="third-party">
              <h2>8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites including LinkedIn, GitHub, and Vyapar Ledger. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies before sharing any personal information.</p>
            </div>

            <div class="legal-section" id="children">
              <h2>9. Children's Privacy</h2>
              <p>Our services are intended for businesses and adults aged 18 and above. We do not knowingly collect personal information from individuals under 18. If you believe a minor has submitted information to us, please contact us immediately and we will delete it.</p>
            </div>

            <div class="legal-section" id="changes">
              <h2>10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Significant changes will be communicated via email or a notice on our website. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </div>

            <div class="legal-section" id="contact">
              <h2>11. Contact Us</h2>
              <div class="contact-card">
                <div class="cc-title">MrD Brains Technology</div>
                <div class="cc-items">
                  <div><i class="bi bi-geo-alt-fill"></i> Mumbai, India</div>
                  <div><i class="bi bi-envelope-fill"></i> mrdbrainstech&#64;hotmail.com</div>
                  <div><i class="bi bi-telephone-fill"></i> +91 937-240-1266</div>
                  <div><i class="bi bi-whatsapp"></i> WhatsApp: +91 937-240-1266</div>
                </div>
              </div>
            </div>

            <div class="legal-nav">
              <a routerLink="/terms" class="btn-outline">
                Read Terms of Service <i class="bi bi-arrow-right"></i>
              </a>
              <a routerLink="/contact" class="btn-gold">
                Contact Us <i class="bi bi-arrow-right"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .legal-wrap { background: var(--obsidian); min-height: 100vh; }

    /* Hero */
    .legal-hero {
      padding: 140px 0 60px; background: var(--obsidian-m);
      border-bottom: 1px solid rgba(201,151,74,.1);
      position: relative;
      &::after { content:''; position:absolute; bottom:0; left:0; right:0; height:1px; background: linear-gradient(90deg,transparent,rgba(201,151,74,.25),transparent); }
    }
    .lh-inner { max-width: 700px; }
    .lh-title {
      font-family: var(--f-head); font-weight: 800;
      font-size: clamp(2rem,4vw,3rem); color: var(--ghost);
      letter-spacing: -.025em; margin-bottom: 14px;
    }
    .lh-meta {
      display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;
      font-family: var(--f-mono); font-size: .64rem; color: var(--ghost-d); letter-spacing: .07em;
      i { color: var(--gold); margin-right: 5px; }
    }
    .lh-breadcrumb {
      display: flex; align-items: center; gap: 8px;
      font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d);
      a { color: var(--gold); text-decoration: none; &:hover { text-decoration: underline; } }
      span:last-child { color: var(--ghost-d); }
      span { color: rgba(255,255,255,.2); }
    }

    /* Layout */
    .legal-layout {
      display: grid; grid-template-columns: 220px 1fr;
      gap: 56px; padding: 60px 0 100px; align-items: start;
    }
    @media(max-width:991px){ .legal-layout{ grid-template-columns: 1fr; } .legal-toc{ display:none; } }

    /* TOC */
    .legal-toc {
      position: sticky; top: 100px;
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.07);
      border-radius: 14px; padding: 20px;
    }
    .toc-label {
      font-family: var(--f-mono); font-size: .6rem; text-transform: uppercase;
      letter-spacing: .16em; color: rgba(201,151,74,.4); margin-bottom: 14px;
    }
    .toc-link {
      display: block; font-size: .78rem; color: var(--ghost-d); padding: 7px 0;
      border-bottom: 1px solid rgba(255,255,255,.05); text-decoration: none;
      transition: color .2s; &:hover { color: var(--gold); } &:last-child { border-bottom: none; }
    }

    /* Body */
    .intro-card {
      display: flex; align-items: flex-start; gap: 14px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      border-radius: 14px; padding: 20px 22px; margin-bottom: 40px;
      i { color: var(--gold); font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }
      p { font-size: .88rem; color: var(--ghost-m); line-height: 1.8; margin: 0;
        strong { color: var(--ghost); font-weight: 600; } }
    }

    .legal-section {
      margin-bottom: 44px; padding-bottom: 44px;
      border-bottom: 1px solid rgba(255,255,255,.06);
      &:last-of-type { border-bottom: none; }
      h2 {
        font-family: var(--f-head); font-weight: 800; font-size: 1.3rem;
        color: var(--ghost); margin-bottom: 16px;
        padding-left: 14px; border-left: 3px solid var(--gold);
      }
      h3 {
        font-family: var(--f-head); font-weight: 700; font-size: .92rem;
        color: var(--ghost-m); margin: 18px 0 10px;
      }
      p { font-size: .88rem; color: var(--ghost-d); line-height: 1.85; margin-bottom: 12px; }
      ul {
        list-style: none; padding: 0; display: flex; flex-direction: column; gap: 9px;
        margin-bottom: 14px;
        li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: .86rem; color: var(--ghost-d); line-height: 1.7;
          strong { color: var(--ghost-m); font-weight: 600; }
          &::before { content: '—'; color: var(--gold); flex-shrink: 0; margin-top: 1px; }
        }
      }
    }

    .legal-note {
      display: flex; align-items: flex-start; gap: 10px;
      background: rgba(46,204,113,.06); border: 1px solid rgba(46,204,113,.18);
      border-radius: 10px; padding: 14px 16px; margin-top: 14px;
      font-size: .82rem; color: var(--ghost-m); line-height: 1.7;
      i { color: #2ECC71; font-size: .88rem; flex-shrink: 0; margin-top: 2px; }
      strong { color: var(--ghost); }
    }

    /* Cookie table */
    .cookie-table { border: 1px solid rgba(255,255,255,.08); border-radius: 10px; overflow: hidden; }
    .ct-row {
      display: grid; grid-template-columns: 1fr 2fr 1fr;
      padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,.06);
      font-size: .82rem; gap: 12px;
      &:last-child { border-bottom: none; }
      &.header {
        background: rgba(255,255,255,.03);
        font-family: var(--f-mono); font-size: .62rem; font-weight: 500;
        text-transform: uppercase; letter-spacing: .1em; color: var(--gold);
      }
      span { color: var(--ghost-d); }
    }

    /* Contact card */
    .contact-card {
      background: var(--obsidian-m); border: 1px solid rgba(201,151,74,.16);
      border-radius: 14px; padding: 24px;
    }
    .cc-title { font-family: var(--f-head); font-weight: 800; font-size: 1rem; color: var(--ghost); margin-bottom: 16px; }
    .cc-items { display: flex; flex-direction: column; gap: 10px;
      div { display: flex; align-items: center; gap: 9px; font-size: .84rem; color: var(--ghost-d);
        i { color: var(--gold); font-size: .84rem; width: 16px; flex-shrink: 0; } }
    }

    .legal-nav { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 40px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.07); }
  `]
})
export class PrivacyPageComponent {
  sections = [
    { id: 'information-we-collect', title: '1. Information We Collect' },
    { id: 'how-we-use',             title: '2. How We Use Your Data' },
    { id: 'data-sharing',           title: '3. Data Sharing' },
    { id: 'data-security',          title: '4. Data Security' },
    { id: 'cookies',                title: '5. Cookies' },
    { id: 'your-rights',            title: '6. Your Rights' },
    { id: 'retention',              title: '7. Data Retention' },
    { id: 'third-party',            title: '8. Third-Party Links' },
    { id: 'children',               title: '9. Children\'s Privacy' },
    { id: 'changes',                title: '10. Changes to Policy' },
    { id: 'contact',                title: '11. Contact Us' },
  ];
}