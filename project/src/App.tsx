import Header from './components/Header';
import PipelineOverview from './components/PipelineOverview';
import PromptWorkspace from './components/PromptWorkspace';
import ModelDashboard from './components/ModelDashboard';
import ComputerVisionPanel from './components/ComputerVisionPanel';
import DataIngestionStats from './components/DataIngestionStats';
import InfrastructureMonitor from './components/InfrastructureMonitor';
import FeedbackLoop from './components/FeedbackLoop';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Pipeline Overview */}
          <PipelineOverview />
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PromptWorkspace />
            <ModelDashboard />
          </div>
          
          {/* Computer Vision and Data Ingestion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ComputerVisionPanel />
            <DataIngestionStats />
          </div>
          
          {/* Infrastructure and Feedback */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <InfrastructureMonitor />
            <FeedbackLoop />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;