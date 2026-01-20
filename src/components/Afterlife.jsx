import React, { useState, useMemo } from "react";
import {
  Search,
  TrendingUp,
  Building2,
  Briefcase,
  Ghost,
  Users,
  ArrowRight,
} from "lucide-react";

/* -----------------------------
   Sample data (replace later)
------------------------------ */
const sampleFounders = [
  {
    id: 1,
    name: "Alex Chen",
    deadStartup: "QuickDeliver",
    category: "On-Demand",
    shutdownYear: 2019,
    fundsRaised: "$12M",
    currentPath: "serial",
    currentRole: "CEO & Founder",
    currentCompany: "FleetAI",
    newFunding: "$25M Series A",
    timeToRecover: "8 months",
    outcome: "Active - Growing",
    story:
      "Pivoted ghost kitchen logistics into AI-powered delivery routing. Investors from the failed startup backed the new venture.",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    deadStartup: "CoinVault",
    category: "Crypto",
    shutdownYear: 2022,
    fundsRaised: "$8M",
    currentPath: "vc",
    currentRole: "Partner",
    currentCompany: "Blockchain Capital",
    timeToRecover: "14 months",
    outcome: "Thriving",
    story:
      "Used hard-earned crypto lessons to help others avoid the same mistakes. Now writes checks instead of cashing them.",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    deadStartup: "HealthLink",
    category: "Health",
    shutdownYear: 2020,
    fundsRaised: "$15M",
    currentPath: "corporate",
    currentRole: "VP of Product",
    currentCompany: "Amazon Health",
    timeToRecover: "6 months",
    outcome: "Stable",
    story:
      "Took the safe exit. Now building telehealth products at scale without fundraising stress.",
  },
  {
    id: 4,
    name: "Emily Zhang",
    deadStartup: "SocialThread",
    category: "Social",
    shutdownYear: 2021,
    fundsRaised: "$20M",
    currentPath: "advisor",
    currentRole: "Angel Investor & Advisor",
    currentCompany: "Independent",
    timeToRecover: "4 months",
    outcome: "Active Portfolio",
    story:
      "Advises 12 startups and angel invests. Failure became her strongest credential.",
  },
  {
    id: 5,
    name: "David Park",
    deadStartup: "HomeGadget",
    category: "Hardware",
    shutdownYear: 2018,
    fundsRaised: "$30M",
    currentPath: "ghost",
    currentRole: "Unknown",
    currentCompany: "Off Grid",
    timeToRecover: "N/A",
    outcome: "MIA",
    story:
      "Last LinkedIn update: 2019. Rumored to be sailing the world or starting a vineyard.",
  },
  {
    id: 6,
    name: "Priya Sharma",
    deadStartup: "PayFlow",
    category: "Fintech",
    shutdownYear: 2023,
    fundsRaised: "$45M",
    currentPath: "serial",
    currentRole: "Founder & CEO",
    currentCompany: "ClearPay",
    newFunding: "$60M Series B",
    timeToRecover: "11 months",
    outcome: "Unicorn Track",
    story:
      "Rebuilt the same market with a compliance-first mindset after regulatory failure.",
  },
];

/* -----------------------------
   Path config (Tailwind-safe)
------------------------------ */
const pathConfig = {
  serial: {
    icon: TrendingUp,
    label: "Serial Founders",
    bg: "bg-purple-50",
    color: "text-purple-600",
    border: "border-purple-300",
  },
  corporate: {
    icon: Building2,
    label: "Went Corporate",
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-300",
  },
  vc: {
    icon: Briefcase,
    label: "Became VCs",
    bg: "bg-green-50",
    color: "text-green-600",
    border: "border-green-300",
  },
  advisor: {
    icon: Users,
    label: "Advisors & Angels",
    bg: "bg-orange-50",
    color: "text-orange-600",
    border: "border-orange-300",
  },
  ghost: {
    icon: Ghost,
    label: "Ghost Mode",
    bg: "bg-gray-50",
    color: "text-gray-600",
    border: "border-gray-300",
  },
};

