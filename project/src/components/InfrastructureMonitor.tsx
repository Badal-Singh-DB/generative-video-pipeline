import { Server, Zap, Activity, Cloud } from 'lucide-react';

const infrastructure = [
  { service: 'Ray Cluster', status: 'healthy', nodes: 8, utilization: 73 },
  { service: 'Airflow Scheduler', status: 'healthy', tasks: 24, utilization: 45 },
  { service: 'Fal.ai Workers', status: 'scaling', nodes: 12, utilization: 89 },
  { service: 'Storage Backend', status: 'healthy', nodes: 4, utilization: 67 },
];

export default function InfrastructureMonitor() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Server className="w-5 h-5 text-orange-400" />
        <h2 className="text-lg font-semibold text-white">Infrastructure Monitor</h2>
      </div>

      <div className="space-y-4">
        {infrastructure.map((infra) => (
          <div key={infra.service} className="bg-slate-900/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full
                  ${infra.status === 'healthy' ? 'bg-green-400' :
                    infra.status === 'scaling' ? 'bg-yellow-400 animate-pulse' :
                    'bg-red-400'}
                `} />
                <span className="font-medium text-white">{infra.service}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-slate-400">Nodes/Tasks</p>
                  <p className="text-sm font-medium text-white">{infra.nodes}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Utilization</p>
                  <p className="text-sm font-medium text-white">{infra.utilization}%</p>
                </div>
              </div>
            </div>
            
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300
                  ${infra.utilization > 80 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                    infra.utilization > 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                    'bg-gradient-to-r from-green-500 to-emerald-500'}
                `}
                style={{ width: `${infra.utilization}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-slate-900/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-3 h-3 text-green-400" />
            <span className="text-xs text-slate-400">Uptime</span>
          </div>
          <p className="text-lg font-bold text-white">99.94%</p>
        </div>
        <div className="bg-slate-900/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span className="text-xs text-slate-400">Throughput</span>
          </div>
          <p className="text-lg font-bold text-white">847/hr</p>
        </div>
        <div className="bg-slate-900/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Cloud className="w-3 h-3 text-blue-400" />
            <span className="text-xs text-slate-400">Cost/Hr</span>
          </div>
          <p className="text-lg font-bold text-white">$24.30</p>
        </div>
      </div>
    </div>
  );
}