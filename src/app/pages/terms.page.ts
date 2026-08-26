import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-wrap">
      <div class="legal-hero">
        <div class="container">
          <div class="lh-inner">
            <div class="eyebrow">Legal</div>
            <h1 class="lh-title">Terms of Service</h1>
            <div class="lh-meta">
              <span><i class="bi bi-calendar3"></i> Effective: 1 January 2025</span>
              <span><i class="bi bi-arrow-clockwise"></i> Last updated: 24 March 2026</span>
            </div>
            <div class="lh-breadcrumb">
              <a routerLink="/">Home</a>
              <span>/</span>
              <span>Terms of Service</span>
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
              <i class="bi bi-file-earmark-check-fill"></i>
              <p>
                These Terms of Service govern your use of the MrD Brains Technology website
                (<strong>mrdbrains.com</strong>) and all services we provide. By engaging
                our services or using our website, you agree to these terms.
                These terms are governed by the laws of <strong>India</strong>,
                with jurisdiction in <strong>Mumbai, Maharashtra</strong>.
              </p>
            </div>

            <div class="legal-section" id="definitions">
              <h2>1. Definitions</h2>
              <ul>
                <li><strong>"Company"</strong> refers to MrD Brains Technology, registered and operating from Khar East, Mumbai 400051, Maharashtra, India.</li>
                <li><strong>"Client"</strong> refers to any individual, business, or organisation that engages our services or uses our website.</li>
                <li><strong>"Services"</strong> refers to software development, IT infrastructure, WhatsApp automation, digital marketing, hosting, and any other services we provide.</li>
                <li><strong>"Project"</strong> refers to any specific engagement agreed upon between the Company and the Client.</li>
                <li><strong>"Agreement"</strong> refers to the specific project proposal, scope of work, and payment terms agreed in writing for each engagement.</li>
              </ul>
            </div>

            <div class="legal-section" id="services">
              <h2>2. Our Services</h2>
              <p>MrD Brains Technology provides the following services:</p>
              <ul>
                <li>Custom software development (.NET, Angular, React, Node.js)</li>
                <li>Desktop application development (WPF, WinForms)</li>
                <li>Web application development and API development</li>
                <li>WhatsApp Business API automation and AI chatbot development</li>
                <li>IT infrastructure, cloud (Azure), and server management</li>
                <li>Managed hosting, SSL, CDN, and database hosting</li>
                <li>Digital marketing, SEO, Google Ads, and social media management</li>
              </ul>
              <p>All services are delivered under a separate written project Agreement that specifies scope, timeline, deliverables, and cost.</p>
            </div>

            <div class="legal-section" id="project-terms">
              <h2>3. Project Engagement Terms</h2>
              <h3>3.1 Proposals & Agreements</h3>
              <p>Every project begins with a written proposal outlining scope, timeline, cost, and payment milestones. Work commences only after the Client's written acceptance and receipt of the first milestone payment.</p>
              <h3>3.2 Scope Changes</h3>
              <p>Any changes to the agreed scope must be requested in writing. We will provide a revised estimate before proceeding. We do not absorb scope changes without a signed change order — this protects both parties.</p>
              <h3>3.3 Client Responsibilities</h3>
              <ul>
                <li>Provide accurate and complete project requirements in a timely manner</li>
                <li>Designate a point of contact with authority to approve deliverables</li>
                <li>Provide timely feedback within agreed review periods (typically 5 business days)</li>
                <li>Supply any necessary credentials, assets, or third-party access required</li>
              </ul>
              <h3>3.4 Timelines</h3>
              <p>Project timelines are estimates based on information available at the time of proposal. Delays caused by late client feedback, scope changes, or third-party dependencies are not the Company's responsibility. We will communicate timeline impacts proactively.</p>
            </div>

            <div class="legal-section" id="payment">
              <h2>4. Payment Terms</h2>
              <h3>4.1 Payment Structure</h3>
              <p>Projects are typically structured in milestones:</p>
              <ul>
                <li><strong>30%</strong> — on project kickoff (non-refundable)</li>
                <li><strong>40%</strong> — on mid-project milestone delivery</li>
                <li><strong>30%</strong> — on final delivery and acceptance</li>
              </ul>
              <p>Custom payment schedules may be agreed for larger enterprise projects.</p>
              <h3>4.2 Payment Methods</h3>
              <p>We accept bank transfer (NEFT/IMPS/RTGS), UPI, and cheque. All amounts are in Indian Rupees (INR) unless otherwise agreed. GST is applicable as per prevailing rates.</p>
              <h3>4.3 Late Payment</h3>
              <p>Invoices are due within 7 days of issue. Overdue invoices attract 2% interest per month. Work may be paused on accounts with outstanding balances exceeding 30 days.</p>
              <h3>4.4 Refunds</h3>
              <p>The initial kickoff payment is non-refundable as it covers discovery, planning, and resource allocation. For milestone payments, refunds are considered on a case-by-case basis, prorated based on work completed at the time of termination.</p>
            </div>

            <div class="legal-section" id="intellectual-property">
              <h2>5. Intellectual Property</h2>
              <h3>5.1 Client Ownership</h3>
              <p>Upon receipt of full and final payment, the Client receives full ownership of all custom code, designs, and deliverables created specifically for their project. This includes source code, documentation, and associated assets.</p>
              <h3>5.2 Company IP</h3>
              <p>We retain ownership of our proprietary tools, frameworks, libraries, and methodologies developed independently of any client project. If proprietary tools are used in your project, you receive a perpetual licence to use them as part of your delivered solution.</p>
              <h3>5.3 Third-Party Components</h3>
              <p>Projects may incorporate open-source libraries and third-party components. These remain subject to their respective licences (MIT, Apache, etc.). We will disclose all third-party dependencies in project documentation.</p>
              <h3>5.4 Portfolio Rights</h3>
              <p>Unless expressly prohibited in writing, we reserve the right to reference completed projects in our portfolio, case studies, and marketing materials — without disclosing confidential business data.</p>
            </div>

            <div class="legal-section" id="confidentiality">
              <h2>6. Confidentiality & NDA</h2>
              <p>We treat all client information as strictly confidential. Before detailed project discussions, we are happy to sign a mutual Non-Disclosure Agreement (NDA). Even without a formal NDA, we commit to:</p>
              <ul>
                <li>Not disclosing your business requirements, data, or project details to any third party</li>
                <li>Using your information solely for the purpose of delivering your project</li>
                <li>Ensuring all team members working on your project are bound by confidentiality obligations</li>
                <li>Returning or destroying confidential materials upon project completion if requested</li>
              </ul>
            </div>

            <div class="legal-section" id="warranties">
              <h2>7. Warranties & Support</h2>
              <h3>7.1 Warranty Period</h3>
              <p>All projects include a <strong>90-day post-launch warranty</strong> covering bug fixes for defects in the delivered work that existed at the time of handover. This does not cover new feature requests, changes in requirements, or issues caused by third-party services.</p>
              <h3>7.2 Hosting SLA</h3>
              <p>For managed hosting clients, we commit to <strong>99.9% monthly uptime</strong>. Scheduled maintenance will be communicated with minimum 48 hours notice. Compensation for downtime exceeding SLA will be agreed in individual hosting contracts.</p>
              <h3>7.3 Limitations</h3>
              <p>We make no warranties regarding uninterrupted operation of third-party services, APIs, or platforms (WhatsApp, Google, Microsoft Azure) as these are outside our control.</p>
            </div>

            <div class="legal-section" id="liability">
              <h2>8. Limitation of Liability</h2>
              <p>To the maximum extent permitted by Indian law:</p>
              <ul>
                <li>Our total liability for any claim arising from a project shall not exceed the total fees paid by the Client for that specific project.</li>
                <li>We are not liable for indirect, consequential, or incidental losses including loss of business, loss of data, or loss of profits.</li>
                <li>We are not liable for losses caused by the Client's failure to maintain adequate backups of their own systems and data.</li>
                <li>We are not liable for delays or failures caused by circumstances beyond our reasonable control (force majeure), including internet outages, server failures by third-party providers, or natural disasters.</li>
              </ul>
            </div>

            <div class="legal-section" id="termination">
              <h2>9. Termination</h2>
              <p>Either party may terminate a project engagement with <strong>14 days written notice</strong>. Upon termination:</p>
              <ul>
                <li>The Client pays for all work completed up to the termination date</li>
                <li>We deliver all completed work and assets to the Client</li>
                <li>Both parties are released from future obligations under the project Agreement</li>
                <li>Confidentiality obligations survive termination indefinitely</li>
              </ul>
              <p>We reserve the right to immediately terminate engagements where the Client engages in fraudulent, abusive, or unlawful conduct.</p>
            </div>

            <div class="legal-section" id="website-use">
              <h2>10. Website Use</h2>
              <p>By using mrdbrains.com you agree to:</p>
              <ul>
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorised access to any part of our systems</li>
                <li>Not use automated tools to scrape or harvest content without permission</li>
                <li>Not misrepresent your identity or affiliation when contacting us</li>
              </ul>
              <p>We reserve the right to restrict access to the website for users who violate these terms.</p>
            </div>

            <div class="legal-section" id="governing-law">
              <h2>11. Governing Law & Disputes</h2>
              <p>These Terms are governed by the laws of the <strong>Republic of India</strong>. Any dispute arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of <strong>Mumbai, Maharashtra, India</strong>.</p>
              <p>Before pursuing legal action, both parties agree to attempt resolution through good-faith negotiation for a period of 30 days. If unresolved, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996 of India.</p>
            </div>

            <div class="legal-section" id="changes">
              <h2>12. Changes to These Terms</h2>
              <p>We may update these Terms of Service periodically. Material changes will be communicated via email to active clients and posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the revised terms.</p>
            </div>

            <div class="legal-section" id="contact">
              <h2>13. Contact Us</h2>
              <p>For any questions about these Terms, please contact:</p>
              <div class="contact-card">
                <div class="cc-title">MrD Brains Technology</div>
                <div class="cc-items">
                  <div><i class="bi bi-geo-alt-fill"></i> 03, Jawahar Nagar, Khar East, Mumbai 400051, Maharashtra, India</div>
                  <div><i class="bi bi-envelope-fill"></i> mrdbrainstech&#64;hotmail.com</div>
                  <div><i class="bi bi-telephone-fill"></i> +91 937-240-1266</div>
                  <div><i class="bi bi-whatsapp"></i> WhatsApp: +91 937-240-1266</div>
                </div>
              </div>
            </div>

            <div class="legal-nav">
              <a routerLink="/privacy" class="btn-outline">
                Read Privacy Policy <i class="bi bi-arrow-right"></i>
              </a>
              <a routerLink="/contact" class="btn-gold">
                Start a Project <i class="bi bi-arrow-right"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .legal-wrap { background: var(--obsidian); min-height: 100vh; }
    .legal-hero {
      padding: 140px 0 60px; background: var(--obsidian-m);
      border-bottom: 1px solid rgba(201,151,74,.1); position: relative;
      &::after { content:''; position:absolute; bottom:0; left:0; right:0; height:1px; background: linear-gradient(90deg,transparent,rgba(201,151,74,.25),transparent); }
    }
    .lh-inner { max-width: 700px; }
    .lh-title { font-family: var(--f-head); font-weight: 800; font-size: clamp(2rem,4vw,3rem); color: var(--ghost); letter-spacing: -.025em; margin-bottom: 14px; }
    .lh-meta { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 16px; font-family: var(--f-mono); font-size: .64rem; color: var(--ghost-d); letter-spacing: .07em; i { color: var(--gold); margin-right: 5px; } }
    .lh-breadcrumb { display: flex; align-items: center; gap: 8px; font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d); a { color: var(--gold); text-decoration: none; &:hover { text-decoration: underline; } } span:last-child { color: var(--ghost-d); } span { color: rgba(255,255,255,.2); } }
    .legal-layout { display: grid; grid-template-columns: 220px 1fr; gap: 56px; padding: 60px 0 100px; align-items: start; }
    @media(max-width:991px){ .legal-layout{ grid-template-columns: 1fr; } .legal-toc{ display:none; } }
    .legal-toc { position: sticky; top: 100px; background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.07); border-radius: 14px; padding: 20px; }
    .toc-label { font-family: var(--f-mono); font-size: .6rem; text-transform: uppercase; letter-spacing: .16em; color: rgba(201,151,74,.4); margin-bottom: 14px; }
    .toc-link { display: block; font-size: .78rem; color: var(--ghost-d); padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,.05); text-decoration: none; transition: color .2s; &:hover { color: var(--gold); } &:last-child { border-bottom: none; } }
    .intro-card { display: flex; align-items: flex-start; gap: 14px; background: var(--gold-dim); border: 1px solid var(--gold-ring); border-radius: 14px; padding: 20px 22px; margin-bottom: 40px; i { color: var(--gold); font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; } p { font-size: .88rem; color: var(--ghost-m); line-height: 1.8; margin: 0; strong { color: var(--ghost); font-weight: 600; } } }
    .legal-section { margin-bottom: 44px; padding-bottom: 44px; border-bottom: 1px solid rgba(255,255,255,.06); &:last-of-type { border-bottom: none; }
      h2 { font-family: var(--f-head); font-weight: 800; font-size: 1.3rem; color: var(--ghost); margin-bottom: 16px; padding-left: 14px; border-left: 3px solid var(--gold); }
      h3 { font-family: var(--f-head); font-weight: 700; font-size: .92rem; color: var(--ghost-m); margin: 18px 0 10px; }
      p { font-size: .88rem; color: var(--ghost-d); line-height: 1.85; margin-bottom: 12px; strong { color: var(--ghost-m); font-weight: 600; } }
      ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 9px; margin-bottom: 14px;
        li { display: flex; align-items: flex-start; gap: 10px; font-size: .86rem; color: var(--ghost-d); line-height: 1.7; strong { color: var(--ghost-m); font-weight: 600; } &::before { content: '—'; color: var(--gold); flex-shrink: 0; margin-top: 1px; } }
      }
    }
    .contact-card { background: var(--obsidian-m); border: 1px solid rgba(201,151,74,.16); border-radius: 14px; padding: 24px; }
    .cc-title { font-family: var(--f-head); font-weight: 800; font-size: 1rem; color: var(--ghost); margin-bottom: 16px; }
    .cc-items { display: flex; flex-direction: column; gap: 10px; div { display: flex; align-items: center; gap: 9px; font-size: .84rem; color: var(--ghost-d); i { color: var(--gold); font-size: .84rem; width: 16px; flex-shrink: 0; } } }
    .legal-nav { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 40px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.07); }
  `]
})
export class TermsPageComponent {
  sections = [
    { id: 'definitions',          title: '1. Definitions' },
    { id: 'services',             title: '2. Our Services' },
    { id: 'project-terms',        title: '3. Project Terms' },
    { id: 'payment',              title: '4. Payment Terms' },
    { id: 'intellectual-property',title: '5. Intellectual Property' },
    { id: 'confidentiality',      title: '6. Confidentiality & NDA' },
    { id: 'warranties',           title: '7. Warranties & Support' },
    { id: 'liability',            title: '8. Limitation of Liability' },
    { id: 'termination',          title: '9. Termination' },
    { id: 'website-use',          title: '10. Website Use' },
    { id: 'governing-law',        title: '11. Governing Law' },
    { id: 'changes',              title: '12. Changes to Terms' },
    { id: 'contact',              title: '13. Contact Us' },
  ];
}