require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts:'/home/ankitkumar/Desktop/Projects_22-23/Biuld_Space/app/src',
  },
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/##################################",
      accounts: ['##############################################################'],
     
    },
  },
};
