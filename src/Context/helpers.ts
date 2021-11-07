import { Crypto, CryptoGecko } from "../types/types";

export const completeTodayCryptoData = (myCryptos: Crypto[] = [], cryptos: CryptoGecko[] = []) => {
  if (cryptos.length) {
    myCryptos.forEach((myCrypto: Crypto) => {
      const crypto = cryptos.find(crypto => crypto.symbol === myCrypto.symbol);
      if (crypto) {
        myCrypto.image = crypto.image;
        myCrypto.current_price = crypto.current_price;
      }
    })
  }
};