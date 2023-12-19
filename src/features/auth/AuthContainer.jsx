import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import CheckOTP from "./CheckOTP";
import CompleteProfile from "./CompleteProfile";
import SendOTP from "./SendOTP";
import { getOTP } from "../../service/authService";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";


const AuthContainer = () => {
  const [step, setStep] = useState(2);
  

  const { mutateAsync, isPending } = useMutation({
    mutationFn: getOTP,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const sendOtpHandler = async () => {
    try {
      await mutateAsync({ phoneNumber: "09331559119" });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTP
            onSubmit={handleSubmit(sendOtpHandler)}
            loading={isPending}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTP
            phoneNumber={"09331559119"}
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
