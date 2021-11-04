import { useContext, useEffect } from 'react'
import { CryptoContext } from '../Context/CryptoContext';

const useMyCryptos = () => {
  const { 
    state, 
    getMyCryptos, 
    setMyNewCrypto,
    addMyNewCrypto,
    setCryptoEdited,
    deleteCrypto,
  } = useContext(CryptoContext)
  const { myCryptos, myNewCrypto } = state;

  useEffect(() => {
    getMyCryptos();
  }, [])

  return {
    myCryptos,
    myNewCrypto,
    setMyNewCrypto,
    addMyNewCrypto,
    setCryptoEdited,
    deleteCrypto
  }
}

export default useMyCryptos;
