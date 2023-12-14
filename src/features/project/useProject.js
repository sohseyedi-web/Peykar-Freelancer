import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProject } from "./../../service/projectServie";
export const useProject = () => {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects", id],
    queryFn: () => getProject(id),
    retry: false,
  });

  const { project } = data || {};

  return { project, isPending };
};
