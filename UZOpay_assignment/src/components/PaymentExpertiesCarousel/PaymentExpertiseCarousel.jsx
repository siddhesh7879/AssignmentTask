import React, { useRef, useState, useEffect } from 'react';
import backgroundR from "../../assets/payment_card.png"; // 👈 1. Import your background image
import UpiPayout from "../../assets/UpiAutopay.png"; // 👈 1. Import your background image
import ApiBanking from "../../assets/ApiBanking.png"; // 👈 1. Import your background image
import Payouts from "../../assets/Payouts.png"; // 👈 1. Import your background image
import BulkPayments from "../../assets/BulkPayments.png"; // 👈 1. Import your background image
// import { ImVideoCamera } from 'react-icons/im';
import { img } from 'framer-motion/client';


// --- Data for the Carousel Cards ---
const expertiseData = [
  {
    title: "UPI Autopay",
    description: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
    color: "violet",
    icon: (
                <img src={UpiPayout} alt="" />
    )
    
  },
  {
    title: "API Banking",
    description: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
    color: "teal",
    icon: (
       <img src={ApiBanking} alt="" />
    )
  },
  {
    title: "Payouts",
    description: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
    color: "emerald",
    icon: (
        <img src={Payouts} alt="" />
    )
  },
  {
    title: "Bulk Payments",
    description: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
    color: "cyan",
    icon: (
      
        <img src={BulkPayments} alt="" />
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
        hover:border-${color}-500/50 relative w-[300px] h-[415px]
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
                    <div className="text-center mb-16 md:w-1/2 mx-auto">
                        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Our Expertise</p>
                        <h2 className="text-4xl sm:text-5xl  text-gray-100 ">
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
                        {/* <div className="flex space-x-2">
                            {expertiseData.map((_, index) => (
                                <div 
                                    key={index} 
                                    // Simple visual indicator: shows blue if we are at the start, otherwise grey
                                    className={`w-2 h-2 rounded-full transition-colors duration-300 
                                        ${index === 0 && !canScrollLeft ? 'bg-blue-400' : 'bg-gray-700 hover:bg-gray-500'}
                                    `}
                                ></div>
                            ))}
                        </div> */}

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
