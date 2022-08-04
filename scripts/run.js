
const hre  = require("hardhat");

async function main(){
    const [owner,randomPerson] = await hre.ethers.getSigners();
    const getContract= await hre.ethers.getContractFactory("WavePortal");
    const deployContract= await getContract.deploy();
    await deployContract.deployed();
    
    console.log("Contract Address :",deployContract.address);
    console.log("Contract deployed by :",owner.address);

    let waveCount =await deployContract.getTotalWave();
    let waveTxn= await deployContract.wave();
    await waveTxn.wait();
    
    waveCount=await deployContract.getTotalWave();
    console.log("Account Balance ",await deployContract.balanceOf(owner.address));

}

main()
     .then(()=>process.exit(0))
     .catch((error)=>{
        console.error(error);
        process.exit(1);
     });
