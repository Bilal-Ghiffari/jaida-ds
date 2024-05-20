import React from "react";
import "./assets/index.css";
import type { Meta, StoryObj } from "@storybook/react";
import Arc from "../components/Chart/Arc";

const meta: Meta = {
  title: "Components/Arc",
  component: Arc,
  tags: [],
};
export default meta;
type Story = StoryObj;

export const ArctStory: Story = {
  render: () => (
    <div className="w-56">
      <Arc
        options={{ backgroundArc: "#F2F0FF" }}
        data={[
          {
            key: "level",
            value: 1700,
            maxValue: 2000,
            startAnglePercentage: 25,
            color: "#B4E8F4",
          },
          { key: "spent", value: 1400, maxValue: 1500, color: "#F98968" },
          { key: "revenue", value: 1600, maxValue: 2000, color: "#51459E" },
        ]}
      />
    </div>
  ),
};
