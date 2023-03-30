import React from 'react';
import { styled } from '@mui/material/styles';
import GoogleOauthHandler from '../../apis/oauth/googleOauthHandler';

type Props = {
  onClose: () => void;
};
function LoginModal({ onClose }: Props) {
  return (
    <>
      <img src="/asset/google.png" alt="rnrmf" />
      <TextButtons>
        <div>구글 Login 이 필요합니다</div>
        <Buttons>
          <button type="button" onClick={GoogleOauthHandler}>
            Google Login
          </button>
          <button type="button" onClick={onClose}>
            다음에 Login 하기
          </button>
        </Buttons>
      </TextButtons>
    </>
  );
}

export default LoginModal;

const Buttons = styled('section')`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
`;

const TextButtons = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  min-height: 180px;
  div {
    font-size: 22px;
    font-weight: 500;
    margin-top: -2rem;
  }
`;
