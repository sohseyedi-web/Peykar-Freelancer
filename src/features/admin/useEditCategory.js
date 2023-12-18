import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editCategory } from "./../../service/adminService";
export const useEditCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: editCategories, isPending: isUpdating } = useMutation({
    mutationFn: editCategory,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, editCategories };
};
