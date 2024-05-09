// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract DegenNFT is ERC721, ERC721Burnable  {
     error DegenNFT__MaximumSupplyReached();
    uint256 private _nextTokenId;
    uint256 public MAX_SUPPLY = 5;
    uint256 public totalSupply;
    constructor()
        ERC721("DegenNFT", "DTK")
    {}

    function safeMint(address to , uint256 quantity)public  {
         if (totalSupply + quantity > MAX_SUPPLY) {
            revert DegenNFT__MaximumSupplyReached();
        }
        uint256 tokenId = _nextTokenId++;
        totalSupply = tokenId;
        _safeMint(to, quantity);
    }
     function _baseURI() internal pure override returns (string memory){
        return "https://scarlet-just-mosquito-515.mypinata.cloud/ipfs/QmTYdcaxwFjB3gPnP6bC5pCAeofzNMCzFDnELWpKWfg87b/";
    }
    function prompt() external pure returns (string memory) {
        return
            "Black and white street photography of a rainy night in New York, reflections on wet pavement";
    }
}