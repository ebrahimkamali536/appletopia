import http from "./httpServices";

export function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
export function getCategoryById(id) {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
}

export function updateCategory({ id, data }) {
  return http
    .patch(`/admin/category/update/${id}`, data)
    .then(({ data }) => data.data);
}
export function addCategory(data) {
  return http.post("/admin/category/add", data).then(({ data }) => data.data);
}

export function removeCategoryById(id: string) {
  return http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data);
}
