export default async function middlewareAuth(request) {
  let strCookie = "";
  request.cookies.getAll().forEach((cookie) => {
    strCookie += `${cookie?.name}=${cookie?.value}; `;
  });

  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: strCookie,
      },
    }
  ).then((res) => res.json());
  const { user } = data || {};
  return user;
}
