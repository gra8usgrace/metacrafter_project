
# Sepolia Testnet ERC721 to Polygon Mumbai Bridge

This repository contains an example implementation of deploying an ERC721 NFT contract to the Sepolia Ethereum Testnet, minting NFTs, and transferring them from Ethereum to the Polygon Mumbai network using the FxPortal Bridge. The solution is built using Hardhat, an Ethereum development environment, and leverages the Polygon network for fast and cost-effective transactions.





## Usage

### Deploying ERC721 Contract

To deploy the ERC721 contract to the Sepolia Ethereum Testnet, run the following command:

```bash
npx hardhat run scripts/deploy.ts --network Sepolia
```

The script will deploy the contract and provide the address where the contract is deployed.

### Minting NFTs

To mint NFTs using the deployed ERC721 contract, run the following command:

```bash
npx hardhat run scripts/batchmint.ts --network Sepolia
```

The script will mint the specified number of NFTs and assign them to your address.

### Transferring NFTs to Polygon Mumbai

To transfer the minted NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge, run the following command:

```bash
npx hardhat run scripts/batchtransfer.ts --network Sepolia
```

The script will approve the NFTs for transfer, deposit them to the bridge, and initiate the transfer process to Polygon Mumbai.

### Testing Balance on Polygon Mumbai

To test the balance of your NFTs on the Polygon Mumbai network, run the following command:

```bash
npx hardhat run scripts/balance.ts --network mumbai
```

The script will retrieve and display the current balance of your NFTs on Polygon Mumbai.



## License

This project is licensed under the MIT License. Feel free to modify and adapt the code to suit your specific requirements.
```

