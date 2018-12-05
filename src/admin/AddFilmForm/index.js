import React, { Component } from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';
import {
  Form, Input, DatePicker, TimePicker, Tooltip, Icon, Cascader, Select,
  Checkbox, Button, AutoComplete,
} from 'antd';

import './styles.less';

class AddFilmForm extends Component {
  onSubmit = e => {
    const { form, onSubmit } = this.props;
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const vals = {
          ...values,
          date: values.date.format('YYYY-MM-DD'),
          time: values.time.format('HH:mm'),
        };
        onSubmit(vals);
        form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const b = block('AddFilmForm');

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const buttonItemLayout = {
      wrapperCol: { span: 24, offset: 4 },
    };

    return (
      <div className={b()}>
        <h4>Add new film to schedule</h4>

        <Form onSubmit={this.onSubmit}>
          <Form.Item label="Date" {...formItemLayout}>
            {getFieldDecorator('date', {
              rules: [{
                required: true, message: 'Please input date!',
              }],
            })(
              <DatePicker />,
            )}
          </Form.Item>
          <Form.Item label="Time" {...formItemLayout}>
            {getFieldDecorator('time', {
              rules: [{
                required: true, message: 'Please input time!',
              }],
            })(
              <TimePicker format={'HH:mm'} />,
            )}
          </Form.Item>
          <Form.Item label="Title" {...formItemLayout}>
            {getFieldDecorator('title')(
              <Input />,
            )}
          </Form.Item>
          <Form.Item label="Description" {...formItemLayout}>
            {getFieldDecorator('description')(
              <Input />,
            )}
          </Form.Item>
          <Form.Item label="Duration" {...formItemLayout}>
            {getFieldDecorator('duration')(
              <Input />,
            )}
          </Form.Item>
          <Form.Item label="Genre" {...formItemLayout}>
            {getFieldDecorator('genre')(
              <Input />,
            )}
          </Form.Item>
          <Form.Item label="Image url" {...formItemLayout}>
            {getFieldDecorator('image')(
              <Input />,
            )}
          </Form.Item>
          <Form.Item label="Link" {...formItemLayout}>
            {getFieldDecorator('link')(
              <Input />,
            )}
          </Form.Item>
          <Form.Item label="Year" {...formItemLayout}>
            {getFieldDecorator('year')(
              <Input />,
            )}
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type={'primary'} htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

AddFilmForm.propTypes = {};
AddFilmForm.defaultProps = {};


const WrappedAddFilmForm = Form.create()(AddFilmForm);
export default WrappedAddFilmForm;