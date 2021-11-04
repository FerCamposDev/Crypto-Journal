import { useContext, useEffect } from 'react'
import { CryptoContext } from '../Context/CryptoContext';

const useCryptos = () => {
  const { state, getCryptos, getCryptoPrice } = useContext(CryptoContext)
  const { cryptos } = state;

  useEffect(() => {
    getCryptos();
  }, [])

  return {
    cryptos,
    getCryptoPrice,
  }
}

export default useCryptos;
