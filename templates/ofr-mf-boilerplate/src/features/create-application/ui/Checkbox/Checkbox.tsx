import React from 'react';
import { Checkbox, Form } from 'antd';

type CheckboxType = {
  name: string;
  label?: string;
  hint?: string;
  value?: string | number;
  onChange?: any;
  invalid?: boolean;
  isTouched?: boolean;
  isDirty?: boolean;
  error?: {
    message?: string;
  };
};

const UiCheckbox: React.FC<CheckboxType> = ({
  onChange,
  label,
  value,
  name,
  invalid,
  error,
}) => {
  const validStatus = invalid ? 'error' : "";

  return (
    <Form.Item
      label={label}
      name={name}
      hasFeedback={true}
      validateStatus={validStatus}
      help={error?.message}

    >
      <Checkbox onChange={onChange} name={name} checked={!!value}>{label}</Checkbox>
    </Form.Item>

  );
};

export default UiCheckbox;
