import { useEffect, useRef } from "react";
import draw from "./draw";

type Enumrate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumrate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumrate<T>,
  Enumrate<F>
>;

export type TData = {
  key: string;
  value: number;
  color?: string;
};

export type TOptions = {
  percentage: Range<0, 100>;
  width?: number;
  height?: number;
  margin?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
};

type Props = {
  data: [TData, TData];
  options: TOptions;
};

export default function Gauge({ data, options }: Props) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      draw(ref.current, data, options);
    }
  }, [ref, data, options]);

  return <div ref={ref} />;
}
