import React from 'react';

function HangmanDrawing({ mistakes }) {
  // Gallows
  const BASE = (
    <div
      key="base"
      style={{
        height: '10px',
        width: '250px',
        background: '#444',
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
    />
  );
  const POLE = (
    <div
      key="pole"
      style={{
        height: '400px',
        width: '10px',
        background: '#444',
        position: 'absolute',
        bottom: 0,
        left: '120px',
      }}
    />
  );
  const BEAM = (
    <div
      key="beam"
      style={{
        height: '10px',
        width: '200px',
        background: '#444',
        position: 'absolute',
        top: 0,
        left: '120px',
      }}
    />
  );
  const ROPE = (
    <div
      key="rope"
      style={{
        height: '50px',
        width: '10px',
        background: '#444',
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    />
  );

  // Body
  const HEAD = (
    <div
      key="head"
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '10px solid #282c34',
        position: 'absolute',
        top: '50px',
        right: '-20px',
      }}
    />
  );
  const BODY = (
    <div
      key="body"
      style={{
        width: '10px',
        height: '100px',
        background: '#282c34',
        position: 'absolute',
        top: '110px',
        right: 0,
      }}
    />
  );
  const RIGHT_ARM = (
    <div
      key="r-arm"
      style={{
        width: '100px',
        height: '10px',
        background: '#282c34',
        position: 'absolute',
        top: '150px',
        right: '-100px',
        rotate: '-30deg',
        transformOrigin: 'left bottom',
      }}
    />
  );
  const LEFT_ARM = (
    <div
      key="l-arm"
      style={{
        width: '100px',
        height: '10px',
        background: '#282c34',
        position: 'absolute',
        top: '150px',
        right: '10px',
        rotate: '30deg',
        transformOrigin: 'right bottom',
      }}
    />
  );
  const RIGHT_LEG = (
    <div
      key="r-leg"
      style={{
        width: '100px',
        height: '10px',
        background: '#282c34',
        position: 'absolute',
        top: '200px',
        right: '-90px',
        rotate: '60deg',
        transformOrigin: 'left bottom',
      }}
    />
  );
  const LEFT_LEG = (
    <div
      key="l-leg"
      style={{
        width: '100px',
        height: '10px',
        background: '#282c34',
        position: 'absolute',
        top: '200px',
        right: 0,
        rotate: '-60deg',
        transformOrigin: 'right bottom',
      }}
    />
  );

  // Order - 1-4: gallows, 5-10: body
  const DRAWING_PARTS = [
    BASE,
    POLE,
    BEAM,
    ROPE,
    HEAD,
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG,
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '320px',
        height: '400px',
        margin: '0 auto',
      }}
    >
      {/* Slice the array to show parts based on mistake count */}
      {DRAWING_PARTS.slice(0, mistakes)}
    </div>
  );
}

export default HangmanDrawing;
