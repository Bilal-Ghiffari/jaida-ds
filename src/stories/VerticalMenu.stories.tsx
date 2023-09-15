import "./assets/index.css";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import VerticalMenu from "../components/VerticalMenu";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { Link } from "react-router-dom";
import IconHome from "../icons/IconHome";
import IconLocation from "../icons/IconLocation";
import IconMessage from "../icons/IconMessage";
import IconCloud from "../icons/IconCloud";

const meta: Meta = {
  title: "Components/VerticalMenu",
  component: VerticalMenu,
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: "42" },
      },
      routing: { path: "/users/:userId" },
    }),
  },
};
export default meta;
type Story = StoryObj;
export const Primary: Story = {
  render: () => (
    <div>
      <VerticalMenu
        className="gap-y-4"
        pathname="/"
        lists={[
          {
            id: "home",
            link: <Link to="/home">Home</Link>,
            slug: "/",
            icon: <IconHome />,
          },
          {
            id: "locations",
            link: <Link to="/locations">Locations</Link>,
            slug: "/locations",
            icon: <IconLocation />,
          },
          {
            id: "cloud-storage",
            link: <Link to="/cloud-storage">Cloud Storage</Link>,
            slug: "/cloud-storage",
            icon: <IconCloud />,
          },
          {
            id: "messages",
            link: <Link to="/messages">Messages</Link>,
            slug: "/messages",
            hasNotification: true,
            icon: <IconMessage />,
            badge: {
              label: "10",
              state: "primary",
            },
          },
        ]}
      />
    </div>
  ),
};
