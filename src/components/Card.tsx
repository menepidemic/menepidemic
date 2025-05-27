
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  id: number;
  category: string;
  question: string;
  isRevealed: boolean;
  onClick: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ id, category, question, isRevealed, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative w-full max-w-md mx-auto h-64 cursor-pointer transition-all duration-500 transform-gpu perspective-1000",
        "hover:scale-105 active:scale-95",
        className
      )}
    >
      <div className={cn(
        "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
        isRevealed ? "rotate-y-180" : ""
      )}>
        {/* Card Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700">
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-6xl mb-4">
              ❤️
            </div>
            <div className="text-slate-300 text-sm font-medium tracking-wide uppercase">
              Tap to reveal
            </div>
          </div>
        </div>

        {/* Card Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl border border-indigo-200">
          <div className="flex flex-col h-full p-6">
            <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
              {category}
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-slate-800 text-lg leading-relaxed font-medium">
                {question}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
