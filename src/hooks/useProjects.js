import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../service/projectServie";
export const useProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const { projects } = data || {};

  return { isLoading, projects };
};
