import React, { useState } from 'react';
import { Sparkles, Send, RotateCcw, Download } from 'lucide-react';

const AICampaignOptimizer = () => {
  const [campaignGoal, setCampaignGoal] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [optimizedStrategy, setOptimizedStrategy] = useState<string | null>(null);

  const generateStrategy = async () => {
    setIsGenerating(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setOptimizedStrategy(`Based on your inputs, here's your AI-optimized campaign strategy:

1. Budget Allocation:
   • 40% for targeted social media ads
   • 35% for in-app advertising networks
   • 25% for influencer partnerships

2. Targeting Strategy:
   • Focus on ${targetAudience} through personalized ad creatives
   • Peak engagement times: 6-9 PM weekdays
   • Geo-targeting: Major metropolitan areas

3. Creative Recommendations:
   • Use social proof in ad copy
   • A/B test video vs. static creatives
   • Implement dynamic pricing strategy

4. Performance Metrics:
   • Expected CPI: $1.2-1.5
   • Projected ROI: 280-320%
   • Estimated user acquisition: 15,000-20,000

5. Risk Mitigation:
   • Daily budget caps
   • Automated bid adjustments
   • Real-time performance monitoring`);
    
    setIsGenerating(false);
  };

  const handleReset = () => {
    setCampaignGoal('');
    setTargetAudience('');
    setBudget('');
    setOptimizedStrategy(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-purple-600 mr-2" size={24} />
              <h2 className="text-3xl font-bold text-gray-900">AI Campaign Optimizer</h2>
            </div>
            <p className="text-gray-600">Let our AI generate optimized marketing strategies for your app</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {!optimizedStrategy ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Goal
                  </label>
                  <select
                    value={campaignGoal}
                    onChange={(e) => setCampaignGoal(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select a goal</option>
                    <option value="installs">Maximize App Installs</option>
                    <option value="retention">Improve User Retention</option>
                    <option value="revenue">Increase Revenue</option>
                    <option value="engagement">Boost User Engagement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <select
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select target audience</option>
                    <option value="young-professionals">Young Professionals (25-34)</option>
                    <option value="students">Students (18-24)</option>
                    <option value="parents">Parents (30-45)</option>
                    <option value="business">Business Users (25-54)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-50000">$10,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                  </select>
                </div>

                <button
                  onClick={generateStrategy}
                  disabled={!campaignGoal || !targetAudience || !budget || isGenerating}
                  className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                    isGenerating ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <RotateCcw className="animate-spin mr-2" size={20} />
                      Generating Strategy...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Generate Strategy
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <pre className="whitespace-pre-wrap bg-gray-50 p-6 rounded-lg text-sm text-gray-800">
                  {optimizedStrategy}
                </pre>
                <div className="flex space-x-4">
                  <button
                    onClick={handleReset}
                    className="flex-1 flex items-center justify-center px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
                  >
                    <RotateCcw className="mr-2" size={20} />
                    Generate New Strategy
                  </button>
                  <button
                    onClick={() => {/* Implement download functionality */}}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  >
                    <Download className="mr-2" size={20} />
                    Download Strategy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICampaignOptimizer;