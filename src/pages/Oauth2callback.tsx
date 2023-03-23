import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoginAtom } from '../state/atoms';

function Oauth2callback() {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(isLoginAtom);

  useEffect(() => {
    const fetchData = () => {
      const url = new URL(window.location.href);
      const { searchParams } = url;
      const code = searchParams.get('code');

      if (code) {
        axios
          .post(
            'https://oauth2.googleapis.com/token',
            {
              code,
              client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
              client_secret: process.env.REACT_APP_GOOGLE_SECRETE,
              redirect_uri: 'http://localhost:3000/oauth2callback',
              grant_type: 'authorization_code',
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
          .then((response) => {
            console.log(response);
            const accessToken = response.data.access_token;
            localStorage.setItem('access_token', accessToken);

            const refreshToken = response.data.refresh_token;
            if (response.data.refresh_token !== undefined) {
              localStorage.setItem('refresh_token', refreshToken);
            }

            setIsLogin(true);
            axios
              .get('https://www.googleapis.com/oauth2/v1/userinfo', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              })
              .then((response) => {
                localStorage.setItem(
                  'loginData',
                  JSON.stringify(response.data),
                );
                navigate('/'); // 토큰 저장 후 메인 페이지로 보냄
                window.location.reload();
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      }
    };
    fetchData();
  }, []);

  return <div>구글 연동중 ... </div>;
}

export default Oauth2callback;
