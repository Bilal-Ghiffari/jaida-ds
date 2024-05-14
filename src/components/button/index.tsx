import { cloneElement, ReactElement } from "react";
import configs from "./configs";

type Props = {
  children: ReactElement<any>;
  /* size of button*/
  size: "sm" | "md" | "lg";
  /* state of button */
  state: "primary" | "secondary" | "custom";
  /* additional className */
  className?: string;
  /* add onClick event listener to children */
  onClick?: () => void;
};

/* Primary UI component for user interactive by clicking to it */
export default function Button({
  children,
  size,
  state,
  className,
  onClick,
}: Props) {
  const classNames = [configs.state[state], configs.size[size], className].join(
    " "
  );
  const passingProps: { [key: string]: any } = {
    className: classNames,
  };

  if (onClick) passingProps.onClick = onClick;
  return cloneElement(children, passingProps);
}
