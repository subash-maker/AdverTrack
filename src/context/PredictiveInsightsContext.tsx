import React, { createContext, useContext, useState, useEffect } from 'react';

interface InsightData {
  targetingAccuracy: number;
  retentionRate: number;
  roiImprovement: number;
  recommendations: string[];
}

interface PredictiveInsightsContextType {
  insights: InsightData | null;
  loading: boolean;
  error: string | null;
}

const PredictiveInsightsContext = createContext<PredictiveInsightsContextType>({
  insights: null,
  loading: false,
  error: null,
});

export const usePredictiveInsights = () => useContext(PredictiveInsightsContext);

export const PredictiveInsightsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [insights, setInsights] = useState<InsightData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setInsights({
          targetingAccuracy: 28,
          retentionRate: 92,
          roiImprovement: 42,
          recommendations: [
            'Increase budget allocation for 25-34 age group',
            'Focus on evening hours for maximum engagement',
            'Reallocate budget to high-performing channels'
          ]
        });
      } catch (err) {
        setError('Failed to fetch insights');
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  return (
    <PredictiveInsightsContext.Provider value={{ insights, loading, error }}>
      {children}
    </PredictiveInsightsContext.Provider>
  );
};