import { useWeb3React } from '@web3-react/core';
import { injected } from './lib/connectors';

import './App.css';

const App = () => {
  const {
    chainedId,
    account,
    active,
    activate,
    deactivate
  } = useWeb3React();

  const handdleConnect = () => {
    if(active) {
      deactivate();
      return;
    }
    
    activate(injected, (error) => {
      if('/No Ethereum provider was found on window.ethereum/'.test(error)) {
        window.open('https://metamask.io/download.html');
      }
    });
  }
  return (
    <div>
      <div>
        <p>Account: {account}</p>
        <p>ChainId: {chainedId}</p>
      </div>
      <div>
        <button type="button" onClick={handdleConnect}>{active ? 'disconnect':'connect'}</button>
      </div>
    </div>
  )
}

export default App;
