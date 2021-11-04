import List from '@mui/material/List';

import useMyCryptos from '../../../hooks/useMyCryptos';
import { Crypto } from '../../../types/types';
import CryptoItem from './CryptoItem';

const MyCryptos = () => {
  const { myCryptos } = useMyCryptos();

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {
        myCryptos.map((crypto: Crypto) => (
          <CryptoItem crypto={crypto} key={crypto.symbol} />
        ))
      }
    </List >
  )
}

export default MyCryptos;
