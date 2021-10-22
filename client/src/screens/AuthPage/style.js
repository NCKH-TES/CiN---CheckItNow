import styled, { css } from 'styled-components';
import { Input, Row, Col } from 'antd';
export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #e4e7f2;
  padding: 40px 90px;

  ${'' /* mobile */}
  @media (max-width: 739px) {
    padding: 30px 10px !important ;
    .sc-eJMPIT {
      background-color: #ffffff00 !important;
    }
  }

  ${'' /* destop_low */}
  @media (min-width: 740px) and (max-width: 1264px) {
    .sc-nFqVA {
      width: 500px !important;
      margin-left: 50px !important;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 180px;
  margin-top: -20px;
`;

export const Content = styled.div`
  display: flex;
  background-color: white;
  border-radius: 15px;
  min-height: 80vh;
  @media only screen and (min-width: 1263px) {
    .sc-higWrZ {
      margin-right: 100px !important;
    }
  }
`;
export const ImgLogin = styled.img`
  width: 600px;
  padding: 0 56px;
  margin-left: 100px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 30px 0;
`;
export const TextHead = styled.div`
  font-family: 'Nunito';
  font-weight: bold;
  font-size: 26px;
  color: #7690d6;
  margin-bottom: 30px;
`;
export const InputField = styled.input`
  outline: none;
  border: 1px solid #3333332b;
  margin-top: 8px;
  padding: 0 20px;
  width: 80%;
  height: 45px;

  border-radius: 25px;
`;
export const PassWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ActivePass = styled.img`
  position: absolute;
  top: 42%;
  right: 60px;
  cursor: pointer;

  color: #333;
`;
export const Remember = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 10px 0 30px 0;
`;

export const CheckBoxField = styled.input`
  margin-right: 7px;
  padding: 50px;
`;

export const Login = styled.input`
  cursor: pointer;
  margin: 13px 0;
  background-color: #899fd8;
  padding: 5px 60px;
  border-radius: 25px;
  color: white;
  display: flex;
  font-size: 18px;
  align-items: center;
  transition: 0.3s;
  border: 0px;
  border-style: solid;
  &:hover {
    background-color: #5f73a8;
    color: white;
  }
`;
export const LoginGG = styled.div`
  display: flex;
  color: #665f5f;
  font-size: 15px;
  cursor: pointer;
`;
export const textGG = styled.div`
  padding-top: 3px;
`;
export const LogoGoogle = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const Google = styled.div`
  font-weight: bold;
  padding-left: 8px;
`;
export const OR = styled.p`
  color: #665f5f75;
  margin: 12px 0;
`;
export const Register = styled.div`
  margin-top: 5px;
`;
export const RegisterFiled = styled.p`
  text-align: center;
  color: #556a9e;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #4771d8;
  }
`;
export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AgreeService = styled.div``;
export const MessageError = styled.span`
  color: red;
  width: 80%;
  padding: 5px 0 0px 10px;
`;
