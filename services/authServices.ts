import http from "./httpServices";


export function getOtp(phoneNumber: string) {
  return http
    .post("/user/get-otp", { phoneNumber })
    .then(({ data }) => data.data);
}

export function checkOtp({
  phoneNumber,
  otp,
}: {
  phoneNumber: string;
  otp: string;
}) {
  return http
    .post("/user/check-otp", { phoneNumber, otp })
    .then(({ data }) => data.data);
}
export function completeUserProfile({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return http
    .post("/user/complete-profile", { name, email })
    .then(({ data }) => data.data);
}
