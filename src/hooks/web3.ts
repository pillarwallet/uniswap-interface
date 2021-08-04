import { Web3Provider } from '@ethersproject/providers'
import { useSafeAppConnection } from '@gnosis.pm/safe-apps-web3-react'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { gnosisSafe, injected } from '../connectors'
import { NetworkContextName } from '../constants/misc'
import { MetaMaskWalletProvider, NetworkNames, Sdk } from 'etherspot'
// import { providers } from 'ethers'

let sdk: Sdk
let walletProvider: MetaMaskWalletProvider
let active1 = false

export function useActiveWeb3React() {
  const context = useWeb3ReactCore<Web3Provider>()
  const contextNetwork = useWeb3ReactCore<Web3Provider>(NetworkContextName)
  return context.active ? context : contextNetwork
  // return walletProvider
}

export function getwalletProvider(): MetaMaskWalletProvider {
  // const [active1, setActive] = useState(false)
  console.log('active: ', active1, MetaMaskWalletProvider.detect())
  if (!active1) {
    MetaMaskWalletProvider.connect()
      .then(async (provider) => {
        walletProvider = provider
        console.log(provider)
        active1 = true
        sdk = new Sdk(walletProvider, {
          networkName: 'ropsten' as NetworkNames,
          omitWalletProviderNetworkCheck: true,
        })
        await sdk.computeContractAccount()
        console.log(await sdk.getAccountBalances())
        return walletProvider
      })
      .catch((err) => {
        console.log(err)
        return null
      })
  } else {
    return walletProvider
  }
  return walletProvider
}

export function getSdk() {
  return sdk
}

export function useEagerConnect() {
  const { activate, active } = useWeb3ReactCore() // specifically using useWeb3ReactCore because of what this hook does
  const [tried, setTried] = useState(false)

  const triedToConnectToSafe = useSafeAppConnection(gnosisSafe)

  useEffect(() => {
    if (triedToConnectToSafe && !active) {
      injected.isAuthorized().then((isAuthorized) => {
        if (isAuthorized) {
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
        // eat errors
        activate(injected, undefined, true).catch((error) => {
          console.error('Failed to activate after chain changed', error)
        })
      }

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
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
