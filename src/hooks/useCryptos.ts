import { useEffect, useState } from 'react'
import axios from 'axios';
import { Crypto } from '../types/types';

const useCryptos = () => {
  const [cryptos, setCryptos] = useState<Array<any>>([]);
  const [myCryptos, setMyCryptos] = useState<Array<Crypto>>([]);

  useEffect(() => {
    getCryptos();
    getCryptoPrice('btc');
    getMyCryptos();
  }, [])

  const getCryptos = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    setCryptos(res.data);

    console.log('gecko',res.data[0]);
  }

  const getMyCryptos = () => {
    setMyCryptos([
      {
        name: 'bitcoin',
        amount: '0.010425',
        symbol: 'btc',
        current_price: '0',
        image: ''
      }
    ])
  }
  const getCryptoPrice = async (symbol: string) => {
    const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol.toUpperCase()}USDT`);
    console.log('btc',res.data)
  }


  return {
    cryptos, getCryptos
  }
}

export default useCryptos;
