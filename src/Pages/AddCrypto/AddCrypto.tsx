import Typography from '@mui/material/Typography'

import CryptoSelect from './components/CryptoSelect';

const AddCrypto = () => {
  return (
    <div>
      <Typography variant="h3"> Add Crypto</Typography>
      <CryptoSelect />
    </div>
  )
}

export default AddCrypto;
