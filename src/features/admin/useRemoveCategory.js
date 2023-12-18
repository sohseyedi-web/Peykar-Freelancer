import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { removeCategory } from "../../service/adminService";

export const useRemoveCategory = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeCategories } = useMutation({
    mutationFn: removeCategory,
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, removeCategories };
};