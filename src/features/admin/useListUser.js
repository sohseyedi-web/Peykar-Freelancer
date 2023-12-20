import { useQuery } from "@tanstack/react-query";
import { getAllusers } from "./../../service/adminService";
export const useListUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllusers,
    retry: false,
  });

  const { users } = data || {};

  return { users, isLoading };
};
