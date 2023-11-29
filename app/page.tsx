import { Nfc } from "lucide-react";
import { Roboto_Slab } from "next/font/google";
import {
  generateRandomCreditCardNumber,
  generateRandomExpiryDate,
} from "./demo/credit-card";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  const creditCardNumber = generateRandomCreditCardNumber();
  const expire = generateRandomExpiryDate();

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div className="p-[1px] bg-green-50 rounded-[6px] bg-gradient-to-tr from-purple-700 via-green-500 to-purple-700">
        <div className="bg-[url('/car-bg.png')] bg-no-repeat bg-cover min-w-[500px] flex flex-col p-8 gap-6 rounded-[5px]">
          <div className="flex flex-col gap-6">
            <h1 className="text-sm font-medium flex gap-1">
              <span>GitHub</span>
              <span className="text-slate-500">Copilot</span>
            </h1>
            <div className="flex items-center justify-between pb-3">
              <img src="./copilot.png" className="w-14" />
              <Nfc size={35} strokeWidth={1.9} className="text-purple-300" />
            </div>
          </div>
          <div className={"flex flex-wrap gap-4 flex-col "}>
            <h2
              className={
                "text-3xl text-slate-50 flex gap-4 font " + robotoSlab.className
              }
            >
              {creditCardNumber.split(" ").map((number, index) => {
                return <span key={index}>{number}</span>;
              })}
            </h2>
            <div className="flex justify-between items-center">
              <h2 className=" text-slate-100/70 flex gap-4 font-semibold uppercase">
                Thivy Ruthra
              </h2>
              <h2 className="text-sm flex gap-2 font-medium bg-purple-300/10 backdrop-blur-sm p-2 px-4 rounded-full border border-white/10">
                <span>EXPIRE</span>
                <span className={robotoSlab.className}>{expire}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
