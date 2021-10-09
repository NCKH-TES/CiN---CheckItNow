import React, { useEffect, useState } from 'react';
import * as S from './styled';
import logo from '../../assets/images/logo.svg';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import * as Icon from '../../assets/icons';
import { Button } from 'antd';
import AddTaskModal from '../../components/AddTask';

export default function Index({ history }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;
  const loginSuccess = () => {
    message.success('Login success');
  };
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      history.push('/');
    }
  }, [userInfo, history]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <S.Wrapper>
      <S.Header>
        <S.Img src={logo} alt="" />
        <S.Text>Đelllll ok !</S.Text>
      </S.Header>
      <S.Content>
        <S.Left>
          <div style={{ display: 'flex', position: 'relative' }}>
            <S.InputFiled
              onChange={(e) => console.log(e.target.value)}
              placeholder="Search task"
              $height={50}
            />
            <S.SearchIcon src={Icon.search} />
          </div>
          <S.Select>
            <div style={{ display: 'flex' }}>
              <S.Text2>All</S.Text2>
              <S.Text2>Complete</S.Text2>
              <S.Text2>Todo</S.Text2>
              <S.Sort>
                <S.Icon1 src={Icon.sort} />
                <S.Text2 style={{ fontWeight: '200' }}>Sort</S.Text2>
              </S.Sort>
            </div>
            <S.AddTask onClick={showModal}>
              <S.Icon1 src={Icon.add} />
              <S.Text2>Add task</S.Text2>
            </S.AddTask>
          </S.Select>
        </S.Left>
        <S.Right>
          <S.Time></S.Time>
          <S.Story></S.Story>
        </S.Right>
      </S.Content>

      {/* add task modal */}
      <AddTaskModal
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleCancel={handleCancel}
      />
    </S.Wrapper>
  );
}
