import { Play, Settings, BarChart3, Database } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Generative Video Pipeline</h1>
              <p className="text-sm text-slate-400">Prompt-Aware • Stable Diffusion • Flux</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Pipeline Active
            </div>
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}