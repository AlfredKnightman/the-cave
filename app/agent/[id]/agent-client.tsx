"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const agentData: Record<string, {
  name: string;
  title: string;
  specialty: string;
  emoji: string;
  color: string;
  colorDim: string;
  colorGlow: string;
  borderColor: string;
  description: string;
  capabilities: string[];
  recentActivity: string[];
  tasks: number;
}> = {
  alfred: {
    name: "Alfred",
    title: "The Butler",
    specialty: "Coordinator · Memory · Orchestration",
    emoji: "🎩",
    color: "#C9A84C",
    colorDim: "rgba(201, 168, 76, 0.1)",
    colorGlow: "rgba(201, 168, 76, 0.25)",
    borderColor: "rgba(201, 168, 76, 0.25)",
    description: "The master coordinator. Alfred maintains memory, orchestrates agent teams, and ensures everything runs with butler-level precision. The glue that holds the entire operation together.",
    capabilities: ["Multi-agent orchestration", "Long-term memory management", "Task delegation", "Context synthesis", "Daily briefings"],
    recentActivity: ["Morning brief dispatched", "Coordinated Scout + Rex on storage deal", "Updated MEMORY.md", "Scheduled Warren's portfolio review"],
    tasks: 12,
  },
  nova: {
    name: "Nova",
    title: "Video Agent",
    specialty: "Scripts · Video Gen · YouTube",
    emoji: "🎬",
    color: "#A855F7",
    colorDim: "rgba(168, 85, 247, 0.1)",
    colorGlow: "rgba(168, 85, 247, 0.25)",
    borderColor: "rgba(168, 85, 247, 0.25)",
    description: "Nova breathes life into ideas through moving pictures. Scripts, video generation, YouTube strategy — if it involves telling a story on screen, Nova owns it.",
    capabilities: ["Video scriptwriting", "AI video generation", "YouTube optimization", "Thumbnail concepts", "Voiceover direction"],
    recentActivity: ["Wrote DSU explainer script", "Generated 4 ad video variants", "Optimized Batman Hotline YouTube metadata"],
    tasks: 3,
  },
  warren: {
    name: "Warren",
    title: "Finance Oracle",
    specialty: "Robinhood · Strategy · Dividends · BTC",
    emoji: "📈",
    color: "#22C55E",
    colorDim: "rgba(34, 197, 94, 0.1)",
    colorGlow: "rgba(34, 197, 94, 0.25)",
    borderColor: "rgba(34, 197, 94, 0.25)",
    description: "The oracle of financial intelligence. Tracks the Bitcoin standard portfolio, Strategy preferred stocks, dividend yields, and market signals. Speaks only in numbers that matter.",
    capabilities: ["Bitcoin price tracking", "MSTR/STRK/STRF/STRC analysis", "Dividend yield calc", "Portfolio rebalancing", "Market intelligence"],
    recentActivity: ["STRC yield updated: 13.7%", "MSTR at ATH — covered call opportunity flagged", "Morning brief BTC data fetched"],
    tasks: 5,
  },
  scout: {
    name: "Scout",
    title: "Intel Drone",
    specialty: "Research · Deal Flow · Acquisitions",
    emoji: "🔍",
    color: "#F59E0B",
    colorDim: "rgba(245, 158, 11, 0.1)",
    colorGlow: "rgba(245, 158, 11, 0.25)",
    borderColor: "rgba(245, 158, 11, 0.25)",
    description: "Scout never sleeps. Web research, storage deal intelligence, competitive analysis, and lead discovery. Finds what others miss and packages it for decision-making.",
    capabilities: ["Web research & synthesis", "Self-storage deal flow", "Competitor mapping", "Lead discovery", "Due diligence"],
    recentActivity: ["Found 3 new MA storage targets", "Cross Road Storage report updated", "Researched DSU competitor landscape"],
    tasks: 7,
  },
  rex: {
    name: "Rex",
    title: "Code Machine",
    specialty: "Build · Deploy · Debug",
    emoji: "🤖",
    color: "#06B6D4",
    colorDim: "rgba(6, 182, 212, 0.1)",
    colorGlow: "rgba(6, 182, 212, 0.25)",
    borderColor: "rgba(6, 182, 212, 0.25)",
    description: "Rex turns ideas into deployed software at machine speed. Next.js, APIs, Vercel deployments, database schemas — Rex doesn't ask questions, Rex ships.",
    capabilities: ["Next.js / React builds", "Vercel deployments", "API architecture", "Database design", "Bug hunting & fixes"],
    recentActivity: ["Deployed The Cave to Vercel", "Fixed CRM inbound call schema", "Built DSU tenant portal scaffold"],
    tasks: 9,
  },
  stella: {
    name: "Stella",
    title: "Sales Operative",
    specialty: "Cold Calling · CRM · Outreach",
    emoji: "📞",
    color: "#F87171",
    colorDim: "rgba(248, 113, 113, 0.1)",
    colorGlow: "rgba(248, 113, 113, 0.25)",
    borderColor: "rgba(248, 113, 113, 0.25)",
    description: "Stella is on the phones, in the inbox, and closing deals. Cold calling storage owners, managing CRM pipeline, and converting leads to conversations.",
    capabilities: ["Cold calling via Vapi", "CRM pipeline management", "SMS follow-up", "Email sequences", "Lead qualification"],
    recentActivity: ["Called 12 storage leads in MA", "Cross Road follow-up scheduled", "Drip sequence activated for 5 leads"],
    tasks: 4,
  },
  sats: {
    name: "Sats",
    title: "Bitcoin Evangelist",
    specialty: "Nostr · Alfred Knightman · Memes",
    emoji: "₿",
    color: "#F7931A",
    colorDim: "rgba(247, 147, 26, 0.1)",
    colorGlow: "rgba(247, 147, 26, 0.25)",
    borderColor: "rgba(247, 147, 26, 0.25)",
    description: "Sats handles the Alfred Knightman Nostr persona and bitcoin content. Dry wit, Batman references, orange-pilling the timeline — one post at a time.",
    capabilities: ["Nostr post generation", "Alfred Knightman voice", "Bitcoin meme creation", "Morning brief Nostr posts", "Zap strategy"],
    recentActivity: ["Posted morning brief to Nostr", "Drafted 3 Batman bitcoin memes", "Replied to zap thread"],
    tasks: 6,
  },
  pixel: {
    name: "Pixel",
    title: "Creative Director",
    specialty: "Image Gen · Brand · PR Visuals",
    emoji: "🎨",
    color: "#EC4899",
    colorDim: "rgba(236, 72, 153, 0.1)",
    colorGlow: "rgba(236, 72, 153, 0.25)",
    borderColor: "rgba(236, 72, 153, 0.25)",
    description: "Pixel turns briefs into beautiful visuals. AI-generated brand assets, the ₿ mascot PR images, social graphics, and anything that needs to look exceptional.",
    capabilities: ["AI image generation", "₿ mascot PR visuals", "Brand asset creation", "Social media graphics", "UI mockups"],
    recentActivity: ["Generated PR unit #40 (treadmill)", "Created 4 DSU ad variants", "Designed The Cave favicon concept"],
    tasks: 8,
  },
};

