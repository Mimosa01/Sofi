type Props = {
  phone: string;
  phoneHref: string;
  email: string;
};

export default function ContactInfo({ phone, phoneHref, email }: Props) {
  return (
    <div className="flex flex-col font-semibold md:items-end">
      <a href={`tel:${phoneHref}`} className="text-xl md:text-2xl -tracking-[0.5px] md:tracking-normal leading-6.5 text-neutral-100">
        {phone}
      </a>
      <a href={`mailto:${email}`} className="text-base md:text-lg -tracking-[0.5px] md:tracking-normal md:leading-7.5 text-neutral-500">
        {email}
      </a>
    </div>
  );
}
