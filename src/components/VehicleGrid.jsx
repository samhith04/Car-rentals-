import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { vehicles } from "../data/vehicles";
import VehicleCard from "./VehicleCard";
import VehicleDetails from "./VehicleDetails";

export default function VehicleGrid({ filter }) {
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (!filter || filter === "Any vehicle") return vehicles;
    const matches = vehicles.filter((v) => v.category === filter);
    return matches.length ? matches : vehicles;
  }, [filter]);

  const showFallbackNote = filter && filter !== "Any vehicle" && filtered === vehicles &&
    !vehicles.some((v) => v.category === filter);

  return (
    <section id="vehicles" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
          Find a car that fits the journey.
        </h2>
        <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">
          From everyday city drives to weekend escapes.
        </p>
      </motion.div>

      {showFallbackNote && (
        <p className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory-soft)] px-4 py-3 text-sm text-[var(--color-muted)]">
          No {filter.toLowerCase()} vehicles in this demo fleet yet — here's what's available in Hyderabad.
        </p>
      )}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} onViewDetails={setSelected} />
        ))}
      </div>

      <VehicleDetails vehicle={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
