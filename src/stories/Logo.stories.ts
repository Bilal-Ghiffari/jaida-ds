import "./assets/index.css";
import type { Meta, StoryObj } from "@storybook/react";
import Logo from "../components/Logo";

const meta: Meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;
export const Primary: Story = {
  args: {},
};
