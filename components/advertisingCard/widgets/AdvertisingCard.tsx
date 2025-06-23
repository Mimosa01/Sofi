import MiniBodyCardYellow from "../organisms/MiniBodyCardYellow";
import SidebarCardAds from "../organisms/SidebarCardAds";
import SimpleBodyCard from "../organisms/SimpleBodyCard";

type Props = {
  type: 'simple' | 'mini' | 'sidebarYellow' | 'sidebarGradient';
}

export default function AdvertisingCard ({ type }: Props) {
  if (type === 'simple') return (<SimpleBodyCard />);
  if (type === 'mini' ) return (<MiniBodyCardYellow />);
  if (type === 'sidebarYellow') return (<SidebarCardAds yellow/>);
  if (type === 'sidebarGradient') return (<SidebarCardAds />);
}