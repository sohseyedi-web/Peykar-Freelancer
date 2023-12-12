import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { completeProfile } from "../../service/authService";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

const CompleteProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const completedProfileHandler = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
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
    <form
      className="space-y-3"
      onSubmit={handleSubmit(completedProfileHandler)}
    >
      <TextField
        label={"نام کاربری"}
        name="name"
        register={register}
        required
        validationSchema={{
          required: "نام کاربری ضرروی است",
        }}
        errors={errors}
      />
      <TextField
        label={"ایمیل"}
        name="email"
        register={register}
        required
        validationSchema={{
          required: "ایمیل کاربری ضرروی است",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "ایمیل نا معتبر است",
          },
        }}
        errors={errors}
      />
      <RadioInputGroup
        errors={errors}
        watch={watch}
        register={register}
        configs={{
          name: "role",
          validationSchema: {
            required: "ایمیل کاربری ضرروی است",
          },
          options: [
            { label: "کارفرما", value: "OWNER" },
            { label: "فریلنسر", value: "FREELANCER" },
          ],
        }}
      />

      <button className="btn btn--primary w-full">
        {isPending ? "لطفا صبر کنید." : "تکمیل اطلاعات"}
      </button>
    </form>
  );
};

export default CompleteProfile;
