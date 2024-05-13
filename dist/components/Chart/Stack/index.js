import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import draw from "./draw";
export default function Stack({ data }) {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            draw(ref.current, data);
        }
    }, [ref]);
    return _jsx("div", { ref: ref });
}
