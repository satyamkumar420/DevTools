import { IconCopy } from "../../../Components/Icons/Icons";
import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/toastStyle";

const Card = ({
  cardHolder,
  cardNumber,
  validFrom,
  validUntil,
  cvv,
  cardLogo,
  className,
}) => {
  const handleCopy = (label, text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
      toast(`${label} Copied!`, { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast(`${label} Copied!`, { style: toastStyleSuccess });
    }
  };
  return (
    <div className="">
      <div
        className={`w-full mt-2 sm:w-96 h-60 m-auto bg-gradient-to-r from-slate-900 to-cyan-800 bg-cyan-900 rounded-xl relative text-blue-100 shadow-2xl ${className}`}
      >
        <div className="w-full p-5">
          <div className="flex justify-between">
            <div className="text-left">
              <p className="font-light">Name</p>
              <div className="flex gap-1">
                <p className="font-medium ">{cardHolder}</p>
                <IconCopy
                  className="cursor-pointer text-green-400"
                  onClick={() => handleCopy("Card Name", cardHolder)}
                />
              </div>
            </div>
            <img className="w-16 h-16" src={cardLogo} alt="Logo" />
          </div>
          <div className="pt-1">
            <p className="font-light">Card Number</p>
            <div className="flex gap-1">
              <p className="font-medium tracking-more-wider">{cardNumber}</p>
              <IconCopy
                className="cursor-pointer text-green-400"
                onClick={() => handleCopy("Card Number", cardNumber)}
              />
            </div>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex gap-4 justify-between">
              <div className="">
                <p className="font-light text-base">Valid From</p>
                <div className="flex gap-1 ">
                  <p className="font-medium tracking-wider text-base">
                    {validFrom}
                  </p>
                  <IconCopy
                    className="cursor-pointer text-green-400"
                    onClick={() => handleCopy("Valid From ", validFrom)}
                  />
                </div>
              </div>
              <div className="">
                <p className="font-light text-base">Valid Until</p>
                <div className="flex gap-1">
                  <p className="font-medium tracking-wider text-base">
                    {validUntil}
                  </p>
                  <IconCopy
                    className="cursor-pointer text-green-400"
                    onClick={() => handleCopy("Valid Until", validUntil)}
                  />
                </div>
              </div>

              <div className="">
                <p className="font-light text-base">CVV</p>
                <div className="flex gap-1">
                  <p className="font-medium tracking-more-wider text-base">
                    {cvv}
                  </p>
                  <IconCopy
                    className="cursor-pointer text-green-400"
                    onClick={() => handleCopy("CVV Number", cvv)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
