import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

import { Crypto } from '../../types/types';
import useMyCryptos from '../../hooks/useMyCryptos';

import Page from '../../components/Page';
import CryptoCard from './CryptoCard';
import useCryptos from '../../hooks/useCryptos';

const SeeCrypto = () => {
  const { myCryptos } = useMyCryptos();
  const { getCryptoPrice } = useCryptos();
  const { symbol }: any = useParams();

  const [myCrypto, setMyCrypto] = useState<Array<Crypto>>([]);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    const result = myCryptos.filter(crypto => crypto.symbol === symbol);
    if (result) {
      setMyCrypto(result);
    }
  }, [symbol, myCryptos]);

  const updateCryptoPrice = async() => {
    const price = await getCryptoPrice(symbol);
    setCurrentPrice(price);
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      updateCryptoPrice();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    myCrypto.length > 0 ?
      <Page title={myCrypto[0].name}>
        <Grid container alignItems='center' justifyContent='center' sx={{ pt: 3 }}>
          {
            myCrypto.map((crypto) => {
              return (
                <CryptoCard key={crypto.id}
                  currentPrice={currentPrice || crypto.current_price}
                  crypto={crypto}
                  handlePrice={updateCryptoPrice}
                />
              )
            })
          }
        </Grid>
      </Page>
      :
      <Page title='Crypto not found'>
        <>
        </>
      </Page>
  )
}

export default SeeCrypto;
