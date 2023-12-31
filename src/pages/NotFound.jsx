import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setInterval(() => {
      navigate("/");
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-10 flex items-center flex-col h-screen space-y-6">
      <h3 className="font-bold text-blue-600 text-9xl">404</h3>
      <p className="font-medium text-gray-100 lg:text-3xl sm:text-2xl text-xl">
        متاسفیم، آدرسی که وارد کردی وجود ندارد
      </p>
      <p className="font-medium text-gray-100 opacity-90 md:text-lg text-base">
        بعد از چند ثانیه به صفحه اصلی برمیگردید
      </p>
      <Link
        to={"/"}
        className="w-[200px] text-xl transition-all h-[45px] hover:bg-blue-500 rounded-md bg-blue-600 text-gray-100 shadow-md flex items-center justify-center font-semibold"
      >
        صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFound;
