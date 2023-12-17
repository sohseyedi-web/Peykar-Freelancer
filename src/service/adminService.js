import http from "./http";

export function getAllusers(data) {
  return http.get("/admin/user/list", data).then(({ data }) => data.data);
}
