const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/calendar.readonly',
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events',
];
const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
  process.env.REACT_APP_GOOGLE_CLIENT_ID
}&response_type=code&redirect_uri=http://localhost:3000/oauth2callback&
access_type=offline&scope=${scopes.join(' ')}`;
const googleOauthHandler = () => {
  window.location.assign(oAuthURL);
};

export default googleOauthHandler;
