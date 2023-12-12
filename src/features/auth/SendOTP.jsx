import React from "react";
import TextField from "../../ui/TextField";

const SendOTP = ({ loading, onSubmit, register, erros }) => {
  return (
    <form className="my-2" onSubmit={onSubmit}>
      <h4 className="text-xl text-right text-gray-100">ورورد / ثبت نام</h4>
      <div className="my-2">
        <TextField
          label={"شماره موبایل"}
          name={"phone"}
          placeHolder="شماره موبایل خود را وارد کنید"
          register={register}
          required
          errors={erros}
          validationSchema={{
            required: "شماره موبایل ضرروی است",
            minLength: {
              value: 11,
              message: "شماره موبایل اشتباه است",
            },
          }}
        />
      </div>
      <button className="mt-2 btn btn--primary">
        {loading ? "لطفا صبر کنید" : "ارسال کد"}
      </button>
    </form>
  );
};

export default SendOTP;
