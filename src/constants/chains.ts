import arbitrumLogoUrl from 'assets/svg/arbitrum_logo.svg'
import optimismLogoUrl from 'assets/svg/optimism_logo.svg'
// import { env } from 'process'
// import { Currency } from '@zeroexchange/sdk'

export enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  SOKOL = 77,

  ARBITRUM_ONE = 42161,
  ARBITRUM_RINKEBY = 421611,
  OPTIMISM = 10,
  OPTIMISTIC_KOVAN = 69,
}

export const SupportedCrossChains = {
  chains: [
    {
      chainId: 1,
      networkId: 1,
      name: 'Ethereum',
      // bridgeAddress: '0xC113367F7b35E695C8570d768E7F67b48b2E135D',
      // erc20HandlerAddress: '0x083D9DacEb094e2b6C018AEbF58BB7c4D01E17db',
      // rpcUrl: 'https://rinkeby.infura.io/v3/45174a29359d4b07ade01676259bc47a',
      type: 'Ethereum',
      // blockExplorer: 'https://ropsten.etherscan.io',
      nativeTokenSymbol: 'ETH',
      symbol: 'ETH',
      isNative: true,
      tokens: [
        {
          address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
          name: 'WETH',
          symbol: 'WETH',
          assetBase: 'ETH',
          decimals: 18,
          // resourceId: '0x0000000000000000000000c778417e063141139fce010982780140aa0cd5ab01',
        },
        {
          address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
          name: 'WETH',
          symbol: 'WETH',
          assetBase: 'ETH',
          decimals: 18,
          // resourceId: '0x0000000000000000000000c778417e063141139fce010982780140aa0cd5ab01',
        },
        {
          address: '0xc66227E44bf1E6F043919A65707b826e3E9f1132',
          name: 'USDT',
          symbol: 'USDT',
          assetBase: 'USDT',
          decimals: 6,
          // resourceId: '0x0000000000000000000000c66227E44bf1E6F043919A65707b826e3E9f113201',
        },
        {
          address: '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926',
          name: 'USDC',
          symbol: 'USDC',
          assetBase: 'USDC',
          decimals: 6,
          resourceId: '0x0000000000000000000000eb8f08a975ab53e34d8a0330e0d34de942c9592601',
        },
      ],
    },
    // {
    //   chainId: 3,
    //   networkId: 3,
    //   name: 'Ropsten',
    //   // bridgeAddress: '0xC113367F7b35E695C8570d768E7F67b48b2E135D',
    //   // erc20HandlerAddress: '0x083D9DacEb094e2b6C018AEbF58BB7c4D01E17db',
    //   // rpcUrl: 'https://rinkeby.infura.io/v3/45174a29359d4b07ade01676259bc47a',
    //   type: 'Ethereum',
    //   // blockExplorer: 'https://ropsten.etherscan.io',
    //   nativeTokenSymbol: 'tETH',
    //   tokens: [
    //     {
    //       address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    //       name: 'WETH',
    //       symbol: 'WETH',
    //       assetBase: 'ETH',
    //       decimals: 18,
    //       // resourceId: '0x0000000000000000000000c778417e063141139fce010982780140aa0cd5ab01',
    //     },
    //     {
    //       address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    //       name: 'WETH',
    //       symbol: 'WETH',
    //       assetBase: 'ETH',
    //       decimals: 18,
    //       // resourceId: '0x0000000000000000000000c778417e063141139fce010982780140aa0cd5ab01',
    //     },
    //     {
    //       address: '0xc66227E44bf1E6F043919A65707b826e3E9f1132',
    //       name: 'USDT',
    //       symbol: 'USDT',
    //       assetBase: 'USDT',
    //       decimals: 6,
    //       // resourceId: '0x0000000000000000000000c66227E44bf1E6F043919A65707b826e3E9f113201',
    //     },
    //     {
    //       address: '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926',
    //       name: 'USDC',
    //       symbol: 'USDC',
    //       assetBase: 'USDC',
    //       decimals: 6,
    //       resourceId: '0x0000000000000000000000eb8f08a975ab53e34d8a0330e0d34de942c9592601',
    //     },
    //   ],
    // },
    {
      chainId: 77,
      networkId: 77,
      name: 'Sokol',
      // bridgeAddress: '0xC113367F7b35E695C8570d768E7F67b48b2E135D',
      // erc20HandlerAddress: '0x083D9DacEb094e2b6C018AEbF58BB7c4D01E17db',
      // rpcUrl: 'https://rinkeby.infura.io/v3/45174a29359d4b07ade01676259bc47a',
      type: 'xDai',
      // blockExplorer: '',
      nativeTokenSymbol: 'xDai',
      symbol: 'xDai',
      tokens: [
        {
          address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
          name: 'WETH',
          symbol: 'WETH',
          assetBase: 'ETH',
          decimals: 18,
          // resourceId: '0x0000000000000000000000c778417e063141139fce010982780140aa0cd5ab01',
        },
        {
          address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
          name: 'WETH',
          symbol: 'WETH',
          assetBase: 'ETH',
          decimals: 18,
          // resourceId: '0x0000000000000000000000c778417e063141139fce010982780140aa0cd5ab01',
        },
        {
          address: '0xc66227E44bf1E6F043919A65707b826e3E9f1132',
          name: 'USDT',
          symbol: 'USDT',
          assetBase: 'USDT',
          decimals: 6,
          // resourceId: '0x0000000000000000000000c66227E44bf1E6F043919A65707b826e3E9f113201',
        },
        {
          address: '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926',
          name: 'USDC',
          symbol: 'USDC',
          assetBase: 'USDC',
          decimals: 6,
          resourceId: '0x0000000000000000000000eb8f08a975ab53e34d8a0330e0d34de942c9592601',
        },
      ],
    },
  ],
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.MAINNET,
  SupportedChainId.ROPSTEN,
  SupportedChainId.RINKEBY,
  SupportedChainId.GOERLI,
  SupportedChainId.KOVAN,
  SupportedChainId.SOKOL,

  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
]

