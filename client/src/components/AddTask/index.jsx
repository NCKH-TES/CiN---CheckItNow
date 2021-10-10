import React, { useState } from 'react';
import * as S from './style';
import * as Icon from '../../assets/icons';
import { DatePicker } from 'antd';
import moment from 'moment';
import request from '../../services/request';
const { Option } = S.SelectFiled;

const AddTask = (props) => {
  const { handleCancel, isModalVisible } = props;
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');

  function onChangeDate(date, dateString) {
    setDate(dateString);
  }
  function onChangeTime(time, timeString) {
    setTime(timeString);
  }

  function handleSelectPriority(value) {
    setPriority(value);
  }

  //  hàm handler create task
  const onFinish = async (values) => {
    if (date && time) {
      const task_due = new Date(`${date} ${time}`);
      values.task_due = task_due.toISOString();
    } else if (date) {
      values.task_due = date;
    }
    if (priority) values.priority = priority;
    // test api
    await request.post('/api/v1/task', values);
  };

  return (
    <S.ModalTask footer="" visible={isModalVisible} onCancel={handleCancel}>
      <S.FormAntd onFinish={onFinish}>
        <S.Wrapper>
          <S.FormAntd.Item
            name="task_name"
            rules={[
              { required: true, message: 'Please input your task name!' },
            ]}
          >
            <S.Name placeholder="Name of the tasks..." />
          </S.FormAntd.Item>
          <S.FormAntd.Item name="task_description">
            <S.Describe placeholder="description..." />
          </S.FormAntd.Item>

          <S.Option>
            <S.SelectDate onChange={onChangeDate} />
            {date && (
              <S.SelectTime
                onChange={onChangeTime}
                defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
              />
            )}

            {/* select priority */}
            <S.SelectFiled
              defaultValue="Priority"
              style={{ width: 120 }}
              onChange={handleSelectPriority}
            >
              <Option value="hight">High</Option>
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
            $width={90}
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
