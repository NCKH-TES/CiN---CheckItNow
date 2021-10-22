import styled, { css } from 'styled-components';
import { Input, Dropdown, Modal, Checkbox, Row, Col } from 'antd';

export const Wrapper = styled.form`
  min-height: 100vh;
  background-color: #e4e7f2;
  padding: 40px 90px;

  ${'' /* destop */}
  @media (min-width: 1201px) {
    .sc-iBPTik,
    .sc-fubCzh {
      margin-left: 120px;
    }
  }
  ${'' /* destop_low */}
  @media  (max-width:1380px) {
    .sc-jSgvzq {
      padding-bottom: 65px;
    }
    .TypeSelect button {
      font-size: 16px;
    }
    .sc-iBPTik,
    .sc-fubCzh {
      margin-left: 80px !important;
    }
  }
  ${'' /* table */}
  @media  (max-width:1200px) {
    .sc-iBPTik,
    .sc-fubCzh {
      margin-left: 0px !important;
      margin-top: 20px !important;
    }
    .TypeSelect button {
      font-size: 20px !important;
    }
    .Content {
      width: 450px;
      margin: auto;
    }
  }
  ${'' /* mobile */}
  @media  (max-width:768px) {
    padding: 40px 30px !important;
    .Content {
      width: 100%;
    }
  }
  ${'' /* mobile_low */}
  @media  (max-width:576px) {
    .TypeSelect button {
      font-size: 16px !important;
    }
    .sc-dQoVA {
      flex-wrap: wrap;
    }
    .sc-crrszt {
      margin-right: 15px !important;
    }
    .sc-dQoVA {
      justify-content: space-around;
    }
    padding: 40px 10px !important;
  }
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

export const Text = styled.span`
  font-weight: 600;
  font-size: 22px;
  cursor: ${({ $cursor }) => $cursor || 'auto'};
  color: #000000;
  font-family: 'Nunito';

  ${({ $isBold }) =>
    $isBold &&
    css`
      font-weight: bold;
    `}
`;

export const Content = styled(Row)`
  display: flex;
  margin-top: 20px;
`;

export const Left = styled(Col)`
  background-color: #f3f5fa;
  padding: 25px 40px;
  border-radius: 25px;
  position: relative;
`;

export const Right = styled(Col)`
  display: flex;
  flex-direction: column;
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
`;
export const InputFiled = styled(Input)`
  padding-left: 20px;
  margin-bottom: 23px;
  border-radius: 20px;
  width: ${({ $width }) => $width || '100%'}px;
  height: ${({ $height }) => $height || '100%'}px;
  &::placeholder {
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    color: #949090;
  }
`;
export const SearchIcon = styled.img`
  position: absolute;
  top: 14px;
  right: 16px;
`;

export const Icon1 = styled.img`
  width: ${({ $width }) => $width || '100%'}px;
  height: ${({ $height }) => $height || '100%'}px;
  cursor: ${({ $cursor }) => $cursor || 'auto'};
  padding-right: 3px;
`;
export const Sort = styled.div`
  display: flex;
  margin-left: 10px;
`;
export const Text2 = styled.div`
  color: ${({ $color }) => $color || '#6f6a6a'};
  font-size: 18px;
  margin-right: 10px;
  font-weight: 600;
  cursor: pointer;
`;
export const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AddTask = styled.div`
  display: flex;
`;
export const ModalFiled = styled(Modal)`
  .ant-modal-content {
    border-radius: 25px;
    width: 635px;
    background-color: #eceef5;
  }
  .ant-modal-body {
    display: flex;
    justify-content: center;
    padding: 15px 0 10px 0px;
  }
  .ant-modal-footer {
    padding-bottom: 15px;
  }
`;

export const Author = styled(Dropdown)``;

export const UserGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const ListTask = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Task = styled.div`
  width: 100%;
  padding: 15px;
  background: ${({ $done }) => ($done ? '#E4E7F2' : '#FFFFFF')};
  border: 1px solid #e4e7f2;
  box-sizing: border-box;
  border-radius: 25px;
  margin-top: 20px;
  display: flex;
  position: relative;
`;

export const CheckB = styled(Checkbox)``;

export const TextTask = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;

  ${({ $isSmall }) =>
    $isSmall &&
    css`
      font-weight: 300;
      font-size: 12px;
      line-height: 19px;
      color: #6f6a6a;
      margin-top: -15px;
    `}
`;

export const TextTime = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: ${({ $color }) => $color || 'black'};
  margin: 0px;
  padding-left: 5px;
`;

export const Image = styled.img`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