export default function Afterlife() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPath, setSelectedPath] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFounders = useMemo(() => {
    return sampleFounders.filter((f) => {
      const matchesSearch =
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.deadStartup.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPath = selectedPath === "all" || f.currentPath === selectedPath;
      const matchesCategory =
        selectedCategory === "all" || f.category === selectedCategory;
      return matchesSearch && matchesPath && matchesCategory;
    });
  }, [searchTerm, selectedPath, selectedCategory]);

  const stats = useMemo(() => {
    const counts = {};
    Object.keys(pathConfig).forEach((k) => (counts[k] = 0));
    sampleFounders.forEach((f) => counts[f.currentPath]++);
    return { total: sampleFounders.length, avgRecovery: "9 months", counts };
  }, []);

  return (
    <section
      id="afterlife"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Section intro */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            What Happens After Failure?
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            These startups died. Their founders didn’t. Here’s where they landed.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <StatCard value={stats.total} label="Founders Tracked" />
          <StatCard value={stats.avgRecovery} label="Avg Time to Next Move" />
          <StatCard value="78%" label="Still in Tech" />
        </div>

        {/* Paths */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 mb-10">
          <h3 className="font-bold text-lg mb-4">Resurrection Paths</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(pathConfig).map(([key, cfg]) => {
              const Icon = cfg.icon;
              return (
                <button
                  key={key}
                  onClick={() =>
                    setSelectedPath(selectedPath === key ? "all" : key)
                  }
                  className={`p-4 rounded-lg border-2 transition ${
                    selectedPath === key
                      ? `${cfg.bg} ${cfg.border}`
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${cfg.color}`} />
                  <div className="font-semibold">{stats.counts[key]}</div>
                  <div className="text-xs text-slate-600">{cfg.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Search founder or startup..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border rounded-lg"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option>Fintech</option>
              <option>Social</option>
              <option>Crypto</option>
              <option>Health</option>
              <option>Hardware</option>
              <option>On-Demand</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFounders.map((f) => {
            const cfg = pathConfig[f.currentPath];
            const Icon = cfg.icon;
            return (
              <div
                key={f.id}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="flex justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{f.name}</h4>
                    <p className="text-sm text-slate-500">
                      💀 {f.deadStartup} · {f.category}
                    </p>
                  </div>
                  <div className={`p-2 rounded ${cfg.bg}`}>
                    <Icon className={`w-5 h-5 ${cfg.color}`} />
                  </div>
                </div>

                <div className="text-sm space-y-1 mb-4">
                  <Row label="Shutdown" value={f.shutdownYear} />
                  <Row label="Raised" value={f.fundsRaised} />
                  <Row label="Recovery" value={f.timeToRecover} />
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold">{f.currentRole}</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    at <span className="font-medium">{f.currentCompany}</span>
                  </p>
                  {f.newFunding && (
                    <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      {f.newFunding}
                    </span>
                  )}
                  <p className="mt-3 text-sm italic text-slate-600">
                    {f.story}
                  </p>
                </div>

                <div className="mt-4 text-xs font-medium text-slate-600">
                  Status:{" "}
                  <span className="font-semibold">{f.outcome}</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFounders.length === 0 && (
          <div className="text-center py-20">
            <Ghost className="w-16 h-16 mx-auto text-slate-300 mb-4" />
            <p className="text-slate-600">No founders match your filters.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-10 text-center">
          <h3 className="text-2xl font-bold mb-2">
            Know Where a Founder Ended Up?
          </h3>
          <p className="mb-6 text-purple-100">
            Help us document the founder after-life.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded font-semibold hover:bg-purple-50">
            Submit a Founder
          </button>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Small helpers
------------------------------ */
function StatCard({ value, label }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-500">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
