import React, { useEffect, useState } from 'react';
import { IoLanguage, IoPersonSharp } from 'react-icons/io5';
import WrapperHeader from './styles';
import { ValidateFullDate } from 'Utils';
import { User } from 'Types';
import { configs } from 'Configs';

export const Headers = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTime(new Date());
    }, 950);
    return () => clearInterval(intervalTime);
  }, []);

  useEffect(() => {
    const getToken = localStorage.getItem(configs.localStorage);
    if (getToken) {
      const parseAuth: User = JSON.parse(getToken);
      setUserInfo(parseAuth);
    }
  }, []);

  return (
    <WrapperHeader>
      <div className="swapperLogo">
        <div className="logo" />
      </div>
      <div className="swapperInfo">
        <div className="time styleText">{ValidateFullDate(time)} JST</div>
        <div className="locale styleText">
          <IoLanguage /> EN
        </div>
        {userInfo && (
          <div className="user styleText">
            <IoPersonSharp /> {userInfo?.useId}
          </div>
        )}
      </div>
    </WrapperHeader>
  );
};
