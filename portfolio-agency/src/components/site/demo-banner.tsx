"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BACK_URL = "https://k2digitalmedia.ca";
const LOGO_URL = "/Logo.png";

export function DemoBanner() {
  const topStripRef = useRef<HTMLDivElement>(null);
  const footerStripRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateOffsets = () => {
      const root = document.documentElement;
      const topOffset = topStripRef.current?.offsetHeight ?? 0;
      const bottomOffset = footerStripRef.current?.offsetHeight ?? 0;

      root.style.setProperty("--k2-demo-top-offset", `${topOffset}px`);
      root.style.setProperty("--k2-demo-bottom-offset", `${bottomOffset}px`);
    };

    updateOffsets();

    const resizeObserver = new ResizeObserver(updateOffsets);

    if (topStripRef.current) {
      resizeObserver.observe(topStripRef.current);
    }

    if (footerStripRef.current) {
      resizeObserver.observe(footerStripRef.current);
    }

    window.addEventListener("resize", updateOffsets);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateOffsets);
      document.documentElement.style.removeProperty("--k2-demo-top-offset");
      document.documentElement.style.removeProperty("--k2-demo-bottom-offset");
    };
  }, []);

  return (
    <>
      <div ref={topStripRef} className="k2-demo-nav-strip">
        <span className="k2-demo-dot" aria-hidden="true" />
        <span className="k2-demo-copy">This is a demo site built by</span>
        <a href={BACK_URL} target="_blank" rel="noopener noreferrer" className="k2-demo-brand-link">
          K2 Digital Media
        </a>
        <a href={BACK_URL} target="_blank" rel="noopener noreferrer" className="k2-demo-back-btn">
          Go Back
        </a>
      </div>

      <div className="k2-demo-side-wrap">
        <button
          type="button"
          className="k2-demo-side-tab"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="k2-demo-side-panel"
        >
          <span className={`k2-demo-arrow${isOpen ? " is-open" : ""}`} aria-hidden="true">
            ›
          </span>
          <span>Demo</span>
        </button>

        <div id="k2-demo-side-panel" className={`k2-demo-side-panel${isOpen ? "" : " is-closed"}`}>
          <div className="k2-demo-logo-wrap">
            <Image src={LOGO_URL} alt="K2 Digital Media" width={48} height={48} className="k2-demo-logo" />
          </div>
          <div className="k2-demo-badge">
            <span className="k2-demo-badge-dot" aria-hidden="true" />
            <span>Demo Site</span>
          </div>
          <p className="k2-demo-panel-copy">
            This is a demo built by <strong>K2 Digital Media</strong>
          </p>
          <a href={BACK_URL} target="_blank" rel="noopener noreferrer" className="k2-demo-cta">
            Back to K2DM
          </a>
        </div>
      </div>

      <div ref={footerStripRef} className="k2-demo-footer-strip">
        <Image src={LOGO_URL} alt="K2 Digital Media" width={18} height={18} className="k2-demo-footer-logo" />
        <span>Demo by</span>
        <a href={BACK_URL} target="_blank" rel="noopener noreferrer" className="k2-demo-footer-brand">
          K2 Digital Media
        </a>
        <span className="k2-demo-footer-divider" aria-hidden="true">
          |
        </span>
        <a href={BACK_URL} target="_blank" rel="noopener noreferrer" className="k2-demo-footer-link">
          Visit Main Site
        </a>
      </div>
    </>
  );
}
