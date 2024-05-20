import React from "react";
import "./assets/index.css";
import type { Meta, StoryObj } from "@storybook/react";
import Gauge from "../components/Chart/Gauge";

const meta: Meta = {
  title: "Components/Gauge",
  component: Gauge,
  tags: [],
};
export default meta;
type Story = StoryObj;

export const GaugeStoryBG: Story = {
  render: () => (
    <div className="w-96 bg-[#51459E]">
      <Gauge
        options={{ percentage: 80, width: 300, height: 200 }}
        data={[
          { key: "spent", value: 500, color: "#F98968" },
          {
            key: "level",
            value: 100,
            color: "#B4E8F4",
          },
        ]}
      />
    </div>
  ),
};

export const GaugeStory: Story = {
  render: () => (
    <div className="w-96">
      <Gauge
        options={{ percentage: 80, width: 300, height: 200 }}
        data={[
          { key: "spent", value: 500, color: "#F98968" },
          {
            key: "level",
            value: 100,
            color: "#B4E8F4",
          },
        ]}
      />
    </div>
  ),
};
