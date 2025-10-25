import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";

const images = [image1, image2, image3];

export default function BizSettleAnimated() {
  const [index, setIndex] = useState(0);
  const textRef = useRef();
  const overlayRef = useRef();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isActive) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.9, ease: "power2.out" });
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 5 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" }
      );
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.9, ease: "power2.in" });
      gsap.to(textRef.current, { opacity: 0, scale: 5, duration: 0.9, ease: "power2.in" });
    }
  }, [isActive]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-transparent"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img
        src={images[index]}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none z-10"
        style={{ opacity: 0 }}
      />
      <h1
        ref={textRef}
        className="font-extrabold select-none"
        style={{
          fontSize: "12vw",
          color: "transparent",
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textFillColor: "transparent",
          opacity: 0,
          transform: "scale(2)",
          willChange: "transform, opacity",
          zIndex: 20,
        }}
      >
        BizSettle
      </h1>
    </section>
  );
}
