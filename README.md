yarn hardhat compile
yarn hardhat run ./scripts/deploy.ts --network sepol

yarn hardhat verify 0xE3F7b8377fa1Eb9743141f007AA0946ee4c1f579 --constructor-args ./scripts/arguments.js --network sepol