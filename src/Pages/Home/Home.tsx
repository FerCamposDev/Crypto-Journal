import { useHistory } from 'react-router';
import { Button, Paper } from '@mui/material';

import useMyCryptos from '../../hooks/useMyCryptos';
import MyCryptos from '../MyCryptos/MyCryptos';

const Home = () => {
  const { myCryptos } = useMyCryptos();
  const history = useHistory();

  return (
    <Paper elevation={3} >
      {myCryptos.length && <MyCryptos />}
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
