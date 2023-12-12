import { useQuery } from "@tanstack/react-query";
import {getUserProfile} from '../../service/authService'

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfile,
    retry: false,
  });
  return { data, isLoading };
}
