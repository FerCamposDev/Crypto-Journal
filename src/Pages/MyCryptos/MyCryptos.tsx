import List from '@mui/material/List';

import useCryptos from '../../hooks/useCryptos';
import CryptoItem from './CryptoItem';

const MyCryptos = () => {
  const { cryptos, getCryptos } = useCryptos();

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        cryptos.map((crypto) => (
          <CryptoItem crypto={crypto} key={crypto.symbol} />
        ))
      }
    </List >
  )
}

export default MyCryptos;
