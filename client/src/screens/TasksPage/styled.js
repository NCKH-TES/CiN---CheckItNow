import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #e4e7f2;
  padding: 40px 90px;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 239px;
  height: 49px;
  margin-top: -20px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
  font-family: 'Nunito';

  ${({ $isBold }) =>
    $isBold &&
    css`
      font-weight: bold;
    `}
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Left = styled.div`
  flex-basis: 65%;
  background-color: #f3f5fa;
  padding: 25px 40px;
  margin-right: 90px;
  border-radius: 25px;
`;

export const Right = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const Time = styled.div`
  background-color: #f3f5fa;
  border-radius: 25px;
  height: 200px;
`;

export const Story = styled.div`
  background-color: #f3f5fa;
  border-radius: 25px;
  margin-top: 70px;
  height: 200px;
`;
