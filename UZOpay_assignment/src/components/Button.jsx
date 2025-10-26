import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import clickSound from '../assets/click.mp3'; // 🔊 Add your click sound file here
import hoverSound from '../assets/hover.mp3'; // (optional) hover sound
import { playSound } from '../utils/playSound'; // utility function for playing sounds

// 1. ✅ Default variant = 'primary'
const Button = ({ label, variant = 'primary', hasArrow = false, buttonColorClass }) => {

    const baseClasses = "flex items-center justify-center px-4 py-2 font-semibold transition duration-300 text-[12px]";
    
    let variantBaseClasses = "";
    let defaultTextColor = "";

    // 2. 🎨 Handle variants
    switch (variant) {
        case 'primary':
            variantBaseClasses = "bg-blue-600 hover:bg-blue-700 shadow-lg";
            defaultTextColor = "text-white";
            break;

        case 'outline':
            variantBaseClasses = "bg-transparent border border-blue-400 hover:bg-blue-900/20";
            defaultTextColor = "text-blue-400";
            break;

        case 'default':
        default:
            variantBaseClasses = "bg-gray-500";
            defaultTextColor = "text-white";
    }

    // Combine all classes
    const combinedClasses = `${baseClasses} ${variantBaseClasses} ${defaultTextColor} ${buttonColorClass || ''}`;

    // 3. 🧠 Handlers for click + optional hover
    const handleClick = () => {
        playSound(clickSound, 0.3);
    };

    const handleHover = () => {
        playSound(hoverSound, 0.15);
    };

    // 4. 🪄 Button with sound-enabled interactions
    return (
        <button
            className={combinedClasses}
            onClick={handleClick}
            onMouseEnter={handleHover} // optional — remove if not needed
        >
            <span>{label}</span>

            {hasArrow && (
                <IoIosArrowForward className="w-4 h-4 ml-1" />
            )}
        </button>
    );
};

export default Button;
