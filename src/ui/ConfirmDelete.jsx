import React from "react";

const ConfirmDelete = ({ title, loading, onClose, onRemove }) => {
  return (
    <div className="space-y-2">
      <h6 className="text-lg font-semibold text-right py-3">
        آیا از حذف پروژه <span className="text-red-500">{title}</span> مطمئن
        هستی؟
      </h6>
      <div className="flex items-center justify-between gap-x-2">
        <button className="btn btn--danger w-1/3" onClick={onClose}>
          لغو
        </button>
        <button onClick={onRemove} className="btn btn--success w-2/3">
          {loading ? "لطفا صبر کنید" : "تایید"}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
