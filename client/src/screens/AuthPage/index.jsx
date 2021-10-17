import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import logo from '../../assets/images/logo.svg';
import imgLogin from '../../assets/images/login.svg';
import ActivePass from '../../assets/images/active.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col } from 'antd';
import RegisterModal from './RegisterModal';
import * as yup from 'yup';
import { login, reset_auth, loginGoogle } from '../../store/slices/authSlice';
import Loader from '../../components/Loader';
import { message } from 'antd';
import { Alert } from 'antd';
import { GoogleLogin } from 'react-google-login';
import userAPI from '../../services/apis/user';

const schema = yup
  .object({
    email: yup.string().email('You must enter your email').required(),
    password: yup.string().required(),
  })
  .required();

export default function Auth({ history }) {
  const dispatch = useDispatch();
  const [activePass, setActivePass] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { loading, error, userInfo } = auth;
  const googleUser = {};
  const errorLogin = () => {
    message.error(error);
  };
  const loginSuccess = () => {
    message.success('Login success');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(login(data));
    setTimeout(() => {
      dispatch(reset_auth());
    }, 2000);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const clientId =
    '1085000780034-joge7b8ov31n4eqb9gcct6dqm8m3dq10.apps.googleusercontent.com';
  const responseGoogle = async (res) => {
    googleUser.user_name = res.profileObj.name;
    googleUser.email = res.profileObj.email;
    googleUser.image = res.profileObj.imageUrl;
    googleUser.token = res.tokenId;
    googleUser.user_id = res.googleId;
    console.log(res);
    await dispatch(loginGoogle(googleUser));
  };

  const loginGoogleHandler = () => {
    const a = window.open(
      'http://localhost:5000/api/v1/auth/google',
      '_blank',
      'width:500,height:600'
    );
    console.log(a.opener);
  };

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [userInfo, history, dispatch]);

  return (
    <S.Wrapper>
      {userInfo && loginSuccess()}
      <S.Header>
        <S.Img src={logo} alt="" />
      </S.Header>
      <S.Content>
        <Col lg={14} sm={0} xs={0} style={{ margin: 'auto' }}>
          <S.ImgLogin src={imgLogin} />
        </Col>
        <Col lg={10} sm={18} xs={24} style={{ margin: 'auto' }}>
          <S.FormLogin onSubmit={handleSubmit(onSubmit)}>
            <S.TextHead>Welcome Back!</S.TextHead>
            <S.InputField {...register('email')} placeholder="Your email" />
            <S.MessageError>{errors.email?.message}</S.MessageError>
            <S.MessageError />
            <S.PassWrapper>
              <S.InputField
                type={activePass ? 'text' : 'password'}
                {...register('password')}
                placeholder="Password"
              />
              <S.ActivePass
                src={ActivePass}
                onClick={() => setActivePass(!activePass)}
              />
            </S.PassWrapper>
            <S.MessageError>{errors.password?.message}</S.MessageError>

            <S.Remember>
              <S.CheckBoxField
                name="remember"
                type="checkbox"
                checked
                {...register('remember')}
              ></S.CheckBoxField>
              <span>Remember me</span>
            </S.Remember>

            {loading && <Loader />}
            {error && (
              <Alert message="User name or password is wrong" type="error" />
            )}
            <S.Login type="submit" value="Login"></S.Login>
            <S.OR>OR</S.OR>
            <S.LoginGG onClick={loginGoogleHandler}>
              <p>login google</p>
            </S.LoginGG>
            <S.Register>
              <span>Don’t have an Account yet? </span>
              <S.RegisterFiled onClick={showModal}>
                Register for Free
              </S.RegisterFiled>
            </S.Register>
          </S.FormLogin>
        </Col>
      </S.Content>
      <RegisterModal
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleCancel={handleCancel}
      />
    </S.Wrapper>
  );
}
