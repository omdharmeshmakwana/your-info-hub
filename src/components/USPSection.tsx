import { motion } from "framer-motion";
import {
  LayoutDashboard,
  WifiOff,
  MonitorPlay,
} from "lucide-react";

const usps = [
  {
    icon: LayoutDashboard,
    title: "Unified Interface",
    description: "Manage tables, inventory, and billing from one single dashboard — no switching between apps.",
  },
  {
    icon: WifiOff,
    title: "Offline Resilience",
    description: "Reliable operations designed for the \"Bharat\" market — keeps working even with unstable internet.",
  },
  {
    icon: MonitorPlay,
    title: "Quick Demo Login",
    description: "Allow potential clients to experience role-specific dashboards instantly — no setup required.",
  },
];

const USPSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory-50 via-cream-50 to-warm-50 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(35_50%_65%_/_0.08),_transparent_60%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Why DineInnPro?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Competitive <span className="text-gradient">Advantages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The edge that sets DineInnPro apart — built for modern Indian dining, from metro to Bharat.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border-2 border-ivory-200 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <usp.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{usp.title}</h3>
              <p className="text-muted-foreground">{usp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
