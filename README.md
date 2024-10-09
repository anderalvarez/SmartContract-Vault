# Ethereum Smart Contract Registry

A decentralized application (DApp) that allows users to register, verify, and validate the authenticity of smart contracts on the Ethereum blockchain. This system provides a transparent and immutable record of contract changes and audits.

## Features

- Smart contract registration on Ethereum blockchain
- Contract authenticity verification
- User-friendly interface for contract validation
- Comprehensive change history and audit trail
- Secure and decentralized storage of contract information

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Metamask browser extension
- Ethereum wallet with some ETH for gas fees (on the desired network)

## Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/ethereum-smart-contract-registry.git
   ```
2. Navigate to the project directory
   ```
   cd ethereum-smart-contract-registry
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your Ethereum network details:
   ```
   REACT_APP_ETHEREUM_NETWORK=rinkeby
   REACT_APP_INFURA_PROJECT_ID=your_infura_project_id
   ```

## Usage

1. Start the development server
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`

3. Connect your Metamask wallet to the application

4. Use the interface to:
   - Register new smart contracts
   - Verify existing contracts
   - View contract history and audits

## Smart Contract Interaction

The main smart contract for this project is located at `contracts/ContractRegistry.sol`. To interact with it:

1. Compile the contract:
   ```
   npx hardhat compile
   ```
2. Deploy the contract to your chosen network:
   ```
   npx hardhat run scripts/deploy.js --network rinkeby
   ```
3. Update the contract address in `src/config.js` with the newly deployed address

## Testing

Run the test suite with:

```
npm test
```

## Contributing

We welcome contributions to improve the Ethereum Smart Contract Registry. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Ander Álvarez - [@nderalvarez](https://twitter.com/nderalvarez) - email@example.com

Project Link: [https://github.com/anderalvarez/SmartContract-Vault](https://github.com/anderalvarez/eSmartContract-Vault)

## Acknowledgements

- [Ethereum](https://ethereum.org/)
- [OpenZeppelin](https://openzeppelin.com/)
- [Hardhat](https://hardhat.org/)
- [React](https://reactjs.org/)
- [Web3.js](https://web3js.readthedocs.io/)
