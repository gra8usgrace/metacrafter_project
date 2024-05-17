# Smart Contract Wallet Solution

## Overview

This project implements a smart contract wallet system that allows users to create individual wallets, send and receive funds, and view their wallet balances. The solution utilizes Solidity for the smart contracts and provides a simple front-end interface for interacting with the wallet.

## Table of Contents

- [Smart Contract Wallet Solution](#smart-contract-wallet-solution)
  - [Overview](#overview)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Smart Contract Overview](#smart-contract-overview)
  - [Front-End Overview](#front-end-overview)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Create Wallet:** Users can create a smart contract wallet.
- **Send Funds:** Users can send funds to other wallets.
- **Receive Funds:** Users can receive funds from other wallets.
- **View Balance:** Users can view their wallet balance via a front-end interface.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Solidity compiler (version 0.8.0 or higher)
- A web browser (for the front-end interface)
- MetaMask or other web3-enabled browser extension

## Installation

1. **Clone the Repository**
    ```sh
    git clone https://github.com/gra8usgrace/metacrafter_project/tree/main/smartwallet 
    
    cd smartwallet
    cd backend
    ```

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Compile Smart Contracts**
    ```sh
    npx hardhat compile
    ```

4. **Deploy Smart Contracts**
    ```sh
    npx hardhat run scripts/deploy.js --network <network-name>
    ```

5. **Start the Front-End**
    ```sh
    cd client
    npm install
    npm start
    ```

## Smart Contract Overview

### WalletFactory.sol

This contract is responsible for creating new user wallets. Each user will have their own instance of a `Wallet` contract.

#### Functions

- **createWallet:** Creates a new smart contract wallet for the user.
- **getWallet:** Returns the address of the user's wallet.

### SimpleAccountFactory.sol

This contract represents an individual wallet for a user. It includes functionality to send and receive funds and check the balance.

#### Functions

- **FundWallet:** Sends funds to a specified address.
- **CreateAccount:** Create smart wallet account for a  specified address.
- **getBalance:** Returns the current balance of the wallet.

### EIP-4337 Implementation

The project includes custom structs and functionality inspired by [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) to facilitate user operations.

#### Structs

- **UserOperation:** Struct to define operations like sending and receiving funds.

## Front-End Overview

The front-end is a simple React application that allows users to interact with their smart contract wallets. 

### Pages

- **Home:** Displays an overview and options to create a wallet, view balance, and send funds.
- **Balance:** Shows the current balance of the user's wallet.
- **Send Funds:** Interface to send funds to another address.

## Usage

1. **Create a Wallet**
    - Open the web application.
    - Click on "Create Wallet".
    - Confirm the transaction in MetaMask.

2. **View Balance**
    - Navigate to the "Balance" page.
    - Enter your wallet address.
    - Click "View Balance" to see your current balance.

3. **Send Funds**
    - Navigate to the "Send Funds" page.
    - Enter the recipient's address and the amount.
    - Click "Send" and confirm the transaction in MetaMask.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
