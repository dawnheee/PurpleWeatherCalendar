import { useEffect, useState } from 'react';

export const useValid = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [valid, setValid] = useState({
    email: false,
    password: false,
    disabled: true,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });

    if (name === 'email') {
      if (value.includes('@')) {
        setValid({ ...valid, email: true });
      } else {
        setValid({ ...valid, email: false });
      }
    }
    if (name === 'password') {
      if (value.length >= 8) {
        setValid({ ...valid, password: true });
      } else {
        setValid({ ...valid, password: false });
      }
    }
  };

  useEffect(() => {
    if (valid.email && valid.password) {
      setValid({ ...valid, disabled: false });
    } else {
      setValid({ ...valid, disabled: true });
    }
  }, [userInfo]);

  return { onChangeHandler, userInfo, valid };
};
