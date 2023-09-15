import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ActiveIndicators = () => {
    return (_jsx("span", { className: "absolute left-0 top-1/2 transform -translate-y-1/2", children: _jsxs("svg", { width: "15", height: "50", viewBox: "0 0 15 50", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("mask", { id: "mask0_0_1", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "-10", y: "-8", width: "25", height: "70", children: _jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M-0.411081 -5.13699C-0.411081 -6.71818 -1.6929 -8 -3.27409 -8C-4.85529 -8 -6.13711 -6.71819 -6.13711 -5.13699V11.7751C-6.13711 16.3724 -9.00012 20.8046 -9.00012 25.4019C-9.00012 29.9992 -6.13711 34.4314 -6.13711 39.0287V58.8037C-6.13711 60.3849 -4.85529 61.6667 -3.27409 61.6667C-1.6929 61.6667 -0.411081 60.3849 -0.411081 58.8037V47.8288C-0.411081 40.1864 6.59222 34.2349 12.3371 29.1948C13.6409 28.0509 14.4766 26.7634 14.4766 25.4019C14.4766 23.6794 13.139 22.0753 11.2081 20.7308C5.5852 16.8154 -0.411081 11.2583 -0.411081 4.40644V-5.13699Z", className: "fill-primary" }) }), _jsx("g", { mask: "url(#mask0_0_1)", children: _jsx("rect", { width: "22.9041", height: "48.6712", transform: "matrix(-1 0 0 1 22.4925 0.58905)", className: "fill-primary" }) })] }) }));
};
const badgeState = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary",
};
const Badge = ({ label, state }) => {
    return (_jsx("span", { className: ["rounded-md text-xs py-1 px-[9px]", badgeState[state]].join(" "), children: label }));
};
export default function VerticalMenu({ lists, className, pathname }) {
    return (_jsx("ul", { className: [`flex w-full flex-col`, className].join(" "), children: lists.map((list) => {
            let isActive = false;
            if (list.slug) {
                isActive =
                    pathname === list.slug ||
                        (pathname.startsWith(list.slug) &&
                            pathname.charAt(list.slug.length) === "/");
            }
            return (_jsxs("li", { className: "relative pl-7", children: [isActive && _jsx(ActiveIndicators, {}), _jsx("span", { className: [
                            "text-sm ml-7",
                            isActive ? "font-bold text-primary" : "text-secondary",
                        ].join(" "), children: list.link }), _jsxs("span", { className: "flex justify-between absolute inset-0 pointer-events-none", children: [!!list.icon && (_jsxs("span", { className: "flex-none mr-[18px] ml-6 relative", children: [list.icon, " ", !!list.hasNotification && (_jsx("span", { className: "w-[6px] h-[6px] rounded-full bg-[#46D39A] absolute bottom-[5px] right-0" }))] })), !!list.badge && (_jsx(Badge, { label: list.badge.label, state: list.badge.state }))] }), !!list.child && list.child.length > 0 && (_jsx(VerticalMenu, { pathname: pathname, lists: list.child }))] }, list.id));
        }) }));
}
