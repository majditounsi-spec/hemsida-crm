"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Zap,
  ArrowRight,
  Bell,
  Mail,
  FileText,
  UserPlus,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Send,
} from "lucide-react";

const automations = [
  {
    trigger: { icon: UserPlus, label: "Ny kund skapas", color: "text-blue-400" },
    steps: [
      { icon: Mail, label: "Välkomstmail skickas", delay: 0.8 },
      { icon: FileText, label: "Projekt skapas", delay: 1.4 },
      { icon: Bell, label: "Team notifieras i Slack", delay: 2.0 },
    ],
  },
  {
    trigger: { icon: DollarSign, label: "Budget > 80%", color: "text-amber-400" },
    steps: [
      { icon: AlertTriangle, label: "Varning skapas", delay: 0.8 },
      { icon: Mail, label: "Projektledare meddelas", delay: 1.4 },
      { icon: FileText, label: "Rapport genereras", delay: 2.0 },
    ],
  },
  {
    trigger: { icon: Clock, label: "3 dagar till deadline", color: "text-rose-400" },
    steps: [
      { icon: Bell, label: "Push-notis till teamet", delay: 0.8 },
      { icon: Send, label: "Statusuppdatering till kund", delay: 1.4 },
      { icon: CheckCircle2, label: "Uppföljning schemaläggs", delay: 2.0 },
    ],
  },
];

function AutomationFlow({ automation, isActive }: { automation: typeof automations[0]; isActive: boolean }) {
  return (
    <div className="relative">
      {/* Trigger */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-12 h-12 rounded-[14px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center relative">
          <automation.trigger.icon className={`w-5 h-5 ${automation.trigger.color}`} />
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-[14px] border-2 border-primary/40"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </div>
        <div>
          <p className="text-[10px] text-white/20 uppercase tracking-wider font-medium">Trigger</p>
          <p className="text-[14px] font-medium text-foreground/80">{automation.trigger.label}</p>
        </div>
      </motion.div>

      {/* Steps */}
      <div className="ml-6 pl-6 border-l border-white/[0.06] space-y-4">
        {automation.steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -10 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.3, x: 0 }}
            transition={{ duration: 0.4, delay: isActive ? step.delay : 0 }}
            className="flex items-center gap-3 relative"
          >
            {/* Connector dot */}
            <div className="absolute -left-[30.5px] w-3 h-3 rounded-full bg-card border-2 border-white/[0.08]">
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: step.delay }}
                />
              )}
            </div>

            <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] rounded-[12px] px-4 py-3 flex-1">
              <motion.div
                initial={{ rotate: 0 }}
                animate={isActive ? { rotate: [0, -10, 10, 0] } : {}}
                transition={{ duration: 0.4, delay: step.delay + 0.2 }}
              >
                <step.icon className="w-4 h-4 text-white/30" />
              </motion.div>
              <span className="text-[13px] text-white/50">{step.label}</span>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: step.delay + 0.4 }}
                  className="ml-auto"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400/60" />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Completion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 2.6 }}
        className="ml-6 pl-6 mt-4"
      >
        <div className="flex items-center gap-2 text-[12px] text-emerald-400/40">
          <Zap className="w-3.5 h-3.5" />
          <span>Automation klar — 0.3s</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function AutomationDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % automations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-semibold text-primary/70 uppercase tracking-[0.15em] mb-4">
            Automationer
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            Sätt det på autopilot.
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground max-w-[500px] mx-auto">
            Skapa regler som jobbar medan du sover. Triggers, actions och notifieringar — helt automatiskt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — selector */}
          <div className="space-y-3">
            {automations.map((auto, i) => (
              <motion.button
                key={auto.trigger.label}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-5 rounded-[16px] border transition-all duration-500 ${
                  activeIndex === i
                    ? "bg-primary/[0.06] border-primary/20 shadow-[0_0_30px_rgba(124,95,255,0.06)]"
                    : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03]"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-[11px] flex items-center justify-center ${
                    activeIndex === i ? "bg-primary/15 border border-primary/25" : "bg-white/[0.04] border border-white/[0.06]"
                  }`}>
                    <auto.trigger.icon className={`w-[18px] h-[18px] ${
                      activeIndex === i ? auto.trigger.color : "text-white/25"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-[14px] font-medium ${activeIndex === i ? "text-foreground/90" : "text-white/40"}`}>
                      {auto.trigger.label}
                    </p>
                    <p className="text-[11px] text-white/15 mt-0.5">
                      {auto.steps.length} steg · automatiskt
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                    activeIndex === i ? "text-primary/50 translate-x-0" : "text-white/10 -translate-x-1"
                  }`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right — animated flow */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-[20px] p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <AutomationFlow
                  automation={automations[activeIndex]}
                  isActive={isInView}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

