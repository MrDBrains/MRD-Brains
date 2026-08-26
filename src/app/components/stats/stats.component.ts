import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true, imports: [CommonModule],
  template: `
    <section class="stats-sec">
      <div class="stats-glow"></div>
      <div class="stats-grid-bg"></div>
      <div class="container" style="position:relative;z-index:2">
        <div class="stats-rule"></div>
        <div class="stats-inner">
          <div class="si-item" *ngFor="let s of stats; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*70">
            <div class="sii-icon"><i [class]="s.icon"></i></div>
            <div class="sii-body">
              <div class="sii-val">{{ s.val }}</div>
              <div class="sii-lbl">{{ s.label }}</div>
              <div class="sii-sub">{{ s.sub }}</div>
            </div>
          </div>
        </div>
        <div class="stats-rule"></div>
      </div>
    </section>
  `,
  styles: [`
    .stats-sec {
      padding:80px 0;background:var(--obsidian-m);
      position:relative;overflow:hidden;
    }
    .stats-glow {
      position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
      width:700px;height:250px;
      background:radial-gradient(ellipse,rgba(201,151,74,.06) 0%,transparent 70%);
      pointer-events:none;
    }
    .stats-grid-bg {
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(201,151,74,.025) 1px,transparent 1px),
                       linear-gradient(90deg,rgba(201,151,74,.025) 1px,transparent 1px);
      background-size:50px 50px;
    }
    .stats-rule {
      height:1px;
      background:linear-gradient(90deg,transparent,rgba(201,151,74,.2),transparent);
    }
    .stats-inner {
      display:grid;grid-template-columns:repeat(4,1fr);
      gap:0;padding:52px 0;
    }
    @media(max-width:767px){ .stats-inner{grid-template-columns:repeat(2,1fr)} }
    .si-item {
      display:flex;align-items:center;gap:16px;
      padding:24px 24px;border-right:1px solid rgba(255,255,255,.05);
      transition:background .3s;cursor:default;
      &:last-child{border-right:none}
      &:hover{background:rgba(201,151,74,.03)}
    }
    @media(max-width:767px){
      .si-item{
        padding:22px 16px;
        border-right:1px solid rgba(255,255,255,.05);
        &:nth-child(2n){border-right:none}
        &:nth-child(1),&:nth-child(2){border-bottom:1px solid rgba(255,255,255,.05)}
      }
    }
    .sii-icon {
      width:52px;height:52px;flex-shrink:0;
      background:linear-gradient(135deg,var(--gold-dim),rgba(201,151,74,.04));
      border:1px solid var(--gold-ring);border-radius:14px;
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:1.3rem}
      animation:goldGlow 5s ease-in-out infinite;
    }
    @media(max-width:400px){ .sii-icon{display:none} }
    .sii-val {
      font-family:var(--f-head);font-size:clamp(1.8rem,4vw,2.6rem);font-weight:800;
      background:linear-gradient(135deg,var(--ghost),rgba(237,233,225,.6));
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      line-height:1;margin-bottom:4px;
    }
    .sii-lbl { font-family:var(--f-head);font-weight:700;font-size:.82rem;color:var(--ghost-m);margin-bottom:2px; }
    .sii-sub { font-family:var(--f-mono);font-size:.6rem;color:var(--ghost-d);text-transform:uppercase;letter-spacing:.1em; }
  `]
})
export class StatsComponent {
  stats = [
    { icon: 'bi bi-folder2-open',   val: '20+',   label: 'Projects',            sub: 'Across Maharashtra' },
    { icon: 'bi bi-people-fill',    val: '5+',    label: 'Clients',              sub: 'SMEs & Enterprises' },
    { icon: 'bi bi-diagram-3',      val: 'Multiple', label: 'Industries',        sub: 'Hospitality, business & AI' },
    { icon: 'bi bi-broadcast',      val: 'Live & Ongoing', label: 'Systems', sub: 'In production today' },
  ];
}