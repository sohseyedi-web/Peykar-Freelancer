import { checkOTP } from "../../service/authService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { toast } from "react-hot-toast";

const RESEND_TIME = 90;

const CheckOTP = ({ onResend, phoneNumber, onStep }) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({ mutationFn: checkOTP });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return onStep(3);
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) return clearInterval(timer);
    };
  }, [time]);

  return (
    <form dir="rtl" className="space-y-4" onSubmit={checkOtpHandler}>
      <p className="my-2 m-0 font-medium">
        کد به شماره {phoneNumber} ارسال شده{" "}
        <span
          onClick={() => onStep((s) => s - 1)}
          className="font-bold cursor-pointer text-blue-400"
        >
          بازگشت؟
        </span>
      </p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        inputStyle={{
          width: "11%",
          height: "45px",
          border: "1px solid #eee",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
        }}
        containerStyle="flex flex-row-reverse justify-between"
        renderInput={(props) => <input type="number" {...props} />}
      />
      {time > 0 ? (
        <>
          <button className="btn btn--primary w-full">
            {isPending ? "لطفا صبر کنید." : "ثبت کد"}
          </button>
          <p className="mt-2 text-center text-blue-400">
            {time} ثانیه تا ارسال مجدد کد
          </p>
        </>
      ) : (
        <button onClick={onResend} className="btn w-full btn--primary">
          ارسال مجدد کد؟
        </button>
      )}
    </form>
  );
};

export default CheckOTP;
