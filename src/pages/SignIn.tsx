import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useValid } from '../hooks/useValid';
import { signInAPI } from '../apis/auth/signInAPI';

function SignIn() {
  const { onChangeHandler, userInfo, valid } = useValid();
  const navigate = useNavigate();

  const LogInHandler = () => {
    signInAPI({ ...userInfo }).then((res) => {
      console.log(res);
    });
  };

  return (
    <section>
      <div>LogIn</div>
      <form>
        <input name="email" onChange={onChangeHandler} placeholder="email" />
        <input
          name="password"
          onChange={onChangeHandler}
          placeholder="비밀번호를 입력해주세요"
        />
        <button type="button" onClick={LogInHandler} disabled={valid.disabled}>
          Log In
        </button>
        <button
          type="button"
          onClick={() => {
            navigate('/auth/signup');
          }}
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default SignIn;
