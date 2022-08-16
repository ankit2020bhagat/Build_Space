require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts:'/home/ankitkumar/Desktop/Projects_22-23/Biuld_Space/app/src',
  },
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/cv6DlK1tKoqoNNpbJzilbxdoK5FUPKgn",
      accounts: ['683178485355730281da2bb23d1ba833c1ca089171340164a838f931e9041b46'],
     
    },
  },
};
