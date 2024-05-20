import { useEffect, useRef } from "react";
import draw from "./draw";

export type TValues = {
  value: number;
  label: string;
};

export type TData = {
  legend: string;
  values: TValues[];
  color?: string;
} & ({ type: "bar" } | { type: "line" });

export type TOptions = {
  background?: string;
  height?: number;
  widht?: number;
  xAxies?: {
    display: boolean;
  };
};

type Props = {
  data: TData[];
  options: TOptions;
};

export default function Stack({ data, options }: Props) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      draw(ref.current, data, options);
    }
  }, [ref, data, options]);

  return <div ref={ref} />;
}
