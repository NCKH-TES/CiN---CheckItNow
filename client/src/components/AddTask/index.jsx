import React, { useState } from 'react';
import * as S from './style';
import moment from 'moment';
import task from '../../services/apis/task';
import { getListTask } from '../../store/slices/taskSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Form } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';

const { Option } = S.SelectFiled;

const AddTask = (props) => {
  const dispatch = useDispatch();
  const { handleCancel, isModalVisible } = props;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('00:00:00');
  const [priority, setPriority] = useState('');
  const [form] = Form.useForm();
const addButton = useRef(null)
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
    console.log(values, date,time, priority);
    if (date === '' || priority === '') {
      toast('You need to fill in the Date and Priority');
    } else {
      addButton.current.setAttribute("disabled",true)
      setTimeout(() => {
        task.createTaskApi({
          ...values,
          task_due: `${date} ${time}`,
          priority,
          completed: false,
        })
        .then(() => {
          addButton.current.setAttribute("disabled", false)
          dispatch(getListTask({ page: props.page, perPage: props.perPage }));
          handleCancel();
          toast('Successfully!');
          form.resetFields();
        })
        .catch((err) => {
          toast('Failure...');
        });
      }, 1000);

    }
  };

  return (
    <S.ModalTask footer="" visible={isModalVisible} onCancel={handleCancel}>
      <S.FormAntd onFinish={onFinish} autoComplete="off" form={form}>
        <S.Wrapper>
          <S.FormAntd.Item
            name="task_name"
            rules={[
              { required: true, message: 'Please input your task name!' },
              { max: 40, message: 'Task name is too long' },
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
          <S.FormAntd.Item name="task_description" initialValue=''>
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
            ref={addButton}
          >
            Add task
          </S.ButtonFiled>
        </S.ButtonWrapper>
      </S.FormAntd>
    </S.ModalTask>
  );
};

export default AddTask;
