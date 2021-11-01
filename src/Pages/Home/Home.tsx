import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Paper } from '@mui/material';

import useCryptos from '../../hooks/useCryptos'
import MyCryptos from '../MyCryptos/MyCryptos';

const Home = () => {
  const { cryptos, getCryptos } = useCryptos();
  const history = useHistory();

  return (
    <Paper elevation={3} >
      {cryptos.length && <MyCryptos />}
      <Button 
        variant='contained'
        fullWidth
        onClick={() => { history.push('add'); }}
      >
        add crypto
      </Button>
    </Paper>
  )
}

export default Home
