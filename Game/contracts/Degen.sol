// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./IERC20.sol";

contract Degen is IERC20 {

    uint256 private constant DGN_NORMAL_PACK = 100;
    uint256 private constant DGN_PACK = 500;


    mapping(address => string) public gameItems;
    
    string public override name = "Degen";
    string public override symbol ="DGN" ;
    uint256 public override decimals = 1_000_000_000;
    uint256 public override totalSupply;
    mapping(address => uint256) public override  balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;
    address private owner;

    error InsufficientBalance();
    error Invalid__redeemptionAmount(uint256);

    constructor(address _owner) {
        owner = _owner;
    }





    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    

    function mint(uint256 _amount) public returns(bool){
        require(msg.sender == owner, "Only owner can mint" );
    
        totalSupply += _amount;
        balanceOf[msg.sender] += _amount;
        return true;
    }

    function burn(uint256 _value) public returns (bool){
        require(balanceOf[msg.sender] >= _value, 'not enough tokens');
        balanceOf[msg.sender] -= _value;
        totalSupply -= _value;
        return true;
    }

    
    function transfer(address _to, uint256 _value) public override returns (bool) {
        require(_to != address(0), "ERC20: Transfer to the zero address");
        if (_value > balanceOf[msg.sender]){
            revert InsufficientBalance();
        }
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function redeem(uint256 amount) external {
    require(amount > 0, "Amount must be greater than zero.");
    require(balanceOf[msg.sender] >= amount, "Insufficient balance.");
    
    if (amount == DGN_PACK) {
        gameItems[msg.sender] = "DGNPACK";
    } else if (amount == DGN_NORMAL_PACK) {
        gameItems[msg.sender] = "DGN_NORMAL_PACK";
    } else {
        revert Invalid__redeemptionAmount(amount);
    }
    burn(amount);
}

    
    
}