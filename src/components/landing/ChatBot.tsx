"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  time: string;
}

const quickReplies = [
  "Vad kostar MarketFlow?",
  "Hur fungerar Google Ads-spårningen?",
  "Kan jag testa gratis?",
  "Vilka integrationer finns?",
];

function getAutoReply(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("pris") || lower.includes("kost") || lower.includes("betala")) {
    return "MarketFlow har en gratis 7-dagars trial utan kort. Efter det kostar Pro-planen bara 99 kr/mån per användare (ordinarie 149 kr). Vi har även en Enterprise-plan med custom pricing. Vill du veta mer?";
  }
  if (lower.includes("google ads") || lower.includes("annons")) {
    return "Med vår Google Ads-integration kan du spåra dagliga budgetar, utgifter, klick, visningar och konverteringar per kund — allt i realtid direkt i CRM:et. Du kopplar enkelt kundens Google Ads-konto via Customer ID.";
  }
  if (lower.includes("gratis") || lower.includes("trial") || lower.includes("testa")) {
    return "Ja! Du kan testa alla funktioner gratis i 7 dagar utan att ange kreditkort. Klicka på 'Starta gratis provperiod' för att komma igång direkt.";
  }
  if (lower.includes("integration") || lower.includes("koppl")) {
    return "MarketFlow integrerar med Google Ads, Meta Ads (Facebook & Instagram), Supabase, SEO-verktyg och webbanalys. Vi har även ett REST API för custom-integrationer. Webbanalys och API kommer snart!";
  }
  if (lower.includes("seo")) {
    return "Våra inbyggda SEO-verktyg inkluderar keyword-spårning, ranking-rapporter, tekniska audits och konkurrentanalys. Allt kopplat direkt till respektive kund i CRM:et.";
  }
  if (lower.includes("meta") || lower.includes("facebook") || lower.includes("instagram")) {
    return "Med Meta Ads-integrationen kan du hantera Facebook- och Instagram-annonser. Övervaka räckvidd, engagemang och ROAS per kund direkt i MarketFlow.";
  }
  if (lower.includes("hej") || lower.includes("hallå") || lower.includes("tjena")) {
    return "Hej! Välkommen till MarketFlow. Jag hjälper dig gärna med frågor om vår CRM-plattform. Vad vill du veta mer om?";
  }
  if (lower.includes("kontakt") || lower.includes("support") || lower.includes("hjälp")) {
    return "Du kan nå oss via e-post på support@marketflow.se eller direkt här i chatten. Vi svarar vanligtvis inom ett par timmar. Vad kan jag hjälpa dig med?";
  }
  if (lower.includes("funktion") || lower.includes("feature")) {
    return "MarketFlow inkluderar: kundhantering, projekthantering med uppgifter och deadlines, Google Ads-spårning, tidloggning, automationer och rapporter. Allt på svenska och engelska!";
  }

  return "Tack för ditt meddelande! Jag är en AI-assistent och kan svara på frågor om MarketFlow. Fråga gärna om priser, funktioner, integrationer eller hur du kommer igång. Vill du prata med en riktig person? Skriv 'kontakt' så hjälper jag dig.";
}

function formatTime() {
  return new Date().toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hej! Jag är MarketFlow AI. Hur kan jag hjälpa dig idag?",
      time: formatTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
      time: formatTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: getAutoReply(text),
        time: formatTime(),
      };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
    }, 800 + Math.random() * 1200);
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,95,255,0.35)] hover:scale-105 transition-transform duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            {/* Notification dot */}
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.4)]">
              <span className="text-[8px] font-bold text-white">1</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-120px)] bg-card border border-white/[0.08] rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(124,95,255,0.08)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/20 border border-primary/30 rounded-[10px] flex items-center justify-center shadow-[0_0_12px_rgba(124,95,255,0.15)]">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-foreground font-[family-name:var(--font-heading)]">
                    MarketFlow AI
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                    <span className="text-[11px] text-muted-foreground">Online nu</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      msg.role === "bot"
                        ? "bg-foreground text-background"
                        : "bg-primary text-white"
                    }`}
                  >
                    {msg.role === "bot" ? (
                      <Bot className="w-3.5 h-3.5" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
                      msg.role === "bot"
                        ? "bg-white/[0.04] text-foreground/80 rounded-tl-md border border-white/[0.06]"
                        : "bg-primary/20 text-foreground/90 rounded-tr-md border border-primary/20"
                    }`}
                  >
                    <p className="text-[13px] leading-[1.6]">{msg.text}</p>
                    <p
                      className={`text-[10px] mt-1.5 ${
                        msg.role === "bot" ? "text-muted-foreground" : "text-background/50"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-background" />
                  </div>
                  <div className="bg-secondary/80 px-4 py-3 rounded-2xl rounded-tl-md">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex gap-2 flex-wrap">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 hover:bg-white/[0.06] hover:text-white/60 transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/[0.06] bg-white/[0.01]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Skriv ett meddelande..."
                  className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-2.5 text-[13px] text-foreground placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-20 disabled:cursor-not-allowed shadow-[0_0_16px_rgba(124,95,255,0.2)]"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
