// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ProtectionInsurance.sol";

contract InsuranceContract {
    address public owner;
    ProtectionInsurance public protectionInsurance;

    uint256 constant private BASIC_POLICY = 0.00000001 ether;
    uint256 constant private PREMIUM_POLICY = 0.000001 ether;
    uint256 constant private BASIC_INSURANCE_TIME = 30 days;
    uint256 constant private PREMIUM_INSURANCE_TIME = 60 days;

    struct Insurance {
        bool insured;
        uint256 insuredAmount;
        uint256 coverageEndTime;
    }

    mapping(address => Insurance) public insurances;

    event InsurancePaid(address indexed payer, uint256 amount, uint256 coverageEndTime);
    event InsuranceClaimed(address indexed claimant, uint256 amount);

    constructor(address payable _protectionInsuranceAddress) {
        owner = msg.sender;
        protectionInsurance = ProtectionInsurance(_protectionInsuranceAddress);
    }

    function payInsurance(bool _isBasic) external payable {
        Insurance storage insurance = insurances[msg.sender];
        require(!insurance.insured, "Already insured");
        require(msg.value > 0, "Invalid amount");

        uint256 insuredAmount;
        uint256 coverageEndTime;
        if (_isBasic) {
            require(msg.value >= BASIC_POLICY, "Insufficient basic premium");
            insuredAmount = msg.value;
            coverageEndTime = block.timestamp + BASIC_INSURANCE_TIME;
        } else {
            require(msg.value >= PREMIUM_POLICY, "Insufficient standard premium");
            insuredAmount = msg.value;
            coverageEndTime = block.timestamp + PREMIUM_INSURANCE_TIME;
        }

        insurances[msg.sender] = Insurance(true, insuredAmount, coverageEndTime);
        emit InsurancePaid(msg.sender, insuredAmount, coverageEndTime);
    }

    function claimInsurance() external {
        Insurance storage insurance = insurances[msg.sender];
        require(insurance.insured, "Not insured");
        require(block.timestamp > insurance.coverageEndTime, "Coverage period not ended");

        insurance.insured = false;
        uint256 insuredAmount = insurance.insuredAmount;
        insurance.insuredAmount = 0;

        (bool success, ) = payable(msg.sender).call{value: insuredAmount}("");
        require(success, "Claim transfer failed");

        emit InsuranceClaimed(msg.sender, insuredAmount);
    }

    function requestLoan(uint256 _loanAmount, bool _isBasicInsurance) external payable {
        protectionInsurance.requestLoan{value: msg.value}(_loanAmount, _isBasicInsurance);
    }

    function receiveLoan() external {
        protectionInsurance.receiveLoan();
    }

    function payLoan() external payable {
        protectionInsurance.payLoan{value: msg.value}();
    }

    function viewPolicy(address _user) external view returns (ProtectionInsurance.Policy memory) {
        return protectionInsurance.getPolicy(_user);
    }

    function getInsurance(address _user) external view returns (Insurance memory) {
        return insurances[_user];
    }

    receive() external payable {}

}
