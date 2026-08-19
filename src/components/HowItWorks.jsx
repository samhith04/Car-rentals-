import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Choose your ride",
    description: "Browse vehicles that fit your trip.",
  },
  {
    number: "02",
    title: "Set your journey",
    description: "Choose your pickup location and dates.",
  },
  {
    number: "03",
    title: "Hit the road",
    description: "Confirm your choice and get moving.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[var(--color-ivory-soft)] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-[var(--color-charcoal)] sm:text-4xl"
        >
          How it works
        </motion.h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-border)] md:block" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative"
            >
              <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-ivory-soft)] text-sm font-bold text-[var(--color-forest)]">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-bold text-[var(--color-charcoal)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
