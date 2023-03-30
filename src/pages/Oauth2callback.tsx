import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { styled } from '@mui/material/styles';
import { isLoginAtom, isLoadingAtom } from '../state/atoms';

function Oauth2callback() {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  useEffect(() => {
    setIsLoading(true);
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
            localStorage.setItem('refresh_token', refreshToken);

            setIsLogin(true);
            navigate('/');
          })
          .then(() => {
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
      }
    };
    fetchData();
  }, []);

  return <Loading>구글 연동중 ... </Loading>;
}

export default Oauth2callback;

const Loading = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: 400;
`;
