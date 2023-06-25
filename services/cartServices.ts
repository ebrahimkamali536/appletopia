import http from "./httpServices";

export const addToCart = (productId: string) => {
  return http.post("/cart/add", { productId }).then(({ data }) => data.data);
};

export const decrementFromCart = (productId: string) => {
  return http.post('/cart/remove', {productId}).then(({data}) => data.data)
}
