import { useState } from "react";
import * as RiIcon from "react-icons/ri";
import { useCategories } from "../../../hooks/useCategories";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Loading from "../../../ui/Loading";
import Modal from "../../../ui/Modal";
import CreateCategory from "./CreateCategory";

const CategoryLists = () => {
  const { isPending, rawCategories } = useCategories();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  if (isPending) return <Loading />;
  if (!rawCategories?.length) return <p>دسته بندی وجود ندارد</p>;

  return (
    <section className="flex items-center gap-x-3 flex-wrap">
      {rawCategories?.map((item) => (
        <div
          className="lg:w-[25%] flex items-center justify-between h-[45px] md:w-[45%] w-[90%] md:mx-0 mx-auto rounded-md bg-slate-900 shadow-md px-2 py-1"
          key={item?._id}
        >
          <h6 className="text-lg font-semibold">{item?.title}</h6>
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => setIsEditOpen(true)}
              className="text-indigo-500"
            >
              <RiIcon.RiEdit2Line size={25} />
            </button>
            <Modal
              onClose={() => setIsEditOpen(!isEditOpen)}
              open={isEditOpen}
              title={`ویرایش  ${item?.title}`}
            >
              <CreateCategory onClose={() => setIsEditOpen(!isEditOpen)} />
            </Modal>
            <button
              className="text-red-500"
              onClick={() => setIsDeleteOpen(true)}
            >
              <RiIcon.RiDeleteBin2Line size={25} />
            </button>
            <Modal
              onClose={() => setIsDeleteOpen(!isDeleteOpen)}
              open={isDeleteOpen}
              title={`حذف ${item?.title}`}
            >
              <ConfirmDelete loading={isPending} title={`حذف ${item?.title}`} />
            </Modal>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryLists;
