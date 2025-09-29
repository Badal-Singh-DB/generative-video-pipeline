import { Database, FileVideo, Filter, CheckCircle2 } from 'lucide-react';

const datasets = [
  { name: 'Cinematic Sequences', size: '2.4TB', processed: 87432, quality: 9.2 },
  { name: 'Animation Clips', size: '1.8TB', processed: 62187, quality: 8.9 },
  { name: 'Documentary Footage', size: '3.1TB', processed: 94576, quality: 8.7 },
  { name: 'Commercial Videos', size: '1.2TB', processed: 41203, quality: 9.0 },
];

export default function DataIngestionStats() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Database className="w-5 h-5 text-emerald-400" />
        <h2 className="text-lg font-semibold text-white">Data Ingestion & Quality</h2>
      </div>

      <div className="space-y-4">
        {datasets.map((dataset) => (
          <div key={dataset.name} className="bg-slate-900/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <FileVideo className="w-4 h-4 text-slate-400" />
                <span className="font-medium text-white">{dataset.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Validated</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-3">
              <div>
                <p className="text-xs text-slate-400">Dataset Size</p>
                <p className="text-sm font-medium text-white">{dataset.size}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Frames Processed</p>
                <p className="text-sm font-medium text-white">{dataset.processed.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Quality Score</p>
                <p className="text-sm font-medium text-white">{dataset.quality}/10</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-slate-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">Filtering Pipeline</span>
          </div>
          <p className="text-xl font-bold text-white">94.7%</p>
          <p className="text-xs text-slate-400">Pass Rate</p>
        </div>
        <div className="bg-slate-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-sm text-slate-300">Quality Validation</span>
          </div>
          <p className="text-xl font-bold text-white">8.92</p>
          <p className="text-xs text-slate-400">Avg Score</p>
        </div>
      </div>
    </div>
  );
}