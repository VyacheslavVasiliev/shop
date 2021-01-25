export const api = {};

export const getAllProducts = async () => {
  const result = await fetch(
    "https://murmuring-tor-81614.herokuapp.com/api/goods/"
  );

  return result.json();
};

export const getProductsByDealersId = async (dealers: string[]) => {
  if (dealers.length === 0) {
    return [];
  }
  const result = await fetch(
    `https://murmuring-tor-81614.herokuapp.com/api/goods/?dealers=${dealers.join()}`
  );

  return result.json();
};

export const getAllDealersId = async () => {
  const result = await fetch(
    `https://murmuring-tor-81614.herokuapp.com/api/dealers/`
  );

  return result.json();
};
