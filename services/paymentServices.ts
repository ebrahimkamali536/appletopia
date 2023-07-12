import http from "./httpServices";

export const createPayment = () => {
  return http.post("/payment/create").then(({ data }) => data.data);
};

export const getPayment = () => {
  return http.get("/admin/payment/list").then(({ data }) => data.data);
};
