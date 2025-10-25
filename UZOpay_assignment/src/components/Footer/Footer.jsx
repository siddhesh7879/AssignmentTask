import React from 'react';

// Lucide icons for social media and scroll-to-top button
// Note: These icons assume you have the 'lucide-react' library available in your project.
const IconFacebook = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconInstagram = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4.47 0 1 1 12.63 8 4 4.47 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const IconArrowUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up"><path d="m18 15-6-6-6 6"/></svg>
);

const footerLinks = [
  {
    title: 'Payment',
    links: ['Payment Gateway', 'Payment Links', 'Payment Methods', 'Bulk Payment', 'Invoice'],
  },
  {
    title: 'AI Banking',
    links: ['Current Account', 'Accounting', 'API Banking', 'UPI Autopay', 'Tax Payment'],
  },
  {
    title: 'Company',
    links: ['About us', 'Contact us', 'Cards', 'CMS'],
  },
];

const FooterLink = ({ href = "#", children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
      {children}
    </a>
  </li>
);

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-800 pb-12">
          
          {/* Column 1: Brand and Description */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-3xl font-extrabold mb-4 text-purple-400">UzoPay</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Our payment gateway simplifies transactions for e-commerce
              businesses, delivering fast and secure processing. With smooth
              integration, we enhance your store's payment capabilities. Optimize
              your checkout process and boost customer satisfaction easily.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="p-3 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors">
                <IconFacebook className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" aria-label="Instagram" className="p-3 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors">
                <IconInstagram className="w-5 h-5 text-gray-400" />
              </a>
              {/* Note: I added a hover effect for better UX */}
            </div>
          </div>

          {/* Columns 2, 3, 4: Navigation Links */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <FooterLink key={linkIndex}>{link}</FooterLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-sm">
          <p className="text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; 2025 Uzopay
          </p>
          <div className="flex space-x-6 order-1 sm:order-2">
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center absolute bottom-4 right-4 sm:static sm:ml-6 hover:bg-purple-600 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <IconArrowUp className="w-5 h-5" />
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
