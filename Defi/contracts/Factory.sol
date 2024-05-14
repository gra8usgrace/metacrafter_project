// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ProtectionInsurance.sol";
import "./InsuranceContract.sol";

contract Factory {

    mapping(address => address) public userProtectionInsurance;
    mapping(address => address) public userInsuranceContract;

    event ProtectionInsuranceCreated(address indexed user, address protectionInsurance);
    event InsuranceContractCreated(address indexed user, address insuranceContract);

   

    function createProtectionInsurance() external {
        require(userProtectionInsurance[msg.sender] == address(0), "ProtectionInsurance already exists");

        ProtectionInsurance protectionInsurance = new ProtectionInsurance();
        userProtectionInsurance[msg.sender] = address(protectionInsurance);

        emit ProtectionInsuranceCreated(msg.sender, address(protectionInsurance));
    }

    function createInsuranceContract() external {
        require(userProtectionInsurance[msg.sender] != address(0), "Create ProtectionInsurance first");
        require(userInsuranceContract[msg.sender] == address(0), "InsuranceContract already exists");

        address payable protectionInsuranceAddress = payable(userProtectionInsurance[msg.sender]);
        InsuranceContract insuranceContract = new InsuranceContract(protectionInsuranceAddress);
        userInsuranceContract[msg.sender] = address(insuranceContract);

        emit InsuranceContractCreated(msg.sender, address(insuranceContract));
    }

    function getProtectionInsurance(address user) external view returns (address) {
        return userProtectionInsurance[user];
    }

    function getInsuranceContract(address user) external view returns (address) {
        return userInsuranceContract[user];
    }
}
