import Button from '../Button.jsx'
import { fn } from 'storybook/test'
import { ButtonSize, ButtonVariant } from '../ButtonStyles.js'

export default {
  title: 'Button',
  component: Button,
  render: ({ label, ...args }) => <Button {...args}>{label}</Button>,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        labels: {
          [ButtonVariant.DEFAULT]: 'DEFAULT',
          [ButtonVariant.PRIMARY]: 'PRIMARY',
          [ButtonVariant.SECONDARY]: 'SECONDARY',
        },
      },
      options: [
        ButtonVariant.DEFAULT,
        ButtonVariant.PRIMARY,
        ButtonVariant.SECONDARY,
      ],
    },
    size: {
      control: {
        type: 'select',
        labels: {
          [ButtonSize.X_SMALL]: 'X_SMALL',
          [ButtonSize.SMALL]: 'SMALL',
          [ButtonSize.MEDIUM]: 'MEDIUM',
          [ButtonSize.LARGE]: 'LARGE',
          [ButtonSize.X_LARGE]: 'X_LARGE',
        },
      },
      options: [
        ButtonSize.X_SMALL,
        ButtonSize.SMALL,
        ButtonSize.MEDIUM,
        ButtonSize.LARGE,
        ButtonSize.X_LARGE,
      ],
    },
  },
}

export const Default = {
  args: {
    label: '+ Add Movie',
    onClick: fn(),
  },
}

export const Primary = {
  args: {
    label: 'Submit',
    variant: ButtonVariant.PRIMARY,
    onClick: fn(),
  },
}

export const Secondary = {
  args: {
    label: 'Submit',
    variant: ButtonVariant.SECONDARY,
    onClick: fn(),
  },
}
