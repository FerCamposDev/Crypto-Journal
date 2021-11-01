import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

interface Props {
  crypto: any
}

const CryptoItem = ({ crypto }: Props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={crypto.image}/>
      </ListItemAvatar>
      <ListItemText 
        primary={crypto.name} 
        secondary={`U$S ${crypto.current_price}`}
      />
    </ListItem>
  )
}

export default CryptoItem
