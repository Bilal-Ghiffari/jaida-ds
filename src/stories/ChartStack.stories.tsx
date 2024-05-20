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
        options={{
          background: "#F2F0FF",
          height: 150,
          xAxies: { display: true },
        }}
        data={[
          {
            legend: "level",
            color: "#51459E",
            type: "bar",
            values: [
              {
                value: 40,
                label: "Jan",
              },
              {
                value: 38,
                label: "Feb",
              },
              {
                value: 38,
                label: "Mar",
              },
              {
                value: 15,
                label: "Apr",
              },
              {
                value: 35,
                label: "May",
              },
              {
                value: 20,
                label: "Jun",
              },
              {
                value: 55,
                label: "Jul",
              },
              {
                value: 10,
                label: "Aug",
              },
              {
                value: 40,
                label: "Sep",
              },
              {
                value: 20,
                label: "Okt",
              },
              {
                value: 18,
                label: "Nov",
              },
              {
                value: 50,
                label: "Des",
              },
            ],
          },
          {
            legend: "revenue",
            color: "#F9896B",
            type: "line",
            values: [
              {
                value: 50,
                label: "Jan",
              },
              {
                value: 60,
                label: "Feb",
              },
              {
                value: 40,
                label: "Mar",
              },
              {
                value: 60,
                label: "Apr",
              },
              {
                value: 65,
                label: "May",
              },
              {
                value: 70,
                label: "Jun",
              },
              {
                value: 65,
                label: "Jul",
              },
              {
                value: 57,
                label: "Aug",
              },
              {
                value: 50,
                label: "Sep",
              },
              {
                value: 70,
                label: "Okt",
              },
              {
                value: 75,
                label: "Nov",
              },
              {
                value: 80,
                label: "Des",
              },
            ],
          },
        ]}
      />
    </div>
  ),
};
