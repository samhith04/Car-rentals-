import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Cog, Fuel, Check } from "lucide-react";

const RECOMMENDED = {
  name: "Kia Seltos",
  price: 2800,
  seats: 5,
  transmission: "Automatic",
  fuel: "Petrol",
  image:
    "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1000&auto=format&fit=crop",
};

const DAYS = 3;

export default function ProductShowcase() {
  const [selected, setSelected] = useState(true);
  const total = RECOMMENDED.price * DAYS;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
          Everything you need before you hit the road.
        </h2>
        <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">
          A closer look at the ROAM search-and-select experience, shown here with demo data.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-12 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_30px_70px_-35px_rgba(28,26,22,0.4)]"
      >
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-ivory-soft)] px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border)]" />
          <span className="ml-3 text-xs font-semibold tracking-wide text-[var(--color-muted)]">
            ROAM — Search results
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] pb-6">
            <div className="flex items-center gap-2 text-lg font-bold text-[var(--color-charcoal)]">
              <span>Hyderabad</span>
              <ArrowRight size={18} className="text-[var(--color-muted)]" />
              <span>Goa</span>
            </div>
            <span className="rounded-full bg-[var(--color-ivory-soft)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-charcoal-soft)]">
              22 Aug — 25 Aug
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                Recommended for you
              </p>

              <div className="mt-4 flex flex-col gap-5 rounded-2xl border border-[var(--color-border)] p-4 sm:flex-row sm:items-center">
                <img
                  src={RECOMMENDED.image}
                  alt="Kia Seltos, the recommended vehicle for this demo trip"
                  className="h-40 w-full rounded-xl object-cover sm:h-28 sm:w-40"
                />
                <div className="flex flex-1 flex-col gap-2">
                  <p className="text-base font-bold text-[var(--color-charcoal)]">{RECOMMENDED.name}</p>
                  <p className="text-sm font-semibold text-[var(--color-forest)]">
                    ₹{RECOMMENDED.price.toLocaleString("en-IN")}
                    <span className="font-medium text-[var(--color-muted)]">/day</span>
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-[var(--color-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Cog size={13} /> {RECOMMENDED.transmission}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={13} /> {RECOMMENDED.seats} seats
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Fuel size={13} /> {RECOMMENDED.fuel}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected((v) => !v)}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors sm:self-center ${
                    selected
                      ? "bg-[var(--color-forest)] text-white"
                      : "border border-[var(--color-border)] bg-white text-[var(--color-charcoal)] hover:border-[var(--color-forest)]"
                  }`}
                >
                  {selected && <Check size={15} />}
                  {selected ? "Selected" : "Select"}
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--color-ivory-soft)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                Trip summary
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[var(--color-muted)]">Duration</dt>
                  <dd className="font-medium text-[var(--color-charcoal)]">{DAYS} days</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-muted)]">Vehicle</dt>
                  <dd className="font-medium text-[var(--color-charcoal)]">
                    {selected ? RECOMMENDED.name : "Not selected"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="flex items-center gap-1.5 text-[var(--color-muted)]">
                    <MapPin size={13} /> Pickup
                  </dt>
                  <dd className="font-medium text-[var(--color-charcoal)]">Hyderabad</dd>
                </div>
                <div className="flex justify-between border-t border-[var(--color-border)] pt-3">
                  <dt className="font-semibold text-[var(--color-charcoal)]">Total</dt>
                  <dd className="font-bold text-[var(--color-forest)]">
                    {selected ? `₹${total.toLocaleString("en-IN")}` : "—"}
                  </dd>
                </div>
              </dl>

              <button
                disabled={!selected}
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-forest)] py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-forest-dark)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
