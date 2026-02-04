import { motion } from "framer-motion";
import { useState } from "react";
import {
  LayoutDashboard,
  ChefHat,
  UserCheck,
  Users,
  QrCode,
  Receipt,
  BarChart3,
  Package,
  Clock,
  Car,
  Megaphone,
  MessageSquare,
  Wallet,
  Globe,
  Shield,
  Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const panels = [
  {
    id: "manager",
    name: "Store Manager",
    icon: LayoutDashboard,
    description: "Complete control over restaurant operations",
    features: [
      { icon: Receipt, title: "POS & Billing", description: "Multi-mode payments with discounts, GST, and partial payment support" },
      { icon: Package, title: "Inventory Management", description: "Track stock levels, expenses, and get low-stock alerts" },
      { icon: Users, title: "Staff Management", description: "Manage profiles, attendance, payroll, and shift tracking" },
      { icon: BarChart3, title: "Smart Analytics", description: "Revenue, profit, top dishes, peak hours, and customer insights" },
      { icon: Megaphone, title: "Promotions", description: "Create custom offers, auto-generate PDFs, and email to customers" },
      { icon: Car, title: "Valet Parking", description: "Car tokens, email notifications, and return tracking" },
    ],
  },
  {
    id: "chef",
    name: "Chef Panel",
    icon: ChefHat,
    description: "Real-time kitchen order management",
    features: [
      { icon: Clock, title: "Live Order Dashboard", description: "Real-time orders with status filters and search" },
      { icon: BarChart3, title: "Preparation Timer", description: "Track time since order accepted or started" },
      { icon: UserCheck, title: "Status Management", description: "Accept, mark as preparing, and serve orders" },
      { icon: Receipt, title: "Order Details", description: "Item list with quantity, waiter name, and table info" },
      { icon: LayoutDashboard, title: "Visual Feedback", description: "Color-coded status for quick recognition" },
      { icon: Shield, title: "Access Control", description: "Plan-based feature access with protected routes" },
    ],
  },
  {
    id: "waiter",
    name: "Waiter Panel",
    icon: UserCheck,
    description: "Efficient table and order management",
    features: [
      { icon: LayoutDashboard, title: "Table Assignment", description: "View assigned tables with status and active orders" },
      { icon: Receipt, title: "Order Placement", description: "Browse menu, add to cart, and send to kitchen" },
      { icon: Clock, title: "Order Tracking", description: "Track order status from pending to served" },
      { icon: MessageSquare, title: "Call Notifications", description: "Instant alerts when guests need assistance" },
      { icon: Wallet, title: "Billing Access", description: "Quick access to billing summary for orders" },
      { icon: Users, title: "Order History", description: "View past orders for reference and transparency" },
    ],
  },
  {
    id: "guest",
    name: "Guest Features",
    icon: Smartphone,
    description: "Seamless contactless dining experience",
    features: [
      { icon: QrCode, title: "QR Menu Access", description: "Scan, browse categories, and view item details" },
      { icon: Receipt, title: "Self-Ordering", description: "Add to cart, checkout, and place dine-in orders" },
      { icon: Clock, title: "Order Tracking", description: "Real-time updates on order preparation status" },
      { icon: MessageSquare, title: "Feedback & Polls", description: "Submit feedback and vote on active polls" },
      { icon: Wallet, title: "Digital Tipping", description: "Add tips with waiter recognition option" },
      { icon: Globe, title: "Multi-Language", description: "Support for English, Hindi, and Gujarati" },
    ],
  },
];

const Features = () => {
  const [activePanel, setActivePanel] = useState("manager");

  const currentPanel = panels.find((p) => p.id === activePanel) || panels[0];

  return (
    <section id="features" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Manage Your Restaurant</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Role-based panels designed for every team member. From management to kitchen to service.
          </p>
        </motion.div>

        {/* Panel Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {panels.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanel(panel.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                activePanel === panel.id
                  ? "bg-accent-gradient text-accent-foreground shadow-lg glow-accent"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 shadow-card"
              )}
            >
              <panel.icon className="w-5 h-5" />
              {panel.name}
            </button>
          ))}
        </motion.div>

        {/* Panel Content */}
        <motion.div
          key={activePanel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center">
              <currentPanel.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{currentPanel.name}</h3>
              <p className="text-muted-foreground">{currentPanel.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPanel.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
