// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract DegenNFT is ERC721A{

    error DegenNFT__MaximumSupplyReached();

    uint256 public MAX_SUPPLY = 1000;
    constructor() ERC721A("DegenNFT", "DGF") {}

    function mint(uint256 quantity) external payable {
        if (totalSupply() + quantity > MAX_SUPPLY) {
            revert DegenNFT__MaximumSupplyReached();
        }
        _mint(msg.sender, quantity);
    }

    function _baseURI() internal pure override returns (string memory){
        return "https://gateway.pinata.cloud/ipfs/QmbhzuWuyYicC9Qj7xS2Q49QY2tkhiBXydYV3u1NtTgHet/";
    }
    function prompt() external pure returns (string memory) {
        return
            "Hunter lost in African forest finds mystical village, bridges two communities through wisdom and unity.";
    }
}
