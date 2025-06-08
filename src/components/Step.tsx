type StepProps = {
  key?: number;
  step: number;
  title: string;
  description: string;
};

export default function Step({ step, title, description }: StepProps) {
  return (
    // bg-amber-200
    <div className={`relative w-fit h-auto flex p-10 
      ${ step == 1 ? "col-start-1 sm:col-start-2 pt-0" 
      : step === 2 ? "sm:ml-8.5 pl-2 col-start-1 row-start-2 border-t-purple-400 border-r-purple-400 border-b-transparent sm:border-b-purple-400 border-1 max-sm:rounded-br-none rounded-3xl border-l-transparent rounded-bl-[0px] rounded-tl-[0px]"
    : step == 3 ? "pr-0 ml-2.5 align-bottom col-start-1 row-start-3 border-l-purple-400 border-b-purple-400 border-1 rounded-2xl border-r-transparent border-t-transparent rounded-tl-[21px] rounded-br-[0px]" : "" }  `}>
      
      {/* Circle */}
      <div className={`absolute w-[1rem] h-[1rem] bg-purple-600 rounded-full z-6 ${step === 1 ? "sm:left-[-13px] sm:top-0 left-[10px]  top-1.5" : step === 2 ? "right-[-11px] sm:right-[-18px] top-[40%]": "sm:left-[-16px] left-[-9px] top-[40%]"} sm:w-[2rem] sm:h-[2rem]`}></div>

      {
        step === 1 ? (
          <>
            <div className="sm:w-10 sm:h-2 sm:rounded-full bg-white/40 z-5 absolute sm:left-[-54px] sm:top-[11px] left-[-4px] top-[14px] w-4 h-4 border-l-1 border-t-1 border-white/40 rounded-tl-full"></div>
            <div className="max-sm:hidden absolute left-[1px] sm:left-[-150px] top-[14px] h-[1px] sm:w-[150px] w-[10px] bg-purple-400 "></div>
            <div className="absolute left-[-6px] sm:left-[-174px] top-[14px] w-6 h-6 border-l-1 border-t-1 border-purple-400 rounded-tl-3xl"></div>
            <div className="absolute left-[-6px] sm:left-[-174px] top-[35px] h-[70px] w-[1px] bg-purple-400"></div>
            <div className="absolute left-[-6px] sm:left-[-174px] top-[105px] sm:h-[-39px] h-[44px] w-[1px] bg-purple-400 "></div>
            <div className="sm:hidden absolute left-[-6px] top-[147px] w-4 h-4 border-l-1 border-b-1 border-purple-400 rounded-bl-2xl"></div>
          </>
          ) 
          : step === 2 ? (
            <>
            <div className="max-sm:hidden absolute left-[-4px] sm:left-[-24.9px] top-[-24px] w-6 h-6 border-l-1 border-b-1 border-purple-400 rounded-bl-4xl"></div>
            </>
          )
          : step === 3 ? (
            <>
            <div className="sm:hidden absolute right-[1px] top-[-14px] w-9 h-5 border-r-1 border-b-1 border-purple-400 rounded-br-2xl"></div>
            <div className="sm:hidden absolute left-[15px] top-[4px] h-[1px] w-[85%] bg-purple-400"></div>
            <div className="sm:w-28 sm:h-2 w-30 h-1 rounded-full bg-white/40 z-3 absolute right-[0px] sm:bottom-[-4px] bottom-[-2px]"></div>
            <div className="max-sm:hidden absolute left-[-.9px] top-[-2px] w-6 h-6 border-l-0 border-t-1 border-purple-400 rounded-tl-4xl"></div>
            <div className="sm:hidden absolute left-[-.9px] top-[4px] w-4 h-3 border-l-0 border-t-1 border-purple-400 rounded-tl-4xl"></div>
            </>
        )
        : null
      }

      {/* Content */}
      <div className={`flex flex-col gap-3 ${step == 1 ? "ml-1 sm:ml-5" : step === 2 ? "mr-1 sm:mr-5" : "ml-1 sm:ml-5 items-end "}`}>
      <p className={`text-[20px] sm:text-3xl font-normal leading-[1.5rem] w-[300px] sm:w-[420px] ${step == 3 ? "text-right" : ""}`}>
          Step {step}: <span className="font-semibold">{title}</span>
        </p>
        <p className={`text-black mt-1 text-[13px] sm:text-[15px] ${step === 1 ? "sm:w-[400px]": step === 2 ? "sm:w-[350px]": "sm:w-[320px]"}`}>{description}</p>
      </div>
    </div>
  );
}