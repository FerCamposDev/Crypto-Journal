import { useContext, useEffect } from 'react'
import { CryptoContext } from '../Context/CryptoContext';

const useCryptos = () => {
  const { state, getCryptos } = useContext(CryptoContext)
  const { cryptos } = state;

  useEffect(() => {
    getCryptos();
  }, [])

  return {
    cryptos
  }
}

export default useCryptos;
