import { signUpAPI } from 'apis/auth/signUpAPI';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useValid } from '../hooks/useValid';

function SignUp() {
  const { onChangeHandler, userInfo, valid } = useValid();
  const navigate = useNavigate();

  const SignUpHandler = () => {
    signUpAPI({ ...userInfo });
  };

  return (
    <section>
      <div>SignUp</div>
      <form>
        <input
          placeholder="이메일 주소를 입력해주세요"
          name="email"
          onChange={onChangeHandler}
        />
        <input
          placeholder="비밀번호를 입력해주세요"
          name="password"
          onChange={onChangeHandler}
        />
        <button type="button" onClick={SignUpHandler} disabled={valid.disabled}>
          Signup
        </button>
      </form>
    </section>
  );
}

export default SignUp;
