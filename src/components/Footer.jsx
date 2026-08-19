export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="text-lg font-extrabold tracking-tight text-[var(--color-charcoal)]">ROAM</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">Your road. Your car. Your time.</p>
        </div>

        <nav className="flex gap-6" aria-label="Footer">
          <a href="#home" className="text-sm font-medium text-[var(--color-charcoal-soft)] hover:text-[var(--color-forest)]">
            Explore
          </a>
          <a href="#vehicles" className="text-sm font-medium text-[var(--color-charcoal-soft)] hover:text-[var(--color-forest)]">
            Vehicles
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-[var(--color-charcoal-soft)] hover:text-[var(--color-forest)]">
            How it works
          </a>
        </nav>
      </div>
      <p className="mx-auto max-w-7xl px-6 pb-8 text-xs text-[var(--color-muted)] sm:px-8 lg:px-10">
        ROAM is a fictional product concept built for the Acdyon Technologies Frontend Challenge. Not a real company or service.
      </p>
    </footer>
  );
}
