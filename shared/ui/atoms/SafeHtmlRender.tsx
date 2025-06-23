import { sanitize } from "@/lib/utils/sanitizeHTML";

type Props = {
  html: string;
  className?: string;
};

export default function SafeHtmlRenderer({ html, className }: Props) {
  const safeHTML = sanitize(html);

  return (
    <div
      className={`prose max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: safeHTML }}
    />
  );
}
