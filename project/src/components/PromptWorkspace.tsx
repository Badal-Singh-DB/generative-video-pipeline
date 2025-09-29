import { useState } from 'react';
import { Wand2, Brain, Zap, Sparkles } from 'lucide-react';

export default function PromptWorkspace() {
  const [prompt, setPrompt] = useState('A cinematic sequence of a futuristic city at sunset, with flying cars and neon lights reflecting on wet streets');
  const [style, setStyle] = useState('cinematic');

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Wand2 className="w-5 h-5 text-purple-400" />
        <h2 className="text-lg font-semibold text-white">Prompt Engineering Workspace</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Master Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-24 bg-slate-900/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 resize-none"
            placeholder="Describe your video sequence..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-lg p-2 text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            >
              <option value="cinematic">Cinematic</option>
              <option value="anime">Anime</option>
              <option value="realistic">Photorealistic</option>
              <option value="artistic">Artistic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Duration</label>
            <select className="w-full bg-slate-900/50 border border-slate-600 rounded-lg p-2 text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400">
              <option value="5">5 seconds</option>
              <option value="10">10 seconds</option>
              <option value="15">15 seconds</option>
              <option value="30">30 seconds</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
            <Brain className="w-4 h-4" />
            Analyze Semantics
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
            <Zap className="w-4 h-4" />
            Generate Preview
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Sparkles className="w-4 h-4" />
            Start Pipeline
          </button>
        </div>

        <div className="bg-slate-900/30 rounded-lg p-4">
          <h3 className="text-sm font-medium text-slate-300 mb-2">Semantic Analysis</h3>
          <div className="flex flex-wrap gap-2">
            {['futuristic', 'city', 'sunset', 'cinematic', 'atmospheric', 'neon'].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}