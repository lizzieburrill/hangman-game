import React from 'react';

function GameStatus({ isWinner, isLoser, onRestart }) {
  if (!isWinner && !isLoser) return null; // Don't show if game is active

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>{isWinner ? '🎉 You Won!' : '☠️ Game Over'}</h2>
        <p>Press the button to play again.</p>
        <button onClick={onRestart} style={styles.resetBtn}>
          New Game
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  modal: {
    background: 'white',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    minWidth: '300px',
  },
  resetBtn: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    background: '#282c34',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default GameStatus;
