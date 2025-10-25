import React, { useRef, useState, useEffect } from 'react';
import backgroundR from "../../assets/payment_card.png"; // 👈 1. Import your background image


// --- Data for the Carousel Cards ---
const expertiseData = [
  {
    title: "UPI Autopay",
    description: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
    color: "violet",
    icon: (
        // Simplified Mobile/Payment Icon
        <div className="relative w-24 h-40 rounded-xl bg-violet-600/70 p-1">
            <div className="w-full h-full bg-black rounded-lg p-2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-violet-400 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 border-4 border-violet-400 rounded-xl pointer-events-none"></div>
        </div>
    )
  },
  {
    title: "API Banking",
    description: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
    color: "teal",
    icon: (
        // Simplified API/Stack Icon
        <div className="flex flex-col items-center space-y-2">
            <div className="w-20 h-5 bg-teal-600/70 rounded-md"></div>
            <div className="w-24 h-5 bg-teal-600/50 rounded-md"></div>
            <div className="w-28 h-5 bg-teal-600/30 rounded-md"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-teal-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h.01M10 17h4a2 2 0 002-2V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
        </div>
    )
  },
  {
    title: "Payouts",
    description: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
    color: "emerald",
    icon: (
        // Simplified Server/Stack Icon
        <div className="flex flex-col items-center space-y-1">
            <div className="w-28 h-12 bg-emerald-600/80 rounded-t-lg p-2 relative">
                <div className="w-3 h-3 rounded-full bg-emerald-300/80 absolute top-2 right-2"></div>
            </div>
            <div className="w-28 h-12 bg-emerald-600/60 p-2"></div>
            <div className="w-28 h-12 bg-emerald-600/40 rounded-b-lg p-2"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-emerald-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 0v10"></path></svg>
            </div>
        </div>
    )
  },
  {
    title: "Bulk Payments",
    description: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
    color: "cyan",
    icon: (
        // Simplified Chart/Growth Icon
        <div className="relative w-28 h-28 flex items-end justify-center">
            <div className="w-6 h-1/4 bg-cyan-600/80 rounded-t-sm"></div>
            <div className="w-6 h-2/4 bg-cyan-600/60 rounded-t-sm mx-1"></div>
            <div className="w-6 h-3/4 bg-cyan-600/40 rounded-t-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center text-cyan-300/50 text-7xl font-bold">∑</div>
        </div>
    )
  },
    {
    title: "Fraud Prevention",
    description: "Advanced algorithms detect and block suspicious transactions in real-time.",
    color: "red",
    icon: (
        // Simplified Security Icon
        <div className="relative w-28 h-28 flex items-center justify-center">
             <svg className="w-20 h-20 text-red-500/80" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm0 18c-3.73-1.39-6.5-5.32-6.5-9.84V6.44l6.5-2.4 6.5 2.4v3.72c0 4.52-2.77 8.45-6.5 9.84zM12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
             </svg>
        </div>
    )
  }
];

// --- Card Component ---
const ExpertiseCard = ({ title, description, icon, color }) => (
    // Width classes are defined here for the carousel to function (flex-shrink-0 and w-80/w-96)
    <div className={`
        shrink-0 mx-4 p-6 shadow-2xl transition duration-500 hover:scale-[1.02] 
        hover:border-${color}-500/50 relative w-[260px] h-[364px]
    `}
    style={{               
        backgroundImage: `url(${backgroundR})`,
        backgroundRepeat: 'no-repeat',
    }}
    >  
    <div className=''>
        <div className="h-40 flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-6 text-[12px]">{description}</p>
        <a 
            href="#" 
            className={`
                flex items-center text-${color}-400 hover:text-${color}-300 
                font-medium transition duration-200
            `}
        >
        </a> 
    </div>
        
       
    </div>
);

// --- Main Carousel Component ---
const PaymentExpertiseCarousel = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Function to handle horizontal scrolling
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 350; // Scroll roughly one card's width
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Observer to update navigation button visibility
    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // Check if scroll is near the right edge (using a small buffer of 5px)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); 
        }
    };

    // Attach listener for initial load and scroll events
    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
            // Also check on resize in case layout changes
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            }
        };
    }, []);

    return (
        // Inject custom CSS to hide the scrollbar specifically on the 'no-scrollbar' element
        <>
            <style jsx="true">{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
                }
                .no-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
            
            <section className="bg-black text-white py-16 px-4 md:px-8 min-h-screen flex flex-col justify-center"
            
            >
                <div className="max-w-7xl mx-auto w-full">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Our Expertise</p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-100">
                            Redefining Payment Processing for You
                        </h2>
                    </div>

                    {/* Carousel Content */}
                    <div 
                        ref={scrollRef} 
                        className="
                            flex overflow-x-scroll snap-x snap-mandatory 
                            no-scrollbar 
                            pb-4 -mx-4 
                            relative
                        "
                        style={{ WebkitOverflowScrolling: 'touch',

                         }} // For smooth scrolling on iOS
                        onScroll={checkScroll}                        
                    >
                        {expertiseData.map((item, index) => (
                            <div key={index} className="snap-start pt-4">
                                <ExpertiseCard {...item}                                
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation and Indicators */}
                    <div className="flex justify-center items-center space-x-4 mt-12">
                        
                        {/* Left Arrow Button */}
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`
                                p-3 rounded-full border border-gray-700 
                                transition duration-300 
                                ${canScrollLeft ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-800 opacity-50 cursor-not-allowed'}
                            `}
                            aria-label="Scroll left"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>

                        {/* Simple Dot Indicators (Simplified logic for navigation status) */}
                        <div className="flex space-x-2">
                            {expertiseData.map((_, index) => (
                                <div 
                                    key={index} 
                                    // Simple visual indicator: shows blue if we are at the start, otherwise grey
                                    className={`w-2 h-2 rounded-full transition-colors duration-300 
                                        ${index === 0 && !canScrollLeft ? 'bg-blue-400' : 'bg-gray-700 hover:bg-gray-500'}
                                    `}
                                ></div>
                            ))}
                        </div>

                        {/* Right Arrow Button */}
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`
                                p-3 rounded-full border border-gray-700 
                                transition duration-300 
                                ${canScrollRight ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-800 opacity-50 cursor-not-allowed'}
                            `}
                            aria-label="Scroll right"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaymentExpertiseCarousel;
