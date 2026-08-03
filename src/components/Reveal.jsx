import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 900,
  distance = 50,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  let transform = "";

  switch (direction) {
    case "left":
      transform = `translateX(-${distance}px) scale(.96)`;
      break;

    case "right":
      transform = `translateX(${distance}px) scale(.96)`;
      break;

    case "down":
      transform = `translateY(-${distance}px) scale(.96)`;
      break;

    default:
      transform = `translateY(${distance}px) scale(.96)`;
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0) scale(1)" : transform,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(.22,.61,.36,1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;