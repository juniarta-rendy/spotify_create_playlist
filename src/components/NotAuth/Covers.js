import React from 'react';

export const Covers = () => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '0',
        zIndex: '0',
        top: '0',
      }}
    >
      <img
        src="/images/album-image.png"
        alt="covers"
        style={{
          textAlign: 'center',
          width: '100%',
          maxHeight: '99vh',
          margin: '60px 0 40px 0',
        }}
      />
    </div>
  );
};
