import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Users, Cog, Fuel, MapPin, CheckCircle2 } from "lucide-react";

function DetailsPanel({ vehicle, onClose }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vehicle-details-title"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      className="grid max-h-[90vh] w-full max-w-2xl grid-cols-1 overflow-y-auto rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-2xl sm:grid-cols-2"
    >
      <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full">
        <img
          src={vehicle.image}
          alt={`${vehicle.name}, a ${vehicle.category.toLowerCase()}`}
          className="h-full w-full object-cover"
        />
        <button
          onClick={onClose}
          aria-label="Close vehicle details"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--color-charcoal)] sm:hidden"
        >
          <X size={18} />
        </button>
      </div>

      <div className="relative flex flex-col p-6 sm:p-7">
        <button
          onClick={onClose}
          aria-label="Close vehicle details"
          className="absolute right-5 top-5 hidden h-9 w-9 items-center justify-center rounded-full text-[var(--color-muted)] transition-colors hover:bg-[var(--color-ivory-soft)] hover:text-[var(--color-charcoal)] sm:flex"
        >
          <X size={18} />
        </button>

        <span className="w-fit rounded-full bg-[var(--color-ivory-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-charcoal-soft)]">
          {vehicle.category}
        </span>
        <h3 id="vehicle-details-title" className="mt-3 text-2xl font-extrabold text-[var(--color-charcoal)]">
          {vehicle.name}
        </h3>
        <p className="mt-1 text-lg font-semibold text-[var(--color-forest)]">
          ₹{vehicle.price.toLocaleString("en-IN")}
          <span className="text-sm font-medium text-[var(--color-muted)]"> / day</span>
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-[var(--color-charcoal-soft)]">
            <Users size={16} className="text-[var(--color-muted)]" />
            <dt className="sr-only">Seats</dt>
            <dd>{vehicle.seats} seats</dd>
          </div>
          <div className="flex items-center gap-2 text-[var(--color-charcoal-soft)]">
            <Cog size={16} className="text-[var(--color-muted)]" />
            <dt className="sr-only">Transmission</dt>
            <dd>{vehicle.transmission}</dd>
          </div>
          <div className="flex items-center gap-2 text-[var(--color-charcoal-soft)]">
            <Fuel size={16} className="text-[var(--color-muted)]" />
            <dt className="sr-only">Fuel</dt>
            <dd>{vehicle.fuel}</dd>
          </div>
          <div className="flex items-center gap-2 text-[var(--color-charcoal-soft)]">
            <MapPin size={16} className="text-[var(--color-muted)]" />
            <dt className="sr-only">Pickup location</dt>
            <dd>{vehicle.location}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm font-medium text-[var(--color-forest)]">{vehicle.availability}</p>

        <div className="mt-auto pt-6">
          {!confirmed ? (
            <button
              onClick={() => setConfirmed(true)}
              className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-forest)] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-forest-dark)]"
            >
              Continue
            </button>
          ) : (
            <div className="flex items-start gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory-soft)] px-4 py-3 text-sm text-[var(--color-charcoal-soft)]">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-forest)]" />
              <span>This is a demo interaction — a real booking flow would continue from here.</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function VehicleDetails({ vehicle, onClose }) {
  useEffect(() => {
    if (!vehicle) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [vehicle, onClose]);

  return (
    <AnimatePresence>
      {vehicle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--color-charcoal)]/50 p-4"
          onClick={onClose}
        >
          <DetailsPanel vehicle={vehicle} onClose={onClose} key={vehicle.id} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
