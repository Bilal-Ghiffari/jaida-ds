import { CSSProperties, ChangeEventHandler, ReactNode } from "react";
type Props = {
    wrapper: {
        className?: string;
        style?: CSSProperties;
    };
    input: {
        type: "text" | "number" | "email" | "password" | "file";
        name: string;
        value?: string;
        onChange?: ChangeEventHandler<HTMLInputElement>;
        id: string;
        className?: string;
        placeholder?: string;
    };
    addOn: ReactNode;
};
export default function index({ wrapper, input, addOn }: Props): import("react/jsx-runtime").JSX.Element;
export {};
