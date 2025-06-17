'use client'

import { useState } from "react"
import Button from "../atoms/Button"
import Switch from "../atoms/Switch"
import Text from "../atoms/Text"

type Props = {
  text: string;
}

export default function ButtonSwitch({ text }: Props) {
  const [enabled, setEnabled] = useState(false)

  const toggle = () => {
    setEnabled(prev => !prev)
  }

  return (
    <Button
      className="px-[15px] py-3 bg-neutral-100 rounded-xl flex items-center justify-between gap-4"
      onClick={toggle}
    >
      <Text className="font-wix-text text-neutral-800 text-lg leading-5.5">
        {text}
      </Text>
      <Switch checked={enabled} />
    </Button>
  )
}
