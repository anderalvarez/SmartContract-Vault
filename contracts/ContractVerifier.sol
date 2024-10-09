// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ContractRegistry.sol";

contract ContractVerifier {
    ContractRegistry public registry;

    constructor(address _registryAddress) {
        registry = ContractRegistry(_registryAddress);
    }

    function verifyContract(address _contractAddress) public view returns (bool, string memory) {
        (address owner, string memory abi, uint256 timestamp, bool isRegistered) = registry.getContractInfo(_contractAddress);

        if (!isRegistered) {
            return (false, "Contract is not registered");
        }

        return (true, "Contract is verified and registered");
    }

    function getContractDetails(address _contractAddress) public view returns (address, string memory, uint256) {
        require(registry.isContractRegistered(_contractAddress), "Contract is not registered");

        (address owner, string memory abi, uint256 timestamp, ) = registry.getContractInfo(_contractAddress);
        return (owner, abi, timestamp);
    }
}
