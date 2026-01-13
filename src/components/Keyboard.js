import React from 'react';

const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
}) {
  return (
    <div style={styles.grid}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            key={key}
            onClick={() => addGuessedLetter(key)}
            className={`btn-key ${isActive ? 'active' : ''} ${
              isInactive ? 'inactive' : ''
            }`}
            disabled={isInactive || isActive || disabled}
            style={styles.btn}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
    gap: '.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  btn: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    padding: '10px',
    cursor: 'pointer',
    border: '2px solid #282c34',
    background: 'white',
    fontWeight: 'bold',
  },
};

export default Keyboard;
