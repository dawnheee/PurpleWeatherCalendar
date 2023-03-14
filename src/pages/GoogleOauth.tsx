import { useState, useEffect } from 'react';
import axios from 'axios';

function GoogleOauth() {
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/calendar.readonly',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
  ];
  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
    process.env.REACT_APP_GOOGLE_CLIENT_ID
  }&response_type=code&redirect_uri=http://localhost:3000/oauth2callback&scope=${scopes.join(
    ' ',
  )}`;
  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  };

  return (
    <div>
      <button type="button" id="oAuthBtn" onClick={oAuthHandler}>
        <div id="comment">구글 OAuth</div>
      </button>
    </div>
  );
}

export default GoogleOauth;
