import React, { useState, useMemo } from 'react';
import { Search, TrendingUp, Building2, Briefcase, Ghost, Sparkles, Users, ArrowRight } from 'lucide-react';

// Sample data - you'll populate this with real research
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
    linkedin: "#",
    story: "Pivoted the ghost kitchen logistics into AI-powered delivery routing. Investors from failed venture backed the new one."
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
    linkedin: "#",
    story: "Used her hard-earned crypto wisdom to help others avoid the same mistakes. Now writes checks instead of cashing them."
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
    linkedin: "#",
    story: "Took the 'safe' exit. Building telehealth features at scale, minus the fundraising stress and board meetings."
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
    linkedin: "#",
    story: "Advising 12 startups and angel investing. Turns out failure is the best credential for helping others succeed."
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
    linkedin: "#",
    story: "Last LinkedIn update: 2019. Rumored to be sailing around the world or starting a vineyard. The mystery endures."
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
    linkedin: "#",
    story: "Learned from regulatory nightmares at PayFlow. ClearPay addresses the same market with compliance-first approach."
  }
];

const pathConfig = {
  serial: {
    icon: TrendingUp,
    label: "Serial Founders",
    color: "text-purple-600",
    bg: "bg-purple-50",
    description: "Built another startup"
  },
  corporate: {
    icon: Building2,
    label: "Went Corporate",
    color: "text-blue-600",
    bg: "bg-blue-50",
    description: "Joined big tech"
  },
  vc: {
    icon: Briefcase,
    label: "Became VCs",
    color: "text-green-600",
    bg: "bg-green-50",
    description: "Now funding others"
  },
  advisor: {
    icon: Users,
    label: "Advisors & Angels",
    color: "text-orange-600",
    bg: "bg-orange-50",
    description: "Mentoring & investing"
  },
  ghost: {
    icon: Ghost,
    label: "Ghost Mode",
    color: "text-gray-600",
    bg: "bg-gray-50",
    description: "Vanished from tech"
  }
};

export default function FounderAfterlife() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPath, setSelectedPath] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFounders = useMemo(() => {
    return sampleFounders.filter(founder => {
      const matchesSearch = founder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           founder.deadStartup.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPath = selectedPath === 'all' || founder.currentPath === selectedPath;
      const matchesCategory = selectedCategory === 'all' || founder.category === selectedCategory;
      return matchesSearch && matchesPath && matchesCategory;
    });
  }, [searchTerm, selectedPath, selectedCategory]);

  const stats = useMemo(() => {
    const pathCounts = {};
    Object.keys(pathConfig).forEach(key => pathCounts[key] = 0);
    sampleFounders.forEach(f => pathCounts[f.currentPath]++);
    
    return {
      total: sampleFounders.length,
      avgRecovery: "9 months",
      pathCounts
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-slate-900">The Founder Afterlife</h1>
          </div>
          <p className="text-slate-600 text-sm">
            Where CEOs go after their startups die. Spoiler: Most of them land on their feet.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600">Founders Tracked</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-slate-900">{stats.avgRecovery}</div>
            <div className="text-sm text-slate-600">Avg Time to Next Move</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-slate-900">78%</div>
            <div className="text-sm text-slate-600">Still in Tech</div>
          </div>
        </div>

        {/* Path Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The Resurrection Paths</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(pathConfig).map(([key, config]) => {
              const Icon = config.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPath(selectedPath === key ? 'all' : key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPath === key 
                      ? `${config.bg} border-${config.color.split('-')[1]}-300` 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${selectedPath === key ? config.color : 'text-slate-600'}`} />
                  <div className="text-sm font-semibold text-slate-900">{stats.pathCounts[key]}</div>
                  <div className="text-xs text-slate-600">{config.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by founder or startup name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Categories</option>
              <option value="Fintech">Fintech</option>
              <option value="Social">Social</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Hardware">Hardware</option>
              <option value="Crypto">Crypto</option>
              <option value="On-Demand">On-Demand</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFounders.map(founder => {
            const pathInfo = pathConfig[founder.currentPath];
            const PathIcon = pathInfo.icon;
            
            return (
              <div key={founder.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{founder.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-slate-500">💀 {founder.deadStartup}</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          {founder.category}
                        </span>
                      </div>
                    </div>
                    <div className={`p-2 rounded-lg ${pathInfo.bg}`}>
                      <PathIcon className={`w-5 h-5 ${pathInfo.color}`} />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Shut down:</span>
                      <span className="font-medium text-slate-900">{founder.shutdownYear}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Raised:</span>
                      <span className="font-medium text-slate-900">{founder.fundsRaised}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Recovery time:</span>
                      <span className="font-medium text-slate-900">{founder.timeToRecover}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold text-slate-900">{founder.currentRole}</span>
                    </div>
                    <div className="text-sm text-slate-600 mb-3">
                      at <span className="font-medium text-slate-900">{founder.currentCompany}</span>
                      {founder.newFunding && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {founder.newFunding}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 italic">{founder.story}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <span className={`text-xs font-medium ${
                      founder.outcome.includes('Unicorn') ? 'text-purple-600' :
                      founder.outcome.includes('Thriving') ? 'text-green-600' :
                      founder.outcome.includes('Active') ? 'text-blue-600' :
                      founder.outcome.includes('MIA') ? 'text-gray-600' :
                      'text-slate-600'
                    }`}>
                      Status: {founder.outcome}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFounders.length === 0 && (
          <div className="text-center py-12">
            <Ghost className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No founders found matching your criteria.</p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Know Where a Dead Startup CEO Ended Up?</h3>
          <p className="mb-6 text-purple-100">Help us track the founder afterlife. Submit their resurrection story.</p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            Submit a Founder
          </button>
        </div>
      </div>
    </div>
  );
}