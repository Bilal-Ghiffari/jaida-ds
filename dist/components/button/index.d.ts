import { ReactElement } from "react";
type Props = {
    children: ReactElement<any>;
    size: "sm" | "md" | "lg";
    state: "primary" | "secondary" | "custom";
    className?: string;
    onClick?: () => void;
};
export default function Button({ children, size, state, className, onClick, }: Props): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
