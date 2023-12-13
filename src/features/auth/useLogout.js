import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logout } from "../../service/authService";

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: logOut, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { logOut, isPending };
};
