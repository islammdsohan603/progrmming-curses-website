'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const SosailLoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.social({
        provider: 'google',
      });

      if (error) {
        toast.error(error.message || 'Google sign in failed');
      } else if (data) {
        toast.success('Google sign in successful');
      }
    } catch (err) {
      console.error('Google sign in error:', err);
      toast.error('Google sign in failed');
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <div className="w-full mt-6">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-3xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-red-500 via-orange-500 to-yellow-400 text-white shadow-sm shadow-slate-950/20 transition">
          <span className="text-lg font-black tracking-tight">G</span>
        </span>

        <span className="flex-1 text-left">
          {loading ? 'লোড হচ্ছে...' : 'Google দিয়ে চালান'}
        </span>

        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
        ) : (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 text-slate-700">
            ➜
          </span>
        )}
      </button>
    </div>
  );
};

export default SosailLoginButton;
