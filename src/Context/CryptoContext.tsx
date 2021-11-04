import { createContext } from 'react';
import { Crypto, CryptoState } from '../types/types';

export type CryptoContextProps = {
  state: CryptoState
  getCryptos: () => void,
  getMyCryptos: () => void,
  setMyNewCrypto: (newCrypto: Crypto) => void,
  addMyNewCrypto: () => void,
  setCryptoEdited: (cryptoEdited: Crypto) => void,
  deleteCrypto: (id: string) => void,
}

export const CryptoContext = createContext<CryptoContextProps>({} as CryptoContextProps);