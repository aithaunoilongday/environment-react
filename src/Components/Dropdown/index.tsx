import React from 'react';
import { Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import WrapperDropdown from './styles';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

type Props = {
  name: string;
};

export const Dropdowns = ({ name }: Props) => {
  return (
    <WrapperDropdown overlay={menu} placement="bottomLeft" arrow trigger={['click']}>
      <Button>
        {name} <DownOutlined />
      </Button>
    </WrapperDropdown>
  );
};
