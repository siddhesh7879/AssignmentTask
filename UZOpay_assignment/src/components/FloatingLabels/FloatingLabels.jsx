export default function FloatingLabels() {
  return (
    <>
      <div className="absolute top-24 hidden md:block md:top-5 xl:top-29 right-0 md:right xl:right-6 bg-white/16 border border-white/20 px-3 py-1.5 rounded-[10px] text-sm " style={{

      }}>
        Sales Product Screening
      </div>
      <div className="absolute hidden md:block sm:bottom-10 md:bottom-30 lg:bottom-10  xl:bottom-56 right-0 lg:right-0 xl:right-18 bg-white/16  border border-white/20 px-3 py-1 rounded-[10px] text-sm ">
        Transactions
      </div>
      <div className="absolute hidden md:block top-2/4 xl:mt-2 bg-conic-180 left-0 md:left-8 xl:ml-1  bg-white/16  border border-white/20  px-3 py-1.5 rounded-[10px] text-sm ">
        Payout Process
      </div>
    </>
  );
}
