import { ReactNode } from "react";
import DefaultPreview from "../molecules/DefaultPriview";
import SubscribesPreview from "../molecules/SubscribesPreview";
import ThanckPreview from "../molecules/ThankPreview";
import { ModalType } from "../store/modalStore";

type Props = {
  type: ModalType;
}

export default function PreviewModal ({ type }: Props) {
  let modal: ReactNode;

  if (type !== 'subscribe' && type !== 'thank') modal = <DefaultPreview />;
  if (type === 'subscribe') modal = <SubscribesPreview />;
  if (type === 'thank') modal = <ThanckPreview />

  return (
    <div className="hidden lg:block max-w-95 w-full items-stretch lg:min-h-[532px] rounded-tl-3xl rounded-bl-3xl overflow-hidden">
      {modal}
    </div>
  )
}