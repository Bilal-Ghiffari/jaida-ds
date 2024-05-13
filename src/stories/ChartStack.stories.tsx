import React from "react";
import "./assets/index.css";
import type { Meta, StoryObj } from "@storybook/react";
import Stack from "../components/Chart/Stack";

const meta: Meta = {
  title: "Components/Stack",
  component: Stack,
  tags: [],
};
export default meta;
type Story = StoryObj;

export const StacktStory: Story = {
  render: () => (
    <div className="w-full">
      <Stack
        options={{ background: "#F2F0FF" }}
        data={[
          {
            legend: "level",
            color: "#51459E",
            type: "bar",
            values: [
              {
                value: 40,
                label: "01",
              },
              {
                value: 38,
                label: "02",
              },
              {
                value: 15,
                label: "03",
              },
              {
                value: 35,
                label: "04",
              },
              {
                value: 20,
                label: "05",
              },
              {
                value: 55,
                label: "06",
              },
              {
                value: 10,
                label: "07",
              },
              {
                value: 40,
                label: "08",
              },
              {
                value: 20,
                label: "09",
              },
              {
                value: 18,
                label: "10",
              },
              {
                value: 50,
                label: "11",
              },
              {
                value: 38,
                label: "12",
              },
            ],
          },
          {
            legend: "revenue",
            color: "#F9896B",
            type: "line",
            values: [
              {
                value: 30,
                label: "01",
              },
              {
                value: 20,
                label: "02",
              },
              {
                value: 10,
                label: "03",
              },
              {
                value: 60,
                label: "04",
              },
              {
                value: 65,
                label: "05",
              },
              {
                value: 70,
                label: "06",
              },
              {
                value: 55,
                label: "07",
              },
              {
                value: 40,
                label: "08",
              },
              {
                value: 35,
                label: "09",
              },
              {
                value: 18,
                label: "10",
              },
              {
                value: 65,
                label: "11",
              },
              {
                value: 45,
                label: "12",
              },
            ],
          },
        ]}
      />
    </div>
  ),
};
