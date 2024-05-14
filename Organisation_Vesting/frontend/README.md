

---

# Metacrafters ERC20 Token Interface

This is a React application for interacting with the Metacrafters ERC20 Token smart contract. Users can connect their wallets, view token details, mint tokens, and transfer tokens using this interface.

## Getting Started

Follow these instructions to set up and run the application on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/gra8usgrace/metacrafter_project/tree/main/Organisation_Vesting/frontend
```



3. Install dependencies:

```bash
npm install
```

### Usage

1. Start the development server:

```bash
npm dev
```

2. Open your browser and navigate to `http://localhost:5173` to view the application.

# TokenVesting Smart Contract

This Solidity smart contract implements a token vesting mechanism to distribute tokens to beneficiaries over a specified vesting duration. It ensures that tokens are distributed securely according to the specified terms.

## Features

- **Organization Management**: Allows adding organizations with their token amounts.
- **Beneficiary Management**: Enables adding beneficiaries with their vesting details.
- **Whitelist Management**: Permits adding addresses to a whitelist for token claiming.
- **Token Claiming**: Beneficiaries can claim their tokens after the vesting period ends.
- **Error Handling**: Provides error handling for unauthorized access, insufficient token amounts, and unauthorized token claiming attempts.

## Contract Structure

The contract consists of the following key components:

- **Organization Struct**: Contains information about organizations, including their addresses, names, and token amounts.
- **Beneficiary Struct**: Stores details about beneficiaries, such as their addresses, positions, vesting durations, start times, token amounts, and claimed token amounts.
- **totalSupply**: Tracks the total token supply.
- **Mappings**: Utilizes mappings to store beneficiary information, whitelist status, organization details, and claimed token balances.
- **Events**: Emits events for stakeholder creation and token claiming.
- **Modifiers**: Defines a modifier for authorization checks.

## Functions

- `addOrganization`: Allows adding organizations with their token amounts.
- `addBeneficiary`: Permits adding beneficiaries with their vesting details. Requires authorization.
- `addToWhitelist`: Adds addresses to the whitelist for token claiming. Requires authorization.
- `claimTokens`: Allows beneficiaries to claim their tokens after the vesting period ends.
- `getClaimedTokens`: Retrieves the claimed token balance of a beneficiary.
- `getBeneficiaryInfo`: Retrieves information about a specific beneficiary.

## Usage

1. Deploy the contract on the Ethereum blockchain.
2. Add organizations and their corresponding token amounts using the `addOrganization` function.
3. Add beneficiaries with their vesting details using the `addBeneficiary` function, ensuring that the organization is authorized.
4. Add beneficiary addresses to the whitelist using the `addToWhitelist` function, ensuring that the organization is authorized.
5. After the vesting period ends, beneficiaries can claim their tokens using the `claimTokens` function if their address is whitelisted and the vesting period is over.
6. Check the claimed token balance of a beneficiary using the `getClaimedTokens` function.
7. Retrieve information about a beneficiary using the `getBeneficiaryInfo` function.

Contract address Deployed on AMOY

```sh
0x52C4139094ACCFE877F36CB60eCc94b1764631A2
```


### Technologies Used

- React
- Ethereum (Web3.js)
- Tailwind CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

