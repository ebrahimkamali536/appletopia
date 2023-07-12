import http from "./httpServices";

export function getCoupons() {
  return http.get("/admin/coupon/list").then(({ data }) => data.data);
}
export function addCoupons(data) {
  return http.post("/admin/coupon/add", data).then(({data}) => data.data)
}