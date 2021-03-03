import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { GoAlert } from 'react-icons/go';
import { Modal, ModalProps } from '.';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

export const Default: Story<ModalProps> = (args) => <Modal {...args} />;

Default.args = {
  icon: <GoAlert size={30} />,
  iconColor: 'alert',
  title: 'Sair',
  description: 'Você tem certeza que deseja sair da aplicação?',
  leftButtonColor: 'default',
  rightButtonColor: 'alert',
  leftButtonLabel: 'Agora não',
  rightButtonLabel: 'Sair',
};
