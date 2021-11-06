import { ArrowBack, Home } from '@mui/icons-material';
import { Container, Grid, IconButton, Typography } from '@mui/material'
import { useHistory } from 'react-router';

import SettingsButton from './components/SettingsButton';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth='md' sx={{ p: 0, m: 0 }}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <IconButton onClick={handleBack}>
              <ArrowBack />
            </IconButton>
            <IconButton onClick={handleHome}>
              <Home />
            </IconButton>
          </Grid>
          {
            history.location.pathname === '/' &&
            <Grid item>
              <SettingsButton />
            </Grid>
          }
        </Grid>
        <Typography variant="h5" align='center' sx={{ pb: 3 }}>
          {title}
        </Typography>
        {children}
      </Container>
    </div>
  )
}

export default Page
