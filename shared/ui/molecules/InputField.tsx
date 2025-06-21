import { forwardRef, ReactNode, useState } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Text from "../atoms/Text";
import ErrorMessage from "../atoms/ErrorMessage";

type Props = {
  fieldName: string;
  htmlFor: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  button?: ReactNode;
  disabled?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ htmlFor, fieldName, placeholder, type, button, disabled, error, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPassword = type === "password";
    const currentType = isPassword && isPasswordVisible ? "text" : type;

    const handleToggle = () => setIsPasswordVisible((prev) => !prev);

    return (
      <Label htmlFor={htmlFor}>
        <Text className="text-base leading-4.5">{fieldName}</Text>
        <div className="relative">
          <Input
            htmlFor={htmlFor}
            placeholder={placeholder}
            type={currentType}
            disabled={disabled}
            ref={ref}
            error={!!error}
            {...props}
          />
          {button && isPassword && (
            <button
              type="button"
              onClick={handleToggle}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {button}
            </button>
          )}
        </div>
        {error && <ErrorMessage message={error} />}
      </Label>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;
