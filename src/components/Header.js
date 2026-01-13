import React from 'react';

function Header({ onHelp }) {
  return (
    <header style={styles.header}>
      <h1>H_NGM_N</h1>
      <button onClick={onHelp} style={styles.helpBtn}>
        ?
      </button>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    background: '#282c34',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  helpBtn: {
    background: 'transparent',
    border: '2px solid white',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Header;
