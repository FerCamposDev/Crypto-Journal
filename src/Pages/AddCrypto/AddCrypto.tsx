import Typography from '@mui/material/Typography'

import CryptoSelect from './components/CryptoSelect';

const AddCrypto = () => {
  return (
    <div>
      <Typography variant="h4" align='center'> Add Crypto</Typography>
      <CryptoSelect />
    </div>
  )
}

export default AddCrypto;
