// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TokenVesting {
    error TokenVesting__AddressNotWhiteListed();
    error TokenVesting__Unauthorized();
    error TokenVesting__TokenAmmountCanNotExceedBalance();

    struct Organization {
        address organizationAddress;
        string name;
        uint256 tokenAmount;
    }

    struct Beneficiary {
        address beneficiaryAddress;
        string position;
        uint256 vestingDuration;
        uint256 startTime;
        uint256 tokenAmount;
        uint256 claimedTokenAmount;
    }

    uint256 public totalSupply;

    mapping(address => Beneficiary) public beneficiaries;
    mapping(address => bool) public whitelist;
    mapping(address => Organization) public organizations;
    mapping(address => uint) public balances;
    event ClaimTokens(address indexed beneficiary, uint indexed beneficiaryTokenAmount);
    event StakeholderCreated(uint256 indexed startTime, uint256 vestingDuration);
    modifier OnlyAuthorizer(){
         if (organizations[msg.sender].organizationAddress != msg.sender){
            revert TokenVesting__Unauthorized();
        }
        _;
    }

    function addOrganization(string memory _name, address _organizationAddress, uint256 _tokenAmount) public {
        Organization storage org = organizations[_organizationAddress];
        org.organizationAddress = _organizationAddress;
        org.name = _name;
        org.tokenAmount = _tokenAmount;
        totalSupply += _tokenAmount;
    }

    function addBeneficiary(
        address _beneficiaryAddress,
        string memory _position,
        uint256 _vestingDuration,
        uint256 _tokenAmount
    ) OnlyAuthorizer() public {
        
        if(organizations[msg.sender].tokenAmount < _tokenAmount){
          revert  TokenVesting__TokenAmmountCanNotExceedBalance();
        }
        beneficiaries[_beneficiaryAddress] = Beneficiary({
            beneficiaryAddress: _beneficiaryAddress,
            position: _position,
            vestingDuration: _vestingDuration,
            startTime: block.timestamp,
            tokenAmount: _tokenAmount,
            claimedTokenAmount: 0
        });

        emit StakeholderCreated(block.timestamp, _vestingDuration);
    }

    function addToWhitelist(address _address) OnlyAuthorizer()  public {
         whitelist[_address] = true;
    }

    function claimTokens() external {
        if(!whitelist[msg.sender]){
            revert TokenVesting__AddressNotWhiteListed();
        }
        Beneficiary storage beneficiary = beneficiaries[msg.sender];
        require(organizations[msg.sender].organizationAddress == msg.sender || 
        beneficiary.beneficiaryAddress == msg.sender, "You are not associated with this organization");
        require(block.timestamp >= beneficiary.startTime + beneficiary.vestingDuration, "Vesting period not over yet");

        uint256 claimableTokens = beneficiary.tokenAmount - beneficiary.claimedTokenAmount;
        require(claimableTokens > 0, "No tokens available for claiming");

        beneficiary.claimedTokenAmount += claimableTokens; 
        balances[beneficiary.beneficiaryAddress] = claimableTokens;
        emit ClaimTokens(msg.sender, claimableTokens);
    }
   

    function getClaimedTokens() public view returns (uint256){
        return balances[msg.sender];
    }
    
    function getBeneficiaryInfo(address _address) public view returns (Beneficiary memory){
        return beneficiaries[_address];
    }
}
