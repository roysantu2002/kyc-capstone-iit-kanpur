
require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env["MNEMONIC"];
const tokenKey = process.env["ENDPOINT_KEY"];


module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic,
          "https://rinkeby.infura.io/v3/" + tokenKey);
      },
      network_id: 4,
    },
  },

  compilers: {
    solc: {
     version: "0.8.11"
    },
  },
}
