
import React, { useState, useEffect } from 'react';

const quotes = [
  "Sharing your emotions unapologetically and unbiasedly is masculine",
  "Vulnerability is not winning or losing; it's having the courage to show up when you can't control the outcome",
  "Real strength lies in authentic connection, not in isolation",
  "The bravest thing you can do is to be yourself in a world that's trying to make you someone else",
  "Emotional intelligence is a superpower that transforms boys into men"
];

interface LoadingQuoteProps {
  onLoadingComplete: () => void;
}

const LoadingQuote: React.FC<LoadingQuoteProps> = ({ onLoadingComplete }) => {
  const [currentQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center px-6 max-w-2xl">
        <div className="mb-8">
          <div className="text-6xl font-bold text-white mb-4">💭</div>
          <h1 className="text-3xl font-bold text-white mb-2">Connection Cards</h1>
          <p className="text-slate-300">Meaningful conversations for genuine connection</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <p className="text-xl text-white font-medium leading-relaxed italic">
            "{currentQuote}"
          </p>
        </div>
        
        <div className="mt-8">
          <div className="animate-pulse text-slate-400 text-sm">Loading your conversation starters...</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingQuote;
