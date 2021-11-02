import { useContext, useEffect } from 'react'
import { CryptoContext } from '../Context/CryptoContext';

const useMyCryptos = () => {
  const { state, getMyCryptos } = useContext(CryptoContext)
  const { myCryptos } = state;

  useEffect(() => {
    getMyCryptos();
  }, [])

  return {
    myCryptos
  }
}

export default useMyCryptos;
