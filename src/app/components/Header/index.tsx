import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
import { Container } from '../Container';

import { Header as HeaderStyled, HeaderContent, Title } from "./styled";
import { UserInfo } from './UserInfo';

export const Header: React.FC = (): JSX.Element => {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  return (
    <HeaderStyled>
      <Container>
        <HeaderContent>
          <Title>Тестирование гипотез</Title>
          <UserInfo {...userInfo} />
        </HeaderContent>
      </Container>
    </HeaderStyled>
  );
};
