import { toStringCookies } from "./toStringCookies";

export default async function middlewareAuth(request) {
  

  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: toStringCookies(request.cookies),
      },
    }
  ).then((res) => res.json());
  const { user } = data || {};
  return user;
}
