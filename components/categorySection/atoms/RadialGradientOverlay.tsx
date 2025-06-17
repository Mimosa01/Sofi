type Gradient = {
  color: string; // в формате "238,185,2" (без rgba)
  alpha: number;  // прозрачность от 0 до 1
  size: number;   // размер круга в px
  position: {
    top?: string;    // например "-200px"
    bottom?: string;
    left?: string;
    right?: string;
    translateX?: string; // например "-50%" (для центровки)
    translateY?: string;
  };
  stop?: number;   // позиция прозрачности в %, по умолчанию 70
};

type Props = {
  gradients: Gradient[];
};

export default function RadialGradientOverlay({ gradients }: Props) {
  return (
    <div
      className="
        absolute inset-0 z-10 opacity-0 transition-opacity duration-300 ease-out
        pointer-events-none group-hover:opacity-100
      "
      aria-hidden="true"
    >
      {gradients.map(({ color, alpha, size, position, stop = 70 }, i) => {
        const style: React.CSSProperties = {
          width: `${size}px`,
          height: `${size}px`,
          backgroundImage: `radial-gradient(circle, rgba(${color}, ${alpha}) 0%, transparent ${stop}%)`,
          borderRadius: "50%",
          position: "absolute",
          ...position,
          transform: `${
            (position.translateX || position.translateY)
              ? `translate(${position.translateX ?? "0"}, ${position.translateY ?? "0"})`
              : undefined
          }`,
        };

        return <div key={i} style={style} />;
      })}
    </div>
  );
}
