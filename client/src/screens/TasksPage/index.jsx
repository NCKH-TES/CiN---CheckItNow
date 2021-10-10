import React, { useEffect, useState } from 'react';
import * as S from './styled';
import logo from '../../assets/images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { message, Menu } from 'antd';
import * as Icon from '../../assets/icons';
import AddTaskModal from '../../components/AddTask';
import { logout } from '../../store/slices/authSlice';
const { Option } = S.Author;

export default function Index({ history }) {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const loginSuccess = () => {
    message.success('Login success');
  };
  const handlerLogout = () => {
    dispatch(logout());
  };
  const menuUser = (
    <Menu>
      <Menu.Item onClick={handlerLogout}>Logout</Menu.Item>
    </Menu>
  );
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      history.push('/');
    }
  }, [userInfo, history, dispatch]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Img src={logo} alt="" />
        {userInfo && (
          <S.UserGroup>
            <S.Icon1
              src={Icon.user}
              $width="32"
              $height="30"
              style={{ marginRight: '15px' }}
            />
            <S.Author overlay={menuUser}>
              <div>
                <S.Text
                  $cursor="pointer"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {userInfo.user_name}
                </S.Text>
                <S.Icon1
                  $cursor="pointer"
                  src={Icon.down_arrow}
                  $width="20"
                  $height="15"
                  style={{ marginLeft: '3px' }}
                />
              </div>
            </S.Author>
          </S.UserGroup>
        )}
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
          <S.Option>
            <div style={{ display: 'flex' }}>
              <S.Text2 onClick={handlerLogout}>All</S.Text2>
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
          </S.Option>
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
