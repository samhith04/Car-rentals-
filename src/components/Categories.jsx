import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/vehicles";

export default function Categories() {
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
          A car for every kind of trip.
        </h2>
        <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">
          Browse by the journey you have in mind.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.a
            key={cat.id}
            href="#vehicles"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--color-border)]"
          >
            <img
              src={cat.image}
              alt={`${cat.label} category vehicles`}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
              <div>
                <p className="text-lg font-bold text-white transition-colors group-hover:text-[var(--color-ivory)]">
                  {cat.label}
                </p>
                <p className="mt-1 text-xs font-medium text-white/75">{cat.description}</p>
              </div>
              <span className="flex h-9 w-9 shrink-0 translate-x-2 items-center justify-center rounded-full bg-white/0 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:bg-white/20 group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
