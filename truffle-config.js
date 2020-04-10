require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index random noise artist hunt pet swing giggle'; 
let testAccounts = [
"0xebc5b8139e4e826da0f3d912065e31fe03e467d1c26c6c667f4bd9709afbb8e8",
"0xa9cc453564a3c16481d22433ce5f2ada5ce050b938b98ad4057d1b08aa58ca44",
"0xd28ce3589aa818fb3533e1d274c4befdc92e45f65f60733e0a1a3c698631f159",
"0x3f538fc0dacb7fd56b9b786a96a9933c2be516e533bdfbd170700076e6d807fd",
"0x8cde0150c8f7c60518525c753858ad326cba375e884a1b57ff43d4e963a7bdd1",
"0x4230b935ef7738fecebce55750556587635edb1097bfd0bff9a6f29bf456ff4e",
"0xa74350a334434e95b4098c529f4494d31ea01599900ac388770c691c7ecd2187",
"0x358d2d88023951f8dbdcc23d46c79763501731b1bd3390e53814aef03408cc89",
"0x12b3a21bc43db7c7890c41869b6e1513bae3ef672cef3b2f604d1b59183e5726",
"0x986772a329c7bc9bdd1fa9d9f82a4e5887d2ec29a6a18ffbaf3a63053b3d547b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
