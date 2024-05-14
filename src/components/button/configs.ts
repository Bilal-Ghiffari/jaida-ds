const configs: {
  state: {
    [key: string]: string;
  };
  size: {
    [key: string]: string;
  };
} = {
  state: {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-slate-700",
    secondary: "bg-slate-700 hover:bg-slate-800 text-slate-100",
    custom: "",
  },
  size: {
    sm: "text-xs h-8 rounded",
    md: "text-sm h-10 rounded-md",
    lg: "text-base h-12 rounded-lg",
  },
};

export default configs;
