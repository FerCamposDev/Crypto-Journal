import { useContext, useEffect } from 'react'
import { CryptoContext } from '../Context/CryptoContext';
import axios from 'axios';

const useCryptos = () => {
  const { state, getCryptos } = useContext(CryptoContext)
  const { cryptos } = state;

  useEffect(() => {
    getCryptos();
  }, [getCryptos])

  const getCryptoPrice = async (symbol: string): Promise<number> => {
    try {
      const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol.toUpperCase()}USDT`);
      return Number(res.data.price);
    } catch (error) {
      console.log(`Error get crypto price: ${symbol} to usdt`, error);
      return 0;
    }
  }

  const getUSDTPrice = async (): Promise<number> => {
    try {
      const res = await axios.get('https://criptoya.com/api/decrypto/usdt/usd/1');
      return Number(res.data.totalBid);
    } catch (error) {
      console.log(`Error get crypto price: USDT to usd`, error);
      return 0;
    }
  }


  return {
    cryptos,
    getCryptoPrice,
    getUSDTPrice,
  }
}

export default useCryptos;
