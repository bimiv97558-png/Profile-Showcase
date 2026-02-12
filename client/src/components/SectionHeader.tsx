import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: "left" | "center";
}

export function SectionHeader({ title, subtitle, alignment = "center" }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignment === "center" ? "text-center" : "text-left"} max-w-3xl mx-auto`}
    >
      <span className="text-primary font-mono text-sm tracking-wider uppercase font-semibold mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </h2>
    </motion.div>
  );
}
