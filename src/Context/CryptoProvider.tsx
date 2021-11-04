import { useReducer } from "react";
import axios from "axios";
import uniqueString from "unique-string";
import { Crypto, CryptoGecko } from "../types/types";
import { CryptoContext } from "./CryptoContext";
import { cryptoReducer } from "./cryptoReducer";
import { INITIAL_STATE, NEW_CRYPTO } from "./InitialState";
import { saveCryptos } from "../utils/localStorage";

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const CryptoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cryptoReducer, INITIAL_STATE);

  const getCryptos = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    dispatch({
      type: 'GET_CRYPTOS',
      payload: res.data as CryptoGecko[],
    })
  }

  const getMyCryptos = () => {
    const storage = localStorage.getItem('myCryptos');
    if (storage) {
      const myCryptos: Crypto[] = JSON.parse(storage);
      completeTodayCryptoData(myCryptos);
      dispatch({
        type: 'GET_MY_CRYPTOS',
        payload: myCryptos,
      })
    }
  }

  const setMyNewCrypto = (newCrypto: Crypto) => {
    dispatch({
      type: 'SET_MY_NEW_CRYPTO',
      payload: newCrypto,
    })
  }

  const setCryptoEdited = (cryptoEdited: Crypto) => {
    let myCryptos = [...state.myCryptos];
    const pos = myCryptos.findIndex(crypto => crypto.id === cryptoEdited.id);
    myCryptos.splice(pos, 1, cryptoEdited);
    console.log('myCryptos :>> ', myCryptos);
    dispatch({
      type: 'UPDATE_MY_CRYPTO',
      payload: myCryptos,
    })
    saveCryptos(myCryptos);
  }

  const addMyNewCrypto = () => {
    dispatch({
      type: 'ADD_MY_CRYPTO',
      payload: state.myNewCrypto,
    })

    const newCrypto = { ...NEW_CRYPTO };
    newCrypto.id = uniqueString();
    setMyNewCrypto(newCrypto);
  }

  const deleteCrypto = (id: string) => {
    let myCryptos = [...state.myCryptos];
    const pos = myCryptos.findIndex(crypto => crypto.id === id);
    myCryptos.splice(pos, 1);
    dispatch({
      type: 'DELETE_MY_CRYPTO',
      payload: myCryptos,
    });
    saveCryptos(myCryptos);
  }

  function completeTodayCryptoData(myCryptos: Crypto[] = []) {
    if (state.cryptos.length) {
      myCryptos.forEach((myCrypto: Crypto) => {
        const crypto = state.cryptos.find(crypto => crypto.symbol === myCrypto.symbol);
        if (crypto) {
          myCrypto.image = crypto.image;
          myCrypto.current_price = crypto.current_price;
        }
      })
    }
  }

  async function getCryptoPrice(symbol: string): Promise<number> {
    const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol.toUpperCase()}USDT`);
    return Number(res.data.price);
  }

  return (
    <CryptoContext.Provider value={{
      state,
      getCryptos,
      getMyCryptos,
      setMyNewCrypto,
      addMyNewCrypto,
      setCryptoEdited,
      deleteCrypto
    }}>
      {children}
    </CryptoContext.Provider>
  )
}