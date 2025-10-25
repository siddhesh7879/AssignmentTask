export default function FloatingLabels() {
  return (
    <>
      <div className="absolute top-24 md:top-5 right-8 md:right bg-white/16 border border-white/20 px-3 py-1 rounded-[10px] text-sm " style={{

      }}>
        Sales Product Screening
      </div>
      <div className="absolute sm:bottom-10 md:bottom-30 lg:bottom-10  xl:bottom-50 right-0 lg:right-0 bg-white/16  border border-white/20 px-3 py-1 rounded-[10px] text-sm">
        Transactions
      </div>
      <div className="absolute top-2/4 -bg-conic-180 left-10 md:left bg-white/16  border border-white/20  px-3 py-1 rounded-[10px] text-sm">
        Payout Process
      </div>
    </>
  );
}
