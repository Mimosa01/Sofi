'use client'

import { useEffect } from "react";
import PreviewModal from "../organisms/PreviewModal";
import ModalForm from "../organisms/ModalForm";
import Button from "@/shared/ui/atoms/Button";
import CloseIcon from "@/shared/ui/svg/CloseIcon";
import useStore from "../store/modalStore";

export default function Modal() {
  const { isShow, type, toggleShow } = useStore((state) => state);

  // Блокируем скролл body при открытии модалки
  useEffect(() => {
    if (isShow) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isShow]);

  // Закрытие по клику вне контента
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleShow();
    }
  };

  if (!isShow) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40"
      onClick={handleBackdropClick}
    >
      <div className="relative top-1/2 left-1/2 flex pt-5 md:pt-0 max-w-[355px] lg:max-w-[800px] w-full max-h-[682px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl z-20">
        <PreviewModal type={type} />
        <ModalForm type={type} />
        <Button
          onClick={toggleShow}
          className="absolute top-2 md:top-0 right-2 md:-right-10 p-2 flex items-center justify-center bg-white rounded-full"
          aria-label="Close modal"
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}