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
  Crown,
  CreditCard,
  FileText,
  Bell,
  Heart,
  Lock,
  Languages,
  Leaf,
  PieChart,
  Gift,
  Star,
  ClipboardList,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { cn } from "@/lib/utils";

const panels = [
  {
    id: "owner",
    name: "Owner",
    icon: Crown,
    description: "Complete business oversight and control",
    features: [
      { icon: PieChart, title: "Revenue & Profit Analytics", description: "Track revenue, profit margins, top dishes, and peak hours" },
      { icon: Users, title: "Multi-Location Management", description: "Manage multiple restaurant branches from one dashboard" },
      { icon: BarChart3, title: "Customer Insights", description: "Understand returning vs new customers, loyalty trends" },
      { icon: FileText, title: "Exportable Reports", description: "Generate and export detailed business reports" },
      { icon: Shield, title: "Role-Based Access Control", description: "Define permissions for each staff role and plan" },
      { icon: Gift, title: "Customer Engagement Tools", description: "Loyalty programs, feedback sentiment analysis" },
    ],
  },
  {
    id: "manager",
    name: "Store Manager",
    icon: LayoutDashboard,
    description: "Complete control over daily restaurant operations",
    features: [
      { icon: Receipt, title: "POS & Smart Billing", description: "Dine-in, delivery & pickup with GST, discounts, cash, card, UPI, partial payments" },
      { icon: Package, title: "Inventory & Expense Management", description: "Track stock levels, low-stock alerts, and exportable reports" },
      { icon: Users, title: "Staff Management", description: "Profiles, attendance tracking, payroll, and shift management" },
      { icon: BarChart3, title: "Reports & Analytics", description: "Revenue, profit, top dishes, peak hours, customer insights" },
      { icon: Megaphone, title: "Promotions & Offers", description: "Create custom discounts and auto-generate offer PDFs" },
      { icon: Car, title: "Valet Parking System", description: "Car tokens, email notifications, and return tracking" },
    ],
  },
  {
    id: "chef",
    name: "Chef Panel",
    icon: ChefHat,
    description: "Real-time kitchen order management",
    features: [
      { icon: ClipboardList, title: "Kitchen Order Tickets (KOT)", description: "Seamless kitchen updates with live order integration" },
      { icon: Clock, title: "Preparation Timer", description: "Track time since order accepted or started cooking" },
      { icon: UserCheck, title: "Status Management", description: "Accept, mark as preparing, and serve orders" },
      { icon: Receipt, title: "Order Details", description: "Item list with quantity, waiter name, and table info" },
      { icon: Bell, title: "Real-time Notifications", description: "Instant alerts for new orders and updates" },
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
      { icon: Receipt, title: "Order Placement", description: "Browse menu, add to cart, and send to kitchen instantly" },
      { icon: Clock, title: "Live Order Tracking", description: "Track order status from pending to served in real-time" },
      { icon: Bell, title: "Guest Call Notifications", description: "Instant alerts when guests need assistance" },
      { icon: Wallet, title: "Billing Access", description: "Quick access to billing summary for orders" },
      { icon: Star, title: "Tips & Recognition", description: "Receive digital tips with staff acknowledgment" },
    ],
  },
  {
    id: "guest",
    name: "Guest Features",
    icon: Smartphone,
    description: "Seamless contactless dining experience",
    features: [
      { icon: QrCode, title: "QR Menu & Self-Ordering", description: "Scan, browse categories, add to cart, and checkout" },
      { icon: Clock, title: "Live Order Tracking", description: "Real-time updates on order preparation status" },
      { icon: MessageSquare, title: "Feedback & Polls", description: "Submit feedback and vote on active polls" },
      { icon: Wallet, title: "Digital Payments & Tipping", description: "Pay online with digital tipping option" },
      { icon: Globe, title: "Multi-Language Support", description: "English, Hindi, and Gujarati language options" },
      { icon: Leaf, title: "Paperless Experience", description: "Digital bills, QR ordering, zero paper waste" },
    ],
  },
];

const allFeatures = [
  { icon: Users, title: "Multiple Role-Based Panels", description: "Owner, Store Manager, Chef, Waiter, Guest access" },
  { icon: UtensilsCrossed, title: "Digital Menu Management", description: "Categories, images & QR-based access" },
  { icon: QrCode, title: "Guest Ordering System", description: "Scan, browse, add to cart, checkout" },
  { icon: Receipt, title: "Point of Sale (POS)", description: "Dine-in, delivery & pickup order types" },
  { icon: CreditCard, title: "Smart Billing & Payments", description: "Discounts, GST, cash, card, UPI, partial" },
  { icon: ClipboardList, title: "Kitchen Order Ticket (KOT)", description: "Seamless kitchen updates integration" },
  { icon: Clock, title: "Order Tracking", description: "Live status updates across all roles" },
  { icon: Package, title: "Inventory & Expense", description: "Low-stock alerts and exportable reports" },
  { icon: Users, title: "Staff Management", description: "Profiles, attendance, payroll, shifts" },
  { icon: Car, title: "Valet Parking System", description: "Car tokens, notifications, tracking" },
  { icon: Megaphone, title: "Promotions & Offers", description: "Custom discounts, auto-generate PDFs" },
  { icon: MessageSquare, title: "Feedback & Polls", description: "Guest insights and quick opinions" },
  { icon: Heart, title: "Tips & Recognition", description: "Digital tipping with staff acknowledgment" },
  { icon: BarChart3, title: "Reports & Analytics", description: "Revenue, profit, top dishes, peak hours" },
  { icon: Gift, title: "Customer Engagement", description: "Offers, loyalty, feedback sentiment" },
  { icon: Lock, title: "Role-Based Security", description: "Login, password recovery, plan control" },
  { icon: Languages, title: "Multi-language Support", description: "English, Hindi, Gujarati" },
  { icon: Leaf, title: "Paperless Operations", description: "QR ordering, digital bills, online payments" },
];

const Features = () => {
  const [activePanel, setActivePanel] = useState("owner");

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
            What It Offers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Key Capabilities to{" "}
            <span className="text-gradient">Streamline Operations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Role-based panels designed for every team member. From ownership to kitchen to service.
          </p>
        </motion.div>

        {/* All Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {allFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="bg-card rounded-xl p-4 shadow-card hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Panel Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
