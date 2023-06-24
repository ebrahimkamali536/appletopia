import http from "./httpServices";

export function getProducts(queryString?: string) {
  return http.get(`/product/list?${queryString}`).then(({ data }) => data.data);
}

export function getSingleProduct(slug: string) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}
