import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * appCountUp
 * ─────────────────────────────────────────────────────────
 * Drop-in directive for premium animated statistics.
 *
 * Usage:  <span appCountUp [countUpValue]="'20+'">20+</span>
 *
 * - Parses a leading number out of any label ("20+", "98%", "24/7", "5+ Clients")
 *   and counts up from 0 to that number when it scrolls into view.
 * - Anything with no leading number ("Multiple", "Live & Ongoing") is left
 *   untouched — it just gets the normal scroll reveal, no forced animation.
 * - Animates once (IntersectionObserver, unobserves after first trigger).
 * - Fully respects prefers-reduced-motion: renders the final value instantly.
 * - No dependencies — safe for SSR (guarded behind isPlatformBrowser).
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  /** The full target label, e.g. "20+", "98%", "24/7", "Multiple" */
  @Input('countUpValue') value = '';
  /** Duration in ms for the count animation */
  @Input() countUpDuration = 1400;

  private observer?: IntersectionObserver;
  private rafId?: number;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private pid: object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.pid)) return;

    const raw = (this.value ?? this.el.nativeElement.textContent ?? '').trim();
    const match = raw.match(/^(\d[\d,]*)(\.\d+)?/);

    // No leading numeric value → nothing to count, leave label as-is.
    if (!match) return;

    const prefix = '';
    const numStr = match[0].replace(/,/g, '');
    const target = parseFloat(numStr);
    if (isNaN(target)) return;

    const suffix = raw.slice(match[0].length); // "+", "%", "/7", " Clients" etc.
    const decimals = match[2] ? match[2].length - 1 : 0;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Start at 0 so the count-up has somewhere to animate from.
    this.renderer.setProperty(this.el.nativeElement, 'textContent', prefix + '0' + suffix);

    if (reduceMotion) {
      this.renderer.setProperty(this.el.nativeElement, 'textContent', raw);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate(target, decimals, prefix, suffix);
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private animate(target: number, decimals: number, prefix: string, suffix: string) {
    const start = performance.now();
    const duration = this.countUpDuration;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(progress);
      const current = target * eased;
      const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString('en-IN');
      this.renderer.setProperty(this.el.nativeElement, 'textContent', prefix + display + suffix);

      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      }
    };
    this.rafId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
