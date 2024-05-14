
## Documentation

### InsuranceFactory Contract

The `InsuranceFactory` contract allows users to create and manage their own instances of `ProtectionInsurance` and `InsuranceContract`.

#### State Variables

- `address public owner`: The owner of the factory contract.
- `mapping(address => address) public userProtectionInsurance`: A mapping of user addresses to their `ProtectionInsurance` contract addresses.
- `mapping(address => address) public userInsuranceContract`: A mapping of user addresses to their `InsuranceContract` addresses.

#### Events

- `event ProtectionInsuranceCreated(address indexed user, address protectionInsurance)`: Emitted when a new `ProtectionInsurance` contract is created.
- `event InsuranceContractCreated(address indexed user, address insuranceContract)`: Emitted when a new `InsuranceContract` is created.





#### Functions

- `function createProtectionInsurance() external`: Creates a new `ProtectionInsurance` contract for the caller if one does not already exist.

- `function createInsuranceContract() external`: Creates a new `InsuranceContract` for the caller if they have already created a `ProtectionInsurance` contract and do not have an existing `InsuranceContract`.

- `function getProtectionInsurance(address user) external view returns (address)`: Returns the address of the `ProtectionInsurance` contract for the specified user.

- `function getInsuranceContract(address user) external view returns (address)`: Returns the address of the `InsuranceContract` for the specified user.

### ProtectionInsurance Contract

The `ProtectionInsurance` contract allows users to request loans, receive loans, and repay loans with collateral.

#### State Variables


- `mapping(address => Policy) public LoanPolicy`: A mapping of user addresses to their loan policies.
- `m    mapping(address => address) public userInsuranceContract;`: A mapping of user addresses to their loan Isurance.

#### Structs

- `struct Policy`: Contains details of a user's loan policy.
  - `bool paid`: Indicates if the loan is paid.
  - `bool received`: Indicates if the loan is received.
  - `uint256 collateral`: The collateral amount for the loan.
  - `uint256 loanAmount`: The requested loan amount.
  - `uint loanTopay`: The total loan amount to be paid back.
  - `uint256 loanType`: The type of loan (BASIC or PREMIUM).

#### Constants

- `uint256 constant private BASIC_DIVISOR = 75`: Basic loan divisor.
- `uint256 constant private PREMIUM_DIVISOR = 85`: Premium loan divisor.
- `uint256 constant private PERCENTAGE = 100`: Percentage constant for calculations.

#### Constructor

```solidity
constructor() {
    owner = msg.sender;
}
```
Initializes the contract with the owner set to the contract deployer.

#### Functions

- `receive() external payable`: Allows the contract to receive Ether.

- `function requestLoan(uint256 _loanAmount) external payable`: Requests a loan with the specified amount. Determines loan type and sets the loan policy for the user.

- `function receiveLoan() external`: Allows the user to receive their loan amount if they have an active loan.

- `function payLoan() external payable`: Allows the user to repay their loan. Transfers the repayment to the contract owner and refunds the user's collateral.

- `function getPolicy(address user) external view returns (Policy memory)`: Returns the loan policy for the specified user.

### InsuranceContract

The `InsuranceContract` allows users to pay for insurance and claim insurance based on their `ProtectionInsurance` policies.

#### State Variables

- `address public owner`: The owner of the `InsuranceContract`.
- `ProtectionInsurance public protectionInsurance`: An instance of the `ProtectionInsurance` contract.

#### Structs

- `struct Insurance`: Contains details of a user's insurance.
  - `bool insured`: Indicates if the user is insured.
  - `uint256 insuredAmount`: The insured amount.
  - `uint256 coverageEndTime`: The end time of the insurance coverage.

#### Constants

- `uint256 constant private BASIC_PREMIUM_POLICY = 0.1 ether`: Basic premium policy amount.
- `uint256 constant private STANDARD_PREMIUM_POLICY = 1 ether`: Standard premium policy amount.
- `uint256 constant private BASIC_PREMIUM_INSURED_COVERAGE_TIME = 30 days`: Basic insurance coverage time.
- `uint256 constant private STANDARD_PREMIUM_INSURED_COVERAGE_TIME = 60 days`: Standard insurance coverage time.

#### Events

- `event InsurancePaid(address indexed payer, uint256 amount, uint256 coverageEndTime)`: Emitted when an insurance payment is made.
- `event InsuranceClaimed(address indexed claimant, uint256 amount)`: Emitted when an insurance claim is made.

#### Constructor

```solidity
constructor(address payable _protectionInsuranceAddress) {
    owner = msg.sender;
    protectionInsurance = ProtectionInsurance(_protectionInsuranceAddress);
}
```
Initializes the contract with the owner set to the contract deployer and sets the `ProtectionInsurance` contract address.

#### Functions

- `function payInsurance(bool _isBasic) external payable`: Allows the user to pay for insurance. Sets the insured amount and coverage end time based on the premium type.

- `function claimInsurance() external`: Allows the user to claim their insurance if the coverage period has ended.

- `function requestLoan(uint256 _loanAmount, bool _isBasicInsurance) external payable`: Requests a loan via the `ProtectionInsurance` contract.

- `function receiveLoan() external`: Receives the loan via the `ProtectionInsurance` contract.

- `function payLoan() external payable`: Repays the loan via the `ProtectionInsurance` contract.

- `function viewPolicy(address _user) external view returns (ProtectionInsurance.Policy memory)`: Returns the policy details for the specified user from the `ProtectionInsurance` contract.

- `function getInsurance(address _user) external view returns (Insurance memory)`: Returns the insurance details for the specified user.

### Usage

1. **Deploy the Factory Contract**: Deploy the `InsuranceFactory` contract.
2. **Create Protection Insurance**: Users can call `createProtectionInsurance` to create their own `ProtectionInsurance` contract.
3. **Create Insurance Contract**: Users can call `createInsuranceContract` to create their own `InsuranceContract`.
4. **Request Loan**: Users can request a loan by calling `requestLoan` on their `ProtectionInsurance` contract.
5. **Pay for Insurance**: Users can pay for insurance by calling `payInsurance` on their `InsuranceContract`.
6. **Receive Loan**: Users can receive their loan by calling `receiveLoan` on their `ProtectionInsurance` contract.
7. **Pay Loan**: Users can repay their loan by calling `payLoan` on their `ProtectionInsurance` contract.
8. **Claim Insurance**: Users can claim their insurance by calling `claimInsurance` on their `InsuranceContract`.
