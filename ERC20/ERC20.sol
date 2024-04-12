// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract ERC20 is IERC20 {
    string public override name = "Gracious Degen";
    string public override symbol ="GDTK" ;
    uint256 public override decimals = 1_000_000_000;
    uint256 public override totalSupply;
    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;
    address private owner;

    error InsufficientBalance();


    constructor(address _owner) {
        owner = _owner;
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

    function mint(uint256 _amount) public returns(bool){
        require(msg.sender == owner, "Only owner can mint" );
    
        totalSupply += _amount;
        balanceOf[msg.sender] += _amount;
        return true;
    }

    function approve(address _spender, uint256 _value) public override returns (bool) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public override returns (bool) {
        require(_from != address(0), "Invalid sender address");
        require(_to != address(0), "Invalid recipient address");
        require(balanceOf[_from] >= _value, "Insufficient balance");
        require(allowance[_from][msg.sender] >= _value, "Allowance exceeded");
        
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}
