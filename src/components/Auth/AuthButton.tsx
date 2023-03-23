import { styled } from '@mui/material/styles';
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../../state/atoms';
import googleOauthHandler from '../../apis/oauth/googleOauthHandler';

function AuthButton() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  const logoutHandler = () => {
    setIsLogin(false);
    localStorage.clear();
  };
  const loginHandler = () => {
    googleOauthHandler();
  };
  return (
    <Container>
      <ButtonAlert>
        <button type="button" onClick={isLogin ? logoutHandler : loginHandler}>
          {isLogin ? 'Log out' : 'Log in'}
        </button>
      </ButtonAlert>
    </Container>
  );
}

export default AuthButton;

const Container = styled('div')`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  button {
    height: 30px;
    border-radius: 10px;
    :hover {
      background-color: white;
      color: blue;
    }
  }
  div {
    color: blue;
  }
`;

const ButtonAlert = styled('div')``;
