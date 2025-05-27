
import React, { useState, useEffect } from 'react';
import { RotateCcw, Heart, Users } from 'lucide-react';
import Card from '@/components/Card';
import LoadingQuote from '@/components/LoadingQuote';
import PlayerSetup from '@/components/PlayerSetup';
import { cards, CardData } from '@/data/cards';
import { Button } from '@/components/ui/button';

interface PlayerData {
  name: string;
  shuffledCards: CardData[];
  currentCardIndex: number;
  revealedCards: Set<number>;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStartGame = (playerNames: string[]) => {
    const newPlayers: PlayerData[] = playerNames.map(name => ({
      name,
      shuffledCards: shuffleArray(cards),
      currentCardIndex: 0,
      revealedCards: new Set()
    }));
    setPlayers(newPlayers);
    setCurrentPlayerIndex(0);
    setGameStarted(true);
  };

  const handleNewGame = () => {
    setGameStarted(false);
    setPlayers([]);
    setCurrentPlayerIndex(0);
  };

  const handleCardClick = () => {
    const currentPlayer = players[currentPlayerIndex];
    const currentCard = currentPlayer.shuffledCards[currentPlayer.currentCardIndex];
    
    if (!currentPlayer.revealedCards.has(currentCard.id)) {
      const newPlayers = [...players];
      newPlayers[currentPlayerIndex].revealedCards = new Set(currentPlayer.revealedCards).add(currentCard.id);
      setPlayers(newPlayers);
    } else {
      handleNextTurn();
    }
  };

  const handleNextTurn = () => {
    // Move to next player
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    
    // If we've completed a full round, advance all players' card indices
    if (nextPlayerIndex === 0) {
      const newPlayers = [...players];
      let allPlayersCompleted = true;
      
      for (let i = 0; i < newPlayers.length; i++) {
        if (newPlayers[i].currentCardIndex < newPlayers[i].shuffledCards.length - 1) {
          newPlayers[i].currentCardIndex += 1;
          allPlayersCompleted = false;
        }
      }
      
      setPlayers(newPlayers);
      
      // If all players have completed all cards, game ends
      if (allPlayersCompleted) {
        return;
      }
    }
    
    setCurrentPlayerIndex(nextPlayerIndex);
  };

  const handlePrevTurn = () => {
    // Move to previous player
    const prevPlayerIndex = currentPlayerIndex === 0 ? players.length - 1 : currentPlayerIndex - 1;
    
    // If we're going back from the first player, go back a round
    if (currentPlayerIndex === 0) {
      const newPlayers = [...players];
      let canGoBack = false;
      
      for (let i = 0; i < newPlayers.length; i++) {
        if (newPlayers[i].currentCardIndex > 0) {
          newPlayers[i].currentCardIndex -= 1;
          canGoBack = true;
        }
      }
      
      if (canGoBack) {
        setPlayers(newPlayers);
      } else {
        return; // Can't go back further
      }
    }
    
    setCurrentPlayerIndex(prevPlayerIndex);
  };

  if (isLoading) {
    return <LoadingQuote onLoadingComplete={() => setIsLoading(false)} />;
  }

  if (!gameStarted) {
    return <PlayerSetup onStartGame={handleStartGame} />;
  }

  const currentPlayer = players[currentPlayerIndex];
  const currentCard = currentPlayer.shuffledCards[currentPlayer.currentCardIndex];
  const isCurrentCardRevealed = currentPlayer.revealedCards.has(currentCard.id);
  const allPlayersFinished = players.every(p => p.currentCardIndex === p.shuffledCards.length - 1 && p.revealedCards.has(p.shuffledCards[p.currentCardIndex].id));

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
                onClick={handleNewGame}
                className="flex items-center space-x-1"
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">New Game</span>
              </Button>
            </div>
          </div>
          
          {/* Player Info */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-sm text-slate-600 mb-1">
              <span className="font-semibold text-indigo-600">
                {currentPlayer.name}'s Turn
              </span>
              <span>
                Round {currentPlayer.currentCardIndex + 1} of {currentPlayer.shuffledCards.length}
              </span>
            </div>
            <div className="flex space-x-1">
              {players.map((player, index) => (
                <div
                  key={player.name}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                    index === currentPlayerIndex
                      ? 'bg-gradient-to-r from-indigo-500 to-blue-500'
                      : player.currentCardIndex === player.shuffledCards.length - 1
                      ? 'bg-green-400'
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              {players.map((player, index) => (
                <span
                  key={player.name}
                  className={`${index === currentPlayerIndex ? 'font-semibold text-indigo-600' : ''}`}
                >
                  {player.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            Question for {currentPlayer.name}
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
            onClick={handlePrevTurn}
            disabled={currentPlayerIndex === 0 && players.every(p => p.currentCardIndex === 0)}
            className="px-6"
          >
            Previous
          </Button>
          
          {isCurrentCardRevealed && !allPlayersFinished && (
            <Button
              onClick={handleNextTurn}
              className="px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
            >
              Next Turn
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
        {allPlayersFinished && (
          <div className="mt-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              All players have completed their cards!
            </h3>
            <p className="text-green-700 mb-4">
              You've all taken meaningful steps toward deeper connection and vulnerability.
            </p>
            <Button onClick={handleNewGame} className="bg-green-600 hover:bg-green-700">
              Start New Game
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
