import React, { useEffect, useRef } from "react";

export const ScreenFitText = ({ children }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const resizeText = () => {
      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = `${mid}px`;

        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      text.style.fontSize = `${max}px`;
    };

    // Ensure text is sized after layout is stable
    requestAnimationFrame(() => {
      resizeText();
    });

    const observer = new ResizeObserver(resizeText);
    observer.observe(container);

    window.addEventListener("resize", resizeText);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  return (
    <div
      className="w-full mx-auto flex justify-center overflow-hidden"
      ref={containerRef}
    >
      <span
        className="whitespace-nowrap font-[400] coolvetia-font !text-left text-slate-900 leading-none block"
        ref={textRef}
      >
        {children}
      </span>
    </div>
  );
};
