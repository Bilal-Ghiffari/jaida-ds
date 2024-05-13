export type TValues = {
    value: number;
    label: string;
};
export type TData = {
    legend: string;
    values: TValues[];
    color?: string;
} & ({
    type: "bar";
} | {
    type: "line";
});
export type TOptions = {
    background?: string;
};
type Props = {
    data: TData[];
    options?: TOptions;
};
export default function Stack({ data }: Props): import("react/jsx-runtime").JSX.Element;
export {};
