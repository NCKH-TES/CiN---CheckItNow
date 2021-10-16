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

const UpdateTask = (props) => {
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
      .updateTaskApi(props?.item?.task_id, {
        ...values,
        task_due: `${date} ${time}` || props?.item?.task_due,
        priority: priority || props?.item?.priority,
        completed: props?.item?.completed,
      })
      .then(() => {
        dispatch(getListTask({ page: props.page, perPage: props.perPage }));
        handleCancel();
        toast('Successfully!');
      })
      .catch((err) => {
        toast('Failure...');
      });
    // console.log(values, date, time, props?.item?.priority);
  };

  return (
    <S.ModalTask footer="" visible={isModalVisible} onCancel={handleCancel}>
      <S.FormAntd
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          ['task_name']: props?.item?.task_name,
          ['task_description']: props?.item?.task_description,
        }}
      >
        <S.Wrapper>
          <S.FormAntd.Item
            name="task_name"
            rules={[
              { required: true, message: 'Please input your task name!' },
            ]}
          >
            <S.Name placeholder="Name of the tasks..." />
          </S.FormAntd.Item>
          <hr />
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
              defaultValue={props.item?.priority}
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
          <S.ButtonFiled $width={90} onClick={handleCancel}>
            Cancel
          </S.ButtonFiled>
          <S.ButtonFiled
            $width={110}
            type="primary"
            htmlType="submit"
            style={{ marginLeft: '10px' }}
          >
            Update task
          </S.ButtonFiled>
        </S.ButtonWrapper>
      </S.FormAntd>
    </S.ModalTask>
  );
};

export default UpdateTask;
