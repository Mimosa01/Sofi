import { ModalType } from "../store/modalStore"
import ModalSubscribe from "../molecules/ModalSubscribe";
import ModalThank from "../molecules/ModalThank";
import ModalLogin from "./ModalLogin";
import ModalReg from "./ModalReg";

type Props = {
  type: ModalType;
}

export default function ModalForm ({ type }: Props) {
  if (type === 'subscribe') return <ModalSubscribe />;
  if (type === 'thank') return <ModalThank />;
  if (type === 'auth') return <ModalLogin />
  if (type === 'reg') return <ModalReg />
}