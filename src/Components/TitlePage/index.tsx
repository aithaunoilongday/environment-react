import React from 'react';
import WrapperTitlePage from './styles';

type Props = {
  name: string;
};

export const TitlePages = ({ name }: Props) => {
  return (
    <WrapperTitlePage>
      <h1 className="title">{name}</h1>
    </WrapperTitlePage>
  );
};
