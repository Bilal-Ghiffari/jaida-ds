import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function index({ wrapper, input, addOn }) {
    return (_jsxs("div", { className: wrapper?.className || "relative h-12", style: wrapper?.style, children: [addOn, _jsx("input", { id: input?.id, type: input?.type, className: input?.className ||
                    "h-full appearance-none hover:bg-gray-100 focus:outline-none bg-gray-50 rounded-md pl-14 py-4 text-sm", placeholder: input?.placeholder, name: input?.name, value: input?.value, onChange: input?.onChange })] }));
}