export default function AgentPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const agent = agentData[id];
  const [inputText, setInputText] = useState("");

  if (!agent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-4xl">🦇</p>
        <p className="text-slate-400 font-mono">Agent not found, sir.</p>
        <Link
          href="/"
          className="text-sm text-amber-400/70 hover:text-amber-400 underline font-mono"
        >
          ← Return to The Cave
        </Link>
      </div>
    );
  }

  const isBitcoin = id === "sats";

  return (
    <div className="relative z-10 min-h-screen">
      {/* Header */}
      <header className="relative border-b border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors text-sm font-mono group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>The Cave</span>
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-400 font-mono text-sm">{agent.name}</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Agent hero */}
        <div
          className="rounded-2xl p-8 mb-8 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${agent.colorDim} 0%, rgba(15,15,26,0.95) 100%)`,
            border: `1px solid ${agent.borderColor}`,
            boxShadow: `0 20px 60px -10px ${agent.colorGlow}, inset 0 1px 0 rgba(255,255,255,0.05)`,
          }}
        >
          {/* Background glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: agent.colorGlow, opacity: 0.3 }}
          />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Icon */}
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: agent.colorDim,
                border: `1px solid ${agent.borderColor}`,
                boxShadow: `0 0 40px ${agent.colorGlow}`,
                fontSize: isBitcoin ? "3.5rem" : "3rem",
                color: isBitcoin ? agent.color : undefined,
                fontWeight: isBitcoin ? "900" : undefined,
                fontFamily: isBitcoin ? "serif" : undefined,
              }}
            >
              {agent.emoji}
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center gap-3 justify-center sm:justify-start flex-wrap mb-1">
                <h1
                  className="text-3xl font-bold"
                  style={{ color: agent.color, textShadow: `0 0 30px ${agent.colorGlow}` }}
                >
                  {agent.name}
                </h1>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(74,222,128,0.1)",
                    border: "1px solid rgba(74,222,128,0.2)"
                  }}
                >
                  <div className="status-dot w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[11px] text-green-400 font-medium">Active</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-3">{agent.title}</p>
              <p className="text-slate-300 leading-relaxed max-w-xl">
                {agent.description}
              </p>
            </div>

            {/* Tasks badge */}
            <div className="text-center shrink-0">
              <p
                className="text-4xl font-bold font-mono"
                style={{ color: agent.color }}
              >
                {agent.tasks}
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-widest">active tasks</p>
            </div>
          </div>
        </div>

        {/* Two column info */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Capabilities */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(15,15,26,0.8)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
              ◈ Capabilities
            </h3>
            <ul className="space-y-2.5">
              {agent.capabilities.map((cap, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: agent.color, boxShadow: `0 0 6px ${agent.color}` }}
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent activity */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(15,15,26,0.8)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
              ◈ Recent Activity
            </h3>
            <ul className="space-y-3">
              {agent.recentActivity.map((act, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-slate-600 font-mono text-xs mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate-300">{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Placeholder chat input */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(15,15,26,0.8)",
            border: `1px solid ${agent.borderColor}`,
            boxShadow: `0 0 30px ${agent.colorGlow}`,
          }}
        >
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
            ◈ Chat with {agent.name}
          </h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Give ${agent.name} an instruction…`}
              className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-white/20 transition-colors font-mono"
            />
            <button
              className="px-5 py-3 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: `linear-gradient(135deg, ${agent.color}22, ${agent.color}44)`,
                border: `1px solid ${agent.color}66`,
                color: agent.color,
              }}
              onClick={() => setInputText("")}
            >
              Deploy ↗
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-3 font-mono">
            Direct agent interface coming soon — building The Cave incrementally, sir.
          </p>
        </div>
      </main>
    </div>
  );
}
