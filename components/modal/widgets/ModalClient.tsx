'use client'

import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/modal/widgets/Modal"), {
  ssr: false,
  loading: () => null,
});

export default function ModalClient () {
  return (<Modal />)
}