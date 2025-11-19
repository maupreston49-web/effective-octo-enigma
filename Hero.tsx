"use client";

import { useRouter } from "next/navigation";
import { Bot, MessageSquare, Users, BrainCircuit } from "lucide-react";

interface HeroProps {
  autoFocusChat?: boolean;
}

export default function Hero({ autoFocusChat }: HeroProps) {
  const router = useRouter();

  const handleStart = () => {
    router.push("/chat");
  };

  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-6 bg-slate-950 text-white overflow-y-auto">
      <div className="max-w-3xl animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 rounded-full" />
            <Bot size={80} className="relative text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Welcome to <span className="text-purple-500">Wildcord</span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          The next-generation AI community platform. Train your models, chat with advanced agents,
          and connect with other creators in a decentralized hive mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleStart}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            Enter the Wild
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold text-lg transition-all">
            Documentation
          </button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {[
          { title: "AI Chat", desc: "Powered by Gemini Pro", icon: MessageSquare },
          { title: "Community", desc: "Connect with thousands", icon: Users },
          { title: "Training", desc: "Fine-tune your experience", icon: BrainCircuit },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors"
          >
            <feature.icon className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
