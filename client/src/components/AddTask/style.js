import styled, { css } from 'styled-components';
import { Input, Form, Button, Modal } from 'antd';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import { Select } from 'antd';
export const FormAntd = styled(Form)``;
export const ModalTask = styled(Modal)`
  .ant-modal-content {
    width: 598px;
    display: flex;
    justify-content: center;
  }
  .ant-form-item-explain {
    margin-left: 25px;
  }
  .ant-input:focus {
    box-shadow: none !important;
  }
  .ant-modal-content {
    border-radius: 25px;
  }
`;

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  margin: 20px 0;
  width: 535px;
  border: 1px solid #cbcbcb;
`;
export const Name = styled(Input)`
  margin-top: 20px;
  height: 35px;
  border-style: hidden;
  font-size: 18px;
  padding-left: 25px;
  &:focus {
    border-color: #fff;
    box-shadow: none;
  }
`;
export const Describe = styled(Input)`
  border-style: hidden;
  padding-left: 25px;
  height: 60px;
  &:focus {
    border-color: #fff;
    box-shadow: none;
  }
`;
export const Option = styled.div`
  display: flex;
  padding: 0px 21px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Icon = styled.img`
  ${'' /* width: ${({ $width }) => $width || '100%'}px; */}
`;

export const SelectDate = styled(DatePicker)`
  margin-right: 10px;
`;
export const SelectTime = styled(TimePicker)`
  margin-right: 10px;
`;

export const HightText = styled.span`
  margin-bottom: 20px;
`;

export const ButtonFiled = styled(Button)`
  width: ${({ $width }) => $width || '100%'}px;
  height: ${({ $height }) => $height || '100%'}px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const SelectFiled = styled(Select)``;
