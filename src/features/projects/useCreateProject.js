import { useQueryClient , useMutation} from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createProjectApi } from "../../service/projectServie";

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createProject, isPending: isCreating } = useMutation({
    mutationFn: createProjectApi,
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

  return { createProject, isCreating };
};
