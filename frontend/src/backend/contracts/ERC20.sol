// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC20 {
    string public name = "Gracious Degen";
    string public symbol ="GDTK" ;
    uint256 public decimals = 1_000_000_000;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    address private owner;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(
    ) {
        owner = msg.sender;
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(_to != address(0), "ERC20: Transfer to the zero address");
        
        if (_value >= balanceOf[msg.sender]){
            revert("ERC20: Insufficient balance for transfer");
        }
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function mint(uint256 _amount) public returns(bool){
        require(msg.sender == owner, "Only owner can mint" );
        assert(_amount > 1);
        totalSupply += _amount;
        balanceOf[msg.sender] = totalSupply;
        return true;
    }

    function approve(address _spender, uint256 _value) external returns (bool) {

        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool) {
        require(_from != address(0), "ERC20: Transfer from the zero address");
        require(_to != address(0), "ERC20: Transfer to the zero address");
        require(balanceOf[_from] >= _value, "ERC20: Insufficient balance for transfer");
        require(_value <= allowance[_from][msg.sender], "ERC20: Transfer amount exceeds allowance");

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }
}
