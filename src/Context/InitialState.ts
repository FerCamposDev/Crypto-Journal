import { Crypto, CryptoState } from "../types/types";
import uniqueString from 'unique-string';

export const NEW_CRYPTO: Crypto = {
  id: uniqueString(),
  date: new Date(),
  name: "",
  symbol: "",
  image: "",
  amount: 0,
  price: 0,
  current_price: 0
}

export const INITIAL_STATE: CryptoState = {
  cryptos: [],
  myCryptos: [],
  myNewCrypto: {...NEW_CRYPTO}
}