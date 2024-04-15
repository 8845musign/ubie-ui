import { Meta, StoryObj } from '@storybook/react';
import { Center, Box, Button } from '..';

export default {
  component: Center,
} satisfies Meta<typeof Center>;

type Story = StoryObj<typeof Center>;

export const Default: Story = {
  render: () => (
    <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
  ),
};

export const PaddingOutside: Story = {
  render: () => (
    <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
  ),
};

export const TextCenter: Story = {
  render: () => (
    <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
  ),
};

export const ChildrenCenter: Story = {
  render: () => (
    <Center maxWidth="400px" childrenCenter>
      <Button>Center Button</Button>
    </Center>
  ),
};
