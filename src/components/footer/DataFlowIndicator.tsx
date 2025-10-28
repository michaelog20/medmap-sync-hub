import { Server } from 'lucide-react';

export const DataFlowIndicator = () => {
  return (
    <div className="flex items-center gap-3 text-foreground/70 mb-6">
      <div className="relative">
        <Server className="h-5 w-5" />
        <div className="data-flow-dot data-flow-dot-1" />
        <div className="data-flow-dot data-flow-dot-2" />
        <div className="data-flow-dot data-flow-dot-3" />
      </div>
      <span className="text-xs font-mono">System Active</span>
    </div>
  );
};
