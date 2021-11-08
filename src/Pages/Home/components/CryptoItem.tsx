import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

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
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={crypto.image} />
      </ListItemAvatar>
      <ListItemText
        onClick={seeCrypto}
        primary={
          <Grid container alignItems='center'>
            <Grid item xs={6} >
              <Typography variant="subtitle2" >
                {crypto.name}
              </Typography>
            </Grid>
            <Grid item xs={6} >
              <Typography variant="body1" >
                $ {total.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        }
        secondary={crypto.amount}
      />
      <ListItemSecondaryAction >
        <IconButton onClick={editCrypto} >
          <Edit fontSize='small' />
        </IconButton>
        <IconButton edge="end" onClick={() => deleteCrypto(crypto.id)} >
          <Delete fontSize='small' />
        </IconButton>
      </ListItemSecondaryAction >
    </ListItem>
  )
}

export default CryptoItem
