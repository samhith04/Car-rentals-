import { motion } from "framer-motion";
import { MapPinned, FileSearch, MousePointerClick, Route } from "lucide-react";

const FEATURES = [
  {
    icon: MapPinned,
    title: "Flexible pickup",
    description: "Choose a convenient pickup location.",
    variant: "dark",
    span: "lg:col-span-7",
  },
  {
    icon: FileSearch,
    title: "Clear vehicle details",
    description: "Know what you're getting before you book.",
    variant: "light",
    span: "lg:col-span-5",
  },
  {
    icon: MousePointerClick,
    title: "Simple booking",
    description: "A straightforward experience from search to selection.",
    variant: "light",
    span: "lg:col-span-5",
  },
  {
    icon: Route,
    title: "Trip-ready information",
    description: "See vehicle details and journey information in one place.",
    variant: "outline",
    span: "lg:col-span-7",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl text-3xl font-extrabold tracking-tight text-[var(--color-charcoal)] sm:text-4xl"
      >
        Built around the way you actually travel.
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          const base = "rounded-2xl p-7 flex flex-col justify-between min-h-[190px]";
          const styles =
            f.variant === "dark"
              ? "bg-[var(--color-forest)] text-white"
              : f.variant === "outline"
              ? "border border-[var(--color-border)] bg-transparent text-[var(--color-charcoal)]"
              : "border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-charcoal)]";

          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`${base} ${styles} ${f.span}`}
            >
              <Icon size={26} className={f.variant === "dark" ? "text-white" : "text-[var(--color-forest)]"} />
              <div className="mt-8">
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    f.variant === "dark" ? "text-white/80" : "text-[var(--color-muted)]"
                  }`}
                >
                  {f.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
