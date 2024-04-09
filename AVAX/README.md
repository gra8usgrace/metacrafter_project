

# SimpleERC20 Token Contract

This is a simple implementation of an ERC20 token contract written in Solidity. ERC20 is a widely adopted standard for fungible tokens on the Ethereum blockchain.

## Contract Details

- **Name**: Gracious Degen
- **Symbol**: GDTK
- **Decimals**: 1_000_000_000 (1 billion)
- **Total Supply**: Initially undefined; will be set during minting
- **Owner**: The address that deploys the contract is set as the owner

## Contract Functions

### `transfer`

- **Visibility**: Public
- **Parameters**: `_to` (address), `_value` (uint256)
- **Description**: Transfers `_value` tokens from the sender's address to the specified `_to` address.
- **Requirements**:
  - The recipient address `_to` must not be the zero address.
  - The sender must have a sufficient balance to complete the transfer.
- **Events**: Emits a `Transfer` event upon successful transfer.

### `mint`

- **Visibility**: Public
- **Parameters**: `_amount` (uint256)
- **Description**: Mints `_amount` tokens and assigns them to the owner's address.
- **Requirements**:
  - Only the owner can call this function.
  - The minted amount must be greater than 1.
- **Events**: None

### `approve`

- **Visibility**: External
- **Parameters**: `_spender` (address), `_value` (uint256)
- **Description**: Approves the `_spender` address to spend up to `_value` tokens on behalf of the sender.
- **Events**: Emits an `Approval` event upon successful approval.

### `transferFrom`

- **Visibility**: External
- **Parameters**: `_from` (address), `_to` (address), `_value` (uint256)
- **Description**: Transfers `_value` tokens from the `_from` address to the `_to` address. This function is typically used in conjunction with `approve` to allow third-party spending.
- **Requirements**:
  - The sender must have a sufficient allowance approved by the `_from` address.
  - Both `_from` and `_to` addresses must not be the zero address.
- **Events**: Emits a `Transfer` event upon successful transfer.

## Usage

1. Deploy the contract to the Ethereum blockchain.
2. Call the `mint` function to initially mint tokens.
3. Use `transfer`, `approve`, and `transferFrom` functions to manage token transfers and approvals.

## License

This contract is licensed under the MIT License.

