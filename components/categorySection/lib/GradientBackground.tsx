type Props = { id: number };

export function GradientBackground({ id }: Props) {
  const gradient =
    id === 3
      ? "bg-gradient-to-tr from-[rgba(244,184,184,0.4)] via-[rgba(227,234,179,0.4)] to-[rgba(197,241,208,0.4)]"
      : id === 5
      ? "bg-gradient-to-r from-[rgba(244,184,184,0.4)] via-[rgba(227,179,234,0.4)] to-[rgba(197,201,241,0.4)]"
      : "";

  return (
    <div
      className={`absolute inset-0 ${gradient}`}
      aria-hidden="true"
    />
  );
}
