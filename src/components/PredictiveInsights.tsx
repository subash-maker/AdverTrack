import React from 'react';
import { Brain, TrendingUp, Users, DollarSign } from 'lucide-react';
import { usePredictiveInsights } from '../context/PredictiveInsightsContext';

const PredictiveInsights = () => {
  const { insights, loading } = usePredictiveInsights();

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Campaign Insights</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Leverage our advanced AI to optimize your campaigns and predict user behavior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Campaign Optimization */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Brain className="text-purple-300 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Campaign Optimization</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Targeting Accuracy</span>
                <div className="flex items-center">
                  <span className="text-green-400">+28%</span>
                  <TrendingUp size={16} className="ml-1 text-green-400" />
                </div>
              </div>
              <div className="bg-purple-200/20 p-4 rounded-lg">
                <p className="text-sm">
                  Recommended: Increase budget allocation for 25-34 age group in urban areas
                </p>
              </div>
            </div>
          </div>

          {/* Churn Prediction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Users className="text-purple-300 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Churn Prediction</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Retention Rate</span>
                <div className="flex items-center">
                  <span className="text-green-400">92%</span>
                  <TrendingUp size={16} className="ml-1 text-green-400" />
                </div>
              </div>
              <div className="bg-purple-200/20 p-4 rounded-lg">
                <p className="text-sm">
                  Alert: 15% of premium users showing signs of churn. Recommended actions available.
                </p>
              </div>
            </div>
          </div>

          {/* Budget Optimization */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <DollarSign className="text-purple-300 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Budget Optimization</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>ROI Improvement</span>
                <div className="flex items-center">
                  <span className="text-green-400">+42%</span>
                  <TrendingUp size={16} className="ml-1 text-green-400" />
                </div>
              </div>
              <div className="bg-purple-200/20 p-4 rounded-lg">
                <p className="text-sm">
                  Opportunity: Reallocate 20% of budget to high-performing channels
                </p>
              </div>
            </div>
          </div>

          {/* Real-time Insights */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-purple-300 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Real-time Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Live Performance</span>
                <div className="flex items-center">
                  <span className="text-green-400">Active</span>
                </div>
              </div>
              <div className="bg-purple-200/20 p-4 rounded-lg">
                <p className="text-sm">
                  Current Trend: Engagement peaks during evening hours. Adjust scheduling accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveInsights;