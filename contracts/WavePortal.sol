// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves;
    uint256 private seed;

    constructor() payable {
        console.log("We have been contructed");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    /// Trying to withdraw more money than the contract has.;
    error insuffient_funds(uint256 Amount);

    /// Failed to withdraw money from contract.
    error isSuccess();

    function wave(string memory _message) public {
        totalWaves += 1;

        console.log("%s waved w/ message %s", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));
        seed = (block.timestamp + block.difficulty + seed) + 100;

        console.log("Random generated seed %d ", seed);

        if (seed < 50) {
            console.log("%s won", msg.sender);

            

            uint256 prizeAmount = 0.0001 ether;

            if (prizeAmount >= address(this).balance) {
                revert insuffient_funds(prizeAmount);
            }

            payable(msg.sender).transfer(prizeAmount);
        }
        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllwaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
