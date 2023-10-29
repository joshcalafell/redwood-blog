// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import LineChart from './LineChart'

const meta: Meta<typeof LineChart> = {
  component: LineChart,
}

export default meta

type Story = StoryObj<typeof LineChart>

export const Primary: Story = {}
