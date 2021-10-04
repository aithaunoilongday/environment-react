import styled from 'styled-components';

export default styled('div')`
  margin: 20px 20px 0 20px;

  .title-text {
    color: #ffffff;
    font-size: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .wrapper-content {
    display: flex;
    flex-direction: row;

    .wrapper-form {
      margin-left: 15px;
      width: 55%;

      .ant-space {
        margin-bottom: 15px;
      }
    }
  }
`;
