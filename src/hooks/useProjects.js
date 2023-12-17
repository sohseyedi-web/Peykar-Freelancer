import { useQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getProjects } from "../service/projectServie";
export const useProjects = () => {
  const { search } = useLocation();
  const queryParserd = queryString.parse(search);
  console.log(queryParserd);
  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryParserd],
    queryFn: () => getProjects(search),
  });

  const { projects } = data || {};

  return { isLoading, projects };
};
