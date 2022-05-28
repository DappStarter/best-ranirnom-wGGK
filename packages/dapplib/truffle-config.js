require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle foot champion rescue place evidence hunt hat army gather'; 
let testAccounts = [
"0x307e16662f6022fc964a1b80aa4b525f3c6621f80c733ea516bb5dad4aa55ede",
"0x7b62f82641dff7efd1f7c9734b194841f7d32a1cd0ee570a29107bd38b886b31",
"0x23c4f9951f595e496b1a5b712382b02dcfce44800257dd722d175784d5d9a47e",
"0xd03942bafa75757176e0edf2d087a8f59c1f64a9c36ed40105a8ab9cb285769b",
"0x307bae936e694b713fa9c056e7f0dc540469781e9e1f24273a9f9adeed8fbbe2",
"0xa2d3c6ba0ca1c395c6654c8f35b769f698400cc51d8dc2a56dd9059def25454b",
"0xa9af50c59bb9f66b8ac2f731ad3cb9b332817d0da9e25ee6ca51b8dfbeef58ad",
"0x221722b69a17cc49a2e7031ab67d3cb688ecd8a6d639e07f8743f4ee754921ef",
"0x91040d37c44326935a586ed42af9aa46250603b2bb59d2184f794b988efe0565",
"0xeda3681f9add00888ef12f600d16446002bdf9da9dd5b9e4df58714f0dc70e33"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


