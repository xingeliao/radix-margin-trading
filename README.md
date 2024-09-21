# Radix Margin Trading Project

This project implements a margin trading application, consisting of a Scrypto backend and a React frontend.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Rust](https://www.rust-lang.org/tools/install)
- [Node.js](https://nodejs.org/) (v14 or later)
- [Scrypto CLI](https://docs.radixdlt.com/main/scrypto/getting-started/install-scrypto.html)

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
   ```

4. Publish the package:
   ```bash
   resim publish .
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

TBD