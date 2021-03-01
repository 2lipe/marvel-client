import React, { useRef } from 'react';
import { FiMail } from 'react-icons/fi';

import { Story, Meta } from '@storybook/react/types-6-0';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    icon: {
      type: '',
    },
  },
  args: {
    name: 'email',
  },
} as Meta;

export const Default: Story = () => {
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
      <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
    </Form>
  );
};
