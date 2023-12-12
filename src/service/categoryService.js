import http from "./http";

export function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
