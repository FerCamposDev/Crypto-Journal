import { useEffect, useState } from 'react';
import List from '@mui/material/List';

import useMyCryptos from '../../../hooks/useMyCryptos';
import { Crypto } from '../../../types/types';
import CryptoItem from './CryptoItem';
import useCryptos from '../../../hooks/useCryptos';
import Totals from './Totals';
import useDollar from '../../../hooks/useDollar';

const MyCryptos = () => {
  const { myCryptos, setCryptoEdited } = useMyCryptos();
  const { getCryptoPrice } = useCryptos();
  const [totalDollars, setTotalDollars] = useState(0);
  const [totalArs, setTotalArs] = useState(0);
  const { dollarPriceArs } = useDollar();

  const refreshTotals = () => {
    myCryptos.forEach(async (myCrypto) => {
      const price = await getCryptoPrice(myCrypto.symbol);
      if (price) {
        myCrypto.current_price = price;
        setCryptoEdited(myCrypto);
      }
    })
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshTotals();
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let total = 0;
    myCryptos.forEach(myCrypto => {
      total += myCrypto.current_price * myCrypto.amount;
    })
    setTotalDollars(total);
    setTotalArs(total * dollarPriceArs);
  }, [myCryptos, dollarPriceArs]);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {
        myCryptos.map((crypto: Crypto) => (
          <CryptoItem crypto={crypto} key={crypto.symbol} />
        ))
      }
      <Totals
        dollars={totalDollars}
        ars={totalArs}
        refreshTotals={refreshTotals}
      />
    </List >
  )
}

export default MyCryptos;
