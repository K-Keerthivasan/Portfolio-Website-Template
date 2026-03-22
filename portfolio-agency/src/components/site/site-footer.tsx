export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-strong">
      <div className="mx-auto grid w-full max-w-[1600px] gap-6 px-5 py-10 md:grid-cols-[2fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-heading text-4xl uppercase text-foreground">K2 Digital Media</p>
          <p className="mt-3 max-w-md text-sm text-foreground/68">
            Brand systems, digital experiences, and motion direction for ambitious teams who need their launch to hit harder.
          </p>
        </div>
        <div className="text-sm uppercase tracking-[0.18em] text-foreground/56">
          <p className="mb-3 text-lime">Contact</p>
          <p>Toronto / Remote</p>
          <p>hello@k2digital.media</p>
        </div>
        <div className="text-sm uppercase tracking-[0.18em] text-foreground/56">
          <p className="mb-3 text-lime">Capability</p>
          <p>Branding</p>
          <p>Web</p>
          <p>Motion</p>
        </div>
      </div>
    </footer>
  );
}

