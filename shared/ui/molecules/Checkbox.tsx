import { wixMadeforText } from "@/app/fonts";
import { forwardRef, InputHTMLAttributes } from "react";
import TickIcon from "../svg/TickIcon";

type Props = {
  htmlFor: string;
  fieldName: string;
  error?: boolean;
  required?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ fieldName, error, htmlFor, required, className, ...props }, ref) => {
    return (
      <label htmlFor={htmlFor} className="flex items-center gap-2 cursor-pointer select-none">
        <div className="relative">
          <input
            ref={ref}
            id={htmlFor}
            type="checkbox"
            className={`
              peer w-5.5 h-5.5 border-1 border-neutral-300 bg-white checked:bg-primary-500 checked:border-primary-500 
              appearance-none transition-all duration-200 rounded-[7px]
              ${error && "border-red-500"}
              ${props.disabled && "opacity-50 cursor-not-allowed"}
              ${className}
            `}
            {...props}
          />
          <TickIcon className="absolute top-1/2 left-1/2 w-3.5 h-3.5 text-white -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"/>
        </div>
        <span className={`text-sm text-neutral-800 ${wixMadeforText.className}`}>
          {fieldName}
          {required && (
            <span className="text-red-500 ml-1" title="Обязательное поле">*</span>
          )}
        </span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
