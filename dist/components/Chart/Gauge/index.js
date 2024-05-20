import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import draw from "./draw";
export default function Gauge({ data, options }) {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            draw(ref.current, data, options);
        }
    }, [ref, data, options]);
    return _jsx("div", { ref: ref });
}
