import { Eye, Scan, Target, Layers3 } from 'lucide-react';

const cvModules = [
  { name: 'Object Detection', status: 'active', confidence: 0.94 },
  { name: 'Segmentation', status: 'active', confidence: 0.87 },
  { name: 'Temporal Tracking', status: 'processing', confidence: 0.91 },
  { name: 'Mask Generation', status: 'ready', confidence: 0.89 },
];

export default function ComputerVisionPanel() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Eye className="w-5 h-5 text-cyan-400" />
        <h2 className="text-lg font-semibold text-white">Computer Vision Pipeline</h2>
      </div>

      <div className="space-y-4">
        {cvModules.map((module) => (
          <div key={module.name} className="bg-slate-900/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full
                  ${module.status === 'active' ? 'bg-green-400 animate-pulse' :
                    module.status === 'processing' ? 'bg-blue-400 animate-pulse' :
                    'bg-slate-400'}
                `} />
                <span className="font-medium text-white">{module.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">
                  {(module.confidence * 100).toFixed(1)}%
                </span>
                <div className={`p-1 rounded
                  ${module.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    module.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-slate-500/20 text-slate-400'}
                `}>
                  {module.status === 'active' ? <Target className="w-3 h-3" /> :
                   module.status === 'processing' ? <Scan className="w-3 h-3" /> :
                   <Layers3 className="w-3 h-3" />}
                </div>
              </div>
            </div>
            
            <div className="w-full bg-slate-700 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${module.confidence * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-slate-900/30 rounded-lg p-4">
        <h3 className="text-sm font-medium text-slate-300 mb-3">VACE Temporal Consistency</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Frame Coherence</span>
          <span className="text-green-400 font-medium">96.7%</span>
        </div>
        <div className="flex items-center justify-between text-sm mt-1">
          <span className="text-slate-400">Motion Smoothness</span>
          <span className="text-blue-400 font-medium">91.2%</span>
        </div>
      </div>
    </div>
  );
}