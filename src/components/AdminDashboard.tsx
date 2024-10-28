import React, { useState } from 'react';
import { BarChart, LineChart, PieChart, DonutChart } from './charts';
import { 
  Users, 
  Activity, 
  TrendingUp, 
  Calendar,
  Download,
  Share2,
  Filter,
  RefreshCw
} from 'lucide-react';

const AdminDashboard = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your app's performance and user engagement</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button 
              onClick={handleRefresh}
              className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              <Download size={16} className="mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Installs"
            value="24,892"
            change="+12.5%"
            icon={<Download className="text-purple-600" />}
          />
          <MetricCard
            title="Active Users"
            value="18,472"
            change="+8.2%"
            icon={<Users className="text-blue-600" />}
          />
          <MetricCard
            title="Engagement Rate"
            value="64.3%"
            change="+5.7%"
            icon={<Activity className="text-green-600" />}
          />
          <MetricCard
            title="Conversion Rate"
            value="3.2%"
            change="+1.4%"
            icon={<TrendingUp className="text-orange-600" />}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Install Trends</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <Filter size={16} />
              </button>
            </div>
            <LineChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">User Engagement</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <Filter size={16} />
              </button>
            </div>
            <BarChart />
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Campaign Performance</h2>
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Share2 size={16} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <Filter size={16} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Campaign</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Installs</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Conversion</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Cost/Install</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm text-gray-900">{campaign.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{campaign.installs}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{campaign.conversion}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{campaign.costPerInstall}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{campaign.roi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">User Distribution</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <Filter size={16} />
              </button>
            </div>
            <DonutChart />
            <div className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">New Users</p>
                  <p className="text-lg font-semibold text-gray-900">64%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Returning</p>
                  <p className="text-lg font-semibold text-gray-900">36%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-gray-50 rounded-lg">
        {icon}
      </div>
      <span className={`text-sm font-medium ${
        change.startsWith('+') ? 'text-green-600' : 'text-red-600'
      }`}>
        {change}
      </span>
    </div>
    <h3 className="text-gray-600 text-sm">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

const campaigns = [
  {
    name: 'Summer Promotion',
    installs: '5,234',
    conversion: '4.2%',
    costPerInstall: '$1.24',
    roi: '324%'
  },
  {
    name: 'Social Media Ads',
    installs: '3,876',
    conversion: '3.8%',
    costPerInstall: '$1.56',
    roi: '286%'
  },
  {
    name: 'Referral Program',
    installs: '2,654',
    conversion: '5.1%',
    costPerInstall: '$0.95',
    roi: '412%'
  },
  {
    name: 'Search Campaign',
    installs: '1,987',
    conversion: '3.4%',
    costPerInstall: '$1.78',
    roi: '245%'
  }
];

export default AdminDashboard;