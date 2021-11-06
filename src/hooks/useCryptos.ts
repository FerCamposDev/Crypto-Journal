import { useContext, useEffect } from 'react'
import { CryptoContext } from '../Context/CryptoContext';
import axios from 'axios';

const useCryptos = () => {
  const { state, getCryptos } = useContext(CryptoContext)
  const { cryptos } = state;

  useEffect(() => {
    getCryptos();
  }, [])

  const getCryptoPrice = async (symbol: string): Promise<number> => {
    const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol.toUpperCase()}USDT`);
    return Number(res.data.price);
  }

  return {
    cryptos,
    getCryptoPrice,
  }
}

export default useCryptos;
