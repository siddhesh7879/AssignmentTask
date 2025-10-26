import { useState } from "react";
import clickSound from "../assets/click.mp3";
import hoverSound from "../assets/hover.mp3";
import { playSound } from "../utils/playSound";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // AI Banking dropdown

  const navItems = [
    { name: "Home" },
    {
      name: "AI Banking",
      dropdown: ["AI Insights", "Smart Investments", "Credit Analysis"],
    },
    { name: "Payments" },
    { name: "Payouts" },
    { name: "Payroll" },
    { name: "Contact Us" },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 text-white rounded-full top-2 z-10 absolute bg-transparent border-2 border-cyan-400 w-fit md:text-nowrap md:top-4 left-0 right-0 m-auto">
      <h3 className="font-bold mr-24">UzOPay</h3>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 relative">
        {navItems.map((item) =>
          item.dropdown ? (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => {
                setDropdownOpen(true);
                playSound(hoverSound, 0.1); // optional hover sound
              }}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => playSound(clickSound, 0.3)}
                className="hover:text-blue-400 transition flex items-center gap-1"
              >
                {item.name} <span>▾</span>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-8 left-0 bg-indigo-900/90 rounded-lg shadow-lg py-2 w-48 flex flex-col">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      onClick={() => playSound(clickSound, 0.3)}
                      className="px-4 py-2 hover:bg-blue-600 transition"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={item.name}
              href="#"
              onClick={() => playSound(clickSound, 0.3)}
              className="hover:text-blue-400 transition"
            >
              {item.name}
            </a>
          )
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => {
          setOpen(!open);
          playSound(clickSound, 0.3);
        }}
        className="md:hidden"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/90 flex flex-col gap-2 py-4 items-center">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="w-full text-center">
                <button
                  onClick={() => {
                    setDropdownOpen((prev) => !prev);
                    playSound(clickSound, 0.3);
                  }}
                  className="text-white flex justify-center w-full py-2 hover:text-blue-400"
                >
                  {item.name} <span className="ml-1">▾</span>
                </button>
                {dropdownOpen && (
                  <div className="flex flex-col w-full bg-indigo-900/70 rounded-md">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        onClick={() => playSound(clickSound, 0.3)}
                        className="py-2 hover:bg-blue-600 transition"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href="#"
                onClick={() => playSound(clickSound, 0.3)}
                className="text-white py-2"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
