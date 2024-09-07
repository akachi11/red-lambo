// https://eth-goerli.g.alchemy.com/v2/LVIne511bxgkZeMMCWGoD1sjyrznBlsz

require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/LVIne511bxgkZeMMCWGoD1sjyrznBlsz",
      accounts: [ "64ca2cd58cd6cc3a97701986dfa7c9aa475d9f901a49f4c5d889f072d4b7a112" ]
    }
  }
};
