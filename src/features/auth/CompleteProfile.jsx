import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { completeProfile } from "../../service/authService";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { toast } from "react-hot-toast";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const completedProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-3" onSubmit={completedProfileHandler}>
      <TextField
        label={"نام کاربری"}
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeHolder="مثلا : سهیل سیدی"
      />
      <TextField
        label={"ایمیل"}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeHolder="example@gmail.com"
      />
      <div dir="rtl" className="flex gap-x-4 w-full py-3">
        <RadioInput
          label={"کارفرما"}
          id={"OWNER"}
          name={"role"}
          value={"OWNER"}
          onChange={(e) => setRole(e.target.value)}
          checked={role === "OWNER"}
        />
        <RadioInput
          label={"فریلنسر"}
          id={"FREELANCER"}
          name={"role"}
          value={"FREELANCER"}
          onChange={(e) => setRole(e.target.value)}
          checked={role === "FREELANCER"}
        />
      </div>
      <button className="btn btn--primary w-full">
        {isPending ? "لطفا صبر کنید." : "تکمیل اطلاعات"}
      </button>
    </form>
  );
};

export default CompleteProfile;
