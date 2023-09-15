/// <reference types="react" />
type TList = {
    id: string;
    link: React.ReactNode;
    slug?: string;
    icon?: React.ReactNode;
    child?: TList[];
    badge?: {
        state: "primary" | "secondary" | "custom";
        label: string;
        overrideClassname?: string;
    };
    hasNotification?: boolean;
    onClick?: () => void;
};
type Props = {
    className?: string;
    lists: TList[];
    pathname: string;
};
export default function VerticalMenu({ lists, className, pathname }: Props): import("react/jsx-runtime").JSX.Element;
export {};
