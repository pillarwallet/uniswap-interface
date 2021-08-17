import { Web3Provider } from '@ethersproject/providers'
import { useSafeAppConnection } from '@gnosis.pm/safe-apps-web3-react'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { gnosisSafe, injected, walletconnect } from '../connectors'
import { NetworkContextName } from '../constants/misc'
import { Env, EnvNames, MetaMaskWalletProvider, NetworkNames, Sdk, WalletConnectWalletProvider } from 'etherspot'

Env.defaultName = EnvNames.TestNets
let sdk: Sdk | undefined
let walletProvider: any

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> {
  const context = useWeb3ReactCore<Web3Provider>()
  const contextNetwork = useWeb3ReactCore<Web3Provider>(NetworkContextName)
  return context.active ? context : contextNetwork
}

export async function Activate1(option: string) {
  // const [active1, setActive] = useState(false)
  //console.log('active: ', active1, MetaMaskWalletProvider.detect())
  // console.log(option)
  // const { connector, active } = useActiveWeb3React()
  // if (!active1) {
  if (option == 'MetaMask') {
    // console.log(injected)
    MetaMaskWalletProvider.connect()
      .then(async (provider) => {
        walletProvider = provider
        // console.log(provider)
        sdk = new Sdk(walletProvider)
        await sdk.computeContractAccount()
        // console.log(await sdk.getAccountBalances())
        return walletProvider
      })
      .catch((err) => {
        console.log(err)
        return null
      })
  } else {
    console.log(walletconnect.walletConnectProvider.connector.chainId)
    walletProvider = WalletConnectWalletProvider.connect(walletconnect.walletConnectProvider.connector)
    console.log('walletProvider', walletProvider)
    // console.log(chainId)
    // walletProvider = WalletConnectWalletProvider.connect(option.connector)
    sdk = new Sdk(walletProvider, {
      networkName:
        walletconnect.walletConnectProvider.connector.chainId == 1
          ? ('ropsten' as NetworkNames)
          : walletconnect.walletConnectProvider.connector.chainId == 3
          ? ('ropsten' as NetworkNames)
          : ('sokol' as NetworkNames),
      omitWalletProviderNetworkCheck: true,
    })
    console.log(sdk.state.accountAddress)
    console.log(await sdk.computeContractAccount())
    console.log(sdk.state.accountAddress)
    return walletProvider
  }
  return walletProvider
}

export function GetwalletProvider(): any {
  return walletProvider
}

export function getSdk() {
  return sdk
}

export function destorySdk() {
  sdk?.destroy()
  sdk = undefined
  walletProvider = undefined
}

export function useEagerConnect() {
  const { activate, active } = useWeb3ReactCore() // specifically using useWeb3ReactCore because of what this hook does
  const [tried, setTried] = useState(false)

  const triedToConnectToSafe = useSafeAppConnection(gnosisSafe)

  useEffect(() => {
    if (triedToConnectToSafe && !active) {
      injected.isAuthorized().then((isAuthorized) => {
        if (isAuthorized) {
          // console.log('here')
          // console.log('Activating', Activate1(''))
          activate(injected, undefined, true).catch(() => {
            setTried(true)
          })
        } else {
          if (isMobile && window.ethereum) {
            activate(injected, undefined, true).catch(() => {
              setTried(true)
            })
          } else {
            setTried(true)
          }
        }
      })
    }
  }, [activate, active, triedToConnectToSafe]) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (active && triedToConnectToSafe) {
      setTried(true)
    }
  }, [active, triedToConnectToSafe])

  return tried
}

/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */
export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3ReactCore() // specifically using useWeb3React because of what this hook does

  useEffect(() => {
    const { ethereum } = window

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        Activate1('MetaMask').then((value) => {
          console.log(value)
        })
        // eat errors
        activate(injected, undefined, true).catch((error) => {
          console.error('Failed to activate after chain changed', error)
        })
      }

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          Activate1('MetaMask').then((value) => {
            console.log(value)
          })
          // eat errors
          activate(injected, undefined, true).catch((error) => {
            console.error('Failed to activate after accounts changed', error)
          })
        }
      }

      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
        }
      }
    }
    return undefined
  }, [active, error, suppress, activate])
}
