import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "./../../service/proposalService";
export const useProposals = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
  });

  const {proposals} = data || {}

  return { isLoading, proposals };
};
