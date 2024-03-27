import { Nfc } from "lucide-react";
import { FC } from "react";
import { Form } from "../ui/form";
import { generateExpiryDate, getCreditCardNumber } from "./credit-card-service";

export const CreditCard: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-[1px] bg-green-50 rounded-lg bg-gradient-to-tr from-purple-700 via-green-500 to-purple-700">
        <div className="bg-[url('/car-bg.png')] bg-no-repeat bg-cover min-w-[500px] flex flex-col p-8 gap-6 rounded-lg">
          <CreditCardHeader />
          <CreditCardBody />
        </div>
      </div>
      <Form />
    </div>
  );
};

export const CreditCardHeader = () => {
  return (
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
  );
};

export const CreditCardBody = () => {
  return (
    <div className="flex flex-wrap gap-4 flex-col">
      <CreditCardNumber />
      <div className="flex justify-between items-center">
        <h2 className="text-slate-100/70 flex gap-4 font-semibold uppercase">
          First Name
        </h2>
        <CreditCardDate />
      </div>
    </div>
  );
};

export const CreditCardNumber = () => {
  const creditCardNumber = getCreditCardNumber();
  return (
    <h2 className="text-3xl text-slate-50 flex gap-4 font">
      {creditCardNumber.split(" ").map((number, index) => {
        return <span key={index}>{number}</span>;
      })}
    </h2>
  );
};

export const CreditCardDate = () => {
  const expire = generateExpiryDate();
  return (
    <h2 className="text-sm flex gap-2 font-medium bg-purple-300/10 backdrop-blur-sm p-2 px-4 rounded-full border border-white/10">
      <span>EXPIRE</span>
      <span>{expire}</span>
    </h2>
  );
};
