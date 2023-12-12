import http from "./http";
export function getProjects({ filter, sort, category }) {
  const qs = `${filter?.field}=${filter?.value}&${sort.field}=${sort.value}&${category?.field}=${category?.value}`;

  return http.get(`/project/list?${qs}`).then(({ data }) => data.data);
}

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function getProject(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

export function createProjectApi(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}

export function editProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

export function changeProjectStatusApi({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}

export function removeProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
