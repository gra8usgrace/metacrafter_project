
# Gracious Degen Token (GDTK)

Gracious Degen Token (GDTK) is an ERC20-compatible token implemented in Solidity. It adheres to the ERC20 standard, allowing it to be used in various decentralized applications (DApps) and exchanges that support ERC20 tokens.

## Token Details

- **Name**: Gracious Degen Token
- **Symbol**: GDTK
- **Decimals**: 9 (1 GDTK = 1,000,000,000 units)
- **Total Supply**: Dynamic (can be increased through minting)

## Functionality

The Gracious Degen Token contract provides the following functionalities:

1. **Transfer**: Allows users to transfer tokens to other addresses.
2. **Burn**: Allows token holders to burn (destroy) a specified amount of their own tokens, reducing the total supply.
3. **Mint**: Allows the contract owner to mint (create) new tokens and increase the total supply.
4. **Approval**: Allows token holders to approve another address to spend tokens on their behalf.
5. **TransferFrom**: Allows approved addresses to transfer tokens from one address to another on behalf of the token owner.

## Usage

### Deployment

Deploy the `ERC20` contract to the Ethereum blockchain, specifying the address of the contract owner.

### Interacting with the Contract

- **Transfer Tokens**: Call the `transfer` function, specifying the recipient's address and the amount of tokens to transfer.
- **Burn Tokens**: Call the `burn` function, specifying the amount of tokens to burn.
- **Mint Tokens**: Call the `mint` function (only callable by the contract owner), specifying the amount of tokens to mint.
- **Approve Spending**: Call the `approve` function, specifying the spender's address and the amount of tokens to approve.
- **Transfer Tokens From**: Call the `transferFrom` function (after being approved), specifying the sender's address, recipient's address, and the amount of tokens to transfer.

## Security Considerations

- Ensure that the contract owner address is securely managed, as it has the ability to mint tokens.
- Exercise caution when approving spending and transferring tokens from one address to another.
- Thoroughly test all contract functionalities in a test environment before deploying to the mainnet.

## License

This contract is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
