import { motion } from "framer-motion";
import { Users, Cog, Fuel } from "lucide-react";

export default function VehicleCard({ vehicle, onViewDetails }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] transition-shadow hover:shadow-[0_20px_45px_-28px_rgba(28,26,22,0.45)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.name}, a ${vehicle.category.toLowerCase()} available on ROAM`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-charcoal)] backdrop-blur-sm">
          {vehicle.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-[var(--color-charcoal)]">{vehicle.name}</h3>
          <p className="whitespace-nowrap text-right text-sm font-semibold text-[var(--color-forest)]">
            ₹{vehicle.price.toLocaleString("en-IN")}
            <span className="block text-xs font-medium text-[var(--color-muted)]">/ day</span>
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[var(--color-muted)]">
          <span className="flex items-center gap-1.5">
            <Users size={14} /> {vehicle.seats} seats
          </span>
          <span className="flex items-center gap-1.5">
            <Cog size={14} /> {vehicle.transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel size={14} /> {vehicle.fuel}
          </span>
        </div>

        <button
          onClick={() => onViewDetails(vehicle)}
          className="mt-5 inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-white py-2.5 text-sm font-semibold text-[var(--color-charcoal)] transition-colors hover:border-[var(--color-forest)] hover:text-[var(--color-forest)]"
        >
          View details
        </button>
      </div>
    </motion.article>
  );
}
