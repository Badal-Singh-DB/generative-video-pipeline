import { Cpu, Layers, TrendingUp, Activity } from 'lucide-react';

const models = [
  { name: 'Stable Diffusion XL', status: 'Fine-tuning', progress: 73, gpu: 'A100' },
  { name: 'Flux.1 Dev', status: 'Ready', progress: 100, gpu: 'H100' },
  { name: 'CLIP Encoder', status: 'Ready', progress: 100, gpu: 'V100' },
  { name: 'Temporal VAE', status: 'Training', progress: 45, gpu: 'A100' },
];

export default function ModelDashboard() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Layers className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg font-semibold text-white">Model Dashboard</h2>
      </div>

      <div className="space-y-4">
        {models.map((model) => (
          <div key={model.name} className="bg-slate-900/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Cpu className="w-4 h-4 text-slate-400" />
                <span className="font-medium text-white">{model.name}</span>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">{model.gpu}</span>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium
                ${model.status === 'Ready' ? 'bg-green-500/20 text-green-400' :
                  model.status === 'Fine-tuning' || model.status === 'Training' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-slate-500/20 text-slate-400'}
              `}>
                {model.status}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-white">{model.progress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${model.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Activity className="w-4 h-4 text-green-400" />
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-slate-900/30 rounded-lg p-3">
          <p className="text-xs text-slate-400">Total GPU Hours</p>
          <p className="text-lg font-bold text-white">847.2</p>
        </div>
        <div className="bg-slate-900/30 rounded-lg p-3">
          <p className="text-xs text-slate-400">Training Efficiency</p>
          <p className="text-lg font-bold text-white">94.3%</p>
        </div>
      </div>
    </div>
  );
}