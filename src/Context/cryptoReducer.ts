import { Crypto, CryptoGecko, CryptoState } from "../types/types";
import { saveCryptosStorage } from "../utils/localStorage";

type Actions =
  | { type: 'GET_CRYPTOS', payload: CryptoGecko[] }
  | { type: 'GET_MY_CRYPTOS', payload: Crypto[] }
  | { type: 'SET_MY_NEW_CRYPTO', payload: Crypto }
  | { type: 'ADD_MY_CRYPTO', payload: Crypto }
  | { type: 'UPDATE_MY_CRYPTO', payload: Crypto[] }
  | { type: 'DELETE_MY_CRYPTO', payload: Crypto[] }


export const cryptoReducer = (state: CryptoState, action: Actions): CryptoState => {
  switch (action.type) {
    case 'GET_CRYPTOS':
      return {
        ...state,
        cryptos: action.payload
      };
    case 'GET_MY_CRYPTOS':
    case 'DELETE_MY_CRYPTO':
    case 'UPDATE_MY_CRYPTO':
      return {
        ...state,
        myCryptos: action.payload
      };
    case 'SET_MY_NEW_CRYPTO':
      return {
        ...state,
        myNewCrypto: action.payload
      };
    case 'ADD_MY_CRYPTO':
      saveCryptosStorage([...state.myCryptos, action.payload]);
      return {
        ...state,
        myCryptos: [...state.myCryptos, action.payload]
      };
    default:
      return state;
  }
}