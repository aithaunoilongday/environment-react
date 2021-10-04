import styled from 'styled-components';
import { Layout } from 'antd';
import Background from 'Assets/logo.svg';

const { Header } = Layout;

export default styled(Header)`
  background-color: #101314;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px 0 10px;
  height: 31px;

  .swapperLogo {
    width: 50%;

    .logo {
      width: 60px;
      height: 31px;
      background-image: url(${Background});
    }
  }

  .swapperInfo {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    .time {
      margin-left: 20px;
    }

    .locale {
      margin-left: 20px;
    }

    .user {
      margin-left: 20px;
    }

    .styleText {
      color: #ffffff;
      font-size: 14px;
    }
  }
`;
