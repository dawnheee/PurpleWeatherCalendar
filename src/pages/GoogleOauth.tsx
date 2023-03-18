import googleOauthHandler from 'apis/oauth/googleOauthHandler';

function GoogleOauth() {
  return (
    <button type="button" id="oAuthBtn" onClick={googleOauthHandler}>
      Google Login
    </button>
  );
}

export default GoogleOauth;
