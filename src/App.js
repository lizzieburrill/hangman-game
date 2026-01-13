import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { getRandomWord } from './dictionary';
import Header from './components/Header';
import HangmanDrawing from './components/HangmanDrawing';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import GameStatus from './components/GameStatus';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Calculate incorrect guesses based on letters that are not in the word
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 10; // Base, Pole, Beam, Rope, Head, Body, L-Arm, R-Arm, L-Leg, R-Leg
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((current) => [...current, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  // Restart game
  const restartGame = () => {
    setGuessedLetters([]);
    setWordToGuess(getRandomWord());
  };

  // Show help
  const showHelp = () => {
    alert(
      'RULES:\n1. Guess the hidden word letter by letter.\n2. You have 10 attempts.\n3. Each wrong guess draws a part of the Hangman.\n4. Save him before the drawing is complete!'
    );
  };

  return (
    <div className="App">
      <Header onHelp={showHelp} />

      <div className="game-container">
        {/* The drawing */}
        <HangmanDrawing mistakes={incorrectLetters.length} />

        {/* The word */}
        <WordDisplay
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
          revealAll={isLoser} // Reveal word if lost
        />

        {/* The keyboard */}
        <div style={{ alignSelf: 'stretch' }}>
          <Keyboard
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
            disabled={isWinner || isLoser}
          />
        </div>
      </div>

      {/* Win/loss overlay */}
      <GameStatus
        isWinner={isWinner}
        isLoser={isLoser}
        onRestart={restartGame}
      />
    </div>
  );
}

export default App;
