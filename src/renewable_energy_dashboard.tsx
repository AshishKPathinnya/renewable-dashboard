import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Zap, Globe, BarChart3 } from 'lucide-react';

const RenewableEnergyDashboard = () => {
  // Sample dataset: Global Renewable Energy Adoption (2015-2024)
  const yearlyData = [
    { year: 2015, solar: 227, wind: 433, hydro: 1308, geothermal: 13, biomass: 106, total: 2087 },
    { year: 2016, solar: 297, wind: 487, hydro: 1326, geothermal: 14, biomass: 112, total: 2236 },
    { year: 2017, solar: 391, wind: 540, hydro: 1331, geothermal: 14, biomass: 121, total: 2397 },
    { year: 2018, solar: 486, wind: 591, hydro: 1355, geothermal: 14, biomass: 130, total: 2576 },
    { year: 2019, solar: 586, wind: 651, hydro: 1355, geothermal: 15, biomass: 143, total: 2750 },
    { year: 2020, solar: 714, wind: 733, hydro: 1370, geothermal: 15, biomass: 148, total: 2980 },
    { year: 2021, solar: 843, wind: 825, hydro: 1380, geothermal: 16, biomass: 156, total: 3220 },
    { year: 2022, solar: 1000, wind: 906, hydro: 1392, geothermal: 16, biomass: 165, total: 3479 },
    { year: 2023, solar: 1177, wind: 1021, hydro: 1400, geothermal: 17, biomass: 175, total: 3790 },
    { year: 2024, solar: 1419, wind: 1134, hydro: 1408, geothermal: 18, biomass: 186, total: 4165 }
  ];

  const countryData = [
    { country: 'China', renewable: 1355, fossil: 2890, renewablePercent: 32 },
    { country: 'United States', renewable: 432, fossil: 1821, renewablePercent: 19 },
    { country: 'India', renewable: 178, fossil: 672, renewablePercent: 21 },
    { country: 'Germany', renewable: 161, fossil: 267, renewablePercent: 38 },
    { country: 'Japan', renewable: 124, fossil: 876, renewablePercent: 12 },
    { country: 'Brazil', renewable: 166, fossil: 142, renewablePercent: 54 },
    { country: 'Canada', renewable: 462, fossil: 154, renewablePercent: 75 },
    { country: 'France', renewable: 119, fossil: 312, renewablePercent: 28 }
  ];

  const currentMix = [
    { name: 'Solar', value: 1419, color: '#f59e0b' },
    { name: 'Wind', value: 1134, color: '#3b82f6' },
    { name: 'Hydro', value: 1408, color: '#06b6d4' },
    { name: 'Geothermal', value: 18, color: '#ef4444' },
    { name: 'Biomass', value: 186, color: '#10b981' }
  ];

  const investmentData = [
    { year: 2020, investment: 303, capacity: 280 },
    { year: 2021, investment: 366, capacity: 295 },
    { year: 2022, investment: 434, capacity: 345 },
    { year: 2023, investment: 495, capacity: 380 },
    { year: 2024, investment: 578, capacity: 420 }
  ];

  const [selectedMetric, setSelectedMetric] = useState('total');

  const formatValue = (value: number) => `${value} GW`;
  const formatPercent = (value: number) => `${value}%`;
  const formatBillion = (value: number) => `$${value}B`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Zap className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Global Renewable Energy Dashboard
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive analysis of renewable energy adoption worldwide from 2015-2024
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 border border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-green-400">4,165 GW</span>
            </div>
            <p className="text-slate-300 text-sm">Total Renewable Capacity 2024</p>
            <p className="text-green-300 text-xs mt-1">+9.9% from 2023</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-bold text-blue-400">1,419 GW</span>
            </div>
            <p className="text-slate-300 text-sm">Solar Power Leading</p>
            <p className="text-blue-300 text-xs mt-1">34% of renewable mix</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl p-6 border border-cyan-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <Globe className="w-8 h-8 text-cyan-400" />
              <span className="text-3xl font-bold text-cyan-400">75%</span>
            </div>
            <p className="text-slate-300 text-sm">Canada's Renewable Share</p>
            <p className="text-cyan-300 text-xs mt-1">Highest among major economies</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-purple-400" />
              <span className="text-3xl font-bold text-purple-400">$578B</span>
            </div>
            <p className="text-slate-300 text-sm">Investment in 2024</p>
            <p className="text-purple-300 text-xs mt-1">+16.8% growth</p>
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Renewable Energy Growth Over Time */}
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Renewable Energy Growth (2015-2024)</h3>
            <div className="mb-4 flex gap-2 justify-center flex-wrap">
              {['total', 'solar', 'wind', 'hydro'].map((metric) => (
                <button
                  key={metric}
                  onClick={() => setSelectedMetric(metric)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedMetric === metric
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {metric.charAt(0).toUpperCase() + metric.slice(1)}
                </button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={yearlyData}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorWind" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorHydro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" tickFormatter={formatValue} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [formatValue(value as number), 'Capacity']}
                />
                <Area
                  type="monotone"
                  dataKey={selectedMetric}
                  stroke={selectedMetric === 'total' ? '#3b82f6' : selectedMetric === 'solar' ? '#f59e0b' : selectedMetric === 'wind' ? '#06b6d4' : '#10b981'}
                  fillOpacity={1}
                  fill={`url(#color${selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)})`}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Current Energy Mix */}
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">2024 Renewable Energy Mix</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={currentMix}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {currentMix.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [formatValue(value as number), 'Capacity']}
                />
                <Legend 
                  wrapperStyle={{ color: '#fff' }}
                  formatter={(value, entry) => entry?.payload ? `${value}: ${formatValue(entry.payload.value)}` : value}

                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Country Comparison */}
        <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Renewable Energy by Country (2024)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={countryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="country" stroke="#9ca3af" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#9ca3af" tickFormatter={formatValue} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value, name) => [
                  name === 'renewable' ? formatValue(value as number) : formatPercent(value as number),
                  name === 'renewable' ? 'Renewable Capacity' : 'Renewable Share'
                ]}                
              />
              <Legend />
              <Bar dataKey="renewable" name="Renewable Capacity (GW)" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="renewablePercent" name="Renewable %" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Investment vs Capacity Correlation */}
        <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Investment vs New Capacity Added</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={investmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9ca3af" />
              <YAxis yAxisId="left" stroke="#9ca3af" tickFormatter={formatBillion} />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tickFormatter={formatValue} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value, name) => [
                  name === 'investment' ? formatBillion(value as number) : formatValue(value as number),
                  name === 'investment' ? 'Investment' : 'New Capacity'
                ]}                
              />
              <Legend />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="investment" 
                stroke="#f59e0b" 
                strokeWidth={3}
                name="Investment ($B)"
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 6 }}
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="capacity" 
                stroke="#10b981" 
                strokeWidth={3}
                name="New Capacity (GW)"
                dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Insights Section */}
        <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 border border-slate-600/50 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h4 className="text-xl font-semibold mb-2 text-green-400">Exponential Solar Growth</h4>
              <p className="text-slate-300">Solar capacity increased by 525% from 2015 to 2024, making it the fastest-growing renewable energy source.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-400">Global Leadership</h4>
              <p className="text-slate-300">China leads in absolute capacity while Canada leads in renewable energy percentage at 75% of total energy mix.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <h4 className="text-xl font-semibold mb-2 text-purple-400">Investment Surge</h4>
              <p className="text-slate-300">Global renewable investment reached $578B in 2024, showing strong correlation with capacity additions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewableEnergyDashboard;