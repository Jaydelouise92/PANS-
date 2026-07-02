import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Users,
  MessageSquare,
  Star,
  BookOpen,
  TrendingUp,
  Calendar,
  ChevronRight,
  ShieldAlert,
  Search,
  Filter
} from 'lucide-react';
import { getApiUrl } from '../lib/api';

type ContactSubmission = {
  id: number;
  name: string;
  email: string;
  subject: string;
  supportType: string;
  message: string;
  createdAt: string;
};

type Feedback = {
  id: number;
  rating: string;
  message: string;
  helpful: string;
  name: string;
  email: string;
  createdAt: string;
};

type Story = {
  id: number;
  title: string;
  author: string;
  content: string;
  stage: string;
  createdAt: string;
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'feedback' | 'stories'>('overview');
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');

  const fetchDashboardData = async (token: string) => {
    setLoading(true);
    try {
      const res = await fetch(getApiUrl('/api/dashboard'), {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts || []);
        setFeedbacks(data.feedbacks || []);
        setStories(data.stories || []);
        setIsAuthenticated(true);
        localStorage.setItem('pans_dashboard_token', token);
      } else {
        setLoginError('Invalid dashboard password.');
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Dashboard fetch error:', error);
      setLoginError('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('pans_dashboard_token');
    if (savedToken) {
      fetchDashboardData(savedToken);
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchDashboardData(password);
  };

  if (loading && !isAuthenticated) {
    return (
      <div className="pt-24 flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="pt-24 px-6 min-h-screen bg-brand-secondary flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-purple-100"
        >
          <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert size={32} className="text-brand-primary" />
          </div>
          <h1 className="text-2xl font-serif text-center mb-6">PANS Dashboard Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="dashboard-password" className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">Password</label>
              <input
                id="dashboard-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-brand-primary outline-none"
                placeholder="Enter dashboard password"
                required
              />
            </div>
            {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-brand-primary/90 transition-all"
            >
              Access Dashboard
            </button>
          </form>
          <p className="text-[10px] text-stone-400 text-center mt-6 uppercase tracking-widest">
            Protected Admin Area
          </p>
        </motion.div>
      </div>
    );
  }

  const StatCard = ({ icon: Icon, label, value, color }: any) => (
    <div className="bg-white p-6 rounded-3xl border border-purple-50 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-stone-500 text-sm mb-1">{label}</p>
          <h3 className="text-3xl font-serif text-stone-900">{value}</h3>
        </div>
        <div className={`p-3 rounded-2xl ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 px-6 pb-20 bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-serif text-stone-900">Site Management</h1>
            <p className="text-stone-500">Track activity and manage inquiries.</p>
          </div>
          <div className="flex bg-white p-1 rounded-2xl border border-purple-100 shadow-sm">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'contacts', label: 'Messages' },
              { id: 'feedback', label: 'Feedback' },
              { id: 'stories', label: 'Stories' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-primary text-white'
                    : 'text-stone-500 hover:text-brand-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard icon={Users} label="New Clients" value={contacts.length} color="bg-blue-500" />
              <StatCard icon={MessageSquare} label="Total Messages" value={contacts.length} color="bg-brand-primary" />
              <StatCard icon={Star} label="Avg Rating" value={
                feedbacks.length > 0
                  ? (feedbacks.reduce((acc, f) => acc + (parseInt(f.rating) || 0), 0) / feedbacks.length).toFixed(1)
                  : '0.0'
              } color="bg-amber-500" />
              <StatCard icon={BookOpen} label="Stories Submitted" value={stories.length} color="bg-emerald-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-purple-50 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl">Recent Inquiries</h3>
                  <button onClick={() => setActiveTab('contacts')} className="text-brand-primary text-sm font-bold flex items-center gap-1">
                    View all <ChevronRight size={16} />
                  </button>
                </div>
                <div className="space-y-4">
                  {contacts.slice(0, 5).map((c) => (
                    <div key={c.id} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {c.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm text-stone-900">{c.name}</p>
                        <p className="text-xs text-stone-500 line-clamp-1">{c.subject}</p>
                      </div>
                      <div className="text-[10px] text-stone-400 font-medium">
                        {new Date(c.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                  {contacts.length === 0 && <p className="text-stone-400 text-sm text-center py-4">No messages yet.</p>}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-purple-50 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl">Feedback Summary</h3>
                  <button onClick={() => setActiveTab('feedback')} className="text-brand-primary text-sm font-bold flex items-center gap-1">
                    View all <ChevronRight size={16} />
                  </button>
                </div>
                <div className="space-y-4">
                  {feedbacks.slice(0, 5).map((f) => (
                    <div key={f.id} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <Star size={16} fill="currentColor" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm text-stone-900">{f.rating} / 5 Stars</p>
                        <p className="text-xs text-stone-500 line-clamp-1">{f.message || 'No comment'}</p>
                      </div>
                      <div className="text-[10px] text-stone-400 font-medium">
                        {new Date(f.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                  {feedbacks.length === 0 && <p className="text-stone-400 text-sm text-center py-4">No feedback yet.</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="bg-white rounded-3xl border border-purple-50 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="font-serif text-xl">Message Inbox</h3>
              <div className="relative">
                <label htmlFor="search-messages" className="sr-only">Search messages</label>
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                <input
                  id="search-messages"
                  type="text"
                  placeholder="Search messages..."
                  className="pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm outline-none focus:border-brand-primary w-full md:w-64"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-stone-50 border-b border-stone-100">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {contacts.map((c) => (
                    <tr key={c.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-stone-500 whitespace-nowrap">{new Date(c.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-stone-900">{c.name}</p>
                        <p className="text-xs text-stone-500">{c.email}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-700">{c.subject}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-purple-100 text-brand-primary text-[10px] font-bold rounded-lg uppercase tracking-wider">
                          {c.supportType}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-500">
                        <div className="max-w-xs truncate">{c.message}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbacks.map((f) => (
              <div key={f.id} className="bg-white p-6 rounded-3xl border border-purple-50 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(n => (
                      <Star key={n} size={14} fill={n <= parseInt(f.rating) ? '#F59E0B' : 'none'} className={n <= parseInt(f.rating) ? 'text-amber-500' : 'text-stone-200'} />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400 font-bold uppercase">{new Date(f.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-stone-700 text-sm mb-6 flex-1 italic">"{f.message || 'No comment provided'}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-50">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 text-xs font-bold">
                    {(f.name || 'A').charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900">{f.name || 'Anonymous Parent'}</p>
                    <p className="text-[10px] text-stone-500">Was helpful: {f.helpful || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'stories' && (
          <div className="space-y-6">
            {stories.map((s) => (
              <div key={s.id} className="bg-white p-8 rounded-3xl border border-purple-50 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-serif text-stone-900 mb-1">{s.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-stone-500">
                      <span className="font-bold text-brand-primary uppercase tracking-widest">{s.stage}</span>
                      <span>By {s.author}</span>
                      <span>{new Date(s.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="prose prose-sm text-stone-600 line-clamp-4 leading-relaxed">
                  {s.content}
                </div>
                <button className="mt-6 text-brand-primary text-sm font-bold hover:underline">Read full story</button>
              </div>
            ))}
            {stories.length === 0 && (
              <div className="bg-white p-12 rounded-3xl border border-dashed border-stone-200 text-center">
                <p className="text-stone-500">No stories have been submitted yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
