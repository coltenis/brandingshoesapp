import { GET_SIZE_EQUIVALENCIES } from "../constants";


export const getSizeEquivalencies = async () => {
  try {
    const response = await fetch(GET_SIZE_EQUIVALENCIES, {
      method: 'GET'
    });
    const sizeEquivalencies = response.json();
    return sizeEquivalencies;
  } catch (err) {
    console.error(err);
    return [];
  }
};
