import http from "./httpServices";

export function getProducts(queryString?: string) {
  return http.get(`/product/list?${queryString}`).then(({ data }) => data.data);
}

export function getSingleProduct(slug: string) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export function getProductById(id: string) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export function likeProduct(id) {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

// admin related fetches
export function getAllProduct() {
  return http.get("/product/list").then(({ data }) => data.data);
}

export function addProduct(product) {
  return http.post("/admin/product/add", product).then(({ data }) => data.data);
}
export function updateProduct({productId, productData}) {
  return http.patch(`/admin/product/update/${productId}`, productData).then(({ data }) => data.data);
}
