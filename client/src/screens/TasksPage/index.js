import React from 'react';
import * as S from './styled';
import logo from '../../assets/images/logo.svg';

export default function index() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Img src={logo} alt="" />
        <S.Text>Đelllll ok !</S.Text>
      </S.Header>
      <S.Content>
        <S.Left></S.Left>
        <S.Right>
          <S.Time></S.Time>
          <S.Story></S.Story>
        </S.Right>
      </S.Content>
    </S.Wrapper>
  );
}
