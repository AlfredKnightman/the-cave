"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const agents = [
  {
    id: "alfred",
    name: "Alfred",
    title: "The Butler",
    specialty: "Coordinator · Memory · Orchestration",
    emoji: "🎩",
    color: "#C9A84C",
    colorDim: "rgba(201, 168, 76, 0.12)",
    colorGlow: "rgba(201, 168, 76, 0.3)",
    borderColor: "rgba(201, 168, 76, 0.25)",
    status: "active",
    tasks: 12,
    gradient: "from-amber-900/30 via-yellow-900/10 to-transparent",
  },
  {
    id: "nova",
    name: "Nova",
    title: "Video Agent",
    specialty: "Scripts · Video Gen · YouTube",
    emoji: "🎬",
    color: "#A855F7",
    colorDim: "rgba(168, 85, 247, 0.12)",
    colorGlow: "rgba(168, 85, 247, 0.3)",
    borderColor: "rgba(168, 85, 247, 0.25)",
    status: "active",
    tasks: 3,
    gradient: "from-purple-900/30 via-violet-900/10 to-transparent",
  },
  {
    id: "warren",
    name: "Warren",
    title: "Finance Oracle",
    specialty: "Robinhood · Strategy · Dividends · BTC",
    emoji: "📈",
    color: "#22C55E",
    colorDim: "rgba(34, 197, 94, 0.12)",
    colorGlow: "rgba(34, 197, 94, 0.3)",
    borderColor: "rgba(34, 197, 94, 0.25)",
    status: "active",
    tasks: 5,
    gradient: "from-green-900/30 via-emerald-900/10 to-transparent",
  },
  {
    id: "scout",
    name: "Scout",
    title: "Intel Drone",
    specialty: "Research · Deal Flow · Acquisitions",
    emoji: "🔍",
    color: "#F59E0B",
    colorDim: "rgba(245, 158, 11, 0.12)",
    colorGlow: "rgba(245, 158, 11, 0.3)",
    borderColor: "rgba(245, 158, 11, 0.25)",
    status: "active",
    tasks: 7,
    gradient: "from-amber-900/30 via-orange-900/10 to-transparent",
  },
  {
    id: "rex",
    name: "Rex",
    title: "Code Machine",
    specialty: "Build · Deploy · Debug",
    emoji: "🤖",
    color: "#06B6D4",
    colorDim: "rgba(6, 182, 212, 0.12)",
    colorGlow: "rgba(6, 182, 212, 0.3)",
    borderColor: "rgba(6, 182, 212, 0.25)",
    status: "active",
    tasks: 9,
    gradient: "from-cyan-900/30 via-sky-900/10 to-transparent",
  },
  {
    id: "stella",
    name: "Stella",
    title: "Sales Operative",
    specialty: "Cold Calling · CRM · Outreach",
    emoji: "📞",
    color: "#F87171",
    colorDim: "rgba(248, 113, 113, 0.12)",
    colorGlow: "rgba(248, 113, 113, 0.3)",
    borderColor: "rgba(248, 113, 113, 0.25)",
    status: "active",
    tasks: 4,
    gradient: "from-red-900/30 via-rose-900/10 to-transparent",
  },
  {
    id: "sats",
    name: "Sats",
    title: "Bitcoin Evangelist",
    specialty: "Nostr · Alfred Knightman · Memes",
    emoji: "₿",
    color: "#F7931A",
    colorDim: "rgba(247, 147, 26, 0.12)",
    colorGlow: "rgba(247, 147, 26, 0.3)",
    borderColor: "rgba(247, 147, 26, 0.25)",
    status: "active",
    tasks: 6,
    gradient: "from-orange-900/30 via-amber-900/10 to-transparent",
  },
  {
    id: "pixel",
    name: "Pixel",
    title: "Creative Director",
    specialty: "Image Gen · Brand · PR Visuals",
    emoji: "🎨",
    color: "#EC4899",
    colorDim: "rgba(236, 72, 153, 0.12)",
    colorGlow: "rgba(236, 72, 153, 0.3)",
    borderColor: "rgba(236, 72, 153, 0.25)",
    status: "active",
    tasks: 8,
    gradient: "from-pink-900/30 via-fuchsia-900/10 to-transparent",
  },
];

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), index * 80);
    return () => clearTimeout(t);
  }, [index]);

  const isBitcoin = agent.id === "sats";

  return (
    <Link href={`/agent/${agent.id}`} className="block focus:outline-none focus:ring-2 focus:ring-white/20 rounded-2xl">
      <div
        className={`agent-card relative rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${agent.colorDim} 0%, #0F0F1A 60%)`
            : `linear-gradient(135deg, rgba(15,15,26,0.95) 0%, #0A0A0F 100%)`,
          border: `1px solid ${hovered ? agent.borderColor : "rgba(255,255,255,0.05)"}`,
          boxShadow: hovered
            ? `0 20px 60px -10px ${agent.colorGlow}, 0 0 0 1px ${agent.borderColor}, inset 0 1px 0 rgba(255,255,255,0.05)`
            : `0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)`,
          transitionDuration: "0.3s",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top color band */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background: `linear-gradient(90deg, transparent, ${agent.color}, transparent)`,
            opacity: hovered ? 1 : 0.3,
            transition: "opacity 0.3s",
          }}
        />

        {/* Background corner glow */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
          style={{
            background: agent.colorGlow,
            opacity: hovered ? 0.5 : 0.15,
            transition: "opacity 0.3s",
          }}
        />

        <div className="relative p-6 flex flex-col items-center text-center gap-4">
          {/* Status row */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <div
              className="status-dot w-2 h-2 rounded-full bg-green-400"
              style={{ backgroundColor: "#4ade80" }}
            />
            <span className="text-[10px] font-medium text-green-400/70 uppercase tracking-wider">
              Online
            </span>
          </div>

          {/* Task badge */}
          <div
            className="absolute top-4 left-4 text-[10px] font-mono px-2 py-0.5 rounded-full border"
            style={{
              color: agent.color,
              borderColor: agent.borderColor,
              background: agent.colorDim,
            }}
          >
            {agent.tasks} tasks
          </div>

          {/* Icon */}
          <div className="mt-6 relative">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl relative"
              style={{
                background: hovered ? agent.colorDim : "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered ? agent.borderColor : "rgba(255,255,255,0.06)"}`,
                boxShadow: hovered ? `0 0 30px ${agent.colorGlow}` : "none",
                transition: "all 0.3s",
                fontSize: isBitcoin ? "2.5rem" : "2.25rem",
                color: isBitcoin ? agent.color : undefined,
                fontWeight: isBitcoin ? "900" : undefined,
                fontFamily: isBitcoin ? "serif" : undefined,
              }}
            >
              {agent.emoji}
            </div>

            {/* Orbiting dot decoration */}
            {hovered && (
              <div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full border"
                style={{
                  background: agent.color,
                  borderColor: "#0A0A0F",
                  boxShadow: `0 0 8px ${agent.color}`,
                }}
              />
            )}
          </div>

          {/* Name */}
          <div>
            <h2
              className="text-xl font-bold tracking-wide"
              style={{
                color: hovered ? agent.color : "#f1f5f9",
                transition: "color 0.3s",
                textShadow: hovered ? `0 0 20px ${agent.colorGlow}` : "none",
              }}
            >
              {agent.name}
            </h2>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mt-0.5">
              {agent.title}
            </p>
          </div>

          {/* Specialty */}
          <p className="text-xs text-slate-400 leading-relaxed px-2">
            {agent.specialty}
          </p>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${hovered ? agent.borderColor : "rgba(255,255,255,0.05)"}, transparent)`,
            }}
          />

          {/* Chat button */}
          <button
            className="w-full py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 relative overflow-hidden group"
            style={{
              background: hovered
                ? `linear-gradient(135deg, ${agent.color}22, ${agent.color}44)`
                : "rgba(255,255,255,0.04)",
              border: `1px solid ${hovered ? agent.color + "66" : "rgba(255,255,255,0.08)"}`,
              color: hovered ? agent.color : "#94a3b8",
            }}
          >
            <span className="relative z-10">↗ Chat with {agent.name}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

function BatSignal() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-96 h-40 opacity-10">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 text-[8rem] leading-none"
        style={{ filter: "blur(12px)", color: "#C9A84C" }}
      >
        🦇
      </div>
    </div>
  );
}

export default function CavePage() {
  const [time, setTime] = useState<string>("");
  const totalTasks = agents.reduce((a, b) => a + b.tasks, 0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Los_Angeles"
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-10 min-h-screen">
      <BatSignal />

      {/* Header */}
      <header className="relative border-b border-white/5 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl bat-header"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 0 20px rgba(201,168,76,0.15)",
              }}
            >
              🦇
            </div>
            <div>
              <h1
                className="font-cave text-xl font-bold text-white tracking-[0.25em] leading-tight"
                style={{ textShadow: "0 0 30px rgba(201,168,76,0.4)" }}
              >
                THE CAVE
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                Agent Command Center
              </p>
            </div>
          </div>

          {/* Center status */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(74,222,128,0.05)",
              border: "1px solid rgba(74,222,128,0.15)",
            }}
          >
            <div className="status-dot w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs text-green-400/80 font-medium">All systems operational</span>
          </div>

          {/* Right — clock + stats */}
          <div className="flex items-center gap-6 text-right">
            <div className="hidden sm:block">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Active Tasks</p>
              <p
                className="text-lg font-bold font-mono"
                style={{ color: "#C9A84C" }}
              >
                {totalTasks}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">PT</p>
              <p className="text-lg font-bold font-mono text-slate-300">
                {time || "––:––:––"}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Section header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
              ◈ Agent Roster — {agents.length} agents deployed
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Who do you need,{" "}
              <span style={{ color: "#C9A84C", textShadow: "0 0 30px rgba(201,168,76,0.3)" }}>
                sir?
              </span>
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Select an agent or let Alfred coordinate the team.
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex gap-4 shrink-0">
            {[
              { label: "Online", value: agents.length, color: "#4ade80" },
              { label: "Offline", value: 0, color: "#475569" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center px-4 py-2 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-2xl font-bold font-mono" style={{ color: s.color }}>
                  {s.value}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-amber-700/50">🦇</span>
            <span>THE CAVE v1.0 — Alfred&apos;s Command Center</span>
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>Gotham · PST</span>
            <span className="text-slate-700">·</span>
            <span>Encrypted · Secure</span>
            <span className="text-slate-700">·</span>
            <span style={{ color: "#F7931A" }}>₿ Sovereign</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
