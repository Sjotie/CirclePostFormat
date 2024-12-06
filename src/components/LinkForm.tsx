import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { submitLink } from '../utils/api';
import { isValidUrl } from '../utils/validation';

export function LinkForm() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidUrl(url)) {
      setStatus('error');
      setErrorMessage('Please enter a valid URL');
      return;
    }

    try {
      setStatus('loading');
      await submitLink(url);
      setStatus('success');
      setUrl('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit link. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
      <div className="relative">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL here..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <Send className={`w-5 h-5 ${status === 'loading' ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}
      
      {status === 'success' && (
        <p className="text-green-500 text-sm">Link submitted successfully!</p>
      )}
    </form>
  );
}