import React, { useState } from 'react';
import { Check, CreditCard, DollarSign, Briefcase, Zap } from 'lucide-react';
import backgroundR from "../../assets/bg_FinanceFeature.png"; // 👈 1. Import your background image
import Button from '../Button';

// --- Data for the Tabs and Content ---
const tabData = [
  {
    id: 'payments',
    label: 'Payments',
    icon: CreditCard,
    title: "Elevate Your Online Store's Payment Experience",
    description: "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities, optimize your checkout process, and boost customer satisfaction easily.",
    features: [
      { text: 'Optimize Your Checkout', icon: Check },
      { text: 'Fast and Secure', icon: Zap },
      { text: 'Smooth Integration', icon: Check },
    ],
  },
  {
    id: 'payout',
    label: 'Payout',
    icon: DollarSign,
    title: "Streamline Vendor and Partner Payouts",
    description: "Manage large-scale disbursements with ease. Our payout solutions ensure instant and accurate transfers to vendors, employees, and partners, reducing operational overhead and improving financial clarity.",
    features: [
      { text: 'Instant Fund Transfers', icon: Zap },
      { text: 'Bulk Disbursement Tools', icon: Check },
      { text: 'Detailed Reporting', icon: Check },
    ],
  },
  {
    id: 'payroll',
    label: 'Payroll',
    icon: Briefcase,
    title: "Simplify and Automate Your Employee Payroll",
    description: "From calculating taxes to generating payslips, our integrated payroll system handles it all. Ensure compliance and deliver timely salary credits directly into employee bank accounts without the typical hassle.",
    features: [
      { text: 'Automated Tax Compliance', icon: Check },
      { text: 'Direct Bank Credits', icon: Zap },
      { text: 'Customizable Salary Structures', icon: Check },
    ],
  },
  {
    id: 'aibanking',
    label: 'AI Banking',
    icon: Zap,
    title: "Future-Proof Your Finances with AI-Powered Insights",
    description: "Leverage artificial intelligence to analyze transaction data, predict cash flow, and detect fraud in real-time. Our AI banking platform provides actionable insights for smarter financial decision-making.",
    features: [
      { text: 'Real-time Fraud Detection', icon: Zap },
      { text: 'Predictive Cash Flow Analysis', icon: Check },
      { text: 'Automated Reconciliation', icon: Check },
    ],
  },
];

// --- Sub-Component for Tab Button ---
const TabButton = ({ isActive, onClick, label, Icon }) => (
  <button
    className={`
      flex items-center space-x-2 py-3 px-4 transition-all duration-300
      ${isActive
        ? 'text-white border-b-2 border-indigo-400 bg-indigo-900/20'
        : 'text-gray-400 border-b-2 border-transparent hover:text-white hover:bg-gray-800'
      }
      text-sm md:text-base font-medium rounded-t-lg
    `}
    onClick={onClick}
    aria-selected={isActive}
    role="tab"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

// --- Main Component ---
const PaymentIndustrySection = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const activeContent = tabData.find(tab => tab.id === activeTab);

  return (
    <section className=" text-white min-h-screen py-20 px-4 md:px-8"
            style={{ // 👈 2. Use the style attribute for the background
                  backgroundImage: `url(${backgroundR})`,
                  backgroundRepeat: 'no-repeat',
              }}
    >
      <div className=" mx-[124px]" 

      >
        
        {/* Top Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">Enhancing payments</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-100">
            Powering Payments Across Industries
          </h1>
        </div>

        {/* Main Card Container */}
        <div className=" rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-indigo-900/50">
          
          {/* Tab Navigaton */}
          <div className="flex justify-between items-end border border-gray-700/50 p-2 overflow-x-auto scrollbar-hide mx-16 my-3 rounded-2xl " role="tablist">
            {tabData.map((tab) => (
              <TabButton
                key={tab.id}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                label={tab.label}
                Icon={tab.icon}
              />
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
>
            
            {/* Left Content Column (Text and Features) */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white leading-tight">
                {activeContent.title}
              </h2>
              <p className="text-gray-300 text-lg">
                {activeContent.description}
              </p>

              {/* Feature List */}
              <div className="space-y-4 pt-4">
                {activeContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-lg font-medium">
                    <feature.icon className="w-6 h-6 text-indigo-400 shrink-0" />
                    <span className="text-gray-200">{feature.text}</span>
                  </div>
                ))}
              </div>

               <Button label="Get Started" hasArrow buttonColorClass="border-red-500 text-red-500 hover:bg-gray-500/20 bg-blue-950 rounded-full"/>
            </div>

            {/* Right Visual Column (Abstract Circle Diagram) */}
                <div>
                  {/* <img src="../src\assets\bg_flash_paymentIndustry.png" alt="" /> */}
                  {/* <img src={backgroundR1} alt="" /> */}
                </div>             
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentIndustrySection;
