import styled, { css } from 'styled-components';
import { Input } from 'antd';
export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #e4e7f2;
  padding: 40px 90px;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Img = styled.img`
  width: 180px;
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
  height: 235px;
`;

export const Story = styled.div`
  background-color: #f3f5fa;
  border-radius: 25px;
  margin-top: 70px;
  height: 235px;
`;
export const InputFiled = styled(Input)`
  height: 50px;
  padding-left: 20px;
  margin-bottom: 23px;
  border-radius: 20px;
`;
export const SearchIcon = styled.img`
  position: absolute;
  top: 14px;
  right: 16px;
`;
export const Icon1 = styled.img`
  padding-right: 3px;
`;
export const Sort = styled.div`
  display: flex;
  margin-left: 10px;
`;
export const Text2 = styled.div`
  color: #6f6a6a;
  font-size: 18px;
  margin-right: 10px;
  font-weight: 600;
  cursor: pointer;
`;
export const Select = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AddTask = styled.div`
  display: flex;
`;
