// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/4RVW8mWQfuFlTDDWqRHvzpIWAkN4Lb0X',
      accounts: [ '88d0853a2f9f273122922ea1cd4a15acee880b2293c305a962880714a04b414a' ]
    }
  }
};

// https://eth-goerli.g.alchemy.com/v2/4RVW8mWQfuFlTDDWqRHvzpIWAkN4Lb0X