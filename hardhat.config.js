require('dotenv').config()

require("@nomicfoundation/hardhat-toolbox");


const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/KSM93xJEEY9dwqbegaro7RrB8sEiNsyu",
      accounts:[PRIVATE_KEY],
    },
  },
  etherscan:{
    apiKey:{
      goerli:"DA2SATVJD49RD2J4VTEPK3X2W7Q7Y6V1WX",
    },
  }

 
};
