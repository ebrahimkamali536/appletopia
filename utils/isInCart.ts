export const isInCart = (user, productId) => {
  if (!user) return false;
  return user?.cart?.products?.some((p) => p.productId === productId);
};
