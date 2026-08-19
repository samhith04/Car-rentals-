import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--color-ivory)] pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)]">
            ROAM
          </p>
          <h1 className="text-[38px] leading-[1.05] font-extrabold tracking-tight text-[var(--color-charcoal)] sm:text-[52px] lg:text-[68px] xl:text-[76px]">
            Your next drive
            <br />
            starts here.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Find the right car for your journey, without the rental hassle.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-forest)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-forest-dark)]"
            >
              Find a car
              <ArrowRight size={16} />
            </a>
            <a
              href="#vehicles"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-charcoal)] transition-colors hover:border-[var(--color-forest)]"
            >
              Explore vehicles
            </a>
          </div>

          <p className="mt-10 max-w-sm text-sm text-[var(--color-muted)]">
            Find the right car for every journey, without the rental hassle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[var(--color-border)] shadow-[0_30px_60px_-25px_rgba(28,26,22,0.35)] sm:aspect-[5/4]">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
              alt="A car driving along an open coastal road, representing the ROAM driving experience"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-4 shadow-lg sm:block"
          >
            <p className="text-xs font-medium text-[var(--color-muted)]">Pickup in</p>
            <p className="text-sm font-semibold text-[var(--color-charcoal)]">Hyderabad, today</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
