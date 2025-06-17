import { memo } from "react";

type Props = {
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  htmlFor: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean; // добавим флаг ошибки
} & React.InputHTMLAttributes<HTMLInputElement>;

function InputComponent ({
  placeholder,
  type,
  value,
  htmlFor,
  className = "",
  disabled = false,
  error = false,
  ...props
}: Props) {
  return (
    <input
      id={htmlFor}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      {...props}
      className={`
        w-full p-[15px] text-lg text-neutral-800 font-normal font-wix-display rounded-xl leading-5.5
        placeholder:text-neutral-300 placeholder:text-lg placeholder:font-normal placeholder:font-wix-display placeholder:leading-5.5
        border transition-colors duration-200
        ${error ? "border-quaternary-400 focus:border-quaternary-400" : "border-neutral-400"}
        focus:outline-none
        disabled:bg-neutral-100 disabled:cursor-not-allowed
        ${className}
      `}
    />
  );
}

const Input = memo(InputComponent);
export default Input;