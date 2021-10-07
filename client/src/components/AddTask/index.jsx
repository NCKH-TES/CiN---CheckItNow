import React from 'react';
import * as S from './style';
const AddTask = () => {
  return (
    <S.Wrapper>
      <S.Name />
      <S.Describe />
      <S.Option>
        <S.Icon></S.Icon>
        <div>
          <S.Icon></S.Icon>
          <S.Icon></S.Icon>
        </div>
      </S.Option>
    </S.Wrapper>
  );
};

export default AddTask;
