import React, { useEffect } from 'react';
import { instance } from 'Utils/Axios';
import Wrapper from './Styles';
import { Headers } from 'Containers';
import { Footers } from 'Pages';
import { Navigator } from 'Navigations';
import { configs } from 'Configs';
import 'antd/dist/antd.css';

const App = () => {
  useEffect(() => {
    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          // Updating... (handle error)
          localStorage.removeItem(configs.localStorage);
          console.warn('response 401');
        }
      }
    );
  }, []);

  return (
    <Wrapper>
      <Headers />
      <Navigator />
      <Footers />
    </Wrapper>
  );
};

export default App;
