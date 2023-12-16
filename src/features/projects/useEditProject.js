import { useQueryClient , useMutation} from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editProjectApi } from "../../service/projectServie";

export const useEditProject = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: editProject, isPending: isUpdating } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { editProject, isUpdating };
};
