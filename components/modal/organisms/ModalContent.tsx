import { ModalType } from "../store/modalStore";
import ModalThank from "../molecules/ModalThank";
import ModalSubscribe from "../molecules/ModalSubscribe";

type Props = {
  type: ModalType
}

export default function ModalContent ({ type }: Props) {
  if (type === 'thank') return <ModalThank />
  if (type === 'subscribe') return <ModalSubscribe />
}