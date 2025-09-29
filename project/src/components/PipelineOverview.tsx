import { ArrowRight, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const stages = [
  { name: 'Data Ingestion', status: 'completed', progress: 100 },
  { name: 'Preprocessing', status: 'completed', progress: 100 },
  { name: 'Model Fine-tuning', status: 'running', progress: 73 },
  { name: 'CV Integration', status: 'pending', progress: 0 },
  { name: 'Generation', status: 'pending', progress: 0 },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    case 'running':
      return <Clock className="w-5 h-5 text-blue-400 animate-pulse" />;
    default:
      return <AlertTriangle className="w-5 h-5 text-slate-400" />;
  }
};

export default function PipelineOverview() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <h2 className="text-lg font-semibold text-white mb-6">Pipeline Overview</h2>
      
      <div className="flex items-center justify-between mb-8">
        {stages.map((stage, index) => (
          <div key={stage.name} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center
                ${stage.status === 'completed' ? 'border-green-400 bg-green-400/10' :
                  stage.status === 'running' ? 'border-blue-400 bg-blue-400/10' :
                  'border-slate-600 bg-slate-800'}
              `}>
                <StatusIcon status={stage.status} />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-white">{stage.name}</p>
                <p className="text-xs text-slate-400">{stage.progress}%</p>
              </div>
            </div>
            {index < stages.length - 1 && (
              <ArrowRight className="w-5 h-5 text-slate-600 mx-4" />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-900/50 rounded-lg p-4">
          <p className="text-sm text-slate-400">Total Videos Generated</p>
          <p className="text-2xl font-bold text-white">1,247</p>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-4">
          <p className="text-sm text-slate-400">Average Quality Score</p>
          <p className="text-2xl font-bold text-white">8.7</p>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-4">
          <p className="text-sm text-slate-400">Processing Time</p>
          <p className="text-2xl font-bold text-white">12.3s</p>
        </div>
      </div>
    </div>
  );
}