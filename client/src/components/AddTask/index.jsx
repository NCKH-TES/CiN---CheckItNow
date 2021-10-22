import React, { useState } from 'react';
import * as S from './style';
import moment from 'moment';
import task from '../../services/apis/task';
import { getListTask } from '../../store/slices/taskSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Form } from 'antd';
import 'react-toastify/dist/ReactToastify.css';

const { Option } = S.SelectFiled;

const AddTask = (props) => {
  const dispatch = useDispatch();
  const { handleCancel, isModalVisible } = props;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');
  const [form] = Form.useForm();

  function onChangeDate(date, dateString) {
    setDate(dateString);
  }
  function onChangeTime(time, timeString) {
    setTime(timeString);
  }

  function handleSelectPriority(value) {
    setPriority(value);
  }

  const onFinish = async (values) => {
    task
      .createTaskApi({
        ...values,
        task_due: `${date} ${time}`,
        priority,
        completed: false,
      })
      .then(() => {
        dispatch(getListTask({ page: props.page, perPage: props.perPage }));
        handleCancel();
        toast('Successfully!');
        form.resetFields();
      })
      .catch((err) => {
        toast('Failure...');
      });
  };

  return (
    <S.ModalTask footer="" visible={isModalVisible} onCancel={handleCancel}>
      <S.FormAntd onFinish={onFinish} autoComplete="off" form={form}>
        <S.Wrapper>
          <S.FormAntd.Item
            name="task_name"
            rules={[
              { required: true, message: 'Please input your task name!' },
            ]}
          >
            <S.Name placeholder="Name of the tasks..." />
          </S.FormAntd.Item>
          <div
            style={{
              borderTop: '1px solid #2520204f ',
              margin: '0 20px ',
            }}
          ></div>
          <S.FormAntd.Item name="task_description">
            <S.Describe placeholder="Description..." />
          </S.FormAntd.Item>

          <S.Option>
            <S.SelectDate onChange={onChangeDate} />
            {date && (
              <S.SelectTime
                onChange={onChangeTime}
                defaultValue={moment('00:00:00', 'HH:mm:ss')}
              />
            )}

            <S.SelectFiled
              defaultValue="Priority"
              style={{ width: 120 }}
              onChange={handleSelectPriority}
            >
              <Option value="high">High</Option>
              <Option value="medium">Medium</Option>
              <Option value="low">Low</Option>
            </S.SelectFiled>
          </S.Option>
        </S.Wrapper>

        <S.ButtonWrapper>
          <S.ButtonFiled
            $hoverColor="#9bb2ee"
            $width={90}
            onClick={handleCancel}
          >
            Cancel
          </S.ButtonFiled>
          <S.ButtonFiled
            $width={90}
            $background="#9bb2ee"
            $hoverBack="#6375a6"
            type="primary"
            htmlType="submit"
            style={{ marginLeft: '10px' }}
          >
            Add task
          </S.ButtonFiled>
        </S.ButtonWrapper>
      </S.FormAntd>
    </S.ModalTask>
  );
};

export default AddTask;
