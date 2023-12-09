import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import CheckOTP from "./CheckOTP";
import CompleteProfile from "./CompleteProfile";
import SendOTP from "./SendOTP";
import { getOTP } from "../../service/authService";
import { toast } from "react-hot-toast";

const AuthContainer = () => {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09217476220");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: getOTP,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(`کد به شماره ${phoneNumber} ارسال شد`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTP
            phone={phoneNumber}
            onStep={setStep}
            onSubmit={sendOtpHandler}
            onChange={(e) => setPhoneNumber(e.target.value)}
            loading={isPending}
          />
        );
      case 2:
        return (
          <CheckOTP
            phoneNumber={phoneNumber}
            onStep={setStep}
            onResend={sendOtpHandler}
          />
        );
      case 3:
        return <CompleteProfile />;
    }
  };

  return <div className="w-full py-2">{renderStep()}</div>;
};

export default AuthContainer;
