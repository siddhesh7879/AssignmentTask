import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'; 

// 1. ✅ Set a default value for 'variant' (e.g., 'primary')
const Button = ({ label, variant = 'primary', hasArrow = false, buttonColorClass }) => {
    
    const baseClasses = "flex items-center justify-center px-4 py-2 font-semibold transition duration-300 text-[12px]";
    
    let variantBaseClasses = "";
    let defaultTextColor = "";
    
    // 2. The switch handles all cases, including the new default
    switch (variant) {
        case 'primary':
            variantBaseClasses = "bg-blue-600 hover:bg-blue-700 shadow-lg"; 
            defaultTextColor = "text-white"; 
            break;
            
        case 'outline':
            variantBaseClasses = "bg-transparent border border-blue-400 hover:bg-blue-900/20";
            defaultTextColor = "text-blue-400";
            break;
            
        case 'default': // Optional: Handle an explicit 'default' variant if needed
        default: // 👈 This case now only runs if 'default' is explicitly passed or if variant is an unhandled string.
            variantBaseClasses = "bg-gray-500";
            defaultTextColor = "text-white";
    }

    // Combine default color and variant base classes
    const initialClasses = `${baseClasses} ${variantBaseClasses} ${defaultTextColor}`;

    // Apply the custom class LAST to ensure it overrides all defaults
    const combinedClasses = `${initialClasses} ${buttonColorClass || ''}`;

    return (
        <button className={combinedClasses}>
            <span>{label}</span>
            
            {hasArrow && (
                <IoIosArrowForward 
                    className="w-4 h-4 ml-1" 
                />
            )}
        </button>
    );
};

export default Button;