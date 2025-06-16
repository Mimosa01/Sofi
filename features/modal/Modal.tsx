'use client'

import { useEffect, useRef } from "react";
import useStore from "@/lib/store/modalStore";
import InputField from "../../shared/ui/molecules/InputField";
import Button from "../../shared/ui/atoms/Button";
import EyeIcon from "@/shared/ui/svg/EyeIcon";

export default function Modal () {
  const { isShow } = useStore((state) => state);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isShow && !dialog.open) {
      dialog.showModal();
    } else if (!isShow && dialog.open) {
      dialog.close();
    }
  }, [isShow]);

  return (
    <dialog ref={dialogRef}>
      <h1>Hello world</h1>
      <InputField 
        fieldName="Пароль"
        htmlFor="password"
        type="text"
        placeholder="*******"
        button={
          <Button>
            <EyeIcon />
          </Button>
        }
        errorMessage="Lol"
      />
    </dialog>
  )
}