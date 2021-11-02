import { createContext } from 'react';
import { CryptoState } from '../types/types';

export type CryptoContextProps = {
  state: CryptoState
  getCryptos: () => void,
  getMyCryptos: () => void,
}

export const CryptoContext = createContext<CryptoContextProps>({} as CryptoContextProps);