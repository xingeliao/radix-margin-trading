import React from 'react';
import './App.css';
import LeverageCalculator from './LeverageCalculator';
import { RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit';

const dAppId = 'package_tdx_2_1pktgtk5whzrjp7dpx5ha3w57vsl63wlq78j5ptevdqmqvvs5f2jysg';
const rdt = RadixDappToolkit({
  dAppDefinitionAddress: dAppId,
  networkId: 2, // 2 for Stokenet
  applicationName: 'Margin Trading App',
  applicationVersion: '1.0.0',
});



function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Margin Trading App</h1>
        </header>
        <main>
          <LeverageCalculator radixDappToolkit={rdt} />
        </main>
      </div>
  );
}

export default App;