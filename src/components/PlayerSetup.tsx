
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Plus, Trash2 } from 'lucide-react';

interface PlayerSetupProps {
  onStartGame: (playerNames: string[]) => void;
}

const PlayerSetup: React.FC<PlayerSetupProps> = ({ onStartGame }) => {
  const [players, setPlayers] = useState<string[]>(['']);
  
  const addPlayer = () => {
    if (players.length < 8) {
      setPlayers([...players, '']);
    }
  };
  
  const removePlayer = (index: number) => {
    if (players.length > 1) {
      setPlayers(players.filter((_, i) => i !== index));
    }
  };
  
  const updatePlayer = (index: number, name: string) => {
    const newPlayers = [...players];
    newPlayers[index] = name;
    setPlayers(newPlayers);
  };
  
  const canStartGame = players.filter(name => name.trim().length > 0).length >= 1;
  
  const handleStartGame = () => {
    const validNames = players.filter(name => name.trim().length > 0);
    onStartGame(validNames);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/50 max-w-md w-full">
        <div className="text-center mb-8">
          <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Setup Players</h1>
          <p className="text-slate-600">Enter the names of everyone who will be playing</p>
        </div>
        
        <div className="space-y-4">
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="flex-1">
                <Label htmlFor={`player-${index}`} className="sr-only">
                  Player {index + 1} name
                </Label>
                <Input
                  id={`player-${index}`}
                  type="text"
                  placeholder={`Player ${index + 1} name`}
                  value={player}
                  onChange={(e) => updatePlayer(index, e.target.value)}
                  className="w-full"
                />
              </div>
              {players.length > 1 && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removePlayer(index)}
                  className="flex-shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={addPlayer}
            disabled={players.length >= 8}
            className="flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Player</span>
          </Button>
          
          <Button
            onClick={handleStartGame}
            disabled={!canStartGame}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
          >
            Start Game
          </Button>
        </div>
        
        <p className="text-xs text-slate-500 text-center mt-4">
          Add 1-8 players to begin
        </p>
      </div>
    </div>
  );
};

export default PlayerSetup;
