import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import DataFlow03Icon from '../Icons/dataflow-03.svg';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondaryColor', 'secondaryGray', 'tertiaryColor', 'tertiaryGray', 'linkColor', 'linkGray'],
      control: { type: 'select' },
    },
    size: { options: ['sm', 'md', 'lg', 'xl', '2xl'], control: { type: 'select' } },
    startIcon: {
      options: ['Empty', 'DataFlow03Icon'],
      mapping: {
        Empty: undefined,
        DataFlow03Icon: <DataFlow03Icon />,
      },
      control: {
        type: 'select',
        labels: {
          Empty: 'Empty',
          DataFlow03Icon: 'DataFlow03Icon',
        },
      },
    },
    endIcon: {
      options: ['Empty', 'DataFlow03Icon'],
      mapping: {
        Empty: undefined,
        DataFlow03Icon: <DataFlow03Icon />,
      },
      control: {
        type: 'select',
        labels: {
          Empty: 'Empty',
          DataFlow03Icon: 'DataFlow03Icon',
        },
      },
    },

    disabled: { options: [false, true], control: { type: 'radio' } },
    loading: { options: [false, true], control: { type: 'radio' } },
    href: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  variant: 'primary',
  // startIcon: <CalendarIcon />,
  disabled: false,
  destructive: false,
  loading: false,
  fullSize: false,
  href: '#',
  children: '20 July, 2020',
};
