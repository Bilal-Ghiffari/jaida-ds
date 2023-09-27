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
  maxValue: number;
  color?: string;
  startAnglePercentage?: Range<0, 100>;
};

export type TOptions = {
  backgroundArc?: string;
};

type Props = {
  data: TData[];
  options?: TOptions;
};

export default function Arc({ data, options }: Props) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      draw(ref.current, data, options);
    }
  }, [ref]);

  return <div ref={ref} />;
}
