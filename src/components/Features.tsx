import React, { useState } from 'react';
import { BarChart2, Zap, Target, Users, ChevronRight, Activity, TrendingUp, UserCheck } from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Features = () => {
  const [activeFeature, setActiveFeature] = useState('analytics');

  const features = [
    {
      id: 'analytics',
      icon: <BarChart2 size={40} className="text-purple-600" />,
      title: 'Advanced Analytics',
      description: 'Real-time insights into your app\'s performance metrics',
      stats: {
        dailyUsers: '45.2K',
        growth: '+22%',
        engagement: '78%'
      },
      chart: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [3200, 4100, 3800, 4600, 4300, 5200, 5800]
      }
    },
    {
      id: 'tracking',
      icon: <Zap size={40} className="text-purple-600" />,
      title: 'Real-time Tracking',
      description: 'Monitor campaigns and user behavior as it happens',
      stats: {
        activeUsers: '12.8K',
        sessionTime: '8.5m',
        conversion: '4.2%'
      },
      chart: {
        labels: ['1h', '2h', '3h', '4h', '5h', '6h', 'Now'],
        data: [1200, 1400, 1100, 1600, 1800, 2100, 2400]
      }
    },
    {
      id: 'targeting',
      icon: <Target size={40} className="text-purple-600" />,
      title: 'Precision Targeting',
      description: 'Reach your ideal audience with pinpoint accuracy',
      stats: {
        accuracy: '94%',
        reach: '2.1M',
        ctr: '3.8%'
      },
      chart: {
        labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
        data: [2800, 4200, 3600, 2900, 1800, 1200]
      }
    },
    {
      id: 'retention',
      icon: <Users size={40} className="text-purple-600" />,
      title: 'User Retention',
      description: 'Keep users engaged with smart retention strategies',
      stats: {
        retentionRate: '82%',
        churnRate: '2.4%',
        loyalty: '76%'
      },
      chart: {
        labels: ['Day 1', 'Day 7', 'Day 14', 'Day 30', 'Day 60', 'Day 90'],
        data: [100, 82, 76, 68, 62, 58]
      }
    }
  ];

  const getChartData = (feature) => ({
    labels: feature.chart.labels,
    datasets: [
      {
        label: feature.title,
        data: feature.chart.data,
        fill: true,
        borderColor: 'rgb(124, 58, 237)',
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        tension: 0.4,
      }
    ]
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Powerful Features to Boost Your App's Success
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-left ${
                activeFeature === feature.id ? 'ring-2 ring-purple-600' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-50 rounded-lg">{feature.icon}</div>
                <ChevronRight 
                  size={20} 
                  className={`text-purple-600 transform transition-transform ${
                    activeFeature === feature.id ? 'rotate-90' : ''
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </button>
          ))}
        </div>

        {activeFeatureData && (
          <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {activeFeatureData.title} Overview
                </h3>
                <div className="h-[300px]">
                  <Line 
                    data={getChartData(activeFeatureData)} 
                    options={chartOptions}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900">Real-time Metrics</h4>
                <div className="grid gap-4">
                  {Object.entries(activeFeatureData.stats).map(([key, value]) => (
                    <div key={key} className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <Activity size={16} className="text-purple-600" />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{value}</span>
                        <TrendingUp size={16} className="text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;