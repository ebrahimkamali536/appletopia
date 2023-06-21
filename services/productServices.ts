import http from "./httpServices";

export function getProducts() {
  return http.get("/product/list").then(({ data }) => data.data);
}
