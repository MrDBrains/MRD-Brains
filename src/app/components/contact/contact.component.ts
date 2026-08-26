import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true, imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-sec">
      <div class="noise"></div>
      <div class="c-glow"></div>
      <div class="c-grid"></div>

      <div class="container">
        <div class="contact-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">Start a Conversation</div>
            <h2 class="sec-h2">Let's Build Something <em>Extraordinary</em></h2>
          </div>
          <p class="sec-lead" style="max-width:400px">
            Tell us about your project. Our team responds within 24 hours — typically much sooner.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Info panel -->
          <div class="contact-info" data-aos="fade-right" data-aos-duration="900">

            <!-- Company badge -->
            <div class="ci-badge">
              <div class="cib-logo">
                <img src="assets/logo.png" alt="MrD Brains Technology">
              </div>
              <div>
                <div class="cib-name">MrD Brains Technology</div>
                <div class="cib-tag">Premium Software Studio · Est. 2022</div>
              </div>
              <div class="cib-status">
                <span class="cib-dot"></span>
                <span>Available</span>
              </div>
            </div>

            <p class="ci-desc">
              We partner with startups, SMEs and enterprises across India to deliver
              software that genuinely drives results. Reach out and let's explore how
              we can accelerate your business.
            </p>

            <!-- Contact rows -->
            <div class="ci-contacts">
              <div class="cic-item" *ngFor="let i of infos">
                <div class="cic-icon"><i [class]="i.icon"></i></div>
                <div class="cic-body">
                  <div class="cic-label">{{ i.label }}</div>
                  <div class="cic-value">{{ i.value }}</div>
                </div>
                <div class="cic-arrow"><i class="bi bi-arrow-up-right"></i></div>
              </div>
            </div>

            <!-- Response SLA -->
            <div class="ci-sla">
              <div class="sla-item" *ngFor="let s of slas">
                <div class="sla-icon"><i [class]="s.icon"></i></div>
                <div class="sla-body">
                  <div class="sla-title">{{ s.title }}</div>
                  <div class="sla-desc">{{ s.desc }}</div>
                </div>
              </div>
            </div>

            <!-- Socials -->
            <div class="ci-socials">
              <div class="cs-label">Find us on</div>
              <div class="cs-links">
                <a href="https://www.linkedin.com/company/mrd-brains" target="_blank" class="csl">
                  <i class="bi bi-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/MrDBrains" target="_blank" class="csl">
                  <i class="bi bi-github"></i> GitHub
                </a>
                <a href="#" (click)="$event.preventDefault()" class="csl">
                  <i class="bi bi-twitter-x"></i> Twitter
                </a>
                <a href="#" (click)="$event.preventDefault()" class="csl">
                  <i class="bi bi-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div data-aos="fade-left" data-aos-delay="100">
            <div class="contact-form-card" *ngIf="!sent">
              <div class="cfc-top">
                <div class="cfc-title">Send Us a Message</div>
                <div class="cfc-sub">We'll get back to you within 24 hours</div>
              </div>
              <div class="cfc-rule"></div>

              <form (ngSubmit)="submit()" #f="ngForm">
                <div class="form-grid">
                  <div class="form-field">
                    <label>Your Name <span>*</span></label>
                    <div class="ff-wrap">
                      <i class="bi bi-person"></i>
                      <input type="text" name="name" [(ngModel)]="form.name" required placeholder="Rahul Mehta">
                    </div>
                  </div>
                  <div class="form-field">
                    <label>Email Address <span>*</span></label>
                    <div class="ff-wrap">
                      <i class="bi bi-envelope"></i>
                      <input type="email" name="email" [(ngModel)]="form.email" required placeholder="you@company.com">
                    </div>
                  </div>
                  <div class="form-field">
                    <label>Phone Number</label>
                    <div class="ff-wrap">
                      <i class="bi bi-telephone"></i>
                      <input type="tel" name="phone" [(ngModel)]="form.phone" placeholder="+91 98765 43210">
                    </div>
                  </div>
                  <div class="form-field">
                    <label>Company Name</label>
                    <div class="ff-wrap">
                      <i class="bi bi-building"></i>
                      <input type="text" name="company" [(ngModel)]="form.company" placeholder="Acme Pvt. Ltd.">
                    </div>
                  </div>
                  <div class="form-field full">
                    <label>Project Subject <span>*</span></label>
                    <div class="ff-wrap">
                      <i class="bi bi-chat-square-text"></i>
                      <input type="text" name="subject" [(ngModel)]="form.subject" required placeholder="Custom ERP system for 50 users…">
                    </div>
                  </div>
                  <div class="form-field full">
                    <label>Service Required</label>
                    <div class="ff-wrap ff-select">
                      <i class="bi bi-grid"></i>
                      <select name="service" [(ngModel)]="form.service">
                        <option value="">— Select the service you need —</option>
                        <option *ngFor="let s of services" [value]="s">{{ s }}</option>
                      </select>
                      <i class="bi bi-chevron-down sel-arrow"></i>
                    </div>
                  </div>
                  <div class="form-field full">
                    <label>Budget Range</label>
                    <div class="budget-pills">
                      <button type="button" class="bp" *ngFor="let b of budgets"
                              [class.active]="form.budget===b" (click)="form.budget=b">
                        {{ b }}
                      </button>
                    </div>
                  </div>
                  <div class="form-field full">
                    <label>Tell Us About Your Vision <span>*</span></label>
                    <textarea name="message" [(ngModel)]="form.message" required rows="5"
                              placeholder="Describe your project, goals, timeline and any specific requirements…"></textarea>
                  </div>
                  <div class="form-field full">
                    <button type="submit" class="btn-gold submit-btn" [disabled]="sending">
                      <span *ngIf="!sending">
                        <i class="bi bi-send-fill"></i> Send Message
                      </span>
                      <span *ngIf="sending">
                        <i class="bi bi-hourglass-split"></i> Sending…
                      </span>
                    </button>
                    <div class="form-note">
                      <i class="bi bi-lock-fill"></i>
                      Your information is secure and never shared with third parties.
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <!-- Success state -->
            <div class="sent-card" *ngIf="sent" data-aos="zoom-in">
              <div class="sent-icon">
                <i class="bi bi-check-lg"></i>
                <div class="sent-ring"></div>
                <div class="sent-ring sr2"></div>
              </div>
              <h4>Message Received!</h4>
              <p>Thank you for reaching out to MrD Brains Technology. A member of our team will respond within 24 hours — often sooner.</p>
              <div class="sent-next">
                <div class="sn-item">
                  <i class="bi bi-clock-fill"></i>
                  <span>Expect a reply within 24 hours</span>
                </div>
                <div class="sn-item">
                  <i class="bi bi-telephone-fill"></i>
                  <span>Or call us: +91 937-240-1266</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-sec {
      padding:140px 0;background:var(--obsidian-m);position:relative;overflow:hidden;
    }
    .c-glow {
      position:absolute;bottom:-120px;right:-120px;width:600px;height:600px;
      background:radial-gradient(circle,rgba(201,151,74,.06) 0%,transparent 65%);pointer-events:none;
    }
    .c-grid {
      position:absolute;inset:0;pointer-events:none;
      background-image:radial-gradient(circle,rgba(201,151,74,.04) 1px,transparent 1px);
      background-size:36px 36px;
      mask-image:radial-gradient(ellipse 60% 70% at 80% 80%,black 0%,transparent 70%);
    }
    .contact-top {
      display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:60px;
    }
    @media(max-width:767px){ .contact-top{flex-direction:column;align-items:flex-start} }
    .contact-grid { display:grid;grid-template-columns:1fr 1.55fr;gap:32px;align-items:start; }
    @media(max-width:1099px){ .contact-grid{grid-template-columns:1fr} }

    /* ── Info panel ── */
    .contact-info {
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.14);border-radius:22px;padding:34px;
      position:relative;overflow:hidden;
      box-shadow:var(--sh-lg);
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.4),transparent)}
    }
    .ci-badge {
      display:flex;align-items:center;gap:12px;margin-bottom:20px;
      background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);
      border-radius:13px;padding:13px 16px;
    }
    .cib-logo {
      width:44px;height:44px;flex-shrink:0;border-radius:11px;
      background:#fff;border:1.5px solid rgba(201,151,74,.2);
      display:flex;align-items:center;justify-content:center;
      img{width:36px;height:36px;object-fit:contain}
    }
    .cib-name { font-family:var(--f-head);font-weight:700;font-size:.86rem;color:var(--ghost); }
    .cib-tag  { font-family:var(--f-mono);font-size:.58rem;color:rgba(201,151,74,.5);letter-spacing:.08em;margin-top:2px; }
    .cib-status {
      margin-left:auto;display:flex;align-items:center;gap:6px;flex-shrink:0;
      font-family:var(--f-mono);font-size:.6rem;color:rgba(46,204,113,.75);letter-spacing:.08em;
    }
    .cib-dot { width:7px;height:7px;border-radius:50%;background:#2ECC71;animation:blink 2s ease-in-out infinite; }
    .ci-desc { font-size:.84rem;font-weight:300;color:var(--ghost-d);line-height:1.82;margin-bottom:24px; }

    .ci-contacts { display:flex;flex-direction:column;gap:10px;margin-bottom:24px; }
    .cic-item {
      display:flex;align-items:center;gap:12px;
      background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.05);
      border-radius:12px;padding:14px 16px;transition:all .25s;cursor:default;
      &:hover{border-color:rgba(201,151,74,.18);background:var(--gold-dim)}
    }
    .cic-icon {
      width:36px;height:36px;flex-shrink:0;border-radius:9px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:.84rem}
    }
    .cic-label { font-family:var(--f-mono);font-size:.58rem;text-transform:uppercase;letter-spacing:.12em;color:var(--ghost-d); }
    .cic-value { font-size:.82rem;color:var(--ghost-m);margin-top:2px; }
    .cic-arrow { margin-left:auto;flex-shrink:0; i{color:rgba(201,151,74,.25);font-size:.78rem} .cic-item:hover & i{color:var(--gold)} }

    .ci-sla { display:flex;flex-direction:column;gap:9px;margin-bottom:24px; }
    .sla-item { display:flex;align-items:center;gap:10px; }
    .sla-icon {
      width:30px;height:30px;flex-shrink:0;border-radius:7px;
      background:rgba(46,204,113,.08);border:1px solid rgba(46,204,113,.18);
      display:flex;align-items:center;justify-content:center;
      i{color:#2ECC71;font-size:.76rem}
    }
    .sla-title { font-family:var(--f-head);font-weight:700;font-size:.8rem;color:var(--ghost); }
    .sla-desc  { font-size:.72rem;color:var(--ghost-d); }

    .ci-socials { border-top:1px solid rgba(255,255,255,.06);padding-top:20px; }
    .cs-label { font-family:var(--f-mono);font-size:.6rem;text-transform:uppercase;letter-spacing:.16em;color:var(--ghost-d);margin-bottom:12px; }
    .cs-links { display:flex;gap:7px;flex-wrap:wrap; }
    .csl {
      display:inline-flex;align-items:center;gap:6px;
      background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
      border-radius:8px;padding:8px 14px;
      font-family:var(--f-mono);font-size:.68rem;color:var(--ghost-d);
      transition:all .22s;
      i{font-size:.8rem}
      &:hover{background:var(--gold);color:var(--obsidian);border-color:var(--gold)}
    }

    /* ── Form card ── */
    .contact-form-card {
      background:var(--obsidian-l);border:1px solid var(--border);
      border-radius:22px;padding:40px;position:relative;overflow:hidden;
      box-shadow:var(--sh-lg);
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.22),transparent)}
    }
    .cfc-top { margin-bottom:16px; }
    .cfc-title { font-family:var(--f-head);font-weight:800;font-size:1.2rem;color:var(--ghost); }
    .cfc-sub { font-family:var(--f-mono);font-size:.64rem;color:var(--ghost-d);letter-spacing:.08em;margin-top:4px; }
    .cfc-rule { height:1px;background:linear-gradient(90deg,var(--gold),transparent);width:60px;margin-bottom:28px; }

    .form-grid { display:grid;grid-template-columns:1fr 1fr;gap:16px; }
    .form-field { display:flex;flex-direction:column; &.full{grid-column:1/-1} }
    label {
      font-family:var(--f-mono);font-size:.62rem;font-weight:500;
      text-transform:uppercase;letter-spacing:.12em;color:var(--ghost-d);margin-bottom:8px;
      span{color:var(--coral)}
    }
    .ff-wrap {
      position:relative;display:flex;align-items:center;
      i:first-child{position:absolute;left:14px;color:rgba(201,151,74,.4);font-size:.82rem;pointer-events:none;z-index:1}
      input,select{
        width:100%;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.09);
        border-radius:10px;padding:12px 16px 12px 40px;color:var(--ghost);
        font-family:var(--f-body);font-size:.88rem;transition:all .24s;outline:none;
        &::placeholder{color:rgba(237,233,225,.18)}
        &:focus{border-color:rgba(201,151,74,.38);background:rgba(201,151,74,.04);box-shadow:0 0 0 3px rgba(201,151,74,.08)}
      }
    }
    .ff-select { select{appearance:none;cursor:pointer;padding-right:36px} }
    .sel-arrow { position:absolute;right:14px;color:rgba(201,151,74,.4);font-size:.72rem;pointer-events:none;z-index:1 }
    select option { background:var(--obsidian-m);color:var(--ghost); }
    textarea {
      width:100%;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.09);
      border-radius:10px;padding:14px 16px;color:var(--ghost);
      font-family:var(--f-body);font-size:.88rem;line-height:1.7;resize:vertical;outline:none;
      transition:all .24s;
      &::placeholder{color:rgba(237,233,225,.18)}
      &:focus{border-color:rgba(201,151,74,.38);background:rgba(201,151,74,.04);box-shadow:0 0 0 3px rgba(201,151,74,.08)}
    }
    .budget-pills { display:flex;flex-wrap:wrap;gap:7px; }
    .bp {
      background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
      border-radius:7px;padding:8px 16px;cursor:pointer;
      font-family:var(--f-mono);font-size:.7rem;color:var(--ghost-d);transition:all .2s;
      &.active,&:hover{background:var(--gold-dim);border-color:var(--gold-ring);color:var(--gold)}
    }
    .submit-btn {
      width:100%;justify-content:center;padding:16px;font-size:.82rem;border:none;cursor:pointer;
      &:disabled{opacity:.6;cursor:not-allowed}
      i{margin-right:6px}
    }
    .form-note {
      display:flex;align-items:center;gap:6px;justify-content:center;
      margin-top:13px;font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d);
      i{color:rgba(201,151,74,.4);font-size:.68rem}
    }

    /* Sent */
    .sent-card {
      background:var(--obsidian-l);border:1px solid rgba(201,151,74,.18);
      border-radius:22px;padding:72px 44px;text-align:center;
      box-shadow:var(--sh-lg);
      h4{font-family:var(--f-head);font-weight:800;font-size:1.6rem;color:var(--ghost);margin:20px 0 10px}
      p{font-size:.9rem;color:var(--ghost-d);line-height:1.8;max-width:380px;margin:0 auto 28px}
    }
    .sent-icon {
      width:70px;height:70px;margin:0 auto;position:relative;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      border-radius:50%;display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:1.6rem}
      animation:goldGlow 3s ease-in-out infinite;
    }
    .sent-ring {
      position:absolute;inset:-8px;border-radius:50%;
      border:1px solid rgba(201,151,74,.3);
      animation:pulseRing 2.5s ease-out infinite;
    }
    .sr2 { animation-delay:1.25s; }
    .sent-next { display:flex;flex-direction:column;gap:10px;align-items:center; }
    .sn-item {
      display:flex;align-items:center;gap:9px;
      font-family:var(--f-mono);font-size:.68rem;color:var(--ghost-d);
      i{color:var(--gold);font-size:.78rem}
    }
  `]
})
export class ContactComponent {
  form = { name: '', email: '', phone: '', company: '', subject: '', service: '', budget: '', message: '' };
  sending = false; sent = false;

  infos = [
    { icon: 'bi bi-geo-alt-fill', label: 'Studio Address', value: '03, Jawahar Nagar, Khar East, Mumbai 400051' },
    { icon: 'bi bi-telephone-fill', label: 'Phone / WhatsApp', value: '+91 937-240-1266' },
    { icon: 'bi bi-envelope-fill', label: 'Email', value: 'mrdbrainstechnology@gmail.com' },
  ];

  slas = [
    { icon: 'bi bi-clock-fill',         title: '< 24 Hr Response',   desc: 'We reply to all inquiries within one business day.' },
    { icon: 'bi bi-calendar-check-fill', title: 'Free Consultation',  desc: '30-minute discovery call with our technical team, no charge.' },
    { icon: 'bi bi-file-earmark-text',   title: 'Detailed Proposal',  desc: 'Comprehensive scope, timeline and cost breakdown within 48 hours.' },
  ];

  services = [
    'WhatsApp Automation & AI Chatbots',
    'Desktop App Development (.NET)',
    'Web App Development (Angular / React)',
    'IT Infrastructure & Cloud (Azure)',
    'Managed Hosting Services',
    'Digital Marketing & SEO',
    'Other / Not Sure Yet',
  ];

  budgets = ['< ₹25K', '₹25K–₹75K', '₹75K–₹2L', '₹2L–₹5L', '₹5L+', 'Custom'];

  async submit() {
    this.sending = true;
    try {
      const r = await fetch('https://formspree.io/f/mqalewod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(this.form),
      });
      if (r.ok) this.sent = true;
    } catch {}
    this.sending = false;
  }
}