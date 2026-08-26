import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

const SITE_ORIGIN = 'https://www.mrdbrains.com';

@Injectable({ providedIn: 'root' })
export class CanonicalService {
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private pid: object,
  ) {}

  /**
   * Sets (or creates) the <link rel="canonical"> tag for the current route.
   * @param path route path, e.g. '/', '/about', '/services'
   */
  setCanonical(path: string): void {
    const url = path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
