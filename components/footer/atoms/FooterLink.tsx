import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  withSeparator?: boolean;
};

export default function FooterLink({ href, children, className = '', withSeparator = false }: Props) {
  return (
    <Link
      href={href}
      className={`${className} ${withSeparator ? "after:content-['•'] after:mx-2.5 after:text-neutral-400" : ''}`}
    >
      {children}
    </Link>
  );
}
