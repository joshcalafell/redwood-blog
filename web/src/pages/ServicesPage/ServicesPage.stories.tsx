import type { Meta, StoryObj } from '@storybook/react'

import ServicesPage from './ServicesPage'

const meta: Meta<typeof ServicesPage> = {
  component: ServicesPage,
}

export default meta

type Story = StoryObj<typeof ServicesPage>

export const Primary: Story = {}
