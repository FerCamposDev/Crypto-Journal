import { Avatar, Grid } from '@mui/material';
import useMyCryptos from '../../hooks/useMyCryptos';

import Page from '../../components/Page';
import CryptoSelect from './components/CryptoSelect';
import Form from '../../components/CryptoForm';

const AddCrypto = () => {
  const { myNewCrypto } = useMyCryptos();

  return (
    <Page title='Add Crypto'>
      <>
        <CryptoSelect />
        {
          myNewCrypto.image &&
          <Grid container alignItems='center' justifyContent='center' sx={{ pt: 3 }}>
            <Avatar src={myNewCrypto.image} />
            <Form />
          </Grid>
        }
      </>
    </Page>
  )
}

export default AddCrypto;