export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.ROPSTEN,
  SupportedChainId.RINKEBY,
  SupportedChainId.GOERLI,
  SupportedChainId.KOVAN,
  SupportedChainId.SOKOL,
] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

export const L2_CHAIN_IDS = [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]

interface L1ChainInfo {
  readonly docs: string
  readonly explorer: string
  readonly infoLink: string
  readonly label: string
}
export interface L2ChainInfo extends L1ChainInfo {
  readonly bridge: string
  readonly logoUrl: string
}

type ChainInfo = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } & {
  readonly [chainId in SupportedL2ChainId]: L2ChainInfo
} &
  { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.ARBITRUM_ONE]: {
    bridge: 'https://bridge.arbitrum.io/',
    docs: 'https://offchainlabs.com/',
    explorer: 'https://explorer.arbitrum.io/',
    infoLink: 'https://info.uniswap.org/#/arbitrum',
    label: 'Arbitrum',
    logoUrl: arbitrumLogoUrl,
  },
  [SupportedChainId.ARBITRUM_RINKEBY]: {
    bridge: 'https://bridge.arbitrum.io/',
    docs: 'https://offchainlabs.com/',
    explorer: 'https://explorer.arbitrum.io/',
    infoLink: 'https://info.uniswap.org/#/arbitrum/',
    label: 'Arbitrum Rinkeby',
    logoUrl: arbitrumLogoUrl,
  },
  [SupportedChainId.MAINNET]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Mainnet',
  },
  [SupportedChainId.RINKEBY]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://rinkeby.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Rinkeby',
  },
  [SupportedChainId.ROPSTEN]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://ropsten.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Ropsten',
  },
  [SupportedChainId.KOVAN]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://kovan.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Kovan',
  },
  [SupportedChainId.GOERLI]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://goerli.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Görli',
  },
  [SupportedChainId.OPTIMISM]: {
    bridge: 'https://gateway.optimism.io/',
    docs: 'https://optimism.io/',
    explorer: 'https://optimistic.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/optimism/',
    label: 'Optimism',
    logoUrl: optimismLogoUrl,
  },
  [SupportedChainId.OPTIMISTIC_KOVAN]: {
    bridge: 'https://gateway.optimism.io/',
    docs: 'https://optimism.io/',
    explorer: 'https://optimistic.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/optimism',
    label: 'Optimistic Kovan',
    logoUrl: optimismLogoUrl,
  },
  [SupportedChainId.SOKOL]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://blockscout.com/poa/sokol/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Sokol',
  },
}
