import React from 'react';

function WordDisplay({ wordToGuess, guessedLetters, revealAll }) {
  return (
    <div style={styles.wrapper}>
      {/* Map through the word string to create underscore/letter slots */}
      {wordToGuess.split('').map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter);
        const isVisible = isGuessed || revealAll;

        return (
          <span
            key={index}
            style={{
              ...styles.letter,
              color: !isGuessed && revealAll ? 'red' : 'black', // Reveal missed letters in red
            }}
          >
            {isVisible ? letter : ''}
          </span>
        );
      })}
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    gap: '0.25em',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    margin: '30px 0',
    justifyContent: 'center',
  },
  letter: {
    borderBottom: '.1em solid black',
    minWidth: '50px',
    textAlign: 'center',
  },
};

export default WordDisplay;
