Project Name: UzOPay
Description: Payment platform landing page with interactive UI.
Tech Stack: React, Vite, Tailwind CSS, Framer Motion, Lucide-react, React-icons
Features:
- Navbar with dropdown & audio feedback
- Testimonials carousel
- Payment Industry section with tabs
- Button & link click sounds
- Mobile responsive
Screenshots: src/assets/screenshots/
Installation: yarn install / npm install
Usage: npm run dev

- clone repository : git clone git@github.com:siddhesh7879/AssignmentTask.git
- cd UZOPAY_ASSIGNMENT
- npm install
    # or
- yarn
- npm run dev
    # or
- yarn dev 
- Open your browser at http://localhost:5173/ (Vite default).

# Notes
- Audio files (click.mp3, hover.mp3) are located in src/assets/.

- All UI components reside in src/components/.

- Tab and carousel data are managed in src/data/testimonial.js.

- Audio playback is handled by utility functions in src/utils/playSound.js.

# Folder Structure

UZOPAY_ASSIGNMENT/
├─ public/
│   └─ index.html
├─ src/
│   ├─ assets/
│   │   ├─ Images (backgrounds, cards, Hero, FinanceFeatures)
│   │   ├─ Audio (click.mp3, hover.mp3)
│   │   └─ Other graphics
│   ├─ components/
│   │   ├─ BizSettleShowcase/
│   │   │   └─ BizSettleShowcase.jsx
│   │   ├─ CarouselCard/
│   │   │   └─ newCardCarousel.jsx
│   │   ├─ FinanceFeatures/
│   │   │   ├─ FeatureCard.jsx
│   │   │   ├─ ReasonsToPartner.jsx
│   │   │   └─ SectionHeader.jsx
│   │   ├─ PaymentIndustrySection/
│   │   │   ├─ PaymentIndustrySection.jsx
│   │   │   ├─ PayoutService.jsx
│   │   │   └─ PayoutServiceCentric.jsx
│   │   ├─ FloatingLabels/
│   │   │   └─ FloatingLabels.jsx
│   │   ├─ Footer/
│   │   │   └─ Footer.jsx
│   │   ├─ HeroSection/
│   │   │   ├─ HeroSection.jsx
│   │   │   ├─ HeroSection_1.jsx
│   │   │   ├─ HeroText_1.jsx
│   │   │   └─ HeroVisual_1.jsx
│   │   └─ HighlightSection/
│   │       └─ HighlightSection.jsx
│   │   └─ PaymentExpertiseCarousel/
│   │       └─ PaymentExpertiseCarousel.jsx
│   │   └─ Button.jsx
│   │   └─ Navbar.jsx
│   ├─ data/
│   │   └─ testimonial.js
│   ├─ pages/
│   │   └─ Home.jsx
│   ├─ utils/
│   │   └─ playSound.js
│   ├─ App.jsx
│   ├─ main.jsx
│   └─ index.css
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ vite.config.js
└─ README.md

