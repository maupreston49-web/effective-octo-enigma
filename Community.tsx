import { MessageSquare, Activity, User as UserIcon } from "lucide-react";
import { MOCK_COMMUNITY_POSTS } from "../lib/constants";

export default function Community() {
  return (
    <div className="p-6 md:p-8 bg-slate-950 h-full text-white overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Community Hub</h2>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium">
          New Post
        </button>
      </div>

      <div className="space-y-4">
        {MOCK_COMMUNITY_POSTS.map((post) => (
          <div
            key={post.id}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <UserIcon size={14} /> {post.user}
                </p>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1">
                  <MessageSquare size={16} /> {post.replies}
                </span>
                <span className="flex items-center gap-1">
                  <Activity size={16} /> {post.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
