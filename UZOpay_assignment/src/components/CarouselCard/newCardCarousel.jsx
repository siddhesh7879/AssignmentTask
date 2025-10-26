import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// The testimonial data remains the same
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

const buttonVariants = {
  initial: { scale: 1, boxShadow: "0 2px 8px rgba(105,54,219,0.10)" },
  whileHover: { scale: 1.15, boxShadow: "0 0 16px 2px #7c3aed" },
  whileTap: { scale: 0.92 },
};

function getCardIdx(idx, total) {
  return (idx + total) % total;
}

export default function App() {
  const [index, setIndex] = useState(0);

  const getCard = (i) => testimonials[getCardIdx(i, testimonials.length)];

  const handleSideClick = (side) => {
    if (side === "left") setIndex(i => getCardIdx(i - 1, testimonials.length));
    if (side === "right") setIndex(i => getCardIdx(i + 1, testimonials.length));
  };

  // We still calculate three cards for logic, but only render the center one on mobile
  const cards = [
    { ...getCard(index - 1), style: "side", side: "left" },
    { ...getCard(index), style: "center", side: "center" },
    { ...getCard(index + 1), style: "side", side: "right" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-[Inter] py-16 bg-[radial-gradient(ellipse_at_center,_#392b6e_0%,_#181322_70%,_transparent_100%)]">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <button className="px-6 py-2 rounded-full bg-black/40 text-sm font-medium mb-6 text-white/70 hover:bg-black/60 transition">
          Client Feedbacks
        </button>
        <h2 className="text-4xl sm:text-5xl text-white leading-tight max-w-2xl mx-auto">
          Trusted by <span className="text-purple-300">Businesses Like Yours</span>
        </h2>
      </div>

      {/* Cards Container: Now responsive. Side cards are hidden on mobile. */}
      <div className="flex w-full justify-center items-center mb-14 px-4">
        <div className="flex gap-2 md:gap-8 justify-center items-center w-full max-w-7xl">
          {cards.map((card, idx) =>
            card.style === "center" ? (
              // CENTER CARD (Always visible, responsive width)
              <AnimatePresence key={card.id} mode="wait">
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  // Responsive width: Full width up to a max-width, then fixed size on large screens
                  className="w-full max-w-lg lg:max-w-[450px] min-h-[220px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-white p-6 sm:p-8 shadow-2xl flex flex-col justify-between flex-shrink-0"
                >
                  <p className="text-gray-100 text-base sm:text-lg leading-relaxed mb-6">
                    {card.text}
                  </p>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={card.img}
                        alt={card.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/20"
                      />
                      <div>
                        <p className="font-semibold text-white">{card.name}</p>
                        <p className="text-gray-400 text-xs uppercase tracking-wide">
                          {card.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={18}
                          className={
                            j < card.rating
                              ? "text-indigo-400 fill-indigo-400"
                              : "text-gray-600"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              // SIDE CARDS (Hidden on small screens, appear at 'md')
              <motion.div
                key={card.id}
                // Hides on screens smaller than 'md', uses fixed width on desktop
                className="hidden md:block w-[420px] min-h-[190px] rounded-xl bg-white/7 border border-white/10 backdrop-blur-lg text-white/80 p-6 flex-shrink-0 flex flex-col justify-between opacity-55 scale-95 hover:scale-100 hover:opacity-85 transition duration-300 cursor-pointer"
                onClick={() => handleSideClick(card.side)}
              >
                {/* Text is slightly smaller in side cards */}
                <p className="mb-4 text-sm leading-normal">{card.text}</p>
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <p className="font-semibold text-white text-sm">{card.name}</p>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">
                        {card.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className={
                          j < card.rating
                            ? "text-indigo-400 fill-indigo-400"
                            : "text-gray-600"
                        }
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 sm:gap-8 justify-center">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="whileHover"
          whileTap="whileTap"
          className="rounded-full w-14 h-14 bg-transparent border border-gray-800 text-white flex items-center justify-center shadow-xl focus:outline-none transition-colors duration-200 hover:bg-black/20"
          onClick={() => handleSideClick("left")}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={32} />
        </motion.button>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="whileHover"
          whileTap="whileTap"
          className="rounded-full w-14 h-14 bg-transparent border border-gray-800 text-white flex items-center justify-center shadow-xl focus:outline-none transition-colors duration-200 hover:bg-black/20"
          onClick={() => handleSideClick("right")}
          aria-label="Next testimonial"
        >
          <ChevronRight size={32} />
        </motion.button>
      </div>
    </div>
  );
}


