const { ethers } = require("ethers");

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(`https://bsc-dataseed1.binance.org:443`);
  const wallet = new ethers.Wallet("bf2be402342f81a5cd27d4bf097612ecdffe9eba1410f8dca658ea2f435dca7e", provider);
  const abi = ; // ABI array of your contract
  const bytecode = "" // Bytecode of your contract

  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const contract = await factory.deploy("0x8f659B9a6d2C620aFFEe428b100953a7cAc33a1A", "0x17aff5528015f64a5df0e6b1314ab72d9b6f74ca", "0x55d398326f99059fF775485246999027B3197955");

  await contract.deployed();
  console.log("Contract deployed at:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

