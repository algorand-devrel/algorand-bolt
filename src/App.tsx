import {
  NetworkId,
  WalletId,
  WalletManager,
  WalletProvider,
} from '@txnlab/use-wallet-react'
import { WalletUIProvider, WalletButton } from '@txnlab/use-wallet-ui-react'
import { WalletInfo } from './components/WalletInfo'
import { TextWithCopy } from './components/TextWithCopy'

const walletManager = new WalletManager({
  wallets: [
    WalletId.PERA,
    WalletId.DEFLY,
    WalletId.LUTE,
    WalletId.EXODUS,
    {
      id: WalletId.WALLETCONNECT,
      options: { projectId: 'fcfde0713d43baa0d23be0773c80a72b' },
    },
  ],
  defaultNetwork: NetworkId.TESTNET,
})

function App() {
  return (
    <WalletProvider manager={walletManager}>
      <WalletUIProvider>
        <div className="min-h-screen bg-white dark:bg-[#001324] text-gray-900 dark:text-gray-100">
          {/* Header */}
          <header className="w-full bg-white dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <span className="text-lg font-semibold ">
                    Algorand React Starter
                  </span>
                </div>
                <div>
                  <WalletButton />
                </div>
              </div>
            </div>
          </header>
          {/* Main content area */}
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <WalletInfo />
            <div className="mt-8">
              <h1 className="text-3xl font-bold  mb-4">Algorand Resources</h1>
              <div className="flex flex-col gap-2">
                <p className=" mx-auto">
                  This example demonstrates a foundation for building a web app
                  with connectivity to the Algorand blockchain. It includes
                  prompts to guide Bolt in building with you. The instructions
                  and resources below can be ripped out as you start crafting
                  your own app.
                </p>
                <h2 className="text-2xl">Algorand Developer Portal</h2>
                <p>
                  Find everything you need to build applications powered by the
                  Algorand blockchain in our{' '}
                  <a
                    href="https://dev.algorand.co"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developer Portal
                  </a>
                  .
                </p>
                <h2 className="text-2xl">Algorand Discord</h2>
                <p>
                  Connect with and get code help from other Algorand developers
                  in our{' '}
                  <a
                    href="https://github.com/Algorand-Developer-Retreat/use-wallet-ui"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord server
                  </a>
                  .
                </p>
                <h2 className="text-2xl">Use Wallet UI Library</h2>
                <p>
                  Read the Use Wallet{' '}
                  <a
                    href="https://github.com/Algorand-Developer-Retreat/use-wallet-ui"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    documentation
                  </a>{' '}
                  to learn about implementing Algorand wallet integration in
                  your dApp.
                </p>
              </div>
            </div>
            <div className="my-8">
              <h1 className="text-3xl font-bold my-8">Start Vibing</h1>
              <div className="flex flex-col gap-2 my-4 m-auto">
                <h2 className="text-2xl">Step 1</h2>
                <p>
                  In Bolt's input area, use the double chat bubble button to
                  switch to discussion mode and use this prompt into the input
                  to prime Bolt on Algorand knowledge
                </p>
                <TextWithCopy text="Copy this text" />
                <h2 className="text-2xl">Step 2</h2>
                <p>
                  Switch back to Bolt's build mode and use this prompt to kick
                  off your vibe session!
                </p>
                <TextWithCopy text="Copy this text" />
              </div>
            </div>
          </main>
        </div>
      </WalletUIProvider>
    </WalletProvider>
  )
}

export default App
