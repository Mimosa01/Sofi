import { ReactNode } from "react";
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
  errorMessage?: string;
}

export default function InputField ({ htmlFor, fieldName, placeholder, type, button, disabled, errorMessage }: Props) {
  return (
    <Label htmlFor={htmlFor}>
      <Text>{ fieldName }</Text>
      <div className="relative">
        <Input 
          htmlFor={htmlFor}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          
        />
        {button && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {button}
          </div>
        )}
      </div>
      {errorMessage && (
        <ErrorMessage message={errorMessage}/>
      )}
    </Label>
  )
}