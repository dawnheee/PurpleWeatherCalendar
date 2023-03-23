import axios from 'axios';
// import { useSetRecoilState } from 'recoil';
// import { isLoginAtom } from '../../state/atoms';

// const setIsLogin = useSetRecoilState(isLoginAtom);

// const logoutHandler = () => {
//   setIsLogin(false);
//   localStorage.removeItem('access_token');
//   localStorage.removeItem('loginData');
//   localStorage.removeItem('refresh_token');
// };

const access = localStorage.getItem('access_token');
const refresh = localStorage.getItem('refresh_token');
const tokens = {
  access_token: access,
  refresh_token: refresh,
};
const googleLogoutAPI = async () => {
  await axios
    .post(`https://oauth2.googleapis.com/revoke?token=${access}`)
    .then(() => {
      window.location.assign('http://localhost:3000/');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default googleLogoutAPI;
