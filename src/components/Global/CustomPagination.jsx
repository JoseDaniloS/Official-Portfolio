import { useEffect, useState } from "react";

export function CustomPagination({ size, activeIndex }) {
  const VISIBLE_DOTS = 4;
  const DOT_SIZE = 32;
  const GAP = 8;
  const DOT_SPACING = DOT_SIZE + GAP;

  const [previousIndex, setPreviousIndex] = useState(activeIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calcula o início da janela visível de dots
  const visibleStartIndex = Math.min(
    Math.max(0, activeIndex - Math.floor(VISIBLE_DOTS / 2)),
    Math.max(0, size - VISIBLE_DOTS)
  );

  const offsetX = visibleStartIndex * DOT_SPACING;

  // Controla a transição da linha animada
  useEffect(() => {
    if (activeIndex !== previousIndex) {
      setIsAnimating(true);

      const animationTimeout = setTimeout(() => {
        setPreviousIndex(activeIndex);
        setIsAnimating(false);
      }, 300); // duração da animação

      return () => clearTimeout(animationTimeout);
    }
  }, [activeIndex]);

  const fromPosition = (previousIndex - visibleStartIndex) * DOT_SPACING;
  const toPosition = (activeIndex - visibleStartIndex) * DOT_SPACING;

  const animatedLeft = Math.min(fromPosition, toPosition);
  const animatedWidth = Math.abs(toPosition - fromPosition) + DOT_SIZE;

  return (
    <div
      className="relative overflow-hidden mt-4"
      style={{ maxWidth: `${DOT_SPACING * VISIBLE_DOTS - GAP}px` }}
    >
      {/* Linha animada entre os dots */}
      <div
        className="absolute top-0 bottom-0 my-auto bg-neon-red-hover transition-all duration-300 ease-in-out"
        style={{
          left: `${animatedLeft}px`,
          width: isAnimating ? `${animatedWidth}px` : `${DOT_SIZE}px`,
        }}
      />

      {/* Dots fixos */}
      <div
        className="flex relative z-10 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${offsetX}px)` }}
      >
        {Array.from({ length: size }).map((_, index) => (
          <div
            key={index}
            style={{
              minWidth: `${DOT_SIZE}px`,
              minHeight: `${4}px`,
              backgroundColor: "#FFFFFF3A",
              marginRight: index !== size - 1 ? `${GAP}px` : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
