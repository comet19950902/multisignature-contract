import { ethers } from "hardhat";

async function main() {
	// We get the contract to deploy
    const owners = ["0x9406aCF779A630a1451De816a957DA9322478A48", "0x5AD9910Fa9fC593C7bcAA2Af1429772729C445DE", "0xbCeD2ba12c7C2851Cb93C27b4f50399333fE35F4"];
    const confirmNumbers = 3;

	const MultiSig = await ethers.getContractFactory('MultiSig');
    const multiSig = await MultiSig.deploy(
        owners,
        confirmNumbers
    );

	console.log('MultiSig deployed to:', multiSig.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});