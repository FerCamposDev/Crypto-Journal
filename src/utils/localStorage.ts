import { Crypto } from "../types/types";

export const saveCryptos = (myCryptos: Crypto[] = []) => {
  localStorage.setItem('myCryptos', JSON.stringify(myCryptos));
}

export const getCryptos = (): Crypto[] => {
  const storage = localStorage.getItem('myCrptos');
  if (storage) {
    const myCryptos: Crypto[] = JSON.parse(storage);
    return myCryptos;
  }
  return [];
}

