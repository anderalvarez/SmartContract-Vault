// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContractRegistry {
    struct ContractInfo {
        address owner;
        string abi;
        uint256 timestamp;
        bool isRegistered;
    }

    mapping(address => ContractInfo) public registeredContracts;
    address public owner;

    event ContractRegistered(address indexed contractAddress, address indexed owner, uint256 timestamp);
    event ContractUpdated(address indexed contractAddress, address indexed owner, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function registerContract(address _contractAddress, string memory _abi) public {
        require(!registeredContracts[_contractAddress].isRegistered, "Contract is already registered");

        registeredContracts[_contractAddress] = ContractInfo({
            owner: msg.sender,
            abi: _abi,
            timestamp: block.timestamp,
            isRegistered: true
        });

        emit ContractRegistered(_contractAddress, msg.sender, block.timestamp);
    }

    function updateContract(address _contractAddress, string memory _newAbi) public {
        require(registeredContracts[_contractAddress].isRegistered, "Contract is not registered");
        require(registeredContracts[_contractAddress].owner == msg.sender, "Only the contract owner can update");

        registeredContracts[_contractAddress].abi = _newAbi;
        registeredContracts[_contractAddress].timestamp = block.timestamp;

        emit ContractUpdated(_contractAddress, msg.sender, block.timestamp);
    }

    function getContractInfo(address _contractAddress) public view returns (address, string memory, uint256, bool) {
        ContractInfo memory info = registeredContracts[_contractAddress];
        return (info.owner, info.abi, info.timestamp, info.isRegistered);
    }

    function isContractRegistered(address _contractAddress) public view returns (bool) {
        return registeredContracts[_contractAddress].isRegistered;
    }
}