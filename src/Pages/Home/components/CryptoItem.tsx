import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Visibility from '@mui/icons-material/Visibility';

import { useHistory } from 'react-router';
import { Crypto } from '../../../types/types';
import useMyCryptos from '../../../hooks/useMyCryptos';
import Typography from '@mui/material/Typography'
import { Grid, ListItemSecondaryAction } from '@mui/material';

interface Props {
  crypto: Crypto
}

const CryptoItem = ({ crypto }: Props) => {
  const history = useHistory();
  const { deleteCrypto } = useMyCryptos();
  const total = crypto.current_price * crypto.amount;

  const seeCrypto = () => {
    history.push(`/see/${crypto.symbol}`)
  }

  const editCrypto = () => {
    history.push(`/edit/${crypto.id}`)
  }

  return (
    <ListItem >
      <ListItemAvatar>
        <Avatar src={crypto.image} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Grid container alignItems='center'>
            <Grid item xs={5} sm={5}>
              <Typography variant="subtitle2" >
                {crypto.name}
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7}>
              <Typography variant="body1" >
                $ {total.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        }
        secondary={`Balance ${crypto.amount}`}
      />
      <ListItemSecondaryAction >
        <IconButton onClick={seeCrypto} size='small'>
          <Visibility fontSize='small' />
        </IconButton>
        <IconButton onClick={editCrypto} size='small'>
          <Edit fontSize='small' />
        </IconButton>
        <IconButton edge="end" onClick={() => deleteCrypto(crypto.id)} size='small'>
          <Delete fontSize='small' />
        </IconButton>
      </ListItemSecondaryAction >
    </ListItem>
  )
}

export default CryptoItem
