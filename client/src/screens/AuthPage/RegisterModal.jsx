import React, { useEffect, useState } from 'react';
import * as S from './style';
import ActivePass from '../../assets/images/active.svg';
import logoGoogle from '../../assets/images/google.png';
import { useForm } from 'react-hook-form';
import { Modal } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerApi } from '../../store/slices/authSlice';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'antd';
const schema = yup
  .object({
    user_name: yup.string().required(),
    agreeService: yup
      .bool()
      .oneOf([true], 'Acceptance of terms & policies is required'),
    email: yup.string().email('You must enter your email').required(),
    password: yup.string().required().min(5, 'Password at least 5 characters'),
    re_password: yup
      .string('')
      .oneOf([yup.ref('password'), null], 'password incorrect'),
  })
  .required();

export default function Auth(props) {
  const dispatch = useDispatch();
  const [activePass, setActivePass] = useState(false);
  const { isModalVisible, showModal, handleCancel } = props;
  const auth = useSelector((state) => state.auth);
  const { loading, errorRegister } = auth;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(registerApi(data));
  };

  return (
    <Modal
      title="Register"
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
    >
      <S.FormRegister onSubmit={handleSubmit(onSubmit)}>
        <S.TextHead>Welcome Back!</S.TextHead>

        <S.InputField {...register('user_name')} placeholder="User name" />
        <S.MessageError>{errors.user_name?.message}</S.MessageError>

        <S.InputField {...register('email')} placeholder="Your email" />
        <S.MessageError>{errors.email?.message}</S.MessageError>

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

        <S.PassWrapper>
          <S.InputField
            type={activePass ? 'text' : 'password'}
            {...register('re_password')}
            placeholder="Re-enter password"
          />
          <S.ActivePass
            src={ActivePass}
            onClick={() => setActivePass(!activePass)}
          />
        </S.PassWrapper>
        <S.MessageError>{errors.re_password?.message}</S.MessageError>
        <S.Remember>
          <S.CheckBoxField
            style={{ marginBottom: '20px' }}
            name="agree"
            type="checkbox"
            {...register('agreeService')}
          ></S.CheckBoxField>
          <S.AgreeService>
            <span>Creating an account means you’re okay with our</span>
            <span
              style={{
                color: '#899FD8',
                padding: '5px',
                fontWeight: 'bold',
              }}
            >
              Terms of Service, Privacy Policy.
            </span>
          </S.AgreeService>
        </S.Remember>
        <S.MessageError>{errors.agreeService?.message}</S.MessageError>
        {loading && <Loader />}
        {errorRegister && <Alert message={errorRegister} type="error" />}
        <S.Login type="submit" value="Register"></S.Login>
        <S.OR>OR</S.OR>
        <S.LoginGG>
          {/* <S.LogoGoogle src={logoGoogle} />
          <S.textGG>Register with Google</S.textGG> */}
        </S.LoginGG>
      </S.FormRegister>
    </Modal>
  );
}
