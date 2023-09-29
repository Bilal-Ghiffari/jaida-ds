import "./assets/index.css";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input";
import { MagnifyingGlass, SlidersHorizontal } from "@phosphor-icons/react";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const InputStory: Story = {
  render: () => (
    <Input
      wrapper={{ className: "" }}
      addOn={
        <>
          <span className="absolute pointer-events-none flex left-0 items-center justify-center h-full opacity-30 aspect-square">
            <MagnifyingGlass size={20} />
          </span>
          <button className="absolute right-0 top-0 flex items-center justify-center h-full aspect-square opacity-30">
            <SlidersHorizontal size={20} />
          </button>
        </>
      }
      input={{
        id: "abs",
        type: "text",
        name: "abs",
        placeholder: "Searching Dashboard",
        className:
          "h-full w-full appearance-none hover:bg-gray-100 focus:outline-none bg-gray-50 rounded-md pl-14 py-4 text-sm",
      }}
    />
  ),
};
