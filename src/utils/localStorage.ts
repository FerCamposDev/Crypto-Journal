import { Crypto } from "../types/types";

export const saveCryptosStorage = (myCryptos: Crypto[] = []) => {
  localStorage.setItem('myCryptos', JSON.stringify(myCryptos));
}

export const getCryptosStorage = (): Crypto[] => {
  const storage = localStorage.getItem('myCryptos');
  if (storage) {
    const myCryptos: Crypto[] = JSON.parse(storage);
    myCryptos.forEach(crypto => {
      crypto.date = new Date(crypto.date);
    })
    return myCryptos;
  }
  return [];
}

