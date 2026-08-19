import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 rounded-3xl bg-[var(--color-charcoal)] px-8 py-16 text-center sm:py-20"
      >
        <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Ready for the next road?
        </h2>
        <p className="max-w-md text-base text-white/70 sm:text-lg">
          Find a car that fits your journey.
        </p>
        <a
          href="#vehicles"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--color-ivory)] px-7 py-3.5 text-sm font-semibold text-[var(--color-charcoal)] transition-colors hover:bg-white"
        >
          Explore vehicles
          <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
