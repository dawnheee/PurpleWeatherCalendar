import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Oauth2callback() {
  const navigate = useNavigate();

  const CLIENT_SECRET = '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'; // 환경변수 적용 필요

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
              client_secret: CLIENT_SECRET,
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
            const accessToken = response.data.access_token;
            localStorage.setItem('access_token', accessToken);
            axios
              .get('https://www.googleapis.com/oauth2/v1/userinfo', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              })
              .then((response) => {
                localStorage.setItem('data', JSON.stringify(response.data));
                navigate('/calendar'); // 토큰 저장 후 메인 페이지로 보냄
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      }
    };
    fetchData();
  }, []);

  return <div>Oauth2callback</div>;
}

export default Oauth2callback;
