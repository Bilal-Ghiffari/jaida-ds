import "./assets/index.css";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => (
    <Button size="md" state="primary">
      <button>Button Primary</button>
    </Button>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Button size="lg" state="secondary">
      <button>Button Secondary</button>
    </Button>
  ),
};
