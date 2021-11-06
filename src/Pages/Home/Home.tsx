import { useHistory } from 'react-router';
import { Button, Paper } from '@mui/material';

import Page from '../../components/Page/Page';

import useMyCryptos from '../../hooks/useMyCryptos';
import MyCryptos from './components/MyCryptos';

const Home = () => {
  const { myCryptos } = useMyCryptos();
  const history = useHistory();

  return (
    <Page title='Home'>
      <Paper elevation={3}>
        {myCryptos.length > 0 && <MyCryptos />}
      </Paper>
      <Button
        variant='contained'
        fullWidth
        onClick={() => { history.push('add'); }}
        sx={{ mt: 1 }}
      >
        add crypto
      </Button>
    </Page>
  )
}

export default Home
