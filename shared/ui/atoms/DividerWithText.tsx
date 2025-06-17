import { memo } from "react";

type Props = {
  text: string;
}

function DividerWithTextComponent ({ text }: Props) {
  return (
    <span className="flex items-center text-gray-600 leading-4.5 before:flex-1 before:border-t before:border-gray-300 before:mr-4 after:flex-1 after:border-t after:border-gray-300 after:ml-4">
      { text }
    </span>
  )
}

const DividerWithText = memo(DividerWithTextComponent);
export default DividerWithText;