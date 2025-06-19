import MiniBodyCardYellow from "../organisms/MiniBodyCardYellow";
import SimpleBodyCard from "../organisms/SimpleBodyCard";

type Props = {
  type: 'simple' | 'mini';
}

export default function AdvertisingCard ({ type }: Props) {
  if (type === 'simple') return (<SimpleBodyCard />);
  if (type === 'mini' ) return (<MiniBodyCardYellow />);
}