import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
    name: "Mickael Grants",
    title: "CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    text: "Their dedication and attention to detail are outstanding. Support was quick and effective!",
    name: "Jane Wilson",
    title: "Founder",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    id: 3,
    text: "Amazing experience. We have scaled faster thanks to their reliable systems.",
    name: "David Clark",
    title: "COO",
    img: "https://randomuser.me/api/portraits/men/21.jpg",
    rating: 5,
  },
  {
    id: 4,
    text: "A partner we can rely on for innovation and execution. Highly recommended!",
    name: "Emily Parker",
    title: "CTO",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
  },
  {
    id: 5,
    text: "They’ve been an absolute pleasure to work with. Professional, transparent, and efficient.",
    name: "Chris Evans",
    title: "Manager",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const visibleCards = testimonials
    .slice(index, index + visibleCount)
    .concat(testimonials.slice(0, Math.max(0, index + visibleCount - testimonials.length)));

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>

     <div className="relative w-full flex flex-col items-center justify-center bg-linear-to-b from-[#0a0a0f] to-[#13131a] py-16 overflow-hidden">


    <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-purple-400">Client Feedbacks</span>
        <h2 className="text-5xl font-extrabold text-white mt-2">
          Trusted by <span className="text-purple-300">Businesses Like Yours</span>
        </h2>
    </div>

      <div className="relative flex items-center justify-center w-full max-w-6xl px-4">
        {/* Left button */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* Carousel */}
        {/* 🔥 Important: overflow-visible allows hover scale to show fully */}
        <div className="w-full overflow-visible">
          <motion.div
            key={index}
            initial={false}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex gap-6 justify-center"
          >
            {visibleCards.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-[280px] sm:w-[300px] lg:w-[340px] h-[220px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white p-6 shadow-lg shadow-indigo-500/10 flex flex-col justify-between hover:shadow-indigo-500/20"
              >
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <p className="text-white font-medium text-sm">{item.name}</p>
                      <p className="text-gray-400 text-xs">{item.title}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < item.rating ? "text-indigo-400 fill-indigo-400" : "text-gray-600"}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right button */}
        <button
          onClick={next}
          className="absolute right-0 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>   
    </>

  );
}


