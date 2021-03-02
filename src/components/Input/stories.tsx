import React, { useRef } from 'react';
import { FiMail } from 'react-icons/fi';

import { Story, Meta } from '@storybook/react/types-6-0';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Input, InputProps } from '.';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story<InputProps> = (args) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async () => {
    try {
      formRef.current?.setErrors({});
    } catch (err) {
      if (err) {
        formRef.current?.setErrors(err);
      }
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input {...args} />
    </Form>
  );
};

Default.args = {
  name: 'email',
  type: 'text',
  placeholder: 'E-mail',
  icon: FiMail,
};
