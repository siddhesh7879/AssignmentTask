import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [image1, image2, image3];

export default function BizSettleAnimated() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  // Which input currently "owns" the animation: null | "scroll" | "hover"
  const triggeredBy = useRef(null);
  // Whether the in-animation is currently running or active
  const isActive = useRef(false);
  // single timeline controlling in / out animation
  const tlRef = useRef(null);

  // image cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // build single timeline (paused) and ScrollTrigger
  useEffect(() => {
    // build timeline once
    const tl = gsap.timeline({ paused: true });

    tl.to(overlayRef.current, { opacity: 1, duration: 0.9, ease: "power2.out" }, 0);
    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 5 },
      { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
      0
    );

    // add reverse (out) animation on timeline.reverse()
    // we use timeline.reverse() to play out; no extra setup required

    tlRef.current = tl;

    // ScrollTrigger callbacks only call our handler -- they won't directly manipulate timeline
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      // onEnter when user scrolls into view
      onEnter: () => {
        handleTrigger("scroll");
      },
      // onEnterBack when user scrolls back up into view
      onEnterBack: () => {
        handleTrigger("scroll");
      },
      // onLeave and onLeaveBack we use to possibly reverse if scroll "releases" ownership
      onLeave: () => {
        handleRelease("scroll");
      },
      onLeaveBack: () => {
        handleRelease("scroll");
      },
    });

    return () => {
      st.kill();
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // central handler to start (own) the in-animation
  const handleTrigger = (source) => {
    // if already active by same source - do nothing
    if (triggeredBy.current === source && isActive.current) return;

    // if another source is currently owning an active animation, ignore this trigger
    if (isActive.current && triggeredBy.current && triggeredBy.current !== source) {
      // ignore new trigger until current finishes
      return;
    }

    // otherwise take ownership
    triggeredBy.current = source;
    isActive.current = true;

    // play forward from start (if already reversed, play forward)
    const tl = tlRef.current;
    if (!tl) return;

    // Ensure we start from beginning
    tl.play(0);

    // Set a callback when the timeline finishes forward
    tl.eventCallback("onComplete", () => {
      // keep active = true while displayed; you may want to auto-reverse after a delay or wait for user action
      // For now we'll keep it active; release ownership only when release handler is called (hover leave or scroll leave)
      // If you want to auto-release after some time, uncomment below:
      // setTimeout(() => handleRelease(source), 1000);
    });
  };

  // central release handler to reverse animation (only the owner can release)
  const handleRelease = (source) => {
    // if not owned by this source, ignore
    if (triggeredBy.current && triggeredBy.current !== source) return;

    // reverse animation and clear ownership when reverse completes
    const tl = tlRef.current;
    if (!tl) {
      triggeredBy.current = null;
      isActive.current = false;
      return;
    }

    tl.reverse();

    // when reverse completes, clear ownership
    tl.eventCallback("onReverseComplete", () => {
      triggeredBy.current = null;
      isActive.current = false;
      // clear callbacks to avoid multiple calls stacking
      tl.eventCallback("onReverseComplete", null);
      tl.eventCallback("onComplete", null);
    });
  };

  // Hover handlers (desktop). They call central handlers but respect ownership logic.
  const onMouseEnter = () => {
    handleTrigger("hover");
  };

  const onMouseLeave = () => {
    // Only release if hover owns it
    if (triggeredBy.current === "hover") handleRelease("hover");
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-transparent"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // allow touch devices to trigger on touch start as hover equivalent (optional)
      onTouchStart={() => {
        // For touch, treat first touch as "hover" trigger
        handleTrigger("hover");
      }}
      onTouchEnd={() => {
        if (triggeredBy.current === "hover") handleRelease("hover");
      }}
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

