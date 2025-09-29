import { RotateCcw, TrendingUp, Target, Award } from 'lucide-react';

const feedbackMetrics = [
  { metric: 'CLIP Score Alignment', value: 0.847, trend: 'up', target: 0.85 },
  { metric: 'Perceptual Quality', value: 8.92, trend: 'up', target: 9.0 },
  { metric: 'Temporal Consistency', value: 0.934, trend: 'stable', target: 0.93 },
  { metric: 'User Satisfaction', value: 4.23, trend: 'up', target: 4.5 },
];

export default function FeedbackLoop() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-2 mb-6">
        <RotateCcw className="w-5 h-5 text-indigo-400" />
        <h2 className="text-lg font-semibold text-white">Self-Supervised Feedback Loop</h2>
      </div>

      <div className="space-y-4">
        {feedbackMetrics.map((metric) => (
          <div key={metric.metric} className="bg-slate-900/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-white">{metric.metric}</span>
              <div className="flex items-center gap-2">
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : metric.trend === 'down' ? (
                  <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />
                ) : (
                  <Target className="w-4 h-4 text-blue-400" />
                )}
                <span className={`text-sm font-medium
                  ${metric.trend === 'up' ? 'text-green-400' :
                    metric.trend === 'down' ? 'text-red-400' :
                    'text-blue-400'}
                `}>
                  {metric.trend}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Current: {metric.value}</span>
                  <span className="text-slate-400">Target: {metric.target}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300
                      ${metric.value >= metric.target ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        metric.value >= metric.target * 0.9 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-red-500 to-pink-500'}
                    `}
                    style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                  />
                </div>
              </div>
              {metric.value >= metric.target && (
                <Award className="w-5 h-5 text-yellow-400" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-slate-900/30 rounded-lg p-4">
        <h3 className="text-sm font-medium text-slate-300 mb-3">Reinforcement Learning Status</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Training Episodes</span>
            <span className="text-white">12,847</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Reward Signal</span>
            <span className="text-green-400">+0.023</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Model Updates</span>
            <span className="text-white">342</span>
          </div>
        </div>
      </div>
    </div>
  );
}