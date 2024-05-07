// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract DegenNFT is ERC721A{

    error DegenNFT__MaximumSupplyReached();

    uint256 public MAX_SUPPLY = 5;
    constructor() ERC721A("DegenNFT", "DGF") {}

    function mint(address to , uint256 quantity) external payable {
        if (totalSupply() + quantity > MAX_SUPPLY) {
            revert DegenNFT__MaximumSupplyReached();
        }
        _mint(to, quantity);
    }

    function _baseURI() internal pure override returns (string memory){
        return "https://scarlet-just-mosquito-515.mypinata.cloud/ipfs/QmTYdcaxwFjB3gPnP6bC5pCAeofzNMCzFDnELWpKWfg87b/";
    }
    function prompt() external pure returns (string memory) {
        return
            "Black and white street photography of a rainy night in New York, reflections on wet pavement";
    }
}
