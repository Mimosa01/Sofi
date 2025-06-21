import Text from "@/shared/ui/atoms/Text";
import BriefcaseMiniIcon from "@/shared/ui/svg/BriefcaseMiniIcon";
import BuildingIcon from "@/shared/ui/svg/BulgingIcon";
import MoneybagIcon from "@/shared/ui/svg/MoneybagIcon";
import WorldIcon from "@/shared/ui/svg/WorldIcon";

type Props = {
  internship: boolean;
  remote: boolean;
  salary?: string;
}

export default function TagCard ({ internship, remote, salary }: Props) {
  const salaryText = salary ? salary.split('-')[0] : 'не указана';
  return (
    <div className="flex flex-wrap gap-3 text-base leading-5 text-neutral-800">
      <div className="flex flex-nowrap items-center gap-0.5">
        {remote ? <WorldIcon /> : <BuildingIcon />}
        <Text>{remote ? 'удаленно' : 'в офис'}</Text>
      </div>
      {
        internship && 
        <div className="flex flex-nowrap items-center gap-0.5">
          <BriefcaseMiniIcon />
          <Text>стажировка</Text>
        </div>
      }
      <div className="flex flex-nowrap items-center gap-0.5">
        <MoneybagIcon />
        <Text>от { salaryText }₽</Text>
      </div>
    </div>
  )
}

