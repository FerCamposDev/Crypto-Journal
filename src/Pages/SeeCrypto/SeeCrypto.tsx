import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Grid } from '@mui/material';
import useMyCryptos from '../../hooks/useMyCryptos';

import Page from '../../components/Page';
import Form from '../../components/CryptoForm';
import { Crypto } from '../../types/types';

const SeeCrypto = () => {
  const { myCryptos } = useMyCryptos();
  const { id }: any = useParams();
  const [myCrypto, setMyCrypto] = useState<Crypto>();

  useEffect(() => {
    const result = myCryptos.find(crypto => crypto.id === id);
    if(result){
      setMyCrypto(result);
    }
  }, [id]);

  return (
    <Page title={(myCrypto && myCrypto.name) || 'Crypto not found'}>
      <>
        {
          myCrypto && myCrypto.image &&
          <Grid container alignItems='center' justifyContent='center' sx={{ pt: 3 }}>
            <Avatar src={myCrypto.image} />
            <Form />
          </Grid>
        }
      </>
    </Page>
  )
}

export default SeeCrypto;
