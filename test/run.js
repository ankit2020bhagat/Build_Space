
const hre = require("hardhat");

const main = async () => {
  const lockedAmount = hre.ethers.utils.parseEther("0.001");
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({value :lockedAmount});
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());

  let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  //console.log("Contract Balance :", hre.ethers.utils.formatEther(contractBalance));
  console.log("Contract Balance :",contractBalance.toString());
   let waveTxn1 = await waveContract.wave("This is wave #1");
   await waveTxn1.wait(); // Wait for the transaction to be mined

   const [_, randomPerson] = await hre.ethers.getSigners();
   let waveTxn2 = await waveContract.connect(randomPerson).wave("This is wave #2!");
  await waveTxn2.wait(); // Wait for the transaction to be mined
  let contractBalance1 = await hre.ethers.provider.getBalance(waveContract.address);
  //console.log("Contract Balance :", hre.ethers.utils.formatEther(contractBalance));s
  console.log("Contract Balance :",contractBalance1.toString());
  let allWaves = await waveContract.getAllwaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
