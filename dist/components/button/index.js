import { cloneElement } from "react";
import configs from "./configs";
/* Primary UI component for user interactive by clicking to it */
export default function Button({ children, size, state, className, onClick, }) {
    const classNames = [configs.state[state], configs.size[size], className].join(" ");
    const passingProps = {
        className: classNames,
    };
    if (onClick)
        passingProps.onClick = onClick;
    return cloneElement(children, passingProps);
}
