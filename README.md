# Radix Margin Trading Project

This project implements a margin trading application, consisting of a Scrypto backend and a React frontend.

## Knowledge

- Understand Margin Trading: https://www.youtube.com/watch?v=h5wZoNSynh8
- Margin Trading Example: https://www.binance.com/en/futures/home
- We want to create a margin trading app based on Radix token, a simplified version of this app: https://app.drift.trade/

## Prerequisites

Before you begin, follow this page to set up the enviorment:
https://docs.radixdlt.com/docs/getting-rust-scrypto
1. Install Rust compiler
2. Enable cargo in the current shell
3. Add WebAssembly target
4. Install Radix Engine Simulator and command-line tools

## Installation

Clone the repository:

```bash
git clone https://github.com/xingeliao/radix-margin-trading.git
cd radix-margin-trading
```

### Frontend (React)

1. Navigate to the React app directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   npm install @radixdlt/radix-dapp-toolkit
   ```

### Backend (Scrypto)

1. Navigate to the Scrypto package directory:
   ```bash
   cd margin_trading
   ```

2. Build the Scrypto package:
   ```bash
   scrypto build
   ```

## Usage

### Running the React Frontend

1. Start the React development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


### Deploying the Scrypto Package (to Simulator)

1. Build the Scrypto package:
   ```bash
   scrypto build
   ```

2. Running the Scrypto Tests

   ```bash
    scrypto test
    ```

3. Start the Radix Engine Simulator:
   ```bash
   resim reset
   resim new-account
   ```

4. Publish the package:
   ```bash
   resim publish .
   ```
   More information regarding Radix Engine Simulator: https://docs.radixdlt.com/docs/resim-radix-engine-simulator

## Contributing

Contributions are welcome!

## License

TBD