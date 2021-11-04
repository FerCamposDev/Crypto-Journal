import { ArrowBack, Home } from '@mui/icons-material';
import { Container, IconButton, Typography } from '@mui/material'
import { useHistory } from 'react-router';

interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
}

const Page = (props: Props) => {
  const { children, title } = props;
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  const handleHome = () => {
    history.push('/');
  }

  return (
    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
      <Container maxWidth='md' sx={{ p: 0, m: 0 }}>
        <IconButton onClick={handleBack}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={handleHome}>
          <Home />
        </IconButton>
        <Typography variant="h5" align='center' sx={{ pb: 3 }}>
          {title}
        </Typography>
        {children}
      </Container>
    </div>
  )
}

export default Page
