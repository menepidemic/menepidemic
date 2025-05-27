
import React, { useState, useEffect } from 'react';
import { Shuffle, RotateCcw, Heart } from 'lucide-react';
import Card from '@/components/Card';
import LoadingQuote from '@/components/LoadingQuote';
import { cards, CardData } from '@/data/cards';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const [shuffledCards, setShuffledCards] = useState<CardData[]>(cards);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleShuffle = () => {
    const shuffled = shuffleArray(cards);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
    setRevealedCards(new Set());
  };

  const handleReset = () => {
    setShuffledCards(cards);
    setCurrentCardIndex(0);
    setRevealedCards(new Set());
  };

  const handleCardClick = () => {
    const currentCard = shuffledCards[currentCardIndex];
    if (!revealedCards.has(currentCard.id)) {
      setRevealedCards(prev => new Set(prev).add(currentCard.id));
    } else {
      // Move to next card
      if (currentCardIndex < shuffledCards.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
      }
    }
  };

  const handleNextCard = () => {
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
    }
  };

  const currentCard = shuffledCards[currentCardIndex];
  const isCurrentCardRevealed = revealedCards.has(currentCard.id);
  const progress = ((currentCardIndex + 1) / shuffledCards.length) * 100;

  if (isLoading) {
    return <LoadingQuote onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-indigo-600" />
              <h1 className="text-xl font-bold text-slate-800">Connection Cards</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShuffle}
                className="flex items-center space-x-1"
              >
                <Shuffle className="w-4 h-4" />
                <span className="hidden sm:inline">Shuffle</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="flex items-center space-x-1"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </Button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-sm text-slate-600 mb-1">
              <span>Progress</span>
              <span>{currentCardIndex + 1} of {shuffledCards.length}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            Meaningful Conversations
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {isCurrentCardRevealed 
              ? "Reflect on your answer, then tap the card or use the buttons below to continue."
              : "Tap the card below to reveal your conversation starter."
            }
          </p>
        </div>

        {/* Card Display */}
        <div className="mb-8">
          <Card
            id={currentCard.id}
            category={currentCard.category}
            question={currentCard.question}
            isRevealed={isCurrentCardRevealed}
            onClick={handleCardClick}
          />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            onClick={handlePrevCard}
            disabled={currentCardIndex === 0}
            className="px-6"
          >
            Previous
          </Button>
          
          {isCurrentCardRevealed && (
            <Button
              onClick={handleNextCard}
              disabled={currentCardIndex === shuffledCards.length - 1}
              className="px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
            >
              {currentCardIndex === shuffledCards.length - 1 ? 'Complete!' : 'Next Card'}
            </Button>
          )}
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Tips for deeper conversations:</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Answer first yourself to model openness and create safety</li>
            <li>• Follow responses with "Say more?" or "What was that like for you?"</li>
            <li>• Allow silence after vulnerable shares—it's normal and needed</li>
            <li>• Focus on listening rather than thinking of your next response</li>
          </ul>
        </div>

        {/* Completion Message */}
        {currentCardIndex === shuffledCards.length - 1 && isCurrentCardRevealed && (
          <div className="mt-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              You've completed all 100 cards!
            </h3>
            <p className="text-green-700 mb-4">
              You've taken a meaningful step toward deeper connection and vulnerability.
            </p>
            <Button onClick={handleReset} className="bg-green-600 hover:bg-green-700">
              Start Over
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
