import googleOauthHandler from 'apis/oauth/googleOauthHandler';

function GoogleOauth() {
  return (
    <div>
      <button type="button" id="oAuthBtn" onClick={googleOauthHandler}>
        <div id="comment">구글 OAuth</div>
      </button>
    </div>
  );
}

export default GoogleOauth;
