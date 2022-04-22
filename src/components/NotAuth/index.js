import React from 'react';
import AuthButton from '../AuthButton';
import { Covers } from './Covers';
import './style.css';

const NotAuthView = () => {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        width: '90%',
      }}
    >
      <div className="container">
        <div className="header">
          <h1 className="header image">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" />
          </h1>
          <AuthButton />
        </div>
      </div>
      <Covers />
    </div>
  );
};

export default NotAuthView;
