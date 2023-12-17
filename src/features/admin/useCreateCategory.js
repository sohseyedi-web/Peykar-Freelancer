import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addNewCategories } from "../../service/adminService";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addCategory, isPending: isCreating } = useMutation({
    mutationFn: addNewCategories,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { addCategory, isCreating };
};
