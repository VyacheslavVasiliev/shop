// import { nanoid } from "@reduxjs/toolkit";

// const unicIdCache = new Set();
// /*страховка на случай рандомной генерации повторяющегося ключа*/
// const generateUnicId = () => {
//   let id;
//   do {
//     id = nanoid();
//   } while (unicIdCache.has(id)); // Сложность функции set.has - O(1);

//   return id;
// };

type rawProductDataType = {
  name: string;
  image: string;
  price: number;
};

export const productAdapter = (rawProductsData: rawProductDataType[]) => {
  return rawProductsData.map((rawProductData, index) => ({
    ...rawProductData,
    image: `https://murmuring-tor-81614.herokuapp.com${rawProductData.image}`,
    id: rawProductData.name + index,
  }));
};
