import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerField = ({ date, setDate }) => {
  return (
    <div>
      <span className="block mb-1 text-lg text-right">ددلاین</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField"
        value={date}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
        onChange={(date) => setDate(date)}
      />
    </div>
  );
};
export default DatePickerField;
