import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Grid } from '@mui/material';
import useMyCryptos from '../../hooks/useMyCryptos';

import Page from '../../components/Page/Page';
import Form from '../../components/CryptoForm';
import { Crypto } from '../../types/types';

const Edit = () => {
  const { myCryptos } = useMyCryptos();
  const { id }: any = useParams();
  const [myCrypto, setMyCrypto] = useState<Crypto>();

  useEffect(() => {
    const result = myCryptos.find(crypto => crypto.id === id);
    if (result) {
      setMyCrypto(result);
    }
  }, [myCryptos, id]);

  return (
    <Page title={(myCrypto && myCrypto.name) || 'Crypto not found'}>
      <>
        {
          (myCrypto && myCrypto.image) &&
          <Grid container alignItems='center' justifyContent='center'>
            <Avatar src={myCrypto.image} />
            <Form editCrypto={myCrypto} />
          </Grid>
        }
      </>
    </Page>
  )
}

export default Edit;
