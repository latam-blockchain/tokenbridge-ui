// --------- CONFIGS ----------
export const KOVAN_CONFIG = {
  networkId: 42,
  name: 'Kovan',
  localStorageName: 'ethereum-kovan',
  bridge: '0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d',
  allowTokens: '0x92BF86334583909B60F9b798A9Dd7Debd899fEc4',
  federation: '0xa347438BC288f56Cb6083A79133e70DD2d1f6c2d',
  explorer: 'https://kovan.etherscan.io',
  explorerTokenTab: '#tokentxns',
  secondsPerBlock: 5,
  rpc: `https://kovan.infura.io/v3/${process.env.VUE_APP_INFURA_KEY}`,
  v2UpdateBlock: 25547922,
  feePercentageDivider: 10_000,
  isRsk: false,
  isEth: true,
}
export const RINKEBY_CONFIG = {
  networkId: 4,
  name: 'Rinkeby',
  localStorageName: 'ethereum-rinkeby',
  bridge: '0x59557241da46d72E301a1611322c7b638E0b12BE',
  // eslint-disable-next-line no-warning-comments
  // TODO @MRWHO
  allowTokens: '0x92BF86334583909B60F9b798A9Dd7Debd899fEc4',
  //TODO @MRWHO
  federation: '0xa347438BC288f56Cb6083A79133e70DD2d1f6c2d',
  explorer: 'https://rinkeby.etherscan.io',
  explorerTokenTab: '#tokentxns',
  secondsPerBlock: 5,
  rpc: `https://rinkeby.infura.io/v3/${process.env.VUE_APP_INFURA_KEY}`,
  v2UpdateBlock: 25547922,
  feePercentageDivider: 10_000,
  isRsk: false,
  isEth: true,
}
export const RSK_TESTNET_CONFIG = {
  networkId: 31,
  name: 'RSK Testnet',
  localStorageName: 'rsk-testnet',
  bridge: '0x684a8a976635fb7ad74a0134ace990a6a0fcce84',
  allowTokens: '0xc65bf0ae75dc1a5fc9e6f4215125692a548c773a',
  federation: '0x5d663981d930e8ec108280b9d80885658148ab0f',
  explorer: 'https://explorer.testnet.rsk.co',
  explorerTokenTab: '?__tab=tokens%20transfers',
  secondsPerBlock: 30,
  rpc: 'https://public-node.testnet.rsk.co',
  v2UpdateBlock: 1945524,
  feePercentageDivider: 10_000,
  crossToNetwork: RINKEBY_CONFIG,
  isRsk: true,
  isEth: false,
}
export const RESIL_TESTNET_CONFIG = {
  networkId: 31,
  name: 'Resil Testnet',
  localStorageName: 'resil-testnet',
  bridge: '0x09b75316259ca5a090697Ef581a4245aabdEB415',
  //TODO @MRWHO
  allowTokens: '0xc65bf0ae75dc1a5fc9e6f4215125692a548c773a',
  //TODO @MRWHO
  federation: '0x5d663981d930e8ec108280b9d80885658148ab0f',
  explorer: 'https://explorer.latam-blockchain.com',
  explorerTokenTab: '?__tab=tokens%20transfers',
  //TODO @MRWHO
  secondsPerBlock: 30,
  rpc: 'https://rpc.latam-blockchain.com',
  //TODO @MRWHO
  v2UpdateBlock: 1945524,
  //TODO @MRWHO
  feePercentageDivider: 10_000,
  crossToNetwork: RINKEBY_CONFIG,
  isRsk: true,
  isEth: false,
}
RINKEBY_CONFIG.crossToNetwork = RESIL_TESTNET_CONFIG

// Replace with proper values contracts exist in mainnet
export const ETH_CONFIG = {
  networkId: 1,
  name: 'Ethereum',
  localStorageName: 'eth-mainnet',
  bridge: '0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d',
  allowTokens: '0xA3FC98e0a7a979677BC14d541Be770b2cb0A15F3',
  federation: '0x5e29C223d99648C88610519f96E85E627b3ABe17',
  explorer: 'https://etherscan.io',
  explorerTokenTab: '#tokentxns',
  secondsPerBlock: 15,
  rpc: `https://mainnet.infura.io/v3/${process.env.VUE_APP_INFURA_KEY}`,
  v2UpdateBlock: 12871770,
  feePercentageDivider: 10_000,
  isRsk: false,
  isEth: true,
}
export const RSK_MAINNET_CONFIG = {
  networkId: 30,
  name: 'RSK Mainnet',
  localStorageName: 'rsk-mainnet',
  bridge: '0x9d11937e2179dc5270aa86a3f8143232d6da0e69',
  allowTokens: '0xcb789036894a83a008a2aa5b3c2dde41d0605a9a',
  federation: '0x7ecfda6072942577d36f939ad528b366b020004b',
  explorer: 'https://explorer.rsk.co',
  explorerTokenTab: '?__tab=tokens%20transfers',
  secondsPerBlock: 30,
  rpc: 'https://public-node.rsk.co',
  v2UpdateBlock: 3540341,
  feePercentageDivider: 10_000,
  crossToNetwork: ETH_CONFIG,
  isRsk: true,
  isEth: false,
}
ETH_CONFIG.crossToNetwork = RSK_MAINNET_CONFIG

export const NETWORKS = {
  31: RSK_TESTNET_CONFIG,
  172: RESIL_TESTNET_CONFIG,
  30: RSK_MAINNET_CONFIG,
  42: KOVAN_CONFIG,
  4: RINKEBY_CONFIG,
  1: ETH_CONFIG,
}
