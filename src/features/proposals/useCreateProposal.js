import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createProposalApi } from "../../service/proposalService";

export const useCreateProposal = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { createProposal, isCreating };
};
