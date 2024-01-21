import React, { useState } from "react";
import * as RiIcon from "react-icons/ri";
import { useRemoveCategory } from "../useRemoveCategory";
import Modal from "./../../../ui/Modal";
import CreateCategory from "./CreateCategory";
import ConfirmDelete from "./../../../ui/ConfirmDelete";
import { toast } from "react-hot-toast";

const CategoryItem = ({ item, projects }) => {
  const { isDeleting, removeCategories } = useRemoveCategory();
  const hasCategoryProject = projects?.filter(
    (project) => project.category?.title === item?.title
  );

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleRemoveCategory = () => {
    if (hasCategoryProject?.length) {
      toast.error("پروژه ای با این دسته بندی فعال است");
    } else {
      removeCategories(item?._id, {
        onSuccess: () => setIsDeleteOpen(false),
      });
    }
  };

  return (
    <div
      className="lg:w-[24%] flex items-center justify-between h-[45px] md:w-[45%] w-full md:mx-0 mx-auto rounded-md bg-slate-900 shadow-md px-2 py-1"
      key={item?._id}
    >
      <h6 className="text-lg font-semibold">{item?.title}</h6>
      <div className="flex items-center gap-x-4">
        <button onClick={() => setIsEditOpen(true)} className="text-indigo-500">
          <RiIcon.RiEdit2Line size={25} />
        </button>
        <Modal
          onClose={() => setIsEditOpen(false)}
          open={isEditOpen}
          title={`ویرایش  ${item?.title}`}
        >
          <CreateCategory
            onClose={() => setIsEditOpen(false)}
            categoryToEdit={item}
          />
        </Modal>
        <button className="text-red-500" onClick={() => setIsDeleteOpen(true)}>
          <RiIcon.RiDeleteBin2Line size={25} />
        </button>
        <Modal
          onClose={() => setIsDeleteOpen(false)}
          open={isDeleteOpen}
          title={`حذف ${item?.title}`}
        >
          <ConfirmDelete
            loading={isDeleting}
            hasItem={hasCategoryProject}
            title={`${item?.title}`}
            onClose={() => setIsDeleteOpen(false)}
            onRemove={handleRemoveCategory}
          />
        </Modal>
      </div>
    </div>
  );
};

export default CategoryItem;
