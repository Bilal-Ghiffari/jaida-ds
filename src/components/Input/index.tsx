import { CSSProperties, ChangeEventHandler, ReactNode } from "react";

type Props = {
  wrapper: {
    className?: string;
    style?: CSSProperties;
  };
  input: {
    type: "text" | "number" | "email" | "password" | "file";
    name: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    id: string;
    className?: string;
    placeholder?: string;
  };
  addOn: ReactNode;
};

export default function index({ wrapper, input, addOn }: Props) {
  return (
    <div
      className={wrapper?.className || "relative h-12"}
      style={wrapper?.style}
    >
      {addOn}
      <input
        id={input?.id}
        type={input?.type}
        className={
          input?.className ||
          "h-full appearance-none hover:bg-gray-100 focus:outline-none bg-gray-50 rounded-md pl-14 py-4 text-sm"
        }
        placeholder={input?.placeholder}
        name={input?.name}
        value={input?.value}
        onChange={input?.onChange}
      />
    </div>
  );
}
