import React, { useState, useMemo } from 'react';
import { Search, Ghost } from 'lucide-react';

/* -----------------------------
   Sample data
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
    outcome: "unicorn-track",
    story: "Pivoted the ghost kitchen logistics into AI-powered delivery routing. Same problem, smarter solution."
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
    outcome: "thriving",
    story: "Now she writes the checks. Turns out losing $8M in crypto qualifies you to invest other people's money."
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
    outcome: "stable",
    story: "Traded equity for salary. Building telehealth at scale, minus the 3am panic attacks about runway."
  },
  {
    id: 4,
    name: "Emily Zhang",
    deadStartup: "SocialThread",
    category: "Social",
    shutdownYear: 2021,
    fundsRaised: "$20M",
    currentPath: "advisor",
    currentRole: "Angel & Advisor",
    currentCompany: "Portfolio of 12",
    timeToRecover: "4 months",
    outcome: "active",
    story: "Advising a dozen startups. Failure turned out to be the best credential for helping others not fail."
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
    timeToRecover: "∞",
    outcome: "mia",
    story: "Last LinkedIn: 2019. Rumored sightings include: sailing the Mediterranean, running a vineyard, enlightenment."
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
    outcome: "unicorn-track",
    story: "Same market, different approach. This time she read the regulatory compliance docs BEFORE building."
  },
  {
    id: 7,
    name: "James Wilson",
    deadStartup: "ShopLocal",
    category: "E-commerce",
    shutdownYear: 2020,
    fundsRaised: "$18M",
    currentPath: "serial",
    currentRole: "Co-Founder",
    currentCompany: "LocalMart",
    newFunding: "$30M Series A",
    timeToRecover: "10 months",
    outcome: "thriving",
    story: "Marketplace for local shops failed. Tried again with better unit economics and actual vendor relationships."
  },
  {
    id: 8,
    name: "Lisa Rodriguez",
    deadStartup: "StreamBox",
    category: "Media",
    shutdownYear: 2019,
    fundsRaised: "$22M",
    currentPath: "corporate",
    currentRole: "Director of Content",
    currentCompany: "Netflix",
    timeToRecover: "5 months",
    outcome: "stable",
    story: "Couldn't beat Netflix. Joined Netflix. Sometimes you can't fight the giant, so you become the giant."
  },
  {
    id: 9,
    name: "Kevin Tran",
    deadStartup: "FitTrack",
    category: "Health",
    shutdownYear: 2021,
    fundsRaised: "$9M",
    currentPath: "advisor",
    currentRole: "Advisor",
    currentCompany: "Multiple Startups",
    timeToRecover: "7 months",
    outcome: "active",
    story: "Fitness tracking app died. Now advising 8 health tech startups on what NOT to do. Failure is marketable."
  },
  {
    id: 10,
    name: "Rachel Green",
    deadStartup: "PetConnect",
    category: "Social",
    shutdownYear: 2022,
    fundsRaised: "$5M",
    currentPath: "serial",
    currentRole: "Founder",
    currentCompany: "BarkBuddy",
    newFunding: "$12M Seed",
    timeToRecover: "9 months",
    outcome: "unicorn-track",
    story: "Social network for pets flopped. Pivoted to pet care marketplace. Turns out people spend more on services than likes."
  },
  {
    id: 11,
    name: "Mike Chen",
    deadStartup: "CloudStack",
    category: "Hardware",
    shutdownYear: 2018,
    fundsRaised: "$40M",
    currentPath: "vc",
    currentRole: "General Partner",
    currentCompany: "Enterprise Ventures",
    timeToRecover: "18 months",
    outcome: "thriving",
    story: "Failed hardware startup taught him what enterprise buyers actually want. Now funds the companies that get it right."
  },
  {
    id: 12,
    name: "Amanda Lee",
    deadStartup: "StyleBox",
    category: "E-commerce",
    shutdownYear: 2020,
    fundsRaised: "$14M",
    currentPath: "corporate",
    currentRole: "Head of E-commerce",
    currentCompany: "Target",
    timeToRecover: "4 months",
    outcome: "stable",
    story: "Fashion subscription box couldn't scale. Now running e-commerce for a company that actually has distribution."
  },
  {
    id: 13,
    name: "Chris Martinez",
    deadStartup: "RideShare Pro",
    category: "On-Demand",
    shutdownYear: 2019,
    fundsRaised: "$25M",
    currentPath: "ghost",
    currentRole: "Unknown",
    currentCompany: "MIA",
    timeToRecover: "∞",
    outcome: "mia",
    story: "Tried to compete with Uber. Lost spectacularly. LinkedIn went dark in 2020. Some say he's in Bali. Some say witness protection."
  },
  {
    id: 14,
    name: "Jessica Wang",
    deadStartup: "TokenTrade",
    category: "Crypto",
    shutdownYear: 2023,
    fundsRaised: "$35M",
    currentPath: "serial",
    currentRole: "CEO",
    currentCompany: "ChainSecure",
    newFunding: "$50M Series A",
    timeToRecover: "6 months",
    outcome: "unicorn-track",
    story: "Crypto exchange collapsed. Built blockchain security platform. Turns out preventing hacks pays better than trading coins."
  },
  {
    id: 15,
    name: "Tom Anderson",
    deadStartup: "BrightEd",
    category: "Media",
    shutdownYear: 2021,
    fundsRaised: "$11M",
    currentPath: "advisor",
    currentRole: "Education Advisor",
    currentCompany: "Edtech Portfolio",
    timeToRecover: "8 months",
    outcome: "active",
    story: "Online education platform failed during COVID. Ironic. Now advising edtech companies on sustainable growth models."
  },
  {
    id: 16,
    name: "Nicole Brown",
    deadStartup: "HealthHub",
    category: "Health",
    shutdownYear: 2022,
    fundsRaised: "$19M",
    currentPath: "corporate",
    currentRole: "VP Healthcare",
    currentCompany: "CVS Health",
    timeToRecover: "7 months",
    outcome: "stable",
    story: "Digital health clinic ran out of runway. Joined CVS to build the same thing but with actual infrastructure and cash."
  },
  {
    id: 17,
    name: "Ryan Davis",
    deadStartup: "SmartHome",
    category: "Hardware",
    shutdownYear: 2019,
    fundsRaised: "$28M",
    currentPath: "serial",
    currentRole: "Founder & CEO",
    currentCompany: "HomeOS",
    newFunding: "$45M Series B",
    timeToRecover: "12 months",
    outcome: "unicorn-track",
    story: "IoT devices flopped hard. Learned hardware is brutal. Built software for existing smart home devices instead. Much better margins."
  },
  {
    id: 18,
    name: "Sophia Kim",
    deadStartup: "BankSimple",
    category: "Fintech",
    shutdownYear: 2020,
    fundsRaised: "$32M",
    currentPath: "vc",
    currentRole: "Partner",
    currentCompany: "Fintech Fund",
    timeToRecover: "15 months",
    outcome: "thriving",
    story: "Neobank died in regulatory hell. Now she helps other fintech founders navigate the compliance nightmare she couldn't."
  }
];

const pathConfig = {
  serial: {
    label: "Serial Founders",
    emoji: "🔄",
    color: "border-orange-500",
    description: "Built another startup"
  },
  corporate: {
    label: "Went Corporate",
    emoji: "🏢",
    color: "border-blue-500",
    description: "Joined big tech"
  },
  vc: {
    label: "Became VCs",
    emoji: "💰",
    color: "border-green-500",
    description: "Now funding others"
  },
  advisor: {
    label: "Advisors & Angels",
    emoji: "🎓",
    color: "border-purple-500",
    description: "Mentoring portfolio"
  },
  ghost: {
    label: "Ghost Mode",
    emoji: "👻",
    color: "border-gray-400",
    description: "Vanished from tech"
  }
};

/* -----------------------------
   Main Content Component
------------------------------ */
export default function MainContent() {
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
      avgRecovery: "9",
      pathCounts
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Yellow Stats Section */}
      <div className="bg-yellow-400 border-b-4 border-black py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black mb-1">{stats.total}</div>
              <div className="text-sm font-bold uppercase">Founders Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">{stats.avgRecovery} mo</div>
              <div className="text-sm font-bold uppercase">Avg Recovery Time</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">78%</div>
              <div className="text-sm font-bold uppercase">Still in Tech</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What Happens After Failure */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">WHAT HAPPENS AFTER FAILURE?</h2>
            <p className="text-xl text-gray-600 mb-2">
              These startup bros didn't curl into fetal position forever.
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              Track their resurrection paths ↓
            </p>
          </div>
          
          {/* Path Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-8">
            {Object.entries(pathConfig).map(([key, config]) => {
              const count = stats.pathCounts[key];
              const isSelected = selectedPath === key;
              const percentage = Math.round((count / stats.total) * 100);
              
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPath(selectedPath === key ? 'all' : key)}
                  className={`relative p-6 border-4 border-black font-bold transition-all group ${
                    isSelected
                      ? 'bg-black text-white shadow-[8px_8px_0px_0px_rgba(251,146,60,1)]' 
                      : 'bg-white hover:bg-yellow-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  <div className="text-6xl mb-3">{config.emoji}</div>
                  <div className={`text-5xl font-black mb-2 ${isSelected ? 'text-orange-500' : 'text-black'}`}>
                    {count}
                  </div>
                  <div className={`text-xs uppercase tracking-wider mb-3 ${isSelected ? 'text-white' : 'text-gray-600'}`}>
                    {config.label}
                  </div>
                  <div className="w-full bg-gray-200 h-2 mb-2">
                    <div 
                      className={`h-2 ${isSelected ? 'bg-orange-500' : 'bg-black'}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className={`text-xs font-black ${isSelected ? 'text-orange-500' : 'text-gray-500'}`}>
                    {percentage}% OF SURVIVORS
                  </div>
                  <div className={`text-xs mt-3 italic ${isSelected ? 'text-gray-300' : 'text-gray-600'}`}>
                    {config.description}
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Quick Stats Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl font-black mb-1">78%</div>
                <div className="text-xs uppercase font-bold tracking-wider">Still in Tech</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-1">22%</div>
                <div className="text-xs uppercase font-bold tracking-wider">Went Ghost</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-1">33%</div>
                <div className="text-xs uppercase font-bold tracking-wider">Raised Again</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="SEARCH THE GRAVEYARD..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-3 border-black font-bold text-sm uppercase focus:outline-none focus:ring-4 focus:ring-yellow-400"
            />
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 border-2 border-black font-bold text-xs uppercase transition-all ${
                selectedCategory === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              ALL CORPSES
            </button>
            {['Fintech', 'Social', 'E-commerce', 'Hardware', 'Crypto', 'On-Demand', 'Health', 'Media'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 border-2 border-black font-bold text-xs uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFounders.map(founder => {
            return (
              <div key={founder.id} className="border-3 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col">
                <div className="bg-white p-4 border-b-3 border-black relative">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-gray-500">💀</span>
                    <span className="text-gray-500 text-sm">{founder.shutdownYear}</span>
                  </div>
                  <h3 className="text-xl font-black mb-1">{founder.name}</h3>
                  <div className="text-sm text-gray-600 font-bold mb-4">
                    {founder.deadStartup}
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {founder.story.substring(0, 120)}...
                  </p>
                  
                  <div className="bg-orange-100 border-2 border-orange-500 px-3 py-1 inline-block">
                    <span className="text-orange-600 font-black text-sm uppercase">{founder.fundsRaised} BURNED</span>
                  </div>
                  
                  <div className="bg-black text-white px-3 py-1 inline-block absolute top-4 right-4">
                    <span className="font-black text-xs uppercase">⚡ {founder.category}</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 flex-grow flex flex-col justify-center">
                  <div className="text-xs uppercase text-gray-500 mb-3 text-center">
                    HOVER FOR DETAILS
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFounders.length === 0 && (
          <div className="text-center py-16 border-3 border-black bg-gray-50">
            <Ghost className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="font-bold text-lg">NO SURVIVORS FOUND</p>
            <p className="text-sm text-gray-600">Try different filters</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-orange-500 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-3xl font-black mb-3 text-white">KNOW WHERE A DEAD CEO ENDED UP?</h3>
          <p className="mb-6 text-white font-bold">Help us track the founder afterlife. Submit their resurrection story.</p>
          <button className="bg-white text-black px-8 py-3 font-black text-sm uppercase tracking-wide border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            SUBMIT A SURVIVOR
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm mb-2">
            A companion site to <a href="https://loot-drop.vercel.app/" className="text-orange-500 hover:underline font-bold">Loot Drop - The Startup Graveyard</a>
          </p>
          <p className="text-xs text-gray-400">
            Because every corpse has a story. And most founders get back up.
          </p>
        </div>
      </footer>
    </div>
  );
}