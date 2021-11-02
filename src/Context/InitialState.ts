import { Crypto, CryptoState } from "../types/types";

export const NEW_CRYPTO: Crypto = {
  name: "",
  symbol: "",
  image: "",
  amount: "",
  price: 0,
  current_price: 0
}

export const INITIAL_STATE: CryptoState = {
  cryptos: [],
  myCryptos: [],
  myNewCrypto: {...NEW_CRYPTO}
}