import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Grid } from '@mui/material';

import { Crypto } from '../../types/types';
import useMyCryptos from '../../hooks/useMyCryptos';

import Page from '../../components/Page';
import CryptoCard from './CryptoCard';
import useCryptos from '../../hooks/useCryptos';
import { setInterval } from 'timers';

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

  useEffect(() => {
    setInterval(async() => {
      const price = await getCryptoPrice(symbol);
      setCurrentPrice(price);
      console.log(`Price obtenido: ${price}`);
    }, 10000);
  }, [])

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
