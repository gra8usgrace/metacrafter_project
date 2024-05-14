// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProtectionInsurance {
    error ProtectionInsurance__CanNotbeZero();
    error ProtectionInsurance__CollateralCanNotbeZero();

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    struct Policy {
        bool paid;
        bool received;
        uint256 collateral;
        uint256 loanAmount;
        uint loanTopay;
        uint256 loanType;
        bool isBasicInsurance;
    }

    uint256 constant private BASIC_DIVISOR = 75;
    uint256 constant private PREMIUM_DIVISOR = 85;
    uint256 constant private PERCENTAGE = 100;

    mapping(address => Policy) public LoanPolicy;

    function requestLoan(uint256 _loanAmount, bool _isBasicInsurance) external payable {
        require(_loanAmount > 0, "Loan amount cannot be zero");
        require(msg.value > 0, "Collateral cannot be zero");

        uint256 loanTopay;
        if (_isBasicInsurance) {
            loanTopay = (_loanAmount * BASIC_DIVISOR) / PERCENTAGE + _loanAmount;
            LoanPolicy[msg.sender] = Policy(false, false, msg.value, _loanAmount, loanTopay, block.timestamp + 5 seconds, true);
        } else {
            loanTopay = (_loanAmount * PREMIUM_DIVISOR) / PERCENTAGE + _loanAmount;
            LoanPolicy[msg.sender] = Policy(false, false, msg.value, _loanAmount, loanTopay, block.timestamp + 15 seconds, false);
        }

        // Send the loan amount to the borrower
        // (bool success, ) = payable(msg.sender).call{value: _loanAmount}("");
        // require(success, "Loan transfer failed");
    }

    function receiveLoan() external {
        Policy storage userPolicy = LoanPolicy[msg.sender];
        require(!userPolicy.paid, "Loan already paid");
        require(!userPolicy.received, "Loan already received");
        require(userPolicy.loanAmount > 0, "No active loan found");

        // Transfer the loan amount to the user
        (bool success, ) = payable(msg.sender).call{value: userPolicy.loanAmount}("");
        require(success, "Loan transfer failed");

        userPolicy.received = true;
    }

    function payLoan() external payable {
        Policy storage userPolicy = LoanPolicy[msg.sender];
        require(!userPolicy.paid, "Loan already paid");
        require(userPolicy.received, "No active loan found");
        require(msg.value >= userPolicy.loanTopay, "Insufficient payment");

        // Transfer the loan amount to the contract  using call
        (bool success, ) = payable(address(this)).call{value: userPolicy.loanTopay}("");
        require(success, "Payment transfer failed");

        // Mark the loan as paid and update loanTopay to 0
        userPolicy.paid = true;
        userPolicy.loanTopay = 0;

        // Transfer the collateral back to the user
        (bool done, ) = payable(msg.sender).call{value: userPolicy.collateral}("");
        require(done, "Collateral transfer failed");

        // Clear the collateral from the policy
        userPolicy.collateral = 0;
    }

    function getPolicy(address _user) external view returns (Policy memory) {
        return LoanPolicy[_user];
    }
}
