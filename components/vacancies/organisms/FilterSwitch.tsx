'use client';

import ButtonSwitch from "@/shared/ui/molecules/ButtonSwitch";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Props = {
  text: string;
  paramKey: string;         // например: "intership"
  defaultLabel: string;     // не используется в логике ниже, но можешь адаптировать под подписи
}

export default function FilterSwitch({ text, paramKey }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentValue = searchParams.get(paramKey);
  const [enabled, setEnabled] = useState(currentValue === "true");

  const toggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey, String(newValue));

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const current = searchParams.get(paramKey);
    setEnabled(current === "true");
  }, [searchParams, paramKey]);

  return (
    <ButtonSwitch text={text} enabled={enabled} toggle={toggle} />
  );
}
