import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../service/projectServie";
export const useOwnerProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
};
