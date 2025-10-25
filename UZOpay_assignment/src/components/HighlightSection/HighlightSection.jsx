import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const text =
  "We focus on your finances, you focus on what matters most. Your finance our pride, Always Safe & Reliable.";

export default function HighlightSection() {
  const containerRef = useRef(null);
  const tl = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const letters = containerRef.current.querySelectorAll(".letter");

    if (tl.current) tl.current.kill();

    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    gsap.set(letters, {
      color: "#c3aaff99",
      textShadow: "none",
      opacity: 0.6,
      scale: 1,
    });

    letters.forEach((letter, i) => {
      tl.current.to(
        letter,
        {
          color: "#ffffff",
          textShadow:
            "0 0 16px #e7d6ff, 0 0 32px #a378e6, 0 0 42px #b28dff",
          opacity: 1,
          scale: 1.18,
          duration: 0.10,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.to(letter, {
              color: "#c3aaff",
              textShadow: "0 0 8px #c3aaff, 0 0 20px #b28dff",
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        },
        i * 0.12
      );
    });

    return () => tl.current.kill();
  }, []);

  const words = text.split(" ");

  return (
    <section className="flex items-center justify-center min-h-[40vh] bg-black py-10 px-4 w-full">
      <h1
        ref={containerRef}
        className="text-center md:text-left font-bold leading-tight text-[6vw]  text-[#c3aaff] whitespace-normal max-w-[90%] text-3xl md:mt-32 md:ml-36 "
        aria-label={text}
      >
        {words.map((word, wIdx) => (
          // The WORD CONTAINER: Ensures the word is intact, and adds space after the word.
          <span key={wIdx} className="inline-block whitespace-nowrap mr-3">
            {word.split("").map((ch, i) => (
              // The LETTER: **KEY FIX**: Added `px-[1px]` for spacing between letters.
              <span
                key={i}
                className="letter inline-block align-middle leading-tight transition-all duration-200 **px-[1px]**"
                aria-hidden="true"
              >
                {ch}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </section>
  );
}