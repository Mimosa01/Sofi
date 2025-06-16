import TickerItem from "./molecules/TickerItem";

type Props = {
  leftText: string;
  rightText: string;
}

export default function Ticker({ leftText, rightText }: Props) {
  return (
    <div 
      className="relative flex w-full py-[11px] overflow-hidden whitespace-nowrap font-wix-text -tracking-[0.5px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(244,184,184,0.5), rgba(234,214,181,0.5), rgba(227,234,179,0.5), rgba(197,241,208,0.5))',
      }}
    >
      <div
        className="flex animate-marquee"
        style={{ whiteSpace: 'nowrap' }}
      >
        {[...Array(4)].map((_, i) => (
          <TickerItem key={i} leftText={leftText} rightText={rightText} />
        ))}
      </div>
      <div
        className="flex animate-marquee"
        aria-hidden
        style={{ whiteSpace: 'nowrap' }}
      >
        {[...Array(4)].map((_, i) => (
          <TickerItem key={i} leftText={leftText} rightText={rightText} />
        ))}
      </div>
    </div>
  );
}