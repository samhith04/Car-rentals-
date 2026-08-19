import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { locations, vehicleTypes } from "../data/vehicles";

export default function TripPlanner() {
  const [from, setFrom] = useState("Hyderabad");
  const [to, setTo] = useState("Goa");
  const [vehicleType, setVehicleType] = useState("SUV");
  const [result, setResult] = useState(null);

  const handlePlan = (e) => {
    e.preventDefault();
    setResult(`Perfect. We found 8 demo vehicles for your trip from ${from} to ${to}.`);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 gap-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
            Planning a weekend escape?
          </h2>
          <p className="mt-3 max-w-sm text-base text-[var(--color-muted)]">
            Sketch out a longer trip and see what fits, using ROAM's demo trip planner.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handlePlan}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="trip-from" className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                From
              </label>
              <select
                id="trip-from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="rounded-xl border border-[var(--color-border)] bg-white px-3.5 py-3 text-sm font-medium text-[var(--color-charcoal)] outline-none focus:border-[var(--color-forest)]"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="trip-to" className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                To
              </label>
              <select
                id="trip-to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="rounded-xl border border-[var(--color-border)] bg-white px-3.5 py-3 text-sm font-medium text-[var(--color-charcoal)] outline-none focus:border-[var(--color-forest)]"
              >
                {["Goa", ...locations.filter((l) => l !== "Goa")].map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              Dates
            </span>
            <div className="rounded-xl border border-[var(--color-border)] bg-white px-3.5 py-3 text-sm font-medium text-[var(--color-charcoal)]">
              22 Aug — 25 Aug
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="trip-vehicle" className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              Vehicle
            </label>
            <select
              id="trip-vehicle"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="rounded-xl border border-[var(--color-border)] bg-white px-3.5 py-3 text-sm font-medium text-[var(--color-charcoal)] outline-none focus:border-[var(--color-forest)]"
            >
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-forest)] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-forest-dark)]"
          >
            Plan my drive
          </button>

          <AnimatePresence>
            {result && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-start gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory-soft)] px-4 py-3 text-sm text-[var(--color-charcoal-soft)]"
              >
                <Sparkles size={16} className="mt-0.5 shrink-0 text-[var(--color-forest)]" />
                {result}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
