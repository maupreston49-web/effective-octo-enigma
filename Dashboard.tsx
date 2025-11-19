import { Activity, Zap, Shield, User as UserIcon, Bot, BrainCircuit } from "lucide-react";
import { USER_STATS } from "../lib/constants";

export default function Dashboard() {
  return (
    <div className="p-6 md:p-8 bg-slate-950 h-full text-white overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8">User Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Level", value: USER_STATS.level, icon: Activity, color: "text-blue-400" },
          { label: "Total XP", value: USER_STATS.xp, icon: Zap, color: "text-yellow-400" },
          { label: "Reputation", value: "Elite", icon: Shield, color: "text-green-400" },
          { label: "Joined", value: USER_STATS.joinedDate, icon: UserIcon, color: "text-purple-400" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`${stat.color} w-6 h-6`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h3 className="text-xl font-bold mb-4">Recent Sessions</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Bot size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Chat Session #{100 + i}</p>
                    <p className="text-xs text-slate-400">2 hours ago</p>
                  </div>
                </div>
                <span className="text-sm text-purple-400">Active</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h3 className="text-xl font-bold mb-4">Training Progress</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Pattern Recognition</span>
                <span className="text-purple-400">75%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-3/4" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Context Awareness</span>
                <span className="text-pink-400">40%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 w-2/5" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Reinforcement Cycles</span>
                <span className="text-blue-400">32%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-1/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
