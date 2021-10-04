import React from 'react';
import { Space } from 'antd';
import WrapperEditRoute from './styles';
import { ViewMap } from 'Containers';
import { Dropdowns } from 'Components';
import { ValidateForms } from 'Pages/EditRoute/Forms';

export const EditRoute = () => {
  return (
    <WrapperEditRoute>
      <h2 className="title-text">Edit Routes</h2>
      <div className="wrapper-content">
        <ViewMap />
        <div className="wrapper-form">
          <Space align="start">
            <Dropdowns name="Project" />
            <Dropdowns name="Mission" />
          </Space>
          {/*<ValidateForms />*/}
        </div>
      </div>
    </WrapperEditRoute>
  );
};
