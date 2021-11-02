import { CryptoProvider } from './Context/CryptoProvider';
import Router from './Router/Router';

function App() {
  return (
    <CryptoProvider>
      <Router />
    </CryptoProvider>
  );
}

export default App;
