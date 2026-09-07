"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Cpu,
  CheckCircle2,
  ArrowRight,
  FileText,
  Download,
  BrainCircuit,
  Mail,
  Sparkles,
  Loader2,
  AlertTriangle,
  XCircle,
  Lock,
  GitBranch,
  Search,
} from "lucide-react";

// --- Background ---
const DriftingBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#020502]">
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, 50, 100, 0],
        scale: [1, 1.3, 0.9, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"
    />

    <motion.div
      animate={{
        x: [0, -120, 40, 0],
        y: [0, 80, -40, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[140px]"
    />

    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

// --- Navigation ---
const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 py-5 bg-[#020502]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <BrainCircuit className="text-black w-6 h-6" />
          </div>

          <span className="text-2xl font-black tracking-tighter text-white">
            RTTA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-400 uppercase tracking-widest">
          <button
            onClick={() => scrollTo("how-it-works")}
            className="hover:text-emerald-400 transition-colors"
          >
            How It Works
          </button>

          <button
            onClick={() => scrollTo("coverage")}
            className="hover:text-emerald-400 transition-colors"
          >
            QA Coverage
          </button>

          <button
            onClick={() => scrollTo("roadmap")}
            className="hover:text-emerald-400 transition-colors"
          >
            Roadmap
          </button>

          <button
            onClick={() => scrollTo("demo")}
            className="px-6 py-2.5 bg-emerald-500 text-black rounded-full hover:bg-emerald-400 transition-all font-black shadow-lg shadow-emerald-500/20"
          >
            Try the Agent
          </button>
        </div>
      </div>
    </nav>
  );
};

// --- Main Landing Page ---
export default function LandingPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const triggerAnalysis = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const roadmapPhases = [
    {
      title: "Phase 1: MVP",
      text: "text-emerald-400",
      items: [
        "AI Core Logic",
        "Test Case Generation",
        "CSV Export",
      ],
    },
    {
      title: "Phase 2: Growth",
      text: "text-cyan-400",
      items: [
        "Jira Integration",
        "TestRail Sync",
        "Custom Prompts",
      ],
    },
    {
      title: "Phase 3: Future",
      text: "text-violet-400",
      items: [
        "Visual Figma Analysis",
        "Playwright Export",
        "Self-healing Tests",
      ],
    },
  ];

  const coverageItems = [
    {
      icon: CheckCircle2,
      title: "Positive Scenarios",
      description: "Main successful user flows",
      count: "12",
      iconStyle: "text-emerald-400",
      bgStyle: "bg-emerald-500/10",
      borderStyle: "border-emerald-500/20",
    },
    {
      icon: AlertTriangle,
      title: "Edge Cases",
      description: "Boundary conditions & unusual inputs",
      count: "8",
      iconStyle: "text-yellow-400",
      bgStyle: "bg-yellow-500/10",
      borderStyle: "border-yellow-500/20",
    },
    {
      icon: XCircle,
      title: "Negative Scenarios",
      description: "Invalid actions & failures",
      count: "6",
      iconStyle: "text-red-400",
      bgStyle: "bg-red-500/10",
      borderStyle: "border-red-500/20",
    },
    {
      icon: Lock,
      title: "Permissions",
      description: "Access & authorization checks",
      count: "4",
      iconStyle: "text-blue-400",
      bgStyle: "bg-blue-500/10",
      borderStyle: "border-blue-500/20",
    },
    {
      icon: GitBranch,
      title: "Business Logic",
      description: "Rules, conditions & dependencies",
      count: "7",
      iconStyle: "text-violet-400",
      bgStyle: "bg-violet-500/10",
      borderStyle: "border-violet-500/20",
    },
    {
      icon: Search,
      title: "Missing Requirements",
      description: "Ambiguous or incomplete requirements",
      count: "3",
      iconStyle: "text-orange-400",
      bgStyle: "bg-orange-500/10",
      borderStyle: "border-orange-500/20",
    },
  ];

  return (
    <main className="min-h-screen text-white">
      <DriftingBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto"
        >
          <span className="px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase tracking-[0.3em] mb-8 inline-block">
            Next-Gen Autonomous QA
          </span>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85] drop-shadow-2xl">
            Requirements
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-500">
              Into Results
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 font-medium leading-relaxed">
            The first AI Agent that analyzes User Stories and creates full
            test suites in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                document
                  .getElementById("demo")
                  ?.scrollIntoView({ behavior: "smooth" });

                triggerAnalysis();
              }}
              className="px-9 py-5 bg-emerald-500 text-black rounded-2xl font-black text-lg hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.35)] flex items-center gap-3"
            >
              Generate Test Suite
              <ArrowRight className="w-6 h-6" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-9 py-5 bg-white/5 text-white rounded-2xl font-black text-lg border border-white/10 hover:bg-white/10 transition-all"
            >
              How It Works
            </button>
          </div>
        </motion.div>
      </section>

      {/* Demo */}
      <section id="demo" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#050a05] rounded-[3rem] border border-emerald-500/20 p-7 md:p-12 relative overflow-hidden shadow-2xl">
            {isAnalyzing && (
              <motion.div
                initial={{ top: 0 }}
                animate={{ top: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(52,211,153,1)] z-20"
              />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-none">
                  Interactive
                  <br />

                  <span className="text-emerald-500">
                    Analysis
                  </span>
                </h2>

                <div className="p-7 bg-black/40 rounded-2xl border border-white/5">
                  <p className="text-emerald-400 font-mono text-sm mb-3 tracking-tighter uppercase font-black">
                    Requirement.txt
                  </p>

                  <p className="text-zinc-300 text-base md:text-lg italic leading-relaxed">
                    "As a premium subscriber, I want to download invoices so
                    that I can manage my accounting manually..."
                  </p>
                </div>

                <button
                  onClick={triggerAnalysis}
                  className="w-full py-5 bg-emerald-500 text-black rounded-2xl font-black text-lg hover:bg-emerald-400 flex items-center justify-center gap-3 transition-all"
                >
                  {isAnalyzing ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}

                  {isAnalyzing
                    ? "Analyzing Business Logic..."
                    : "Re-Scan Requirement"}
                </button>
              </div>

              <div className="bg-zinc-900/80 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-inner">
                <div className="p-5 bg-white/5 flex justify-between border-b border-white/5 items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>

                </div>

                <div className="p-7 space-y-3">
                  <AnimatePresence mode="wait">
                    {isAnalyzing ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3"
                      >
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-11 bg-white/5 rounded-xl animate-pulse"
                          />
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                          <span className="font-bold text-white">
                            TC-001 Verify Invoice PDF
                          </span>

                          <span className="text-emerald-400 font-black">
                            Positive
                          </span>
                        </div>

                        <div className="flex justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                          <span className="font-bold text-white">
                            TC-002 Download without Access
                          </span>

                          <span className="text-red-400 font-black">
                            Negative
                          </span>
                        </div>

                        <div className="flex justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                          <span className="font-bold text-white">
                            TC-003 Large File Timeout
                          </span>

                          <span className="text-blue-400 font-black">
                            Edge
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QA Coverage */}
      <section id="coverage" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.3em]">
              AI QA Coverage
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 tracking-tighter">
              See what the Agent{" "}
              <span className="text-emerald-500">finds.</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              RTTA doesn't just generate test cases. It analyzes the
              requirement from multiple QA perspectives to uncover scenarios
              that are easy to miss.
            </p>
          </motion.div>

          {/* Requirement → Analysis → Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#050a05] rounded-[3rem] border border-emerald-500/20 p-7 md:p-10 shadow-2xl"
          >
            {/* Requirement */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-emerald-400" />
                </div>

                <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Your Requirement
                </span>
              </div>

              <div className="p-6 md:p-7 bg-black/40 rounded-2xl border border-white/5">
                <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
                  "Premium users can download invoices from their account
                  dashboard."
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-7">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 text-emerald-400 rotate-90" />
                </motion.div>
              </div>

              {/* AI Analysis */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4 text-emerald-400" />
                </div>

                <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  AI Analysis
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-pulse" />

                <span className="text-emerald-300 font-mono text-sm">
                  Analyzing flows, permissions, edge cases and business logic...
                </span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-7">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 text-emerald-400 rotate-90" />
                </motion.div>
              </div>
            </div>

            {/* Coverage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coverageItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -5 }}
                    className={`group p-6 rounded-2xl ${item.bgStyle} border ${item.borderStyle} transition-all duration-300 hover:shadow-2xl`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center ${item.iconStyle}`}
                      >
                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </div>

                      <div className="text-right">
                        <span
                          className={`text-3xl font-black ${item.iconStyle}`}
                        >
                          {item.count}
                        </span>

                        <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">
                          scenarios
                        </p>
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-white mt-5 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Coverage summary */}
            <div className="mt-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-5">
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-black mb-1">
                  Total QA Coverage
                </p>

                <p className="text-white font-bold">
                  40 scenarios identified across 6 QA dimensions
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>

                <span className="text-emerald-400 font-black text-sm uppercase tracking-wider">
                  Analysis Complete
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter">
            The Agent Workflow
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-7">
            {[
              { icon: FileText, label: "Add Story" },
              { icon: BrainCircuit, label: "Logic Check" },
              { icon: Cpu, label: "Generate" },
              { icon: Shield, label: "Review" },
              { icon: Download, label: "Export" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-zinc-900 border border-white/5 flex items-center justify-center mb-5 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all rounded-[1.5rem]" />

                  <item.icon className="w-9 h-9 text-emerald-500 group-hover:scale-110 transition-transform" />

                  <span className="absolute -top-3 -right-3 w-9 h-9 bg-emerald-500 text-black text-xs font-black flex items-center justify-center rounded-xl">
                    0{idx + 1}
                  </span>
                </div>

                <span className="text-zinc-500 font-black text-xs uppercase tracking-[0.25em]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
            Product Roadmap
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {roadmapPhases.map((phase, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-8 rounded-[2.5rem] bg-zinc-900/60 border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
              >
                <h4
                  className={`font-black mb-7 uppercase tracking-widest text-sm ${phase.text}`}
                >
                  {phase.title}
                </h4>

                <ul className="text-left space-y-4">
                  {phase.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-white font-bold text-base"
                    >
                      <CheckCircle2
                        className={`w-5 h-5 ${phase.text}`}
                      />

                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto rounded-[4rem] bg-gradient-to-tr from-emerald-500 via-green-400 to-emerald-600 p-1">
          <div className="bg-[#020502] rounded-[3.9rem] py-24 px-10 text-center relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-emerald-500/5 blur-[120px]"
            />

            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85] relative z-10">
              Write Less.
              <br />
              Test More.
            </h2>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="px-12 py-6 bg-emerald-500 text-black rounded-[2rem] font-black text-2xl hover:bg-emerald-400 transition-all hover:scale-105 shadow-2xl shadow-emerald-500/50 relative z-10"
            >
              Try RTTA Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 text-center">
        <div className="flex justify-center mb-8">
          <Mail className="w-7 h-7 text-zinc-600 hover:text-white transition-colors cursor-pointer" />
        </div>

        <p className="text-zinc-700 font-black text-xs uppercase tracking-[0.5em]">
          Requirement-to-Test Agent © 2026 KEKICHKA
        </p>
      </footer>
    </main>
  );
}