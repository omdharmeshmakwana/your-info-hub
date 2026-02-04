import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "Empower restaurants with smart, seamless, and scalable technology to streamline operations.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To become the global leader in restaurant management solutions for the digital age.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Innovation, reliability, customer-first approach, and continuous improvement in everything we do.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built by Restaurant{" "}
              <span className="text-gradient">Enthusiasts</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              DineInnPro is an advanced restaurant management solution designed to empower 
              restaurants with smart, seamless, and scalable technology. It replaces manual 
              processes with an all-digital, real-time platform for menu, orders, billing, 
              staff, inventory, and more — making restaurant operations smoother, faster, 
              and paper-free.
            </p>

            {/* Company Info */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Founded</p>
                  <p className="font-semibold text-foreground">2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                  <p className="font-semibold text-foreground">Mumbai, MH</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Founders</p>
                  <p className="font-semibold text-foreground">2 Co-founders</p>
                </div>
              </div>
            </div>

            {/* Founders */}
            <div className="p-6 rounded-xl bg-card shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Meet the Founders</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center text-accent-foreground font-bold">
                    OM
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Om Makwana</p>
                    <p className="text-sm text-muted-foreground">Co-Founder</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center text-accent-foreground font-bold">
                    DG
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Dhruv Gothi</p>
                    <p className="text-sm text-muted-foreground">Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-xl bg-card shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Version Badge */}
            <div className="p-6 rounded-xl bg-hero-gradient text-center">
              <p className="text-primary-foreground/70 text-sm mb-1">Current Version</p>
              <p className="text-3xl font-bold text-primary-foreground">1.0</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Released August 2025</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
