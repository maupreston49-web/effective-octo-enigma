import { BrainCircuit } from "lucide-react";

export default function Training() {
  return (
    <div className="p-6 md:p-8 bg-slate-950 h-full text-white flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
        <div className="bg-purple-500/20 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <BrainCircuit size={48} className="text-purple-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Model Training Center</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Fine-tune your personal AI agent. Upload datasets, set behavioral parameters,
          and run simulations to improve performance.
        </p>

        <div className="bg-slate-900 rounded-xl border border-dashed border-slate-700 p-10 mb-8">
          <p className="text-slate-500">Drag and drop training data (JSON, CSV, TXT)</p>
        </div>

        <button
          className="px-8 py-3 bg-slate-800 text-slate-400 rounded-lg cursor-not-allowed"
          disabled
        >
          Start Training Session (Coming Soon)
        </button>
      </div>
    </div>
  );
}
