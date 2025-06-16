import BGCardIcon from "@/shared/ui/svg/BGCardIcon";

type Props = {
  className: string;
}

export function CardIconBackground({ className }: Props) {
  return (
    <div
      className={className}
      aria-hidden="true"
    >
      <BGCardIcon />
    </div>
  );
}
