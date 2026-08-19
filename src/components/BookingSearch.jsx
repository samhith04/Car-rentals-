import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, Car, Search } from "lucide-react";
import { locations, vehicleTypes } from "../data/vehicles";

function formatShort(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { day: "2-digit", month: "short" });
}

export default function BookingSearch({ onSearch }) {
  const [location, setLocation] = useState("Hyderabad");
  const [pickupDate, setPickupDate] = useState("2026-08-22");
  const [returnDate, setReturnDate] = useState("2026-08-25");
  const [vehicleType, setVehicleType] = useState("Any vehicle");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ location, pickupDate, returnDate, vehicleType });
    document.getElementById("vehicles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="booking" className="relative z-10 mx-auto -mt-4 max-w-6xl px-6 sm:px-8 lg:px-10">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 gap-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_24px_50px_-30px_rgba(28,26,22,0.4)] sm:p-8 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1fr_auto] lg:items-end lg:gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="pickup-location" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            <MapPin size={14} /> Pick-up location
          </label>
          <select
            id="pickup-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-xl border border-[var(--color-border)] bg-white px-3.5 py-3 text-sm font-medium text-[var(--color-charcoal)] outline-none transition-colors focus:border-[var(--color-forest)]"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="pickup-date" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            <CalendarDays size={14} /> Dates
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-3.5 py-3">
            <input
              id="pickup-date"
              type="date"
              aria-label="Pickup date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-[var(--color-charcoal)] outline-none [color-scheme:light]"
            />
            <span className="text-[var(--color-muted)]">—</span>
            <input
              type="date"
              aria-label="Return date"
              value={returnDate}
              min={pickupDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-[var(--color-charcoal)] outline-none [color-scheme:light]"
            />
          </div>
          <p className="text-xs text-[var(--color-muted)]">
            {formatShort(pickupDate)} — {formatShort(returnDate)}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="vehicle-type" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            <Car size={14} /> Vehicle type
          </label>
          <select
            id="vehicle-type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="rounded-xl border border-[var(--color-border)] bg-white px-3.5 py-3 text-sm font-medium text-[var(--color-charcoal)] outline-none transition-colors focus:border-[var(--color-forest)]"
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
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-forest)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-forest-dark)] lg:h-[46px]"
        >
          <Search size={16} />
          Find a car
        </button>
      </motion.form>
    </section>
  );
}
